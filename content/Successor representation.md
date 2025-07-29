---
aliases: 
tags:
  - permanent-note
  - topic-information-computation-statistics
publish: "true"
date: 2025-06-25T13:21:13-04:00
lastmod: 2025-06-25T16:49:16-04:00
---
# Overview

$\quad$ An alternative to both [[Axes of variation for reinforcement learning algorithms|model-free and model-based]] representations of a [[§ Reinforcement Learning|reinforcement learning]] environment is **successor representation**, which encodes an “occupancy count” for each state based on whether they *predict* visiting other states when following some policy.

>[!definition] Successor representation
>The **successor representation** for a [[Markov decision processes|policy]] $\pi: \mathcal S \to \Delta(\mathcal A)$ is defined for all $s, s^+ \in \mathcal S$, where $s$ is a current state and $s^+$ is a future state, by 
>$$
>M^\pi(s^+ | s) = \mathbb E_\pi \left [ \sum_{t = 0}^\infty \gamma^t \mathbb 1 [s_t = s^+] \ | \  s_0 = s \right ],
>$$
>
>where $\mathbb 1[s_t = s^+]$ is the indicator function that returns $1$ when the current state $s_t$ is $s$ and $0$ otherwise.

- Indicator fn like reward fn?

---

# Recursive equations for SR

>[!definition] Equation: Recursive equations for SR
>For any policy $\pi : \mathcal S \to \Delta(\mathcal A)$, the successor representation for a current state $s$ and future state $s^+$ can be computed by
>$$
>M^\pi(s^+ | s) = \mathbb 1 [s^+ = s] + \gamma \sum_{a \in \mathcal A} \pi(a | s) \sum_{s' \in \mathcal S} T(s' | s, a) M^\pi(s^+ | s).
>$$
>If $\pi : \mathcal S \to \mathcal A$ is a deterministic policy, we have
>$$ 
>M ^\pi (s^+ \mid s) =  \mathbb 1 [s^+ = s] + \gamma \sum_{s' \in \mathcal S} T(s' | s, \pi(s)) M^\pi(s^+ | s').
>$$

---

# Computing state value from the SR

>[!proposition] Expressing the value of a state using SR and state reward
>Let $\pi : \mathcal S \to \Delta(\mathcal A)$ be a policy for acting in a [[Markov decision processes|Markov decision process]] with reward function $R : \mathcal S \times \mathcal A \times \mathcal S \to \mathbb R$, and let 
>$$ 
>R^\pi(s) = \sum_a \pi(a \mid s) \sum_{s’} T(s’ \mid s, a) R(s, a, s’)
>$$
>be the state reward function associated with $\pi$. Then the [[State and action value functions|state value function]] can be computed as a linear combination of the successor representation and state reward function:
>$$
>v_\pi(s) = \sum_{s^+}M^\pi(s, s^+) R^\pi(s^+).
>$$

*Proof adapted from [[@2024griffithsBayesian]], p. 214.* $\quad$ We have

$$
\begin{align}
v_\pi(s) 
&= \sum_{s^+}M(s^+ \mid s) R^\pi(s) \\
&= \sum_{s^+} \left ( \mathbb 1 [s = s^+] + \gamma \sum_a \pi(a \mid s ) \sum_{s'} T(s' \mid s, a) M^\pi (s^+ \mid s') \right ) R^\pi(s^+) \\
&= \sum_{s^+} \mathbb 1 [s = s^+] R^\pi(s^+) +  \gamma \sum_a \pi(a \mid s ) \sum_{s'} T(s' \mid s, a) \sum_{s^+} M^\pi (s^+ \mid s') R^\pi(s^+) \\
&= R^\pi(s) + \gamma \sum_a \pi(a \mid s ) \sum_{s'} T(s' \mid s, a)v_\pi(s') \\
&= \sum_a \pi(a \mid s) \sum_{s'} T(s' \mid s, a) R(s, a, s') + \gamma \sum_a \pi(a \mid s ) \sum_{s'} T(s' \mid s, a)v_\pi(s') \\ 
&= \sum_a \pi(a \mid s) \sum_{s'}T(s' \mid s, a)[R(s, a, s') + \gamma v_\pi(s')],
\end{align}
$$

where the fourth line expresses $v_\pi(s)$ as a sum of expected immediate reward and expected discounted future value

$$
v_\pi(s) = R^\pi(s) + \gamma\mathbb E_{a \sim \pi, \ s' \sim T} [v_\pi(s')],
$$

and the final equality gives the familiar [[State and action value functions|Bellman equation]] for state value. $\quad \square$
