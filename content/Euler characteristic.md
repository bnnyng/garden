---
aliases:
  - Euler characteristic
tags:
  - permanent-note
  - topic-logic-mathematics
  - MATH-GU4053
status: 
publish: 
lastmod: 2025-05-08T12:35:24-04:00
date: 2025-05-08T12:03:26-04:00
---
# Overview

---

# The Euler characteristic of a finite $\Delta$-complex

#### Preliminaries: The rank of a finitely generated abelian group

>[!definition] Rank of a finitely generated abelian group
>Let $A$ be a finitely generated [[Abelian groups|abelian]] group. By a theorem from algebra, there exists an isomorphism 
>$$ 
>A \cong \mathbb Z^d \oplus T,
>$$
>where $T$ is a *finite* abelian group. The **rank** of $A$ is the number $d$.

![[Pasted image 20250508120618.png]]

>[!lemma] Rank of groups in a short exact sequence
>Let $A, B, C$ be finitely generated abelian groups and let 
>$$
>0 \to A \to_f B \to_g C \to 0
>$$
>be a [[Exact sequences|short exact sequence]]. Then $\text{rank}(B) = \text{rank}(A) + \text{rank}(C)$.

$\quad$ The following “completely algebraic” theorem is used to calculate the Euler characteristic of a finitely generated $\Delta$-complex.

>[!theorem] Sum of ranks in a chain complex is equal to sum of ranks of its homology groups
>Let $(A_*, \partial)$ be a [[Homology of general chain complexes|chain complex]] satisfying:
>- (i) $A_i$ is a finitely generated abelian group for all $i$;
>- (ii) $A_i$ is nontrivial for only finitely many $i$.
>
>Then writing $H_i = H_i(A_*, \partial)$, we have
>$$
>\sum_i (-1)^i \text{rank}(A_i) = \sum_i (-1)^i \text{rank}(H_i).
>$$

#### Definition and calculation of the Euler characteristic

>[!definition] Euler characteristic of a finite $\Delta$-complex
>Let $X$ be a topological space satisfying: 
>- (i) The [[Homology of general chain complexes|homology group]] $H_p(X)$ is finitely generated for all $p$;
>- (ii) There exists an $N$ such that $H_p(X) = 0$ for all $p > N$.
>
>Then the **Euler characteristic** of $X$ is defined by the integer
>$$
>\chi(X) = \sum_{i= 0}^\infty (-1)^i \text{rank}(H_i(X)).
>$$

$\quad$ The Euler characteristic $\chi(X)$ is *not* defined if $X$ does not have finitely generated homology. In fact, it follows from [[(Theorem) The inclusion of simplicial chains into singular chains induces an isomorphism in homology]] that $\chi (X)$ is defined for any space that is [[Homotopy equivalence|homotopy equivalent]] to a finite $\Delta$[[Delta-complexes|-complex]].

$\quad$ Again, the calculation of the Euler characteristic directly follows from the “completely algebraic” result above.

>[!theorem] 
>Let $X$ be a finite $\Delta$[[Delta-complexes|-complex]] and let $n_i \in \mathbb N$ be the number of $i$-simplices in the $\Delta$-complex structure. In particular, notice that $n_i = \text{rank}(\Delta_i(X))$. Then
>$$
>\chi(X) = \sum_{i=0}^\infty (-1)^i n_i = \sum_{i=0}^\infty (-1)^i \text{rank}(\Delta_i(X)).
>$$

