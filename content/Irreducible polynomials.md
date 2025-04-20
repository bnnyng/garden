---
aliases:
  - irreducible
tags:
  - permanent-note
  - topic-logic-mathematics
  - MATH-GU4042
status: 
publish: "true"
lastmod: 2025-04-13T10:23:34-04:00
date: 2025-04-07T21:39:53-04:00
---
# Overview

**Relevant theorems:**
- [[(Theorem) Unique factorization in polynomial rings]]
- [[(Theorem) Chinese remainder]]
- [[(Theorem) A factorization in a UFD exists iff a factorization exists in its field of quotients]]

**Related notes:**
- [[Factorization on polynomial rings]]
- [[Factorization on integral domains]]
- [[Extension fields]]
- [[Tests for irreducibility in polynomial rings]]

---

# Basic definition and properties

> [!definition] Irreducible polynomial
>A [[Polynomial rings|polynomial]] $p \in F[x]$ is **irreducible** if it satisfies the following equivalent statements:
>- (i) The polynomial $p$ is neither $0$ nor a unit (i.e., $p$ is a *non-constant* polynomial), and whenever $p = fg$ for some $f, g \in F[x]$, then either $f = c \in F^*$ (hence $g = c^{-1}p$) or $g = c \in F^*$ (hence $f = c^{-1}p$). 
>- (ii) The polynomial $p$ is not a product of two polynomials $fg$ such that both $\deg f < \deg p$ and $\deg g < \deg p$ hold.
>
>Hence an irreducible polynomial is a *nonconstant* polynomial that does not factor into a product of polynomials with strictly smaller degrees.

>[!proposition] [[MATH-GU4042|Modern Algebra II]] 2.10: Relation between irreducibility and relatively prime polynomials
>Let $p \in F[x]$ be irreducible.
>- (i) For any polynomial $f \in F[x]$, either $p | f$ or $p, f$ are relatively prime.
>- (ii) For all $f, g \in F[x]$, if $p | fg$ then either $p |f$ or $p |g$. In particular, if $f_1, \ldots , f_n \in F[x]$ and $p | f_1 \cdots f_n$, then there exists $1 \leq i \leq n$ such that $p | f_i$.

*Proof from [[MATH-GU4042|Modern Algebra II]].*

- (i) Suppose $d = \gcd (p, f)$. Then $d | p$, so by definition of an irreducible polynomial, we have either $d \in F^*$ as a unit or $d = c^{-1}p$, a multiple of $p$ by some unit $c \in F^*$. In the first case, we can take $d = 1$ and conclude that $p, f$ are relatively prime. In the second case, we can take $d = p$ and conclude that $p | f$. 
- (ii) Suppose $p | fg$ and $p$ does not divide $f$. Then by (i), $p$ and $f$ are relatively prime, it follows from the earlier proposition that $p |g$ as claimed. $\ \square$

---

# The quotient by an (irreducible) polynomial

Given a field $F$ and a polynomial $f = c_dx^d + \cdots + c_0 \in F[x]$ that has $\deg > 0$ (hence $c_d \neq 0$), the quotient ring $F[x]/(f)$ is quite similar to the ring of [[Integers modulo n]].

|                                                            | $F[x]/(f)$                                                                                                                                                     | $\mathbb Z / n \mathbb Z$                                                                                                                                                                               |
| ---------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Elements                                                   | Cosets $g + (f)$                                                                                                                                               | Cosets $a + n \mathbb Z$                                                                                                                                                                                |
| Description of elements                                    | Uniquely described by $a_0 + a_1 \alpha + \cdots + a_{d-1} \alpha^{d-1}$, where $a_i \in F$ and $\alpha = x + (f)$                                             | Written as $0, 1, \ldots, n-1$                                                                                                                                                                          |
| Computations                                               | Addition is computed by adding coefficients, and multiplication by the rule $a^d = -c_d^{-1}(c_{d-1}\alpha^{d-1} + \cdots + c_0)$                              | Both addition and multiplication are computed by setting multiples of $n$ to be $0$                                                                                                                     |
| When the quotient is a field                               | When $f$ is irreducible in $F[x]$                                                                                                                              | When $n$ is prime                                                                                                                                                                                       |
| [[(Theorem) Chinese remainder\|Chinese remainder theorem]] | If $f, g \in F[x]$ are relatively prime, then the quotient by the product $F[x]/(fg)$ is isomorphic to the product of quotients $(F[x]/(f)) \times (F[x]/(g))$ | If $n, m \in \mathbb Z$ are relatively prime, then the modulo of the product $\mathbb Z / nm \mathbb Z$ is isomorphic to the product of modulos $\mathbb Z / n\mathbb Z \times \mathbb Z / m \mathbb Z$ |

---

# Examples

#### Irreducibility depends on the underlying field

- A **linear** (degree 1) polynomial is always irreducible.
- A **quadratic** (degree 2) or **cubic** (degree 3) polynomial is **reducible** *if and only if* it has a **linear factor** in $F[x]$, i.e., it has a root in $F$. For example, $x^2 - 2$ and $x^3 - 2$ are both irreducible in $\mathbb Q [x]$, but not in $\mathbb R [x]$; $x^2 + 1$ is irreducible in $\mathbb R[x]$ but not in $\mathbb C [x]$. 
- The polynomial $f = x^2 + x + 1$ is **irreducible** in $\mathbb F_2$, the field of [[Integers modulo n|integers modulo]] $2$, since $f(0) = f(1) = 1$ and $f$ does not have a root in $\mathbb F_2$.
- The polynomial $x^4 - 4$ is **reducible** in $\mathbb Q[x]$ even though it does not have a root in $\mathbb Q$: we have a non-trivial factorization $$ x^4 - 4 = (x^2 + 2)(x^2 - 2), $$ but the roots $\pm \sqrt 2$, $\pm i \sqrt 2$ are certainly not in $\mathbb Q$.

#### Irreducibility for polynomials of degree $2$ in $\mathbb Q$

- **Checking the discriminant:** A quadratic polynomial of the form $f = ax^2 + bx + c$ is reducible in $\mathbb Q$ (or in $\mathbb{Z}$) if and only if its **discriminant** $b^2-4ac$ is a perfect square in $\mathbb{Q}$ (or in $\mathbb{Z}$).

#### Factoring polynomials of degree $4$ in $\mathbb Q$

- **Linear factors:** Linear factors, corresponding to roots of the polynomial, can be checked using the **rational root test**: if $f(a/b) = 0$ for some $a/b \in \mathbb Q$, the $(bx-a)$ is a factor.
- 

---

# Notes

- Einstein’s criterion?
