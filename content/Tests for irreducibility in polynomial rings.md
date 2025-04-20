---
aliases:
  - Eisenstein's criterion
tags:
  - permanent-note
  - topic-logic-mathematics
  - MATH-GU4042
status: 
publish: 
lastmod: 2025-04-16T20:21:29-04:00
date: 2025-04-13T10:21:38-04:00
---
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