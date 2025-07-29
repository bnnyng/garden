---
aliases:
  - temporal difference learning
  - TD learning
  - SARSA
  - Q-learning
tags:
  - permanent-note
  - topic-information-computation-statistics
publish: 
date: 2024-10-25 12:04
lastmod: 2025-06-19T13:03:10-04:00
---
# Overview

![[Pasted image 20241025120504.png|500]]

$\quad$ **Temporal difference learning** algorithms are a class of model-free [[§ Reinforcement Learning|reinforcement learning]] algorithms that learn by interaction with the environment. At each timestep, the agent-environment loop consists of a tuple $\langle s, a , r,  s’ \rangle$, where $s$ is the state in which an agent take an action $a$, receives a reward $r$, and transitions to the next state $s’$. 

**Related notes:**
- [[Bandit problems]]
- [[Markov decision processes]]

---

# Temporal difference learning for prediction

#### Basic tabular TD($0$)

$\quad$ Like in the [[Markov decision processes|MDP]] prediction problem, TD learning for **predicting** a fixed policy involves estimating the value function (that is, of a finite-state MDP under a policy $\pi$) at a state $s$ by using the estimate at the next state $s’$, even if the latter estimate is not entirely correct. However, there are two key differences from MDPs:

- We do not have access to the transition function $T$ or the reward function $R$, only **samples** of transitions $\langle s, a ,r,  s’\rangle$ that result from the policy interacting with the underlying MDP. 
- We initialize a table with arbitrary values $v_\pi(s)$ for all states $s$, and the function that estimates $v_\pi(s)$ at each state $s$ satisfies $\hat v_\pi(s) = v_\pi(s)$ when we have the modified Bellman equation $$ \hat v_\pi (s) \approx \mathbb E_{\pi, T}[r + \gamma \hat v_\pi(s')]. $$ 
 $\quad$ The value of $\hat v_\pi(s)$ is fit to $r + \gamma \hat v_\pi(s’)$ using **error-driven learning**. The **TD target** is the expression $r + \gamma \hat v_\pi(s’)$, and the **TD error** is the difference between the target and the current prediction $\hat v_\pi(s)$. 

>[!definition] Algorithm: Tabular TD(0) value function updating
>Input: a state, action, reward, and transition state sample $\langle s, a , r,  s’ \rangle$. Note that this assumes the policy $\pi$ has already been evaluated to obtain the reward $r$.
>- Compute the **TD error term** $\delta \leftarrow r + \gamma \hat v_\pi(s’) - \hat v_\pi(s)$
>- Update value estimate $\hat v_\pi (s) \leftarrow \hat v _\pi(s) + \alpha \delta$ for the state $s$ with chosen **learning rate** $\alpha > 0$.

#### General $n$-step TD learning

$\quad$ The $n$**-step learning rule** uses a TD target based on $n$ steps of rewards following $s$. For a state $s_t$, the error is computed as

$$
\delta^{(n)}_t = G_t^{(n)} - \hat v_\pi(s_t), \quad \quad G_t^{(n)} = \sum_{k=0}^{n-1}\gamma^k r_{t+k} + \gamma^n \hat v_\pi(s_{n+t}).
$$

The following algorithm gives the $n$-step TD updating for a learner that stores the $\langle s, a , r,  s’ \rangle$ at each timestep for a chosen $n$.

>[!definition] Algorithm: $n$-step TD updating
>Input: Difference $t = (\text{num timesteps}) - n$.
>- Initialize the `td_target` $= 0$ and get the stored current state $s_t$.
>- For $k$ in $\{1, 2, \ldots, n \}$:
>	- Get the stored reward $r_{t + k}$.
>	- Update `td_target` $\leftarrow$ `td_target` $+ \gamma^kr_{t+k}$
>- Get the stored state $s_{t + n}$
>- Update `td_target` $\leftarrow$ `td_target` $+ \gamma^n \hat v_\pi(s_{t + n}$
>- Calculate the **TD error** $\delta^{(n)}_t =$ `td_target` $- \hat v_\pi(s_t)$
>- Update the state value estimate $\hat v_\pi(s_t) \leftarrow \hat v_\pi(s_t) + \alpha \delta_t^{(n)}$ for chosen learning rate $\alpha$

#wip 

![[Pasted image 20250522130814.png]]

---

# Temporal difference learning for control

$\quad$ Instead of learning a state value function $\hat v_\pi$ as in prediction, TD learning for **control** (i.e., optimizing a policy) involves learning a **state action value function** $\hat q_* (s, a)$. The common update rules for learning $\hat q_*$ are **SARSA** and **Q-learning**, which produce different TD errors $\delta$ for updating 

$$
\hat q (s, a) \leftarrow \hat q(s, a) + \alpha \delta
$$

with a chosen learning rate $\alpha > 0$. 

>[!definition] SARSA, Q-learning TD error calculations
>Let $\langle s, a , r,  s’, a’ \rangle$ be a tuple consisting of a state, action, reward, next state, and next action. Given the current $\hat q(s, a)$, the TD errors given by **SARSA** and **Q-learning** are, respectively,
>$$
>\delta_S = [r + \gamma \hat q(s', a')] - \hat q (s, a), \quad \quad \delta_Q = [r + \gamma \max_{\alpha'} \hat q (s' a')] - \hat q (s, a).
>$$

$\quad$ Note that in SARSA, the next action $a’$ is taken from the policy currently being executed in the MDP, while in Q-learning, the next action $a’$ is taken from the *best* state action value estimate. Thus, SARSA is called an **on-policy** RL algorithm, while Q-learning is called an **off-policy** RL algorithm.====

---

# Code snippets

```
\langle s, a , r,  s’ \rangle
```

####  $n$-step return TD learning rule

```python
class RandomWalk_TD_NStep_Learner(RandomWalkBaseLearner):
    def __init__(self, discount_rate, learning_rate, n_steps):
        self.discount_rate = discount_rate
        self.learning_rate = learning_rate
        self.n_steps = n_steps

    def end_episode(self):
        T = len(self.episode_trajectory)
        T_min_n = max(0, T - self.n_steps)
        for t in range(T_min_n, T):
            td_target = 0
            for tk in range(t, T):
                k = tk - t
                _, _, r_tk, _ = self.episode_trajectory[tk]
                td_target += (self.discount_rate**(k))*r_tk
            s_t, _, _, _ = self.episode_trajectory[t]
            td_error = td_target - self.estimated_state_values[s_t]
            self.estimated_state_values[s_t] += self.learning_rate*td_error

    def update(self, s, a, r, ns):
        self.episode_trajectory.append((s, a, r, ns))
        if len(self.episode_trajectory) < self.n_steps:
            return
        t = len(self.episode_trajectory) - self.n_steps
        self.update_n_steps_from(t)

    def update_n_steps_from(self, t):
        ###############################################################
        #TODO: IMPLEMENT THIS METHOD WITH THE N-STEP TD UPDATE
        # The result should be stored as an entry in self.estimated_state_values
        s_t, _, _, _ = self.episode_trajectory[t]
        td_target = 0
        for k in range(self.n_steps):
            _, _, r_k, ns_k = self.episode_trajectory[t + k]
            td_target += (self.discount_rate ** k) * r_k
        td_target += (self.discount_rate ** self.n_steps) * self.estimated_state_values[ns_k]
        td_error = td_target - self.estimated_state_values[s_t]
        self.estimated_state_values[s_t] += self.learning_rate * td_error
        ###############################################################
```

---

# Notes

- Image from Sutton & Barlow, 2018.
- TDL = learning through interactions with environment
- In RL, can no longer access the underlying transition functions or reward function of a [[Markov decision processes|Markov decision process]]
	- **Question:** Is this true for all RL settings?