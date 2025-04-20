---
aliases:
  - factorization
  - greatest common divisor
  - relatively prime
  - splits
tags:
  - permanent-note
  - topic-logic-mathematics
  - MATH-GU4042
status: 🔴 🔨
publish: "true"
date: <% tp.file.creation_date() %>
lastmod: 2025-04-13T09:59:49-04:00
---
# Overview 

- Also important facts when to do with [[Prime and maximal ideals]], leads to [[Extension fields]]

**Relevant theorems:**
- [[(Theorem) Chinese remainder]]
- [[(Theorem) Long division with remainder]]
- [[(Theorem) Unique factorization in polynomial rings]]

**Related notes:** 
- [[Polynomial roots]]
- [[Irreducible polynomials]]
- [[Factorization on integral domains]]
- [[Unique factorization domains]]

---
# General definitions

The following definitions and proofs build up to a proof of [[(Theorem) Unique factorization in polynomial rings]], a.k.a. the **fundamental theorem of arithmetic**.

#### Greatest common divisor of two polynomials

>[!definition] Greatest common divisor
>If $f,g \in F[x]$ are [[Polynomial rings|polynomials]] with coefficients in a [[Algebraic fields|field]] $F$ where $f,g$ are not both $0$, then a **greatest common divisor** of $f, g$ is a polynomial $h \in F[x]$ such that:
>- (i) The polynomial $h$ divides both $f, g$, i.e.,  $h | f$ and $h | g$;
>- If $k \in F[x]$ is any other polynomial that satisfies the same, i.e., $k | f$ and $k | g$, we have $k | h$ as well.


>[!proposition] [[MATH-GU4042|Modern Algebra II]] 2.4 
>Let $f, g \in F[x]$, not both $0$.
>- (i) If $p$ is a greatest common divisor of $f, g$, then so is $cp$ for every $c \in F^*$, the group of nonzero constant polynomials.
>- (ii) If $p, p’$ are two greatest common divisors of $f, g$, then there exists a $c \in F^*$ such that $p = cp’$.
>- (iii) A greatest common divisor $p$ of $f,g$ exists and is of the form $$ p = rf + sg $$ for some $r, s \in F[x]$.

*Proof from [[MATH-GU4042|Modern Algebra II]].*

- (i) Clear from the definition.
- (ii) If $p, p'$ are two greatest common divisors of $f, g$, then by definition we have $p | p’$ and $p’ | p$. Since $F[x]$ is an [[Cancellation laws and integral domains|integral domain]], the elements are [[Factorization on integral domains|associates]], meaning there exists some unit $c \in F^*$ such that $p = cp’$
- (iii) Consider $$ (f, g) = (f) + (g) = \{ rf + sg \ : \ r,s \in F[x] \}. $$ This is the [[Ideals and quotient rings|ideal sum]] of $(f), (g)$, hence an ideal in its own right, and certainly $f, g \in (f, g)$. Then since every ideal in $F[x]$ is [[Ideals and quotient rings|principal]], there exists $p \in F[x]$ such that $(f, g) = (p)$. In particular $p = rf + sg$ for some $r, s \in F[x]$ and $p | f$ and $p | g$. Finally if $q | f$ and $q | g$, then check that $q$ divides every expression of the form $rf + sg$ to conclude that $q | p$, and hence $p$ satisfies the definition of a greatest common divisor. $\ \square$

#### Relatively prime polynomials

>[!definition] Relatively prime
>Two nonzero [[Polynomial rings|polynomials]] $f, g \in F[x]$ are **relatively prime** if $1$ is a greatest common divisor of $f, g$. Equivalently, there exist $r, s \in F[x]$ such that $1 = rf + sg$. 

>[!proposition] [[MATH-GU4042|Modern Algebra II]] 2.7: Relatively prime elements do not divide each other
>If $f, g \in F[x]$ are relatively prime and $f|gh$ for some $h \in F[x]$, then $f|h$.

*Proof from [[MATH-GU4042|Modern Algebra II]].* $\ \text{ }$ Suppose $r, s \in F[x]$ such that $1 = rf + sg$, so $$ h = (rf + sg)h = rfh + sgh. $$
Clearly $f | rfh$ for the left term in the sum. For the right term, we have by hypothesis $f | gh$, hence $f | sgh$. It follows that $f | rfh + sgh = h$. $\ \square$
