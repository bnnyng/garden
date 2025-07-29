---
aliases:
  - Markov property
tags:
  - permanent-note
  - topic-information-computation-statistics
publish: "true"
date: 2025-06-05T11:10:17-04:00
lastmod: 2025-06-16T16:53:09-04:00
---
$\quad$ In a [[§ Reinforcement Learning|reinforcement learning]] framework, the **Markov property** is required for agents to make decisions as a function of the environment’s **state signal** (i.e., information available to the agent)—it ensures that the state is a sufficient statistic for predicting future states and rewards.

>[!definition] Markov property
>A state signal at time $t$ has the **Markov property**, and is a **Markov state**, if and only if the environment’s response at time $t + 1$ can be specified by the distribution
>$$
>\begin{align}
>p(s', r | s, a) 
>&= \text{Pr}\{ R_{t+1} = r, \ S_{t+1} = s' | S_t, A_t \} \\
>&= \text{Pr}\{ R_{t+1} = r, \ S_{t+1} = s' | S_0, A_0, R_1, \ldots, S_{t-1}, A_{t-1}, R_t, S_t, A_t \}
>\end{align}
>$$
>for all $r, s’$ and all possible values of past events $S_0, A_0, R_1, \ldots, S_{t-1}, A_{t-1}, R_t, S_t, A_t$. 

