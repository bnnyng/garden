---
aliases: 
tags:
  - permanent-note
  - topic-logic-mathematics
status: 
publish: 
lastmod: 2025-04-08T22:59:51-04:00
date: 2025-04-08T22:57:46-04:00
---
>[!theorem] Rational roots test
>Let $R$ be a [[Unique factorization domains|unique factorization domain]] with a [[Field of quotients of an integral domain|field of quotients]] $F$, and let $f = a_nx^n + \cdots + a_0 \in R[x]$ be a polynomial of degree $n \geq 1$ with a nonzero constant term $a_0$ (i.e., so that $0$ is not a root). Suppose that $p/q \in F$ is a root of $f$ such that $\gcd(p,q) = 1$ (i.e., the fraction $p/q$ is in lowest terms). Then $p$ divides the constant term $a_0$ and $q$ divides the leading coefficient $a_n$. In particular, if $f$ is monic, then a rational root of $f$ must be an element of $R$ dividing $a_0$.

>[!theorem] Factorization in a UFD exists iff factorization exists in its field of quotients.
>Let $f \in R[x]$ be a polynomial of degree $n \geq 1$. Then $f$ is a product of two polynomials in $F[x]$ of degrees $d$ and $e$, respectively, with $0 < d, e < n$ if and only if there exist polynomials $g, h \in R[x]$ of degrees $d, e$, with the same conditions as before, such that $f = gh$.

>[!corollary] 
>Let $f \in R[x]$ be a polynomial of degree $n \geq 1$: If there do not exist polynomials $g, h \in R[x]$ of degrees $d, e$, respectively, such that $0 < d, e < n$ and $f = gh$, then $f$ is [[Irreducible polynomials|irreducible]] in $F[x]$.
>
>Equivalently, if $f$ is reducible in $F[x]$, then $f$ factors into polynomials of smaller degree in $R[x]$.

