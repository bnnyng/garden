---
aliases:
  - policy prediction
  - policy control
  - planning
  - value iteration
  - policy evaluation
  - policy optimization
tags:
  - permanent-note
  - topic-information-computation-statistics
publish:
date: 2025-06-05T13:07:49-04:00
lastmod: 2025-08-29T19:07:44-04:00
---
# Overview

$\quad$ Two key problems arise in [[(Sequential) decision problems|sequential decision-making]]:
- **Policy prediction (or policy evaluation):** Given a [[Markov decision processes|policy]] and an initial state, how much reward would be obtained in the long term by following the policy?
- **Optimal control (or policy optimization):** Given an entire Markov decision process, what policy would maximize value?

![[Pasted image 20250708211806.png]]

---
# Key terms

- **Prediction:** also known as **policy evaluation**; the computational problem of determining how much long-term reward would be obtained *given* a policy and an initial state.
- **Value:** a standard method of defining long-term reward as the expected cumulative discounted infinite sum of rewards. In contrast to reward, value is derived from a combination of rewards, the environment, and future behaviors.
- **Optimal control:** also known as **policy optimization**; the computational problem of finding the policy with the maximal value function *given* an MDP. Using the standard definition of value above, there is a *unique* optimal value function expressed in terms of **Bellman optimality equations**.
- **Planning:** the control problem with a known reward and transition modomel.
- **Dynamic programming:** in this context, a class of algorithms that, *given* the full state space, calculates the value function via backward induction. #wip 
- **Value iteration:** the dynamic programming algorithm for optimal control.

---

# Policy preds

#wip 

---

# Policy prediction

$\quad$ The policy **prediction** problem is to calculate the **state value function**, or expected return, from every state that results from following a *fixed* policy $\pi$. 

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
>- For $i$ in $\{ 1, 2, \ldots, n_{maxiters} \}$:
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
\pi_*(a | s) \propto \mathbb 1[q_*(s, a) = \max_b q(s, b)],
$$

where $\mathbb 1[P] = 1$ if $P$ is true and $0$ otherwise, thus $\sum_a \pi_*(a | s) = 1$ normalizes to a probability distribution.