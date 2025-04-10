---
aliases:
  - -complex
tags:
  - permanent-note
  - topic-logic-mathematics
  - MATH-GU4053
status: 
publish: 
lastmod: 2025-04-10T12:33:28-04:00
date: 2025-04-10T11:51:58-04:00
---
# Overview


**Related notes:**

- [[Simplicial chains and simplicial homology]]

---
# Axiomatic definition

>[!definition] $\Delta$-complex structure
>A **$\Delta$-complex structure** on a topological space $X$ is a tuple 
>$$
>\Sigma = (\sigma_p)_{p \in \mathbb N}, \quad \quad \Sigma_p \subseteq \textup{Sin}_p(X) \text{ for } p \geq 0,
>$$
>where $\text{Sin}_p(X)$ is the set of all [[Singular chains and singular homology|singular]] $p$-simplices $\sigma : \Delta^p \to X$, which satisfies the following:
>- (i) For all $i = 0, \ldots, p$ and all $p \in \mathbb N$, we have $$ d_i(\Sigma_p) \subseteq \sigma_{p-1}, $$ where $d_i : \text{Sin}_p(X) \to \text{Sin}_{p-1}(X)$, the canonical linear homeomorphism that preserves ordering of vertices. In other words, each restriction of $\Sigma_p$ to a face of $\Delta^n$ is a map $\sigma: \Delta^{p-1} \to X$;
>- (ii) Writing $\Delta^p \backslash \partial \Delta^p$ for the interior of the standard $p$-simplex, the restriction $\sigma |_{\Delta^p \backslash \partial \Delta^p}$ is [[Injectivity, surjectivity, and bijectivity|injective]] for all $\sigma \in \Sigma_p$, and the subsets $\sigma(\Delta^p \backslash \partial \Delta^p) \subseteq X$ are all disjoint. In other words, $$ \bigcup_{p \in \mathbb N} \bigcup_{\sigma \in \Sigma_p} \sigma (\Delta^p \backslash \partial \Delta^p) = X, $$ and each point in $X$ is the image of exactly one restriction $\sigma|_{\Delta^p \backslash \partial \Delta^p}$;
>- (iii) A subset $A \subseteq X$ is open if and only if $\sigma^{-1} \subseteq \Delta^p$ is open for all $\sigma \in \Sigma_p$ and all $p \in \mathbb N$.

>[!definition] $\Delta$-complex
>A **$\Delta$-complex** is a pair $(X, \sigma)$ consisting of a topological space $X$ and a $\Delta$-complex structure $\Sigma$ on $X$. The elements of $\Sigma_p$ are called the **$p$-simplices** of the $\Delta$-complex, and the subsets $\sigma(\Delta^p \backslash \partial \Delta^p) \subseteq X$ are called the **open simplices**.


---
# Examples

- $\Delta$-complex structure on the torus (notes 78)



---
# Code snippets

```
\text{Sin}_{p-1}(X)
```

```
Delta^p \backslash \partial \Delta^p
```

```
$\Delta$-complex
```