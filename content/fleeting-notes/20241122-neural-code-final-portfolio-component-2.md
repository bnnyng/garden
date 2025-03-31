---
aliases:
  - Neural Code Final Portfolio - Component 2
tags:
  - fleeting-note
  - NSBV-BC3386
date: 2024-11-22 10:27
lastmod: 2024-12-16T22:22:16-05:00
---
[[@2024courellis]] paper data and code: https://osf.io/qpt8f/
- Possibly implement analyses in Python?
- Streamlit app to visualize what is going on?


----
# Overview

#### Base code

- [ ] Implement geometric analysis methods
	- [x] Shattering dimensionality
	- [ ] CCGP
	- [ ] Parallelism score
- [ ] Implement plotting functions
	- [ ] Swarm plots
- [ ] Perform debugging checks for each array shape

#### Notebook


#### App

#### Extra

- [ ] Add analysis from [[@2019hirokawa]]

---
# Log

#### [[2024-12-15]]

- Errata checks
	- [ ] What are the array indices in `test_inference_trials`?
	- [ ] Shattering dimensionality outputs: should have 1 per 35…what? 35 possible stim pairs?
	- [ ] Keep sampling in CCGP or use “all correct trials”?
	- [ ] Why does `group_avg` produce exactly 100 rows?
- Structure of each data output
	- Top level: List of two conditions (inference absent vs. present)
	- Second level: List of six brain areas
	- Third level: List `n_samples` arrays
	- Fourth level: 
- Computing CCGP
	- Different task conditions → in particular, doing different stimulus conditions?
	- Decoder is trained to differentiate between two stimuli in first context, then evaluated in second context
	- [ ] What is a **trial**? / is the computation on raw neuron data or something else?
- Definitions
	- **Variable** = one possible balanced split (pair of 4 task conditions each)
	- **EIGHT TASK CONDITIONS!**
	- Binary variables: context, reward, response
	- Dichotomy: 35 standard
```
|iscorrect|stim_id|context|reward|response|trial_nr|fr_stim|fr_base|
|---|---|---|---|---|---|---|---|
```


---
# Code base

#### Parallelized code

```python
from joblib import Parallel, delayed
from sklearn.linear_model import LogisticRegression
from sklearn.utils import shuffle
from sklearn.model_selection import cross_val_predict
from sklearn.metrics import accuracy_score
from sklearn.preprocessing import StandardScaler

def sd(
    group_avgs,
    n_iter: int,
    n_samples: int,
    n_folds: int = 5,
    show_progress: bool = False
):
    _, pos_set, neg_set = define_dichotomies()
    n_pairs = pos_set.shape[0]
    n_folds = 5

    # Matrices for storing performance metrics
    perf = np.full((n_pairs, n_iter), np.nan)
    boot = np.full((n_pairs, n_iter), np.nan)

    def process_dichotomy(i, g1, g2):
        perf_i = np.full(n_iter, np.nan)
        boot_i = np.full(n_iter, np.nan)
        for j in range(n_iter):
            # Resample and prepare data
            training, testing = sample_from_data(group_avgs, n_train=n_samples, n_test=0)
            train, train_labels, _, _ = prep_regressors(training, testing, g1, g2)

            # Scale and clean data
            scaler = StandardScaler()
            train_scaled = scaler.fit_transform(train)
            train_scaled = train_scaled[:, ~np.isnan(train_scaled).any(axis=0)]

            # Fit model and compute performance
            decoder = LogisticRegression(max_iter=1000, solver="liblinear")
            y_hat = cross_val_predict(decoder, train_scaled, train_labels, cv=n_folds)
            perf_i[j] = accuracy_score(train_labels, y_hat)

            # Compute null distribution
            shuffled_labels = shuffle(train_labels)
            y_hat_null = cross_val_predict(decoder, train_scaled, shuffled_labels, cv=n_folds)
            boot_i[j] = accuracy_score(shuffled_labels, y_hat_null)
        return perf_i, boot_i

    # Parallelize over dichotomies
    results = Parallel(n_jobs=-1, verbose=10)(
        delayed(process_dichotomy)(i, g1, g2) for i, (g1, g2) in enumerate(zip(pos_set, neg_set))
    )

    # Collect results
    for i, (perf_i, boot_i) in enumerate(results):
        perf[i] = perf_i
        boot[i] = boot_i

    return perf.flatten(), boot.flatten()

```

#### Parallelism score

```python
import numpy as np
from scipy.spatial.distance import pdist
from itertools import permutations
from sklearn.utils import shuffle

def ps(temp_array, n_reps, for_boot):
    """
    Perform parallelism score analysis for a group of cells.

    Parameters:
        temp_array (list): Nested list structure of neurons' firing rates grouped by trial type.
                          Each neuron corresponds to one element in the list.
        n_reps (int): Number of iterations for bootstrap resampling to perform.
                      If 'for_boot' is False, this defaults to 1.
        for_boot (bool): Boolean flag to enable geometric null shuffling for null distribution construction.

    Returns:
        dist (list): A nested list containing parallelism scores for each dichotomy and iteration.
    """
    if not for_boot:
        n_reps = 1  # Compute once if not null

    PosSet, NegSet = define_sets()  # Define dichotomies
    dist = [[None for _ in range(n_reps)] for _ in range(len(PosSet))]

    # Iterate over all dichotomies
    for i, (gr_1, gr_2) in enumerate(zip(PosSet, NegSet)):
        print(f'Parallelism - Dichotomy {i + 1} of {len(PosSet)}')
        gr_2_perms = list(permutations(gr_2))
        avg_array = temp_array

        for i_rep in range(n_reps):
            # Geometric null construction
            if for_boot:
                X = reformat_to_X_rand(avg_array)
                X = [shuffle(x, axis=0) for x in X]  # Shuffle each condition
                avg_array = reformat_data(X)

            # Recompute mean after geometric null rotation
            mu = np.array([
                np.concatenate([np.mean(trial) for trial in neuron])
                for neuron in avg_array
            ])

            # Compute parallelism over all pairing configurations
            dist[i][i_rep] = []
            for gr_2_perm in gr_2_perms:
                v = mu[gr_1, :]
                w = mu[list(gr_2_perm), :]
                dist[i][i_rep].append(cosine_dist(w - v))

            # Take the max over pairing configurations
            dist[i][i_rep] = max(dist[i][i_rep])

    return dist

def cosine_dist(v):
    """
    Compute the average cosine distance between rows in a matrix.

    Parameters:
        v (ndarray): Matrix where each row is a vector.

    Returns:
        dist (float): The average cosine distance.
    """
    v_normalized = np.array([row / np.linalg.norm(row) for row in v])
    dist = np.mean(1 - pdist(v_normalized, 'cosine'))
    return dist

def reformat_to_X_rand(X):
    """
    Restructure data for geometric null analysis by random sampling.

    Parameters:
        X (list): Input nested list where conditions are grouped.

    Returns:
        X_new (list): Restructured data randomly sampled across conditions.
    """
    nr_cond = len(X[0])  # Number of conditions
    X_new = [np.zeros((0, len(X))) for _ in range(nr_cond)]

    for i in range(nr_cond):
        for j in range(len(X)):
            if j > 0:
                crp = min(len(X_new[i]), len(X[j][i]))
                idx_new = np.random.choice(len(X_new[i]), crp, replace=False)
                idx_old = np.random.choice(len(X[j][i]), crp, replace=False)
                X_new[i] = X_new[i][idx_new, :]
                X[j][i] = X[j][i][idx_old]

            X_new[i] = np.column_stack((X_new[i], X[j][i]))

    return X_new

def reformat_data(X):
    """
    Reformat data into hierarchical structure.

    Parameters:
        X (list): Input nested list with restructured data.

    Returns:
        X_new (list): Reformatted data.
    """
    nr_feats = len(X[0])
    X_new = [[] for _ in range(nr_feats)]

    for i in range(nr_feats):
        for j in range(len(X)):
            X_new[i].append(X[j][:, i])

    return X_new

def define_sets():
    """
    Define PosSet and NegSet for dichotomies (placeholders).

    Returns:
        PosSet (list): List of positive sets (groups).
        NegSet (list): List of negative sets (groups).
    """
    PosSet = [[0, 1], [2, 3], [4, 5]]  # Example groups for demonstration
    NegSet = [[6, 7], [8, 9], [10, 11]]  # Example groups for demonstration
    return PosSet, NegSet

```

#### Archive
```python
def construct_swarm_by_session_type(
    metric,
    data,
    null_dist
):
    """
    Make a swarm plot for inference present vs. absent 
    """
    def refactor_session_type(region_data):
        data_refactored = []
        for i in range(len(data)):
            all_region_data = np.array(data[i])     
            data_refactored.append(np.mean(all_region_data, axis=0))
        return data_refactored
    fig, ax = plt.subplots(figsize=(8, 6))
    plot_swarm(
        ax, metric=metric, 
        data=refactor_session_type(data), 
        null_dist=refactor_session_type(null_dist),
        xlabels_special=["Absent", "Present"]
    )
    if metric == "sd":
        ylabel = "Decoding accuracy (SD)"
    plt.ylabel(ylabel)
    plt.tight_layout()
    plt.show()
```
#### Swarm plots

```python
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns

def fn_plot_HP_boxSwarmVariable(ax, data, idx_spec=None, label_spec=None, null_dist=None,
                                 connection_map=None, clrs_spec=None, metric='sd'):
    """
    Swarm plot method for results of geometric analysis.

    Parameters:
    ax (matplotlib Axes) : Current figure axes.
    data (list of arrays) : Data to be plotted. Groups along the first dimension, and points within each group along the second.
    idx_spec (list) : Indices of special points in data (default is None).
    label_spec (list) : Labels for special points (default is None).
    null_dist (list of arrays) : Null distributions for the data (default is None).
    connection_map (list) : Binary vector indicating which swarm plots to connect (default is None).
    clrs_spec (ndarray) : Colors for special points and lines (default is None).
    metric (str) : Metric to adjust marker style ('sd', 'ccgp', or 'ps').
    """

    if clrs_spec is None:
        clrs_spec = sns.color_palette("Set1", len(idx_spec) if idx_spec else 3)
        
    if connection_map is None:
        connection_map = [0, 1] * (len(data) // 2)  # Default connection_map

    ax.set_title("Swarm Plot of Data with Special Points")

    # Add null distribution if provided
    if null_dist is not None:
        offset = 0.35
        for i_plt in range(len(data)):
            lims = np.percentile(null_dist[i_plt], [5, 95])
            ax.fill([i_plt - offset, i_plt + offset, i_plt + offset, i_plt - offset],
                    [lims[0], lims[0], lims[1], lims[1]], color='gray', alpha=0.2)

    # Plot non-special points with jitter
    to_plt = []
    mk_size = 80
    for i_plt in range(len(data)):
        if idx_spec:
            # Isolate special points and remove them from data
            to_plt.append(data[i_plt][idx_spec])
            data[i_plt] = np.delete(data[i_plt], idx_spec)

        # Plot non-special data points based on the metric
        if metric == 'sd':
            ax.scatter(np.full(len(data[i_plt]), i_plt), data[i_plt], s=mk_size,
                       edgecolors='gray', facecolors='white', linewidth=3, alpha=0.7)
        elif metric == 'ccgp':
            ax.scatter(np.full(len(data[i_plt]), i_plt), data[i_plt], s=mk_size,
                       edgecolors='gray', facecolors='gray', linewidth=3, alpha=0.7)
        elif metric == 'ps':
            ax.scatter(np.full(len(data[i_plt]), i_plt), data[i_plt], s=mk_size,
                       edgecolors='gray', facecolors='gray', marker='^', linewidth=1.5, alpha=0.7)

    # Plot connections between swarm plots if connection_map is specified
    for i_plt in range(1, len(data)):
        for i_spec in range(len(idx_spec)):
            if connection_map[i_plt] == 1:
                ax.plot([i_plt - 1, i_plt], [to_plt[i_plt - 1][i_spec], to_plt[i_plt][i_spec]],
                        linewidth=2.5, color=clrs_spec[i_spec])

    # Plot special points with no jitter on top
    for i_plt in range(len(data)):
        for i_spec in range(len(idx_spec)):
            if metric == 'sd':
                ax.scatter(i_plt, to_plt[i_plt][i_spec], s=mk_size + 40, edgecolors=clrs_spec[i_spec],
                           facecolors='white', linewidth=4)
            elif metric == 'ccgp':
                ax.scatter(i_plt, to_plt[i_plt][i_spec], s=mk_size + 40, edgecolors=clrs_spec[i_spec],
                           facecolors='gray', linewidth=4)
            elif metric == 'ps':
                ax.scatter(i_plt, to_plt[i_plt][i_spec], s=mk_size + 40, edgecolors=clrs_spec[i_spec],
                           facecolors='gray', marker='^', linewidth=2)

    # Add legend if necessary
    if label_spec:
        ax.legend(label_spec, loc='upper right')

    ax.set_xticks(np.arange(len(data)))
    ax.set_xlim([0, len(data)])
    ax.set_xlabel("Groups")
    ax.set_ylabel("Values")

    return ax

```

#### Swarm plot example usage
```python
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns

# Generate example data
np.random.seed(0)
data = [np.random.normal(loc=0, scale=1, size=20) for _ in range(3)]  # 3 groups, each with 20 values

# Indices of special points (e.g., every 5th point)
idx_spec = [0, 5, 10, 15]

# Labels for special points
label_spec = ['Special Point 1', 'Special Point 2', 'Special Point 3', 'Special Point 4']

# Simulate null distributions for each group
null_dist = [np.random.normal(loc=0, scale=1, size=100) for _ in range(3)]  # 100 samples for each group

# Connection map (connect group 1 and 2, but not 2 and 3)
connection_map = [1, 0, 0]

# Colors for special points
clrs_spec = sns.color_palette("Set1", len(idx_spec))

# Create the plot
fig, ax = plt.subplots(figsize=(8, 6))

# Call the function to create the swarm plot
fn_plot_HP_boxSwarmVariable(ax, data, idx_spec=idx_spec, label_spec=label_spec, null_dist=null_dist,
                            connection_map=connection_map, clrs_spec=clrs_spec, metric='sd')

# Show the plot
plt.tight_layout()
plt.show()

```

```
import numpy as np

# idx_special corresponds to specific indices
idx_special = [1, 10, 21, 24, 29]

# lgd_special corresponds to the labels for special points
lgd_special = ['context', 'reward', 'choice', 'stimulus', 'parity']

# Example data for ccgp_ and ccgp_boot (replace with your actual data)
ccgp_ = [np.random.rand(5, 3) for _ in range(10)]  # Example: list of numpy arrays (5x3)
ccgp_boot = [np.random.rand(5, 3) for _ in range(10)]  # Example: list of numpy arrays (5x3)

# Equivalent of MATLAB's 'mean(x, 2)' across rows for each item in ccgp_
to_plt = [np.mean(x, axis=1) for x in ccgp_]

# Equivalent of MATLAB's 'vec(x)' to flatten each item in ccgp_boot
null_plt = [x.ravel() for x in ccgp_boot]

# Print or use to_plt and null_plt
print("to_plt:", to_plt)
print("null_plt:", null_plt)

```

#### CCGP

```
import numpy as np
from sklearn.utils import shuffle
from sklearn.preprocessing import StandardScaler
from sklearn.linear_model import LogisticRegression

def ccgp(temp_array, nr_iterations, for_boot, nr_trials):
    """
    Perform CCGP analysis for a group of cells.

    Args:
        temp_array (list of lists): Hierarchical trial-type grouped firing rates for each neuron.
        nr_iterations (int): Number of iterations of bootstrap re-sampling.
        for_boot (bool): Flag for geometric null shuffling to construct null distribution.
        nr_trials (int): Number of trials for each condition to sample.

    Returns:
        np.ndarray: Dichotomies x Iterations matrix of generalization performance.
    """
    PosSet, NegSet = define_sets()
    nr_cond = 3  # The number of conditions per group in dichotomy.
    dichot_perm = np.full((len(PosSet), nr_iterations), np.nan)  # Initialize results array.

    # Iterate over all dichotomies.
    for i in range(len(PosSet)):
        avg_array = temp_array.copy()  # Copy input array for modification.
        gr_1 = PosSet[i]
        gr_2 = NegSet[i]

        # Construct all possible two-condition hold-outs.
        all_comb_1 = construct_combinations(gr_1, nr_cond)
        all_comb_2 = construct_combinations(gr_2, nr_cond)

        # Iterate for the specified number of bootstrap iterations.
        for iter in range(nr_iterations):
            # Perform geometric null shuffle if for_boot is True.
            if for_boot:
                X = reformat_to_X_rand(avg_array)
                X = [shuffle(x, axis=0) for x in X]  # Shuffle each neuron's trials.
                avg_array = reformat_data(X)

            # Evaluate generalization performance for each hold-out combination.
            perf_temp = []
            for p in range(all_comb_1.shape[0]):
                for s in range(all_comb_2.shape[0]):
                    train_pos = all_comb_1[p, :nr_cond]
                    train_neg = all_comb_2[s, :nr_cond]
                    test_pos = all_comb_1[p, nr_cond:]
                    test_neg = all_comb_2[s, nr_cond:]

                    # Prepare training and testing sets.
                    training, testing, labels_train, labels_test = prep_regressors(
                        avg_array, train_pos, train_neg, test_pos, test_neg, nr_trials
                    )

                    # Normalize data and remove NaN features.
                    training, testing = normalize_and_clean(training, testing)

                    # Train an SVM and compute generalization performance.
                    mdl = LogisticRegression().fit(training, labels_train)
                    y_hat = mdl.predict(testing)
                    perf_temp.append(np.mean(y_hat == labels_test))

            dichot_perm[i, iter] = np.mean(perf_temp)

        print(f"Finished dichotomy {i + 1}")

    return dichot_perm


def define_sets():
    """Define positive and negative sets for dichotomies."""
    PosSet = np.array([...])  # Fill in based on MATLAB PosSet.
    NegSet = np.array([...])  # Fill in based on MATLAB NegSet.
    return PosSet, NegSet


def construct_combinations(group, nr_cond):
    """Construct all possible two-condition hold-outs."""
    from itertools import combinations
    comb = list(combinations(group, nr_cond))
    comb_matrix = np.array([list(x) + list(set(group) - set(x)) for x in comb])
    return comb_matrix




def normalize_and_clean(training, testing):
    """Normalize data and remove NaN features."""
    scaler = StandardScaler()
    training = scaler.fit_transform(training)
    testing = scaler.transform(testing)

    # Remove NaN features.
    nan_mask = np.isnan(training).any(axis=0) | np.isnan(testing).any(axis=0)
    training = training[:, ~nan_mask]
    testing = testing[:, ~nan_mask]

    return training, testing


def reformat_data(X):
    """Reformat data for reshuffling."""
    nr_feats = X[0].shape[1]
    X_new = [np.hstack([x[:, i].reshape(-1, 1) for x in X]) for i in range(nr_feats)]
    return X_new


def reformat_to_X_rand(X):
    """Reformat data into random shuffle format."""
    nr_cond = X[0].shape[1]
    X_new = [np.hstack([np.random.permutation(x[:, i]) for x in X]) for i in range(nr_cond)]
    return X_new

```