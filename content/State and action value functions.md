---
aliases:
  - Bellman equation
  - state value function
  - action value function
tags:
  - permanent-note
  - topic-information-computation-statistics
publish: 
date: 2025-06-25T16:04:11-04:00
lastmod: 2025-08-27T09:19:55-07:00
---
# Overview

For a fixed starting state $s_0$, the **state value function** $v_\pi$ for a policy $\pi$ is the expected return from following $\pi$ thereafter. The **action value function** $q_\pi$ defined analogously with the additional condition of following some fixed action $a \in \mathcal A(s_0)$.

**Related notes:**
- [[Policy prediction and control]]

---




>[!definition] Equation: State value function
>The **value** of a state $s$ under policy $\pi$ is given by the expected return (i.e., cumulative discounted reward) conditioned on starting at state $s_t = s$ and following $\pi$ thereafter:
>$$
>v_\pi(s) = \mathbb{E}_{\pi, T}\left[ \sum_{k=0}^{\infty} \gamma^{k} r_{t + k+1} \mid s_t = s\right],
>$$
>where $r_t = R(s_t, a_t, s_{t+1})$ is the reward at $t$ with action given by the policy $a_t \sim \pi(\cdot | s_t)$ and next state given by transition dynamics $s_{t+1} \sim T(\cdot | s_t, a_t)$, and $\gamma \in (0, 1]$ is the discount rate. The function $v_\pi$ is called the **state value function** for policy $\pi$.

$\quad$ The **Bellman equation** for a state value function $v_\pi$ expresses a recursive relationship between the value of a state and the value of its possible successors.

>[!definition] Equation: Bellman equation for the state value function $v_\pi$
>For any policy $\pi$ and any state $s$, the following consistency condition holds (notation from Sutton and Barto, 71):
>$$
>\begin{align}
>v_\pi(s) 
>&= \mathbb{E}_{\pi}\left[ \sum_{k=0}^{\infty} \gamma^{k} r_{t + k + 1} \mid s_t = s \right ] \\
>&= \mathbb E_\pi \left [ r_{t + 1} + \gamma \sum_{k=0}^\infty r_{t + k + 2} \ | s_t = s \  \right ] \\
>&= \sum_{a \in \mathcal A(s)} \pi(a | s) \sum_{s' \in \mathcal S, \  r} p (s', r \ | \ s, a) \left [ r + \gamma \mathbb E _\pi \left [ \sum_{k = 0} \gamma^k r_{t + k + 2} \ | \ s_{t + 1} = s' \right ] \right ] \\ 
>&= \sum_{a \in \mathcal A (s)} \pi(a|s) \sum_{s' \in \mathcal S, r} p(s',r \ | \ s,a) \left [ r + \gamma v_\pi(s') \right ],
>\end{align} 
>$$
>where $p(s’, r \ | s, a)$ is the probability of transition to state $s’$ with reward $r$ from $(s, a)$. 

$\quad$ Informally, the Bellman equation says that given a state $s$ from which any action $a \in \mathcal A (s)$ can be taken, the value of state $s$ is an average over all possible response states from the environment $s’$ and rewards $r$, weighted by their probability of occurrence. The value function $v_\pi$ is the *unique solution* to its equation

$$
v_\pi(s) = \sum_{a, s'}\pi(a|s) T(s'|s, a) \left [ R(s, a, s') + \gamma v_\pi(s') \right ].
$$

>[!definition] Equation: Action value function
>The value of taking action $a$ in state $s$ under a policy $\pi$ is the expected return conditioned on starting from state $s$ and taking action $a$, and following $\pi$ thereafter:
>$$
>q_\pi(s, a) = \mathbb E_\pi \left [ \sum_{t=0}^\infty \gamma^t r_t \ | \ s_0 = s, a_0 = a \right ].
>$$
>The function $q_\pi$ is called the **action value function** for policy $\pi$.


---
# Highlights



---
# Notes



