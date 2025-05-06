---
aliases:
  - Markov decision process
  - MDPs
  - policy prediction problem
  - Bellman's equations
tags:
  - permanent-note
  - topic-information-computation-statistics
publish: 
date: 2024-10-25 09:42
lastmod: 2025-05-04T14:01:36-04:00
---
# Overview

**Markov decision processes (MDPs)** are a formalism for *fully observable*, sequential [[Algorithms for simple vs. complex decision problems|complex decision problems]]. The MDP framework with differs from a full [[Reinforcement learning|reinforcement learning]] setting in that, in the MDP framework, we have general access to the underlying transition probabilities and reward function, and we can examine any state at any time with dynamic programming instead of sampling in sequence.

![[Pasted image 20241101120047.png]]


A Markov decision process $(\mathcal S, \mathcal A, T, R, \gamma)$ has the following data: a **state space** $\mathcal S$; an **action space** $\mathcal A$; a **transition function** $T(s’ | s, a)$ for how actions in states lead to new states; a **reward function** $R(s, a, s’)$ which has a value corresponding to each transition; and a **discount rate** $\gamma \in [0, 1]$.



---
# Policies and value functions

>[!definition] Decision policy, value
>Given a **Markov decision process** $(\mathcal S, \mathcal A, T, R, \gamma)$, a **policy** $\pi$ represents the behavior of a decision-maker by specifying what actions will be taken at each state. For example, a **deterministic policy** is a mapping $\pi : \mathcal S \to \mathcal A$, while a **stochastic policy** maps states to action *distributions* $\pi : \mathcal S \to \Delta(\mathcal A)$.
>
>The **value** of a policy $\pi$ from a state $s_0$ is the expected cumulative, discounted **reward** that results from following $\pi$. 

In the MDP framework, **rewards** are given while **values** are computed or learned.


>[!definition] Bellman’s equations for prediction and control
>**Prediction** is the problem of evaluating a fixed policy $\pi$ by estimating the value of a state under the given $\pi$. The value can be computed using **Bellman’s equations**
>$$
>v_\pi(s) = \sum_{a, s'}\pi(a|s) T(s'|s, a) \left [ R(s, a, s') + \gamma v_\pi(s') \right ].
>$$
>On the other hand, **control** is the problem of calculating the optimal policy by selecting the *best* action according to value. 


- MDPs have:
	- State space (tiles)
	- Action space (cardinal directions)
	- Transition function (how actions lead to new states)
	- Reward function (reward for each possible transition)
	- Discount rate

>[!definition] Trajectory of a MDP, policy prediction problem
>Given a Markov decision process with reward function $R(s, a ,s’)$ and transition function $T(s’ | s, a)$, a single **trajectory** is a sequence of states, actions, and rewards
>$$
>\langle s_0, a_0, r_0, s_1, a_1, r_1, ... \rangle,
>$$
>where the reward $r_t = R(s_t, a_t, s_{t+1})$ is defined over a state/action/next-state tuple. The **return** associated with the trajectory is the discounted cumulative reward
>$$
>\sum_{t = 0}^{\infty} \gamma^{t} r_t,
>$$
>and the **policy prediction problem** is the problem of calculating the **state value function** for a policy $\pi$ given by
>$$
>v_\pi(s) = \mathbb{E}_{\pi, T}\left[ \sum_{t=0}^{\infty} \gamma^{t} r_t \mid s_0 = s\right]
>$$
>or the expected return from every state that results from following $\pi$.

>[!definition] Monte Carlo policy prediction

- Dynamic programming vs. Monte Carlo simulation for computing the value function
	- DP gets exact values

---
# Variations

#### Multi-agent MDPs with sub-tasks

[[@2021wuToo]]

![[Pasted image 20250504140137.png]]