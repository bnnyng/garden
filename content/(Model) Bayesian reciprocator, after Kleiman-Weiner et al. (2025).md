---
aliases:
  - Bayesian reciprocator
tags:
  - permanent-note
publish: 
date: 2025-07-23T13:42:58-04:00
lastmod: 2025-08-14T00:04:04-04:00
---
# Overview

$\quad$ The **Bayesian reciprocator** is a strategy for repeated [[§ Game Theory|games]] defined by the utility function 
$$
U_i = R_i + \sum_{j \neq i}R_j * B_{ij}(U=U_i).
$$
In other words, the Bayesian reciprocator is a *parochial* cooperator, in the sense that it values the payoffs of other players to the extent that it believes they are cooperating using the same strategy.

$\quad$[[@2025kleiman-weinerEvolving]] show that the Bayesian reciprocator enables the emergence of cooperation both in situations of direct reciprocity (repeated, private interactions) and indirect reciprocity (one-shot, fully observable interactions). Further, the Bayesian reciprocator outcompetes classical automata strategies from evolutionary game theory

---

# Model 

- **Games and action selection:** a **game** $G$ is defined as a set of (joint) actions for which each action $a \in G$ has a **payoff** value $R(a)$. The payoff for agent $i$ when action $a$ is taken is denoted $R_i(a)$. If player $i$ has a private subjective **utility** $U_i(a)$ for each $a \in G$, then player $i$ selects the action $a_i^*$ with the highest expected utility: $$ a_i^* = \text{arg} \max_{a \in G} \ U_i(a). $$
- **Inferring utilities with [[Bayesian theory-of-mind and inverse planning|Bayesian theory-of-mind]]:** 
	- The *degree of belief* that agent $i$ has that agent $j$ is using utility function $U$ is denoted $B_{ij}(U) \in [0, 1]$.
	- Agent $i$’s beliefs about another agent $j$’s utilities at time $t$, denoted $B_{ij}^t$, are determined by updating the previous beliefs $B_{ij}^{t-1}$ in response to observing action $a^t_j$ in $G^t$ according to [[Probabilistic reasoning and Bayesian belief updating|Bayes' rule]]: $$ B_{ij}^t(U \mid a_j^t, G^t) \propto P(a_j^t \mid U_j, B^t, B_{ji}^t) B^{t-1}_{ij}(U \mid a_j^{t-1}, G^{t-1}). $$
	- The **likelihood** $P(a_j^t \mid U_j, G^t, B_{ji}^t)$ is the probability of $j$’s action $a_j^t$ at time $t$ in game $G^t$, assuming $j$ has utility function $U_j$ and beliefs $B_{ji}^t$ about player $i$.
- **The Bayesian reciprocator:** the Bayesian reciprocator is defined by the utility function $$ U_i = R_i + \sum_{j\neq i}R_j * B_{ij}(U = U_i). $$
