---
aliases:
  - opponent model
tags:
  - permanent-note
  - topic-information-computation-statistics
publish: 
date: 2025-07-18T13:46:42-04:00
lastmod: 2025-07-21T11:56:43-04:00
---
# Overview

$\quad$ Broadly, **agent modeling** or **opponent modeling** involves constructing a function that takes as input some portion of past interaction history and outputs a predicted property of another [[Agent|agent]], such as future actions, class of behaviors or strategies it follows, and goals.

![[Pasted image 20250718134516.png|450]]

**Related notes:**

- [[Taxonomy of methods for modeling other agents]]
- [[Multiagent reinforcement learning]]

---
# Modeling assumptions


$\quad$A model of other agents may make assumptions along the following dimensions:

| Axis of variation                           | Category definitions                                                                                                                                                                                                                                                                                                    | Examples                                                                                                                                                                                                                                                                                         | Significance                                                                                                                                                                               |
| ------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Deterministic vs. stochastic action choices | **Deterministic action choices:** the modeled agent $a_j$ chooses actions such that, for every history $h = \langle o_t \rangle$, where $o_t$ is an observation at time $t$, we have $P(a_j \| h) = 1$ for *some* action $a_j$.<br><br>**Stochastic action choices:** an agent chooses actions with some probabilities. |                                                                                                                                                                                                                                                                                                  | Modeling deterministic action choices simplifies both learning of models and planning.<br><br>Modeling stochastic action choices allows for more robust/realistic prediction and planning. |
| Fixed vs. changing behavior                 |                                                                                                                                                                                                                                                                                                                         | **Fixed behavior:** **Markovian** agent that chooses actions based only on the most recent observation, i.e., $P(a_j \mid h ) = P(a_j \mid o_t)$ for all histories $h$ and time steps $t$.<br><br>**Changing behavior:** an adaptive opponent that itself tries to learn models of other agents. |                                                                                                                                                                                            |

$\quad$ #wip Assumptions about environemnt:
- Move order: alternating or simultaneous
- State/action representation Discrete or continuous
- State/action observability: partial/full

---
# References

- [[@2018albrechtAutonomous]], “Autonomous agents modelling other agents: A comprehensive survey and open problems”