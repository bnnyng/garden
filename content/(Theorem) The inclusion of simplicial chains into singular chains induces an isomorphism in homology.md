---
aliases: 
tags:
  - permanent-note
  - topic-logic-mathematics
status: 
publish: 
lastmod: 2025-05-08T12:19:42-04:00
date: 2025-04-10T12:32:45-04:00
---
# Overview 

- Singular homology is better formal properties, defined for any space including topological ones
- Simplicial is calculable, usually via linear algebra

---

# Statement and proof of the theorem 

>[!theorem] Simplicial and singular homology groups are isomorphic
>Let $X$ be a $\Delta$[[Delta-complexes|-complex]]. The inclusion of [[Simplicial chains and simplicial homology|simplicial chains]] into [[Singular chains and singular homology|singular chains]] $\Delta_*(X) \to C_*(X)$ is a [[Homology of general chain complexes|chain map]], and induces an isomorphism in homology
>$$
>H^\Delta_p(X) \to H_p(X)
>$$
>for all $p$.


---
# Corollary: Homology of *finite* $\Delta$-complexes

>[!corollary] Homology of finite $\Delta$-complexes
>Let $X$ be a topological space admitting the structure of a *finite* $\Delta$[[Delta-complexes|-complex]]. Then $H_p(X)$ is a finitely generated [[Abelian groups|abelian]] group for all $p$, and is trivial if $p$ is larger than the dimension of any simplices in $X$.

*Proof from [[MATH-GU4053|Algebraic Topology]].* $\quad$ Since $X$ has a finite $\Delta$-complex structure, the [[Simplicial chains and simplicial homology|simplicial chain]] $\Delta_p(X)$ must be a finitely generated abelian group for all $p$. Then the kernel of $\partial : \Delta_p(X) \to \Delta_{p-1}(X)$, which is a subgroup of $\Delta_p(X)$, is also finitely generated, and hence the quotient $H^\Delta_p(X) \cong H_p(X)$ must be as well. $\quad \square$