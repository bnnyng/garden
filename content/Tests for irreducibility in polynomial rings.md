---
aliases:
  - Eisenstein's criterion
  - rational roots test
tags:
  - permanent-note
  - topic-logic-mathematics
  - MATH-GU4042
status: 
publish: 
lastmod: 2025-05-12T14:25:36-04:00
date: 2025-04-13T10:21:38-04:00
---
# General tests for irreducibility

>[!theorem]
>Let $R$ be a [[Unique factorization domains|unique factorization domain]], $F$ be its [[Field of quotients of an integral domain|field of quotients]], and 
>$$
>f = a_nx^n + a_{n-1}x^{n-1} + \cdots + a_0 \in R[x]
>$$
>be a polynomial of degree $n \geq 1$. Suppose $I \subseteq R$ is an [[Ideals and quotient rings|ideal]] in $R$ for which $a_n \notin I$. If the reduction $\bar f$ is not the product of two polynomials in $(R/I)[x]$ with degrees $d, e$, respectively, satisfying $0 < d,e < n$, then $f$ is irreducible in $F[x]$.

>[!theorem] Eisenstein criterion
>Let $f \in R[x]$ be a polynomial of degree $n \geq 1$, and let $M \subseteq R$ be a [[Prime and maximal ideals|maximal ideal]] in $R$. If the following conditions hold:
>- (i) The leading coefficient $a_n$ is not in $M$;
>- (ii) For $i < n$, we have $a_i \in M$;
>- (iii) We have $a_0 \notin M^2$, meaning there do not exist $b, c \in M$ such that $a_0 = bc$;
>
>Then $f$ is not the product of two polynomials of strictly smaller degree in $R[x]$, and hence $f$ is irreducible as an element of $F[x]$.

> [!Corollary] Irreducibility modulo prime $p$ implies irreducibility in $\mathbb Q[x]$
> Let $f \in \mathbb{Z} [x]$ be a nonconstant polynomial and $p$ be a prime number which does not divide the leading coefficient of $f$. If $f$ is irreducible over the field $\mathbb{F}_{p}$, then $f$ is irreducible over $\mathbb Q$.


- Apply to $R = \mathbb Z$ and $F = \mathbb Q$.

>[!theorem] Rational roots test
>Let $R$ be a [[Unique factorization domains|unique factorization domain]] with a [[Field of quotients of an integral domain|field of quotients]] $F$, and let $f = a_nx^n + \cdots + a_0 \in R[x]$ be a polynomial of degree $n \geq 1$ with a nonzero constant term $a_0$ (i.e., so that $0$ is not a root). Suppose that $p/q \in F$ is a root of $f$ such that $\gcd(p,q) = 1$ (i.e., the fraction $p/q$ is in lowest terms). Then $p$ divides the constant term $a_0$ and $q$ divides the leading coefficient $a_n$. In particular, if $f$ is monic, then a rational root of $f$ must be an element of $R$ dividing $a_0$.

![[Pasted image 20250416015301.png]]

>[!corollary] 
>Let $f \in R[x]$ be a polynomial of degree $n \geq 1$: If there do not exist polynomials $g, h \in R[x]$ of degrees $d, e$, respectively, such that $0 < d, e < n$ and $f = gh$, then $f$ is [[Irreducible polynomials|irreducible]] in $F[x]$.
>
>Equivalently, if $f$ is reducible in $F[x]$, then $f$ factors into polynomials of smaller degree in $R[x]$.

![[Pasted image 20250413102053.png]]

---
# Factoring specific degrees

#### Degree 4

- [[MATH-GU4042|Modern Algebra II]] HW 9.5: A polynomial $f \in F[x]$ of the form $$ f = x^4 + c_1 x^2 + c_2 x $$ can be factored as $$ (x^2 - ax + b)(x^2 + ax + b) \iff c_2 = b^2, \ c_1 = 2b-a^2, $$ and as $$ (x^2 + b_1)(x^2 + b_2) \iff c_2^2 - 4c_2 = a^2 \text{ for some }a \in F.$$
