---
aliases:
  - automorphism
  - fixed field
tags:
  - permanent-note
  - topic-logic-mathematics
  - MATH-GU4042
status: 
publish: 
lastmod: 2025-05-06T10:12:39-04:00
date: 2025-04-16T20:15:05-04:00
---

# Overview

**Relevant theorems:**
- [[(Theorem) Fundamental theorem of Galois theory]]


**Related notes:**
- [[Automorphisms and polynomial roots]]
- [[Galois groups of polynomials]]

---
# Properties

- Size of Gal is less than n! [[Automorphisms and polynomial roots]]

---

# Preliminaries: Automorphisms and fixed fields

>[!definition] Field automorphism
>If $E$ is a [[Algebraic fields|field]], an **automorphism** of $E$ is a [[Ring homomorphisms and isomorphisms|(ring) isomorphism]] from $E$ to itself. 

- **A homomorphism $E \to E$ is an automorphism iff it is surjective:** From [[MATH-GU4042|Modern Algebra II]], HW 3.1, we know that a homomorphism between fields is always **injective**. For a self-contained argument, note that for a homomorphism $\sigma : E \to E$ gives rise to an [[Ideals and quotient rings|ideal]] $\ker \sigma \subseteq E$ ([[(Theorem) First isomorphism theorem|Fundamental theorem for ring homomorphisms]]), and fields have no proper nonzero ideals. By convention $\sigma(1) = 1 \neq 0$, so $\ker \sigma \neq E$ and we conclude the $\ker\sigma = \{ 0 \}$. Thus the only additional condition needed for $\sigma$ to be an automorphism is **surjectivity**.
- **Automorphisms are a subgroup of the permutation group:** Writing $S_E$ for the group of [[Permutation groups|permutations]] of the set $E$, we have $\text{Aut} \ E \subseteq S_E$ as a subset. Since $\text{Aut} \ E$ is closed under composition and inverses, and $\text{id}_E \in \text{Aut} \ E$, we confirm that this is a [[Algebraic groups|subgroup]].

>[!definition] Fixed field of an automorphism
>Given $\sigma \in \text{Aut}\ E$, we define the **fixed field** of $\sigma$ by 
>$$
>E^\sigma = \{ \alpha \in E \ : \ \sigma(\alpha) = \alpha \} \leq E.
>$$
>Note that $E^\sigma$ contains the [[Prime (sub)fields|prime subfield]] of $E$. More generally, we define the **fixed field of a subset** $X \subseteq \text{Aut}\ E$ by 
>$$
>E^X = \{ \alpha \in E \ : \sigma(\alpha) = \alpha \text{ for all } \alpha \in X\}.
>$$

#concept-question Why ids hte prime subfield a subfield of htis?

- Example: E/E = id

![[Pasted image 20250416202032.png]]

From HW


---

# The Galois group of a finite extension

>[!definition] Galois group
>Let $E$ be a [[Finite extension fields|finite extension]] of a [[Algebraic fields|field]] $F$. The **Galois group** $\text{Gal} (E / F)$ is the subset of $\text{Aut} \ E$ consisting of all automorphisms $\sigma : E \to E$ that fix $F$, i.e., 
>$$
>\text{Gal} (E / F) = \{ \sigma : E \to E \ : \ \sigma (a ) = a \text{ for all } a \in F \} \leq \text{Aut} \ E.
>$$
>This condition is also denoted $\sigma|_F = \text{id}_F$.

>[!exm]
>- For any field $E$, we have $\text{Gal}(E/E) = \{ \text{id}_E\}$.
>- Let $F$ be any field with [[Characteristics of rings|characteristic]] not equal to $2$ and $t \in F$ be square-free (in $F$), i.e., that the polynomial $x^2 - t$ has no [[Polynomial roots|root]] in $F$ and is therefore [[Irreducible polynomials|irreducible]] in $F[x]$. If $E = F(\sqrt t)$ is the degree two [[Finite extension fields|extension]] of $F$ obtained by adding a root of $x^2 - t$, then $$ \text{Gal}( E/F) = \{ 1, \sigma \}, \quad \quad \sigma(a + b \sqrt t) = a - b \sqrt t. $$ [[Complex conjugation and absolute value|Complex conjugation]] is one case of such a $\sigma$.


---

# Examples

- Galois of extesnion s\sqrt[3]2 of Q is Id

---

# Code snippets

```
\text{Aut} \ E
```

```
\text{Gal} (E / F)
```