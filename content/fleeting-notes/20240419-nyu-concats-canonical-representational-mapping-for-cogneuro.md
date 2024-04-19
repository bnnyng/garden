---
tags:
  - fleeting-note
lastmod: 2024-04-19T12:59:12-07:00
---
# Intro

- Sebastian Michelmann, NYU, Department of Psychology
- Paper in progress!

Overview: 
- General neural representations
- Some methods for studying representations (and misinterpretations)
- Aligning neural representations
- Math behind new alignment method – Canonical Representational Mapping
- Initial validation on data to show that it can be useful
- Other applications

---
# Neural representations

- Wei Ji Ma preprint – what do we want to have in representations?
	- Sensitive to the feature
	- Specific to the feature
	- Invariant to other features
	- Functional
- Points 2 & 3 are most relevant for current talk
- Cogneuro uses spectrogram, voxels, neural network nodes to capture (activations as) representations
- Representations unfold over time – is there such a thing as a static representation?

**Microstates in the brain**
- Attractor networks of persistent activity that might be as close as possible we can get to a static representation (Vidaurre, et al.)

**Representations overlap**
- If patterns are distributed, same neurons/patterns that are active across different concepts

---
# Methods for studying representations

**Representational similarity analysis**
- Similar objects will lead to similar patterns of activity
- However, more generally, objects might have more in common than what sets them apart (e.g., apples and oranges are very similar)
- Noisy differences – maybe do some transformations to increase signal-to-noise ratio?
- See [[Kriegeskorte, Nikolaus]] (2018)

**Capturing representational specificity with linear maps**
- Experimental design with lots of examples (lots of variability, see what’s shared between objects of the same concept)
- Classification to find pattern that best distinguishes between objects, e.g., regression
- Encoding to find mapping from stimulus space to neural response, then use it on a decoding model on neural data
- Multivariate neural pattern and multivariate classification pattern can be brought into same space for alignment?

**Problem of correlation**
- Do representations depend on task specificity? More naturalistic representations?

**Temporal generalization method**
- Motivation: representations can change
- Training at one temporal point, see performance at another time

---
# Talk invitation 

Title: Canonical Representational Mapping for Cognitive Neuroscience  
  
Abstract: A central tenet of cognitive neuroscience is that cognition can be understood in terms of computations that operate on representations (e.g., Piccinini, 2018). For instance, when navigating a complex maze, representations of lines and brightness patterns must be transformed into a representation of left vs. right that may ultimately guide behavior.  
   
A productive approach to the characterization of representations has been the study of similarity structure in neural activity: By assessing the similarity between different exemplars, we can understand the organization of information into percepts, concepts, and categories along the processing hierarchy (Kriegeskorte, 2008). Importantly however, neural patterns of exemplars may only partially overlap and be masked by noise, making it hard to detect representational similarity. Furthermore, representations may change (e.g., from perception to memory), or they may correspond to each other in entirely different systems (e.g., in humans and neural networks). Consequently, we often need to maximize the similarity between corresponding representations through linear transformations of the data. This alignment problem can be addressed with methods such as Hyperalignment (Haxby et al., 2020), and Canonical Correlation Analysis (CCA). An important limitation of these methods, however, is that they do not account for correlated activity that is not due to the representation of interest, yet the specificity of neural activity to the feature of interest is one of the key desiderata for representations in cognitive neuroscience (Pohl et al., 2024).  
   
I will present a new alignment method that addresses this issue. Canonical Representational Mapping (CRM) is based on Canonical Correlation Analysis and finds linear combinations of multivariate time-series X and Y that maximize their correlation in a shared space. In addition to maximizing the projected Cross-covariance (Cxy) and keeping the projected Covariances of X (Cxx) and Y (Cyy) at 1, CRM incorporates a new constraint that is based on the logic of Representational Similarity Analysis: It uses a Cross-covariance matrix Dxy that captures covariance to be constrained to zero in the shared space. In a typical training set Cxy will capture the covariance between exemplars of the same representation, while Dxy captures the covariance between exemplars of different content, effectively maximizing representational similarity while enforcing representational specificity.  
   
In a re-analysis of previously published EEG data (Michelmann et al., 2016, 2018), I will demonstrate that CRM can detect content-specific temporal patterns during movie-watching in which it outperforms CCA on the test set. I will further demonstrate the alignment of word representations in ECoG to vector embeddings from GPT-2, a highly contextual Large Language Model. Therein, I will show that CRM can disentangle context from content. Specifically, CRM can separate the neural representations of the current and the previous word by maximizing correlation to the current embedding, while keeping the correlation with the previous word-embedding at zero. Finally, I will show simulations of other use-cases for CRM. CRM can extract correlated activity between two multivariate time-series, while keeping the correlation of line-noise at zero. In another simulation CRM unveils cross-frequency coupling between two power-spectra that share correlated activity in a noise band. In both cases, CCA simply extracts the correlated noise.  
   
These findings suggest that CRM can be a useful tool for the study of representations in cognitive neuroscience with the potential for various broader applications.  
   
Haxby, J. V., Guntupalli, J. S., Nastase, S. A., & Feilong, M. (2020). Hyperalignment: Modeling shared information encoded in idiosyncratic cortical topographies. eLife, 9, e56601. [https://doi.org/10.7554/eLife.56601](https://www.google.com/url?q=https://doi.org/10.7554/eLife.56601&sa=D&source=calendar&ust=1713984816644015&usg=AOvVaw3ouNgrGjg2ZQuLMmkfz95Z)  
Kriegeskorte, N. (2008). Representational similarity analysis – connecting the branches of systems neuroscience. Frontiers in Systems Neuroscience, 4. [https://doi.org/10.3389/neuro.06.004.2008](https://www.google.com/url?q=https://doi.org/10.3389/neuro.06.004.2008&sa=D&source=calendar&ust=1713984816644015&usg=AOvVaw0YeXeTXrXqXYtanLrCggsU)  
Michelmann, S., Bowman, H., & Hanslmayr, S. (2016). The temporal signature of memories: Identification of a general mechanism for dynamic memory replay in humans. PLoS Biology, 14(8). [https://doi.org/10.1371/journal.pbio.1002528](https://www.google.com/url?q=https://doi.org/10.1371/journal.pbio.1002528&sa=D&source=calendar&ust=1713984816644015&usg=AOvVaw0pg9ysp4KDrNjyOGKga2XZ)  
Michelmann, S., Bowman, H., & Hanslmayr, S. (2018). Replay of Stimulus-specific Temporal Patterns during Associative Memory Formation. Journal of Cognitive Neuroscience, 30(11), 1577–1589. [https://doi.org/10.1162/jocn_a_01304](https://www.google.com/url?q=https://doi.org/10.1162/jocn_a_01304&sa=D&source=calendar&ust=1713984816644015&usg=AOvVaw0QtKqleAzaIrhJ1uFAjU-A)  
Piccinini, G. (2018). Computation and Representation in Cognitive Neuroscience. Minds and Machines, 28(1), 1–6. [https://doi.org/10.1007/s11023-018-9461-x](https://www.google.com/url?q=https://doi.org/10.1007/s11023-018-9461-x&sa=D&source=calendar&ust=1713984816644015&usg=AOvVaw0VWNKaA7Xe8aZKIINSF86g)  
Pohl, S., Walker, E. Y., Barack, D. L., Lee, J., Denison, R. N., Block, N., Meyniel, F., & Ma, W. J. (2024). Desiderata of evidence for representation in neuroscience (arXiv:2403.14046). arXiv. [https://doi.org/10.48550/arXiv.2403.14046](https://www.google.com/url?q=https://doi.org/10.48550/arXiv.2403.14046&sa=D&source=calendar&ust=1713984816644015&usg=AOvVaw352GJnSjik2wAroGXrFrr2)