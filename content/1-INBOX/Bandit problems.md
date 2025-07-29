---
aliases:
  - multi-armed bandit
  - bandit
  - restless bandit
  - contextual bandit
  - signaling bandit
tags:
  - permanent-note
  - topic-information-computation-statistics
publish: 
date: 2025-05-26T14:22:44-04:00
lastmod: 2025-07-09T15:32:20-04:00
---
# Overview

$\quad$**Bandits** are a special case of the [[§ Reinforcement Learning|reinforcement learning]] problem in which the decision-maker learns to act in a single state. An environment with one state and $n$ different options or actions is called an $n$**-armed bandit**. 

**Related notes:**

- [[Exploration-exploitation tradeoff]]
- [[Action selection in decision problems]]

---

# Variants

#### Contextual bandits

$\quad$ **Contextual bandits** extend $n$-armed bandits to tasks where the best action depends on some feature of the environment, the so-called **context**. 

>[!definition] Contextual bandit
>A **contextual bandit** problem is a repeated interaction with $T$ rounds where at each time step $t = 1, 2, \ldots, T$, the agent:
>1. Observes a context $x_t \in \mathcal X$ (e.g., $\mathcal X = \mathbb R^k$);
>2. Chooses an action $a_t \in \mathcal A$;
>3. Receives a reward $r_t = R(x_t, a_t) \in \mathbb R$ from the environment. 

$\quad$ Contextual bandit problems are an intermediate between $n$-armed bandits and full reinforcement learning. Like RL, contextual bandits involve learning a **policy**, but the only feedback agents receive is the reward for a chosen action; that is, there is no state **transition** data for the environment to evolve as a result of actions.

#### Signaling bandits

[[@2024sumersReconciling]]

---

# Notes

- One-armed bandit = slot machine
- Nonstationary = true values chagne over time

https://courses.cs.washington.edu/courses/cse599m/19sp/notes/cb_intro.pdf