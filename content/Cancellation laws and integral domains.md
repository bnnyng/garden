---
aliases:
  - cancellation law
  - integral domain
  - nilpotent
  - zero divisor
tags:
  - permanent-note
  - topic-logic-mathematics
status: 🔨
publish: 
date: <% tp.file.creation_date() %>
lastmod: 2025-03-24T13:36:25-04:00
---
# Overview 

***In this note, $R$ is understood to be a commutative ring with unity.***

Rings that are not [[Algebraic fields]] may nonetheless satisfy the **cancellation law**, the property of “canceling” multiplication by a nonzero element on both sides of an equality. A related property is a **divisor of zero**, which can be found using **nilpotent** elements.

**Integral domains** are a special kind of [[Algebraic rings|ring]] that is nonzero, commutative, and for which *the product of any two nonzero elements is nonzero*.

**Related notes:** 
- [[Characteristics of rings]]
- [[Factorization on integral domains]]

---
# Cancellation laws and nilpotent elements


>[!example] Definition: Cancellation law, divisor of zero
>Given a [[Algebraic rings|ring]] $R$, we say the **cancellation law** holds in $R$ if for all $r, s, t \in R$ with $t \neq 0$, we have $$ tr = ts \implies r = s. $$
>Further, we say $r \in R$ is a **divisor of zero** if there exists $s \in R$ with $s \neq 0$ such that $rs = 0$.

***Example.*** The ring of integers $\mathbb Z$ is not a field, but the **cancellation law** holds since we can cancel multiplication by a nonzero integer.

***Example.*** In $\mathbb Z / 6 \mathbb Z$, both $2, 3$ are **divisors of zero** since we have $0 = 2 \cdot 3$.

>[!example] Definition: Nilpotent
>Given a ring $R$, an element $r \in R$ is **nilpotent** if there exists positive $n > 0$ such that $r^n = 0$.

>[!abstract] Proposition: If $R$ is a nonzero ring and $r \in R$ is nilpotent, then it is a divisor of $0$.

*Proof from [[MATH-GU4042|Modern Algebra II]].*

Since $r \in R$ is nilpotent, the set of natural numbers $\{ n \in \mathbb N \ : \ r^n = 0\}$ is nonempty. Let $m$ be the smallest natural number in this set. If $m = 1$, then $r = 0$ and the statement follows trivially. Otherwise, we have $0 < m-1 < m$, so by the hypothesis $r^{m-1} \neq 0$ and the fact that $r \cdot r^{m-1} = 0$, we conclude that $r$ satisfies the definition of a zero divisor. $\ \square$

>[!abstract] Proposition: The cancellation law holds in $R$ iff there are no nonzero divisors of $0$ in $R$.

*Proof from [[MATH-GU4042|Modern Algebra II]].*

- ($\implies$) Suppose the that the cancellation law holds in $R$, and let $rs = 0$. If $r \neq 0$, then applying cancellation to $rs = 0 = r0$ implies $s = 0$. The same argument holds for the case $s \neq 0$, so we conclude that at least one of $r, s$ must be $0$.
- ($\impliedby$) Suppose $R$ has no nonzero divisors and $tr = ts$ with $t \neq 0$. Then $tr-ts=t(r-s) = 0$, so it must be the case that $r -s = 0$ and so $r = s$. $\ \square$


---
# Integral domains

>[!example] Definition: Integral domain
>A nonzero [[Algebraic rings|ring]] $R$ (meaning $R \neq 0$ or, equivalently, $1 \neq 0$ in $R$) is an **integral domain** if any of the following statements hold:
>- **No nonzero divisors:** An element $r \in R$ is a zero divisor *iff* $r = 0$;
>- **Products of nonzero elements are nonzero:** For all $r , s \in R$ with $r, s \neq 0$, the product $rs \neq 0$;
>- **No nonzero divisors of zero:** For all $r, s, \in R$, then $rs = 0$ then at least one of $r, s = 0$.
>
>Note that the final statement is equivalent to the cancellation law holding in $R$.

>[!abstract] Proposition: If $R \leq S$ is a subring and $S$ is an integral domain, then $R$ is an integral domain.

>[!abstract] Proposition: If (a commutative ring with unity) $R$ is a *finite* integral domain, then $R$ is a [[Algebraic fields|field]].

*Proof from [[MATH-GU4042|Modern Algebra II]].*

We need to show that every nonzero element of $R$ has a multiplicative inverse. Suppose $r \in R$ with $r \neq 0$. Since $R$ is finite, the elements $r^0= 1$ (the unity), $r, r^2, r^3, \ldots$ cannot all be different, so there exist $0 \leq n < m$ such that
$$ r^n = r^m = r^{n  + k} = r^n r^k, $$
where we have written $m = n + k$ for $k \geq 1$. Applying cancellation to 
$$ r^n \cdot 1 = r^n = r^n r^k, $$ we obtain $1 = r^k = r \cdot r^{k-1}$, so we can conclude that $r$ is invertible with inverse $r^{-1} = r^{k-1}$. $\ \square$

---
# Examples

#### Every field is an integral domain

A [[Algebraic fields|field]] $F$ is an integral domain since if $r, s \in F$ with $rs = 0$ and $r \neq 0$, then there exists $r^{-1} \in F$ such that $$ s = 1 \cdot s = r^{-1}rs = r^{-1}0 = 0. $$
💬 ***Remark.*** $\ \text{}$ This argument also shows in any nonzero ring $R \neq 0$, a [[Algebraic rings|unit]] is not a zero divisor.

#### Integers modulo prime $n$



#### Polynomial rings with coefficients in an integral domain are integral domains

This is a corollary of the following fact:

>[!abstract] Lemma: 
>Suppose $f, g \in R[x]$ are nonzero [[Polynomial rings|polynomials]] given by
>$$ f = \sum_i^na_ix^i \quad \quad g = \sum_j^ma_jx^j. $$
>Then $fg \neq 0$ and the degree $\text{deg}(fg) = \text{deg}f + \text{deg}(g)$, and further that $\text{deg}(f) = n$ and $\text{deg}(g) = m$.

- Also: if $R$ is an integral domain, then so is $(R[x])^* = R^*$.