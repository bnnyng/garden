---
aliases:
  - factorization
  - greatest common divisor
  - irreducible
  - relatively prime
  - root
  - splits
tags:
  - permanent-note
  - topic-logic-mathematics
  - MATH-GU4042
status: 🔴 🔨
publish: 
date: <% tp.file.creation_date() %>
lastmod: 2025-03-30T16:18:54-04:00
---
# Overview 

- Also important facts when to do with [[Prime and maximal ideals]], leads to [[Extension fields]]

**Relevant theorems:**
- [[(Theorem) Chinese remainder]]
- [[(Theorem) Long division with remainder]]
- [[(Theorem) Unique factorization in polynomial rings]]

**Related notes:** 
- [[Polynomial roots]]
- [[Factorization on integral domains]]
- [[Unique factorization domains]]

---
# General definitions

The following definitions and proofs build up to a proof of [[(Theorem) Unique factorization in polynomial rings]], a.k.a. the **fundamental theorem of arithmetic**.

#### Greatest common divisor of two polynomials

>[!example] Definition: Greatest common divisor
>If $f,g \in F[x]$ are [[Polynomial rings|polynomials]] with coefficients in a [[Algebraic fields|field]] $F$ where $f,g$ are not both $0$, then a **greatest common divisor** of $f, g$ is a polynomial $h \in F[x]$ such that:
>- (i) The polynomial $h$ divides both $f, g$, i.e.,  $h | f$ and $h | g$;
>- If $k \in F[x]$ is any other polynomial that satisfies the same, i.e., $k | f$ and $k | g$, we have $k | h$ as well.

- What to call this?

>[!abstract] Proposition ([[MATH-GU4042|Modern Algebra II]] 2.4): 
>Let $f, g \in F[x]$, not both $0$.
>- (i) If $p$ is a greatest common divisor of $f, g$, then so is $cp$ for every $c \in F^*$, the group of nonzero constant polynomials.
>- (ii) If $p, p’$ are two greatest common divisors of $f, g$, then there exists a $c \in F^*$ such that $p = cp’$.
>- (iii) A greatest common divisor $p$ of $f,g$ exists and is of the form $$ p = rf + sg $$ for some $r, s \in F[x]$.

*Proof from [[MATH-GU4042|Modern Algebra II]].*

- (i) Clear from the definition.
- (ii) If $p, p'$ are two greatest common divisors of $f, g$, then by definition we have $p | p’$ and $p’ | p$. Since $F[x]$ is an [[Cancellation laws and integral domains|integral domain]], the elements are [[Factorization on integral domains|associates]], meaning there exists some unit $c \in F^*$ such that $p = cp’$
- (iii) Consider $$ (f, g) = (f) + (g) = \{ rf + sg \ : \ r,s \in F[x] \}. $$ This is the [[Ideals and quotient rings|ideal sum]] of $(f), (g)$, hence an ideal in its own right, and certainly $f, g \in (f, g)$. Then since every ideal in $F[x]$ is [[Ideals and quotient rings|principal]], there exists $p \in F[x]$ such that $(f, g) = (p)$. In particular $p = rf + sg$ for some $r, s \in F[x]$ and $p | f$ and $p | g$. Finally if $q | f$ and $q | g$, then check that $q$ divides every expression of the form $rf + sg$ to conclude that $q | p$, and hence $p$ satisfies the definition of a greatest common divisor. $\ \square$

#### Relatively prime polynomials

>[!example] Definition: Relatively prime
>Two nonzero [[Polynomial rings|polynomials]] $f, g \in F[x]$ are **relatively prime** if $1$ is a greatest common divisor of $f, g$. Equivalently, there exist $r, s \in F[x]$ such that $1 = rf + sg$. 

>[!abstract] Proposition ([[MATH-GU4042|Modern Algebra II]] 2.7): Relatively prime elements do not divide each other
>If $f, g \in F[x]$ are relatively prime and $f|gh$ for some $h \in F[x]$, then $f|h$.

*Proof from [[MATH-GU4042|Modern Algebra II]].*

Suppose $r, s \in F[x]$ such that $1 = rf + sg$, so $$ h = (rf + sg)h = rfh + sgh. $$
Clearly $f | rfh$ for the left term in the sum. For the right term, we have by hypothesis $f | gh$, hence $f | sgh$. It follows that $f | rfh + sgh = h$. $\ \square$

#### Irreducible polynomials

>[!example] Definition: Irreducible polynomial
>A [[Polynomial rings|polynomial]] $p \in F[x]$ is **irreducible** if it satisfies the following equivalent statements:
>- (i) The polynomial $p$ is neither $0$ nor a unit (i.e., $p$ is a *non-constant* polynomial), and whenever $p = fg$ for some $f, g \in F[x]$, then either $f = c \in F^*$ (hence $g = c^{-1}p$) or $g = c \in F^*$ (hence $f = c^{-1}p$). 
>- (ii) The polynomial $p$ is not a product of two polynomials $fg$ such that both $\deg f < \deg p$ and $\deg g < \deg p$ hold.
>
>Hence an irreducible polynomial is a *nonconstant* polynomial that does not factor into a product of polynomials with strictly smaller degrees.

>[!abstract] Proposition ([[MATH-GU4042|Modern Algebra II]] 2.10): Relation between irreducibility and relatively prime polynomials
>Let $p \in F[x]$ be irreducible.
>- (i) For any polynomial $f \in F[x]$, either $p | f$ or $p, f$ are relatively prime.
>- (ii) For all $f, g \in F[x]$, if $p | fg$ then either $p |f$ or $p |g$. In particular, if $f_1, \ldots , f_n \in F[x]$ and $p | f_1 \cdots f_n$, then there exists $1 \leq i \leq n$ such that $p | f_i$.

*Proof from [[MATH-GU4042|Modern Algebra II]].*

- (i) Suppose $d = \gcd (p, f)$. Then $d | p$, so by definition of an irreducible polynomial, we have either $d \in F^*$ as a unit or $d = c^{-1}p$, a multiple of $p$ by some unit $c \in F^*$. In the first case, we can take $d = 1$ and conclude that $p, f$ are relatively prime. In the second case, we can take $d = p$ and conclude that $p | f$. 
- (ii) Suppose $p | fg$ and $p$ does not divide $f$. Then by (i), $p$ and $f$ are relatively prime, it follows from the earlier proposition that $p |g$ as claimed. $\ \square$

---
# Examples

#### Irreducibility depends on the underlying field

- A **linear** (degree 1) polynomial is always irreducible.
- A **quadratic** (degree 2) or **cubic** (degree 3) polynomial is **reducible** *if and only if* it has a **linear factor** in $F[x]$, i.e., it has a root in $F$. For example, $x^2 - 2$ and $x^3 - 2$ are both irreducible in $\mathbb Q [x]$, but not in $\mathbb R [x]$; $x^2 + 1$ is irreducible in $\mathbb R[x]$ but not in $\mathbb C [x]$. 
- The polynomial $f = x^2 + x + 1$ is **irreducible** in $\mathbb F_2$, the field of [[Integers modulo n|integers modulo]] $2$, since $f(0) = f(1) = 1$ and $f$ does not have a root in $\mathbb F_2$.
- The polynomial $x^4 - 4$ is **reducible** in $\mathbb Q[x]$ even though it does not have a root in $\mathbb Q$: we have a non-trivial factorization $$ x^4 - 4 = (x^2 + 2)(x^2 - 2), $$ but the roots $\pm \sqrt 2$, $\pm i \sqrt 2$ are certainly not in $\mathbb Q$.


#### Analogy between $F[x]/f(x)$ and $\mathbb Z / n \mathbb Z$

Given a field $F$ and a polynomial $f = c_dx^d + \cdots + c_0 \in F[x]$ that has $\deg > 0$ (hence $c_d \neq 0$), the quotient ring $F[x]/(f)$ is quite similar to the ring of [[Integers modulo n]].

|                                                            | $F[x]/(f)$                                                                                                                                                     | $\mathbb Z / n \mathbb Z$                                                                                                                                                                               |
| ---------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Elements                                                   | Cosets $g + (f)$                                                                                                                                               | Cosets $a + n \mathbb Z$                                                                                                                                                                                |
| Description of elements                                    | Uniquely described by $a_0 + a_1 \alpha + \cdots + a_{d-1} \alpha^{d-1}$, where $a_i \in F$ and $\alpha = x + (f)$                                             | Written as $0, 1, \ldots, n-1$                                                                                                                                                                          |
| Computations                                               | Addition is computed by adding coefficients, and multiplication by the rule $a^d = -c_d^{-1}(c_{d-1}\alpha^{d-1} + \cdots + c_0)$                              | Both addition and multiplication are computed by setting multiples of $n$ to be $0$                                                                                                                     |
| When the quotient is a field                               | When $f$ is irreducible in $F[x]$                                                                                                                              | When $n$ is prime                                                                                                                                                                                       |
| [[(Theorem) Chinese remainder\|Chinese remainder theorem]] | If $f, g \in F[x]$ are relatively prime, then the quotient by the product $F[x]/(fg)$ is isomorphic to the product of quotients $(F[x]/(f)) \times (F[x]/(g))$ | If $n, m \in \mathbb Z$ are relatively prime, then the modulo of the product $\mathbb Z / nm \mathbb Z$ is isomorphic to the product of modulos $\mathbb Z / n\mathbb Z \times \mathbb Z / m \mathbb Z$ |
