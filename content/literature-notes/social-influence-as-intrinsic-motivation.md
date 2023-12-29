---
lit-author: 
aliases:
  - Social Influence as Intrinsic Motivation for Multi-Agent Deep Reinforcement Learning
tags:
  - literature-note
title: Paper | Social Influence as Intrinsic Motivation for Multi-Agent Deep Reinforcement Learning
publish: 
date: 2023-12-28 18:40
lastmod: 2023-12-29T15:08:17-08:00
---
# Summary

---
# Takeaways

- Intrinsic social influence reward consistently leads to higher collective return in SSD games.
- Influence rewards can lead to the emergence of both explicit and implicit communication protocols.
- Influence can be computed by augmenting agents with an internal model of other agents (i.e., without knowing the other agents’ reward functions).
- The authors suggest that influence is essential to achieving any form of learning.

---
# Key terms

- **Sequential social dilemma (SSD)** = a multi-agent game which gives a higher reward in the short term for defecting, non-cooperative behavior; operationalizes “the tragedy of the commons.”
- **Counterfactual action** = an action that was not taken. 
- **Marginal policy** = the policy of an agent $j$ if $j$ did not consider the actions (i.e., did not make **counterfactual** observations) of a specific agent $k$; used in computing **causal influence** of $k$ on $j$.

---
# Notes