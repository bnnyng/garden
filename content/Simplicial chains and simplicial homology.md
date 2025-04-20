---
aliases:
  - simplicial chain
  - simplicial homology
tags:
  - permanent-note
  - topic-logic-mathematics
  - MATH-GU4053
status: 
publish: 
lastmod: 2025-04-10T13:34:47-04:00
date: 2025-04-10T12:26:46-04:00
---

# Overview and basic definition


>[!definition] Simplicial $p$-chain, simplicial homology
>Let $(X, \Sigma)$ be a $\Delta$[[Delta-complexes|-complex]]. The **simplicial $p$-chains** of $X$ is the subgroup denoted
>$$
>\Delta_p(X) \subseteq C_p(X),
>$$
>which is [[Linear combinations and spanning|spanned]] by [[Singular chains and singular homology|singular]] $p$-chains $\sigma: \Delta^p \to X$ which are in $\Sigma_p$. Then $\sigma \circ \delta^i \in \Delta_{p-1} (X)$ for all $i = 0, \ldots, p$, and we define the **boundary operator** similarly to singular chains:
>$$
>\partial \sigma = \sum_{i=0}^p (-1)^i \sigma \circ \delta^i, \quad \quad \partial \circ \partial = 0.
>$$
>This gives a [[Homology of general chain complexes|chain complex]] of simplicial chains, and **simplicial homology** is defined by
>$$
>H_p^\Delta (X) = H_p(\Delta_*(X), \partial).
>$$



**Relevant theorems:**
- [[(Theorem) The inclusion of simplicial chains into singular chains induces an isomorphism in homology]]

**Related notes:**
- [[Singular chains and singular homology]]

---

