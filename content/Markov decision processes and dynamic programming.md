---
aliases:
  - Markov decision process
  - MDPs
  - value iteration
  - policy prediction
  - policy control
  - state value function
  - Bellman equation
  - planning
tags:
  - permanent-note
  - topic-information-computation-statistics
publish: "true"
date: 2024-10-25 09:42
lastmod: 2025-05-27T15:09:33-04:00
---
# Overview

$\quad$**Markov decision processes (MDPs)** are a formalism for *fully observable*, sequential [[Algorithms for simple vs. complex decision problems|complex decision problems]] where an agent engages in an extended interaction with the environment.

![[Pasted image 20241101120047.png|350]]

$\quad$A Markov decision process $(\mathcal S, \mathcal A, T, R, \gamma)$ has the following data: a **state space** $\mathcal S$; an **action space** $\mathcal A$; a **transition function** $T(s’ | s, a)$ for how actions in states lead to new states; a **reward function** $R(s, a, s’)$ which has a value corresponding to each transition; and a **discount rate** $\gamma \in [0, 1]$. 

$\quad$ For a given MDP, a **policy** $\pi$ represents the behavior of a decision-maker by specifying what actions will be taken at each state. Policy **prediction** or **evaluation** involves calculating the expected return from a fixed policy, while policy **control** involves selecting the optimal policy based on the highest expected reward.



**Related notes:**
- [[Bandits, exploration, and exploitation]]
- [[Temporal difference learning]]

---
# Key terms

- **Policy:** a formalization of agent behavior as a function $\mathcal S \to \mathcal A$ mapping states to actions.
- **Prediction:** also known as **policy evaluation**; the computational problem of determining how much long-term reward would be obtained *given* a policy and an initial state.
- **Value:** a standard method of defining long-term reward as the expected cumulative discounted infinite sum of rewards. In contrast to reward, value is derived from a combination of rewards, the environment, and future behaviors.
- **Optimal control:** also known as **policy optimization**; the computational problem of finding the policy with the maximal value function *given* an MDP. Using the standard definition of value above, there is a *unique* optimal value function expressed in terms of **Bellman optimality equations**.
- **Planning:** the control problem with a known reward and transition model.
- **Dynamic programming:** in this context, a class of algorithms that, *given* the full state space, calculates the value function via backward induction. #wip 
- **Value iteration:** the dynamic programming algorithm for optimal control.

---
# Policies and value functions

>[!definition] Decision policy, value
>Given a **Markov decision process** $(\mathcal S, \mathcal A, T, R, \gamma)$, a **policy** $\pi$ represents the behavior of a decision-maker by specifying what actions will be taken at each state. For example, a **deterministic policy** is a mapping $\pi : \mathcal S \to \mathcal A$, while a **stochastic policy** maps states to action *distributions* $\pi : \mathcal S \to \Delta(\mathcal A)$.
>
>The **value** of a policy $\pi$ from a state $s_0$ is the expected cumulative, discounted **reward** that results from following $\pi$. 

>[!definition] Trajectory of a MDP, return
>Given a Markov decision process with reward function $R(s, a ,s’)$ and transition function $T(s’ | s, a)$, a single **trajectory** is a sequence of states, actions, and rewards
>$$
>\langle s_0, a_0, r_0, s_1, a_1, r_1, ... \rangle,
>$$
>where the reward $r_t = R(s_t, a_t, s_{t+1})$ is defined over a state/action/next-state tuple. The **return** associated with the trajectory is the discounted cumulative reward
>$$
>\sum_{t = 0}^{\infty} \gamma^{t} r_t.
>$$

---

# Policy prediction

$\quad$ The policy **prediction** problem is to calculate the **state value function**, or expected return, from every state that results from following a *fixed* policy $\pi$. 

>[!definition] Equation: State value
>$$
>v_\pi(s) = \mathbb{E}_{\pi, T}\left[ \sum_{t=0}^{\infty} \gamma^{t} r_t \mid s_0 = s\right],
>$$
>where $\gamma \in (0, 1]$ is a **discount rate**.

$\quad$ The **Monte Carlo policy prediction** algorithm calculates $v_\pi$ by repeatedly sampling trajectories and averaging returns. 

>[!definition] Algorithm: Monte Carlo policy prediction
>Input: A policy $\pi$ to evaluate and a state $s$ to evaluate from.
>- Initialize the return $G = 0$ and timestep $t = 0$
>- While $s$ is not an **absorbing state** (a state that always leads to itself regardless of what action is taken, and always returns a reward of $0$):
>	- Sample action $a \sim \pi(a | s)$
>	- Sample next state $s’ \sim T(s’ | s, a)$
>	- Calculate reward $r = R(s, a, s’)$
>	- Update $G \leftarrow G + \gamma^t \cdot r$
>	- Update $s \leftarrow s’$
>- Return $G$

$\quad$ On the other hand, discounted infinite horizon MDPs have the property that $v_\pi$ can be expressed with a set of primitive recursive equations. This allows for calculating calculating *exact* values using dynamic programming: the general idea is to initialize the value function $v_\pi(s)$ arbitrarily, then use the right-hand expression to calculate updated value functions until the function stops changing and Bellman’s equations are satisfied.

>[!definition] Equation: Bellman’s equation
>$$
>v_\pi(s) = \sum_{a, s'}\pi(a|s) T(s'|s, a) \left [ R(s, a, s') + \gamma v_\pi(s') \right ]
>$$

>[!definition] Algorithm: Bellman policy prediction
>Input: A policy $\pi$, a MDP $(\mathcal S, \mathcal A, T, R, \gamma)$, and a convergence precision $\Delta_{max}$.
>- Initialize $v_\pi(s) = 0$ for all $s \in \mathcal S$
>- For $i$ in $\{ 1, 2, \ldots, n_{maxiters}\}$:
>	- $\Delta = 0$
>	- For $s \in \mathcal S$:
>		- If $s$ is an absorbing state:
>			- Skip
>		- $v_{new} \leftarrow \sum_{a, s’} \pi(a | s) T(s’ | s, a) [R (s,a, s’) + \gamma v_\pi(s’)]$
>		- $\Delta = \text{max}(\Delta, |v_\pi(s) - v_{new}|)$
>		- $v_\pi(s) \leftarrow v_{new}$
>	- If $\Delta < \Delta_{max}$:
>		- Break
>- Return $\{v_\pi(s)\}_{s \in \mathcal S}$

---

# Policy control

$\quad$ Policy **control** is the problem of calculating the optimal policy, which can again be computed recursively. Rather than selecting an action according to a policy $\pi$, the **Bellman optimality equations** express selecting the *best* action in terms of **state values**. Like before, we have an iterative algorithm that converges on a $v_*$ satisfying these equations.

>[!definition] Equation: Bellman optimality equations
>$$
>v_*(s) = \max_a  \left \{ \sum_{s'} T(s' | s, a) [R(s, a, s') + \gamma v_*(s')] \right \}
>$$

>[!definition] Algorithm: Value iteration
>Input: An MDP $(\mathcal S, \mathcal A, T, R, \gamma)$ and a convergence precision $\Delta_{max}$.
>- Initialize $v_*(s) = 0$ for all $s \in \mathcal S$.
>- For $i$ in $\{ 1, 2, \ldots, n_{maxiters}$:
>	- $\Delta = 0$
>	- For $s \in \mathcal S$:
>		- If $s$ is absorbing:
>			- Skip
>		- $v_{new} \leftarrow \max_a \sum_{s'} T(s' | s, a) [R(s, a, s') + \gamma v_*(s')]$
>		- $\Delta = \max(\Delta , |v_*(s) - v_{new})$
>		- $v_*(s) \leftarrow v_{new}$
>	- If $\Delta < \Delta_{max}$:
>		- Break
>- Return $\{v_*(s)\}_{s \in \mathcal S}$

$\quad$ Given $v_*, R, T$, the optimal policy can be calculated by calculating the optimal state action values for each action in a state, then taking the best action(s). In particular, we have the $Q$**-value** (for “quality”) of an action $a$ taken at a state $s$ assuming that we will act optimally from then on. 

>[!definition] Equation: $Q$-value
> $$
> q_*(s, a) = \sum_{s'}T(s'|s, a) [ R(s, a, s') + \gamma v_*(s')]
> $$

The *optimal stochastic policy* is then any policy that is greedy with respect to the optimal $Q$-values, meaning it is uniform over all actions equal to the maximum value [^1]:

$$
\pi_*(a | s) \propto \mathbf 1[q_*(s, a) = \max_b q(s, b)],
$$

where $\mathbf 1[P] = 1$ if $P$ is true and $0$ otherwise, thus $\sum_a \pi_*(a | s) = 1$ normalizes to a probability distribution.

---

# Variations

#### Partially observable MDPs

![[Pasted image 20250527150923.png]]

#### Multi-agent MDPs

[[@2020carrollUtility]]

![[Pasted image 20250515120659.png]]

#### Multi-agent MDPs with sub-tasks

[[@2021wuToo]]

![[Pasted image 20250504140137.png]]

#### Meta-level MDP

#wip [[@2024griffithsBayesian]] 331

---

# Code snippets

```
(\mathcal S, \mathcal A, T, R, \gamma)
```


---
# Notes

- [[@2024griffithsBayesian]] policy iteration? p. 208
- The MDP framework with differs from a full [[§ Reinforcement Learning|reinforcement learning]] setting in that, in the MDP framework, we have general access to the underlying transition probabilities and reward function, and we can examine any state at any time with dynamic programming instead of sampling in sequence. Specifically, in the MDP framework, **rewards** are given while **values** are computed or learned; in contrast, the **reinforcement learning problem** involves trying to find the optimal policy for an MDP in the absence of information about how actions modify states, or what costs or rewards result from an action.

[^1]: For example, if there is only one maximum value, then the policy is deterministic.