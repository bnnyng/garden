---
aliases:
  - ring
  - rings
  - skew field
  - division ring
  - subring
  - ring with unity
  - unit
  - zero ring
  - commutative ring with unity
tags:
  - permanent-note
  - topic-logic-mathematics
  - MATH-GU4042
status: 🟠
publish: "true"
date: <% tp.file.creation_date() %>
lastmod: 2025-05-09T11:16:18-04:00
---
# Overview 

>[!definition] Ring
>A **ring** $(R, +, \cdot)$ is a set with two binary operations such that:
>- (i) $(R, +)$ is an [[Abelian groups|abelian]] group;
>- (ii) $\cdot$ is an associative binary operation;
>- (iii) Left and right distributive laws hold.
>
>In this case, we write $0$ for the additive identity of $R$ and $-r$ for the additive inverse of each $r \in R$. If multiplication $\cdot$ is commutative, then $R$ is called a **commutative ring**. 

>[!definition] Subring
>A **subring** $S \leq R$ is set satisfying the ring axioms via the following properties:
>- (i) **Subgroup under $+$:** $(S, +) \leq (R, +)$;
>- (ii) **Closure under multiplication:** For all $s_1, s_2 \in S$, we have $s_1s_2 \in S$ as well.

**Related notes:** 
- [[Algebraic fields]]
- [[Ring homomorphisms and isomorphisms]]
- [[Rings of functions]]

---
# Familiar operations on general rings

Many familiar operations with numbers carry over to general rings. It follows from the basic ring axioms that for all $r \in R$, we have:
- $r0 = 0r =0$, since $$ r \cdot 0 = r(0 + 0) = r0 + r0 \implies r0 = 0, $$ and similarly for $0r$.
- $(-r)s = -(rs) = r(-s)$, since $$ 0 = 0s = (r + (-r))s = rs + -rs \implies (-r)s = -(rs).$$
- **Exponential relations:** For $n \in \mathbb Z$, we have 
	- $n \cdot r = r + \cdots + r$ if $n > 0$;
	- $0 \cdot r = 0$;
	- $n \cdot r = -((-n)\cdot r)$ for $n < 0$.
- **Laws of exponents:** For $n, m \in \mathbb Z$,
	- $(n + m) \cdot r = (n \cdot r) + (m \cdot r)$;
	- $n \cdot (m \cdot r) = (nm) \cdot r$.
- **General distributive law:** $$ \left ( \sum_{i=1}^n r_i \right ) \left ( \sum_{j=1}^m s_j \right ) = \sum_{1 \leq i \leq n, \ 1 \leq j \leq m } (r_is_j).$$
- **Exponential operation for multiplication:** For $n \in \mathbb N$, we have $r^n = r \cdots r$, the $n$-times product of $r$ with itself. In particular, $$ r^1 = r \quad \quad r ^{n+1} = r \cdot r^n $$
- $$(r + s)^2 = (r + s)(r + s) = r^2 + sr + rs + s^2.$$ If $R$ is commutative, then the following also hold:
	- $(r + s)^2 = r^2 + 2rs + s^2$;
	- **[[Basic combinatorics|Binomial theorem]]:** $$ (r + s)^n = \sum_{i=0}^n \begin{pmatrix}n \\ i \end {pmatrix} \cdot r^{n-i}s^i, $$ where the end terms are defined by $r^ns^0 = r^n$ and $r^0s^n = s^n$.

---
# Inverses and rings with unity

>[!definition] Rings with unity
>We say $R$ is a **ring with unity** if there exists a *unique* multiplicative identity $1 \in R$, called the **unity**, such that for all $r \in R$ we have $1r = r1 = r$.
>
>Further, if $R$ is a ring with unity, we can define $r^0 = 1$. Given $n \in \mathbb Z$, we also have $n \cdot 1 \in R$ such that $$ (n \cdot 1)r = n \cdot(1r) = n \cdot r.$$
>
>If $R$ is a ring with unity, then $R^*$ is the **set of units** of $R$, and $(R^*, \cdot )$ is a group.

>[!definition] Unit, invertible
>Let $R$ be a ring with unity. An element $r \in R$ is a **unit** (or called **invertible**) if it has a multiplicative inverse, meaning there exists a *unique* element $r’ \in \mathbb R$ such that $$ rr' = r'r = 1.$$ 
>
>If $r,s$ are units, then so is $rs$. If $r \in R$ is invertible, we denote its unique inverse by $r^{-1}$, and if $r$ is a unit then so is $r^{-1}$ with $(r^{-1})^{-1} = r$.

>[!lemma] [[MATH-GU4042|Modern Algebra II]] HW 2.1: Inverses are preserved under homomorphisms
>Let $R, S$ be rings with unity and $f : R \to S$ be a [[Ring homomorphisms and isomorphisms|ring homomorphism]]. If $r \in R^*$ is a unit in $R$, then $f(r) \in S^*$ is a unit in $S$ and 
>$$
>f(r)^{-1} = f(r^{-1}).
>$$

- Converse is not true

- Division ring, can add, subtract, multiply, and divide but not by 0

---
# Examples 

- [[Integers modulo n]]
- [[Quaternions]]
- [[Polynomial rings]]
- [[Gaussian integers|Gaussian integer]]
- [[Rings of functions]]

#### The zero ring and abelian groups

The **zero ring** $\{ 0\}$ is defined to be the commutative ring where the additive and multiplicative identity are equal. It has the unique binary operations
$$
0 + 0 = 0 \quad \quad 0 \cdot 0 = 0.
$$
Notice also that $\{ 0 \} \leq R$ is a *subring* for any other ring $R$.

More generally, if $A$ is any [[Abelian groups|abelian]] group, then $A$ is a commutative ring when equipped with multiplication defined by $a \cdot b = 0$ for all $a, b \in A$; however, $A$ is a commutative ring *with unity* iff $A$ is the zero ring.

#### Square matrices of rings

Let $M_n(\mathbb R)$ be the set of $n \times n$ matrices with coefficients in $\mathbb R$. This is a ring by the usual operations of addition and multiplication (multiplication is associative, left and right distributive laws hold); note that $M_n(\mathbb R)$ is not commutative for $n > 1$. We also have
$$
I \in M_n(\mathbb R) \quad \quad (M_n(\mathbb R))^* = GL_n (\mathbb R).
$$
The same holds for matrices in $\mathbb Z, \mathbb Q, \mathbb C$, etc. 

More generally, if $R$ is any ring, then $M_n(R)$ is as well. For example, $M_n(\mathbb Z / k\mathbb Z)$ (note, again, that this does not commute for $n > 1$) is a finite ring with $k^{n^2}$ elements.

#### Cartesian products

#wip