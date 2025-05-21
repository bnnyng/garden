---
aliases:
  - skew field
  - field
  - division ring
  - subfield
tags:
  - permanent-note
  - topic-logic-mathematics
  - MATH-GU4042
status: 
publish: "true"
date: <% tp.file.creation_date() %>
lastmod: 2025-05-09T13:00:47-04:00
---
# Overview and definition

>[!definition] Division ring
>A ring with unity $R$, where every element has a multiplicative inverse, is a **division ring** or **skew field** if:
>- **$R \neq \{ 0\}$ as a group under addition is nontrivial:** Equivalently, the additive and multiplicative identities $1 \neq 0$ are not equal;
>- **Every nonzero element of $R$ has a multiplicative inverse:** Equivalently, the group of units is $R^* = R \backslash \{ 0\}$.
>
>A [[Algebraic fields|field]] is a *commutative* division ring.

In general, to show that a set $R$ is a field, we show that $(R, +)$ is an [[Abelian groups|abelian]] group and that multiplication is associative, commutative, and distributes over addition.

**Relevant theorems:**

- [[(Theorem) Existence of a primitive root]]
- [[(Theorem) Classification of finite fields]]

**Related notes:**
- [[Finite extension fields]]

---
# Properties

#### Fields and homomorphisms

- [[MATH-GU4042|Modern Algebra II]], HW 3.1: If $\varphi: F \to R$ is a [[Ring homomorphisms and isomorphisms|homomorphism]] from a field $F$ to any ring $R$, then either $\varphi$ is [[Injectivity, surjectivity, and bijectivity|injective]] or $R = 0$. In particular, if $R$ is also a field, then $\varphi$ is injective.
![[Pasted image 20250506110246.png]]

- [[Ideals and quotient rings]]: Fields have no proper nonzero ideals, meaning the only ideals of a field $F$ are $\{ 0 \}$ and the entire field $F$.

#### Finite fields

- [[Polynomial roots]]: F finite means eval hom is never injective, but it is always surjective
- [[(Theorem) Existence of a primitive root]]: If $F$ is a finite field, then the multiplicative group of units $(F^*, \cdot)$ is cyclic.
- [[(Theorem) Classification of finite fields]]: 
- [[Perfect fields]]: Every finite field is **perfect**, since the [[Frobenius homomorphism]] $\alpha \mapsto \alpha^p$ will be surjective on the finite set and hence an isomorphism; this makes every element into a $p$th power.
- [[Splitting fields]]: If $\mathbb F_p$ for prime $p$ and $q = p^n$ for some $n \in \mathbb Z$, then the **splitting field** of the polynomial $x^q - x$ over $\mathbb F_p$ is $\mathbb F_q$.
- [[Separable, normal, and Galois extensions of fields]]: If $p$ is prime and $q = p^n$, then $\mathbb F_q$ is a **separable**

- #wip

![[Pasted image 20250505164503.png]]

#### Polynomials with coefficients in $F$

- [[Ideals and quotients in polynomial rings]]: Every ideal in $F[x]$ is a [[Ideals and quotient rings|principal ideal]].


