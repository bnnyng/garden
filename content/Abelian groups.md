---
aliases:
  - abelian
  - direct sum
  - free abelian group
  - formal linear combination
tags:
  - permanent-note
  - topic-logic-mathematics
  - MATH-GU4051
status: 
publish: "true"
date: 2024-12-08 12:57
lastmod: 2025-04-08T12:39:06-04:00
---
# Overview and basic definition

>[!definition] Abelian group
>A [[Algebraic groups|group]] $G$ is **abelian** if the group operation commutes, meaning $ab = ba$ for all $a, b \in G$.

**Related notes:** 
- [[Group generators, relations, and presentations]]
- [[Commutator subgroups and abelianization]]

---
# Free abelian group


>[!definition] Free abelian group
>The **free abelian group** with basis $X$ is the group of **formal linear combinations** of elements of $X$ with coefficients in $\mathbb Z$: $$ \mathbb ZX = \left \{ \sum_{x \in X} n_x \cdot x \ : \ n_x = 0 \in Z \text{ for all but finitely many } \sigma \right \}. $$

>[!lemma] Homomorphisms and the free abelian group
>Let $X$ be any space and $A$ be an [[Abelian groups|abelian]] group.
>- (i) Two [[Group homomorphisms and isomorphisms|group homomorphisms]] $\varphi, \psi : \mathbb ZX \to A$ out of the free abelian group agree *if and only if* $\varphi(x) = \psi(x)$ for all $x \in X$.
>- (ii) For any function $f : X \to A$, there exists a homomorphism $\varphi : \mathbb Z X \to A$ with $\varphi(x) = f(x)$ for all $x \in X$.
>
>In the language of [[Categories and morphisms|categories]], this is the claim that the function $\mathsf{Ab}(\mathbb ZX, A) \to \mathsf{Sets}(X, A)$ sending $\varphi \to \varphi|_X$ is a *bijection* for any set $X$ and abelian group $A$.

*Proof from [[MATH-GU4053|Algebraic Topology]].*

- (i) Recall that homomorphisms preserve linear combinations, so two homomorphisms agree on $X$ if and only if they agree on the $\mathbb Z$-linear combination of elements of $X$, i.e., $\mathbb Z X$.
- (ii) For a function $f : X \to A$, we can define $\varphi: \mathbb Z X \to A$ by $$ \varphi (c) = \sum_{x \in X} c_x f(x) $$ for $c = \sum c_x x$. The map $\varphi$ is well-defined because the terms $c_x$ are uniquely determined by $c$, and we clearly have $\varphi (x) = f(x)$ for all $x \in X$. Finally, $\varphi$ is a homomorphism by definition of addition in $\mathbb Z X$. $\ \square$
