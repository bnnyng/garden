---
aliases:
  - degree
  - polynomial ring
  - polynomial
  - monic
tags:
  - permanent-note
  - topic-logic-mathematics
  - MATH-GU4042
status: 🟠
publish: 
date: <% tp.file.creation_date() %>
lastmod: 2025-03-31T17:08:52-04:00
---
# Overview

**Relevant theorems:**
- [[(Theorem) Long division with remainder]]

**Related notes:** 
- [[Polynomial evaluation]]
- [[Ideals and quotients in polynomial rings]]

---
# Key properties

- [[Ideals and quotients in polynomial rings]]: If $F$ is a field, then every ideal in $F[x]$ is **principal** (i.e., $F[x]$ is a [[Principal ideal domains|principal ideal domain]]).

---
# Basic definition

>[!example] Definition: Polynomial
>If $R$ is a commutative [[Algebraic rings|ring with unity]], then a **polynomial with coefficients in $R$** is an expression of the form 
>$$
>f = \sum _{i=0}^N a_ix^i, \quad \quad a_i \in \mathbb R.
>$$
>Specifically, the polynomial $f$ is identified with an *infinite sequence* $(a_0, a_1, a_2, \ldots)$ of elements in $R$ such that there exists $N \in \mathbb N$ with $a_n = 0$ for all $n > N$. 
>
>The **degree of $f$** is the largest value $d$ (possibly $0$) such that $a_d \neq 0$. We say $f$ is a **constant polynomial** if $f = a_0 \in R$.

>[!example] Definition: Polynomial ring
>Given a commutative [[Algebraic rings|ring with unity]] $R$, we define $R[x]$ to be the ring of all polynomials with coefficients in $R$, with addition and multiplication given by 
>$$ \sum_ia_ix^i + \sum_ib_ix^i = \sum_i(a_i + b_i)x^i, $$
>$$ \left ( \sum_ia_ix^i \right ) \left ( \sum_ib_ix^i \right ) = \sum_ic_ix^i, \quad \quad c_k = \sum_{k = i + j} a_ib_j, $$
>respectively.

💬 ***Remark.*** $\text{ }$ Note that the degree of a **constant polynomial** is 0, but the degree of the **zero polynomial**, or additive identity in $R[x]$, is undefined.

>[!abstract] Proposition: Degrees of polynomial sums and products
>

#wip

>[!abstract] Proposition: Rings are subrings of their polynomials
>Let $R$ be any ring, and let $R[x]$ be the set of polynomials with coefficients in $R$. Then:
>- (i) $R[x]$ is a commutative ring with unity.
>- (ii) $R \leq R[x]$ is a [[Algebraic rings|subring]], where $R$ is viewed as the *ring of constant polynomials*: if $a \in R$ has $a \neq 0$ then $\deg a= 0$ and we have $$ R = \{ f \in R[x] \ : \ \deg f = 0 \text{ or } f = 0 \} \leq R[x]. $$

---
# Polynomial coefficients

>[!example] Definition: Monic polynomial
>If $R$ is a any [[Algebraic rings|ring]], a [[Polynomial rings|polynomial]] $f \in R[x]$ is **monic** if $f \neq 0$ and the leading coefficient is $1$: $$ f = x^d + \sum_{i=0}^{d-1} a_i x_i. $$

----

# Variations

#### Formal power series

>[!example] Definition: Formal power series
>If $R$ be a commutative ring with unity, we define its **formal power [[Series|series]]** by
>$$
>R[[x]] = \left \{ \sum_{i=0}^\infty a_ix^i \ : \ a_i \in R  \right \},
>$$
>which is identical to a usual power series with coefficients in arbitrary rings. Note that formal power series cannot be evaluated without a notion of convergence.

#### Polynomials in several variables

>[!example] Definition: Polynomial in several variables
>If $R$ is a commutative ring with unity, we may define a **polynomial of several variables** by $R[x_1, \ldots, x_n]$. For example, when $n = 2$, an element $f \in R[x_1, x_2]$ has the form
>$$
>f = \sum_{i, j \geq 0}a_{i, j}x_1^i x_2^j = \sum_j \left (\sum_i a_{i, j}x_1^i \right ) x_2^j,
>$$
>where the second equality reduces the polynomial in $x_1$ and $x_2$ to a polynomial in $x_2$ with coefficients that are polynomials in $x_1$:
>$$
>R[x_1, x_2] \cong R[x_1][x_2] \cong R[x_2][x_1].
>$$
>In general, we may reduce 
>$$
>R[x_1, \ldots , x_n ] \cong R[x_1, \ldots , x_{n-1}] [x_n].
>$$

---
# Code snippets

```
\sum_ia_ix^i
```

```
\text{deg}(f)
```