---
aliases:
  - softmax
  - Boltzmann
  - Gibbs
  - epsilon-greedy
  - greedy policy
tags:
  - permanent-note
  - topic-information-computation-statistics
publish: "true"
date: 2025-06-09T14:29:45-04:00
lastmod: 2025-07-29T15:00:57-04:00
---

# Overview

$\quad$ In a decision problem (such as a [[Bandit problems|bandit]] or [[(Sequential) decision problems|sequential decision problem]]), a **decision policy** is a mechanism for selecting actions; for instance, a *stochastic* decision policy assigns a probability of being chosen to each valid action. The two most commonly used decision policies are ($\epsilon$-)**greedy** and **softmax**.

$\quad$While [[§ Reinforcement Learning|learning]] allows [[Agent|agents]] to find the *best* actions, decision policies address the [[Exploration-exploitation tradeoff|exploration-exploitation]] dilemma—whether to *exploit* actions that led to high reward in the past (i.e., act greedily), or *explore* to potentially achieve better results in the future.

---

# Greedy policy

$\quad$**Greedy policies** select the action(s) with highest estimated [[State and action value functions|value]].

>[!definition] $\epsilon$-greedy decision policy
>Given some $\epsilon \in [0, 1]$, an $\epsilon$**-greedy** policy selects the action(s) with highest estimated value with probability $1- \epsilon$, and a random action with probability $\epsilon$.

---

# Softmax decision policy

>[!definition] Softmax decision policy
>Let $\mathcal A$ be a set of actions such that each $a \in \mathcal A$ is associated with a “value” $V(a) \in \mathbb R$. Then at time $t$, the **softmax (a.k.a. Boltzmann, Gibbs) decision policy** selects $a$ with probability
>$$
>\text{Pr}\{\mathcal A_t = a \} = \frac{e^{\beta V(a)}}{\sum_{a' \in \mathcal A} e ^{\beta V(a')}},
>$$
>where $\beta$ is called the **inverse [[Temperature|temperature]]** parameter.

$\quad$ The **inverse temperature** $\beta$ controls the balance between exploration and exploitation: as $\beta \to 0$, the softmax rule approaches complete randomization (i.e., high exploration), while as $\beta \to 1$, the softmax rule approaches the maximum expected value (i.e., high expectation).
