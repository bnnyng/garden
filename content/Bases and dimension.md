---
aliases:
  - dimension
  - basis
  - finite-dimensional
  - standard basis
tags:
  - permanent-note
  - topic-logic-mathematics
publish: "true"
date: 2022-10-19
lastmod: 2023-12-28T18:06:44-08:00
---
# Overview

Every [[Axioms for fields and vector spaces|vector space]] has a **basis**, which combines notions from [[Linear combinations and spanning|spans]] and [[Linear independence|linear independence]]. We can study vector spaces by studying their bases.

One special basis is the **standard basis** for $\mathbb F^n$ is the set $\{e_1, \cdots, e_n\}$, where the only non-zero coordinate in each vector $e_i$ is the $i$th coordinate.

**Dimensions** tell us exactly how many coordinates are needed to describe an arbitrary element of a vector space.

---
# Bases

>[!example] Definition: Basis
>If $V$ is a finite-dimensional vector space, a **basis** for $V$ is a set of vectors $\{v_1, \cdots, v_n\} \subset V$ which:
>- Spans the entire space, so every vector in $V$ is some [[Linear combinations and spanning|linear combination]] of these vectors;
>- Is linearly independent, so only the trivial linear combination produces $\vec 0$.

- *(Lemma 35)* If $V$ is a vector space, a set $S = \{v_1, \cdots, v_n\}$ is a basis for $V$ if and only if there is a unique way to express each $v \in V$ as a linear combination of the elements of $S$.
- *(Proposition 37)* Every finite-dimensional vector space has a finite basis.
	- *(Lemma 36)* **Basis reduction lemma.** If $S = \{v_1, \cdots, v_n\}$ is any spanning set for $V$, there is a subset $S^{\prime} \subset S$ which is a basis for $V$.
		- Proposition 37 can be proven by choosing a spanning set and applying the **basis reduction lemma** to find a basis contained in the set.
	- *(Lemma 38)* **Basis extension lemma.** If $S = \{v_1, \cdots, v_n\}$ is any linearly independent set for a finite-dimensional vector space $V$, there is a larger set $S^{\prime} = \{v_1, \cdots, v_n, w_1, \cdots, w_m\}$ which is a **basis** for $V$ (with $k = 0$ if $\text{span}(S) = V$).
- *(Proposition 39)* If $W \subset V$ is a [[Axioms for fields and vector spaces|subspace]] of a finite-dimensional vector space, then there exists a basis $(w_1, \cdots, w_n, v_1, \cdots, v_k)$ for $V$ which begins with the basis for $W$. 
	- *(Corollary 40)* **Dimension is well-defined.** Any two **bases** for a **finite-dimensional** vector space $V$ have the same number of elements.

---
# Dimensions

>[!example] Definition: Dimension
>If $V$ is a finite-dimensional vector space, then its **dimension** $\text{dim}(V) \in \mathbb N$ is the number of elements in a basis for $V$.

By the “dimension is well-defined” corollary, we know the choice of basis doesn’t matter since this number is unambiguous.

- [[(Theorem) A subspace of a finite-dimensional vector space has dimension less than or equal to the latter's]]
- If $(v_1, \cdots, v_n)$ is a basis for $V$, then there is a [[Algebra of functions|bijection]] $A : \mathbb F^n \to V$ defined by $$ A(a_1 \cdots a_n) = a_1v_1 + \cdots + a_nv_n.$$The transformation is injective because $(v_1, \cdots, v_n)$ is linearly independent and surjective because $(v_1, \cdots, v_n)$ spans $V$.
- If two subspaces $U, W \subset V$ intersect **trivially** so that $U \cap W = \{\vec 0\}$, then $$ \text{dim}V = \text{dim}U + \text{dim}W = \text{dim}(U+W) .$$
	- *Proof.* The union of two bases for $U,W$ forms a basis for $V$.

---
# Examples

- The **standard basis** for $\mathbb F^n$ is the set $\{e_1, \cdots, e_n\}$ where the only non-zero coordinate in each $e_i$ is the $i$th coordinate.

---
# Review

## Honors Math A
- Prove Lemma 35.
- Prove Corollary 40.