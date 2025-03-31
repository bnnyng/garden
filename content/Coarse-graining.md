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
lastmod: 2024-10-10T12:16:12-04:00
---
The coarse-graining axiom states that a fine-grained uncertainty should be equal to a coarse-grained uncertainty.

More precisely, given a set $X$, the goal of an uncertainty measure is to capture the *uncertainty of a process* that returns one of the set’s elements. 

>[!example] Definition: Tree-like property of Shannon entropy
>Suppose we have a set $X = \{ a, b, c\}$ and do not care about distinguishing between elements of the set $G = \{ b, c\}$. In order to return an uncertainty value for the reduced set $X’ = \{a, G\}$, an equation for uncertainty $H(X)$ should satisfy
>$$
>H(X) = H(X') + p_{bc}H(G),
>$$
>where $H(G)$ is the uncertainty of the distribution $\{p_b/p_{bc}, p_c/p_{bc}\}$, where $p_{bc} = p_b + p_c$. 

>[!question] #concept-question What is the relationship between coarse-graining and equivalence classes?

More generally, the key features of coarse-graining are that it *reduces the size* of the uncertainty problem and *cannot be reversed*.

Related: [[Renormalization]]

---
# Coarse graining representations

Coarse-graining a theory or representation of the world is a way of *merging* states of the world. Proper coarse-graining involves strategically throwing out information about high-resolution data such that a model of the simplified data echoes the real-world process.

Some examples of coarse-graining include:
- **Majority voting** and other methods of aggregating the preferences of a region;
- **JPEG image compression (Fourier transform)**, which replicates the coarse-graining process of the retina by replacing features that are undetectable to the human eye.

>[!question] What are some non-examples of coarse-graining?