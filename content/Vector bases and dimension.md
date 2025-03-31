---
aliases:
  - dimension
  - basis
  - finite-dimensional
  - standard basis
tags:
  - permanent-note
  - topic-logic-mathematics
  - MATH-UN1207
  - MATH-GU4042
publish: "true"
date: 2022-10-19
lastmod: 2025-03-08T18:45:55-05:00
---
# Overview

Every [[Vector spaces and ring modules|vector space]] has a **basis**, which combines notions from [[Linear combinations and spanning|spans]] and [[Linear independence|linear independence]]. We can study vector spaces by studying their bases.

One special basis is the **standard basis** for $F^n$ (i.e., the $n$-fold product of a [[Algebraic fields|field]] $F$), which is the set $\{e_1, \cdots, e_n\}$ where the only non-zero coordinate in each vector $e_i$ is the $i$th coordinate. Another example is $\{1, x, \ldots, x^n\}$, which is a basis for the vector subspace $P_n$ of the [[Polynomial rings|polynomial ring]] $F[x]$.

**Dimensions** tell us exactly how many coordinates are needed to describe an arbitrary element of a vector space.

---
# Bases

>[!example] Definition: Basis of a vector space
>If $V$ is a finite-dimensional vector space, a **basis** for $V$ is a set of vectors $\{v_1, \cdots, v_n\} \subset V$ which:
>- (i) Spans the entire space, so every vector in $V$ is some [[Linear combinations and spanning|linear combination]] of these vectors;
>- (ii) Is linearly independent, so only the trivial linear combination produces $\vec 0$.

>[!example] Definition: Standard basis of a field
>If $F$ is a field, the **standard basis** of the $n$-fold Cartesian product $F^n$ is the sequence $\{ e_1, \ldots, e_n \}$, where the only nonzero coordinate in each $e_i$ is the $i$th coordinate.

---
# Counting and dimension

>[!abstract] Lemma: Main counting arguemnt
>If $w_1, \ldots, w_b$ are [[Linear independence|linearly independent]] vectors all contained in the [[Linear combinations and spanning|span]] $\textup{span}\{ v_1, \ldots, v_a\}$ then $b \leq a$. 

>[!abstract] Corollary: Dimension of a vector space
>Let $V$ be a finite-dimensional $F$-vector space, meaning there exist $v_1, \ldots, v_d \in V$ such that $V = \textup{span}\{ v_1, \ldots, v_d\}$. 
>- (i) **Dimension is well-defined:** Any two bases for $V$ have the same number of elements. In this case, the number of elements in the basis is called the **dimension** of $V$, written $\dim_F V$.
>- (ii) **Basis reduction:** If $V = \textup{span}\{ v_1, \ldots, v_d\}$, then there is a subsequence of $v_1, \ldots, v_d$ that is a basis for $V$. Hence $\dim V \leq d$, with equality *if and only if* the entire sequence is a basis for $V$.
>- (iii) **Basis extension:** If $w_1, \ldots, w_\ell \in V$ are [[Linear independence|linearly independent]], then there exist vectors $w_{\ell+1}, \ldots, w_r \in V$ such that $$ w_1, \ldots, w_\ell, w_{\ell+1}, \ldots, w_r$$ is a basis for $V$. Hence $\dim V \geq \ell$.
>- (iv) If $W \subseteq V$ is a vector subspace, then $\dim W \leq \dim V$, with equality *if and only if* $W = V$.
>- (v) If $v_1, \ldots, v_d$ is a basis for $V$, then the map $f : F^d \to V$ defined by $$ f(t_1, \ldots, t_d) = \sum_{i=1}^d t_iv_i $$ is a linear isomorphism.
