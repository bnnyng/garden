---
aliases: 
tags:
  - permanent-note
publish: 
date: 2025-07-23T13:42:58-04:00
lastmod: 2025-07-24T00:29:06-04:00
---
# Overview

[[@2025kleiman-weinerEvolving]]

---

# Model 

- **Games and action selection:** a **game** $G$ is defined as a set of (joint) actions for which each action $a \in G$ has a **payoff** value $R(a)$. The payoff for agent $i$ when action $a$ is taken is denoted $R_i(a)$. If player $i$ has a private subjective **utility** $U_i(a)$ for each $a \in G$, then player $i$ selects the action $a_i^*$ with the highest expected utility: $$ a_i^* = \text{arg} \max_{a \in G} \ U_i(a). $$
- **Inferring utilities with Bayesian theory of mind:** $$ B_{ij}^t(U \mid a_j^t, G^t) \propto P(a_j^t \mid U_j, B^t, B_{ji}^t) B^{t-1}_{ij}(U \mid a_j^{t-1}, G^{t-1}) $$