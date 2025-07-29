---
aliases:
  - coarse-graining
  - coarse-graining axiom
  - tree-like
tags:
  - permanent-note
  - topic-physics-complexity
  - polymetamath
publish: "true"
date: 2024-07-31 15:30
lastmod: 2025-06-25T14:35:42-04:00
---
# Overview

$\quad$ **Coarse-graining** a theory or representation of the world is a way of merging states of the world. Proper coarse-graining involves strategically throwing out information about high-resolution data such that a model of the simplified data echoes the real-world process. The key features of coarse-graining are that it *reduces the size* of the uncertainty problem and *cannot be reversed*.


>[!question] #concept-question What is the relationship between coarse-graining and equivalence classes?



**Related notes:** 
- [[Abstraction and idealization]]
- [[Renormalization]]

---



Some examples of coarse-graining include:
- **Majority voting** and other methods of aggregating the preferences of a region;
- **JPEG image compression (Fourier transform)**, which replicates the coarse-graining process of the retina by replacing features that are undetectable to the human eye.

>[!question] What are some non-examples of coarse-graining?

---
# Formal examples

#### Shannon entropy

$\quad$The **coarse-graining axiom** of [[Axioms of Shannon information (entropy)|Shannon entropy]] states that a fine-grained uncertainty should be equal to a coarse-grained uncertainty. 

>[!definition] Tree-like property of Shannon entropy
>Suppose we have a set $X = \{ a, b, c\}$ and do not care about distinguishing between elements of the set $G = \{ b, c\}$. In order to return an uncertainty value for the reduced set $X’ = \{a, G\}$, an equation for uncertainty $H(X)$ should satisfy
>$$
>H(X) = H(X') + p_{bc}H(G),
>$$
>where $H(G)$ is the uncertainty of the distribution $\{p_b/p_{bc}, p_c/p_{bc}\}$, where $p_{bc} = p_b + p_c$.

