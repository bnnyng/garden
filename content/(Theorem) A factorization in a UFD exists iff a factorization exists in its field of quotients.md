---
aliases:
  - primitive polynomial
tags:
  - permanent-note
  - topic-logic-mathematics
status: 
publish: 
lastmod: 2025-04-16T01:53:11-04:00
date: 2025-04-08T22:57:46-04:00
---
# Overview

In this note, we let $R$ be a [[Unique factorization domains|unique factorization domain]] and $F = (R \times (R \backslash \{ 0 \})) / \sim$ be its [[Field of quotients of an integral domain|field of quotients]], where we identify 

$$
(r, s) \sim (t, w) \iff rw = st.
$$

>[!theorem] Factorization in a UFD exists iff factorization exists in its field of quotients.
>Let $f \in R[x]$ be a polynomial of degree $n \geq 1$. Then $f$ is a product of two polynomials in $F[x]$ of degrees $d$ and $e$, respectively, with $0 < d, e < n$ if and only if there exist polynomials $g, h \in R[x]$ of degrees $d, e$, with the same conditions as before, such that $f = gh$.

- Backwards deriction is trivial
- In this we let 
- deduce [[Tests for irreducibility in polynomial rings]]

A similar idea can be used to prove [[(Theorem) A polynomial ring with coefficients in a UFD is a UFD]].

---

# Preliminaries: Primitive polynomials

>[!definition] Content of a polynomial, primitive polynomial
>Let $R$ be a [[Unique factorization domains|unique factorization domain]] and suppose $f = \sum_{i=0}^n a_i x^i \in R[x]$ is a nonzero [[Polynomial rings|polynomial]]. The **content** of $f$ is the [[Factorization on integral domains|greatest common divisor]] of the coefficients of $f$, which is well-defined up to a unit: 
>$$
>c(f) = \gcd(a_n, \ldots, a_0).
>$$
>We say $f$ is **primitive** if the coefficients of $f$ are [[Factorization on integral domains|relatively prime]], meaning $c(f)$ is a unit.

>[!remark] 
>- If $\deg f = 0$, then $f$ is primitive iff $f$ is a unit.
>- A monic polynomial is always primitive, since the $\gcd$ must divide the leading coefficient $a_n = 1$.
>- [[Factorization on integral domains#^ce7379]] implies that every nonzero $f \in R[x]$ is of the form $c(f)f_0$, where $f_0 \in R[x]$ is primitive. Then if $s \in R$ with $s \neq 0$ and $f \in R[x]$ with $f \neq 0$, then the lemma also implies
>$$
>c(sf) = sc(f).
>$$

>[!lemma] A primitive polynomial with a primitive factor corresponds to multiplication by a unit
>Suppose $f, g \in R[x]$ are both primitive polynomials. If there exists $\alpha \in F$ such that $f = \alpha g$, then $\alpha \in R^*$ is a unit in $R$.

^8c8ab3

*Proof from [[MATH-GU4042|Modern Algebra II]].* $\quad$ Write $\alpha = r/s$ with $r, s \in R$, so we have $sf = rg$. Since $f, g$ are primitive with $c(f), c(g)$ are units, we know
$$
c(sf) = sc(f) = f \quad \quad c(rg) = rc(g) = r
$$
*up to multiplying by a unit* in $R$. Then the fact that $sf = rg$ and content is well-defined up to multiplying by a unit implies that $r = us$ where $u \in R^*$ is a unit, so we conclude that $\alpha = r/s = u$ is a unit in $R$. $\quad \square$

>[!lemma] Existence of a primitive multiple
>Let $f \in F[x]$ with $f \neq 0$. Then there exists $\alpha \in F^*$ such that $\alpha f \in R[x]$ is a primitive polynomial.

^4086ec

*Proof from [[MATH-GU4042|Modern Algebra II]].* $\quad$ Write $f = \sum_{i=0}^n (r_i/ s_i) x^i$, where $s_i \neq 0$ for all $i$. Then if $s = s_0 \cdots s_n$, we have $sf \in R[x]$, so as a consequence of [[Factorization on integral domains#^ce7379]] (i) we can write this polynomial in the form
$$
sf = c(sf)f_0
$$

where $c(sf) \neq 0$ and $f_0 \in R[x]$ is a primitive polynomial. Then setting $\alpha = s / c(sf)$, we see that 

$$
\alpha f = (s/c(sf))(s^{-1})(c(sf)f_0) = f_0
$$

is a primitive polynomial, as desired. $\quad \square$

>[!corollary] The content of a product is the product of contents
>Let $f, g \in R[x]$ be nonzero polynomials. Then 
>$$
>c(fg) = c(f) c(g).
>$$

- Exercise

> [!lemma] Gauss’s lemma
> If $f, g \in R[x]$ are primitive polynomials, then $fg$ is also primitive.

^2cd764

*Proof from [[MATH-GU4042|Modern Algebra II]].* $\quad$ We prove the contrapositive claim: if $fg$ is not primitive, then one of $f, g$ is not primitive.

Suppose $fg$ is not primitive, so $c(fg)$ is neither $0$ nor a unit. Since $R$ is a UFD, there is a nontrivial factorization of $c(fg)$ into irreducibles, meaning there exists an irreducible $r \in R$ that divides $c(fg)$ and hence divides all the coefficients of $fg$. 

Consider the canonical [[Ring homomorphisms and isomorphisms|homomorphism]] $R[x] \to (R/(r))[x]$, and denote the reduction of a polynomial $h \in R[x]$ mod $(r)$ by $\bar h$. In this case, we have

$$
\overline {(fg)} = 0 = \bar f \bar g.
$$

Since $(r)$ is a prime ideal, we know that $(R/(r))[x]$ is an integral domain by [[Prime and maximal ideals#^37a018]], so its subring $R/(r)$ is also an integral domain. Thus one of $\bar f, \bar g$ is zero; suppose $\bar f = 0$. Then $r$ divides every coefficient of $f$, so $f$ is not primitive. $\quad \square$

---

# Proof of the theorem

>[!theorem] A primitive polynomial divides a polynomial over a UFD iff it divides over the field of quotients
>Let $R$ be a [[Unique factorization domains|unique factorization domain]] with [[Field of quotients of an integral domain|field of quotients]] $F$, and suppose $g \in R[x]$ is primitive. Then for any other polynomial $f \in R[x]$, the primitive $g$ divides $f$ in $F[x]$ if and only if $g$ divides $f$ in $R[x]$.

*Proof from [[MATH-GU4042|Modern Algebra II]].* $\quad$ It is clearly true that if $g$ divides $f$ in $R[x]$, then $g$ divides $f$ in $F[x]$. Conversely, suppose $g$ divides $f = c(f)f_0$ in $F[x]$, where $f_0 \in F[x]$ is primitive. Since $c(f) \neq 0$ and hence is a unit, we know that $g$ divides $f_0$ as well, and we may write $f_0 = gh$ for some $h \in F[x]$. By a lemma above, there exists $\alpha \in F^*$ such that $h_0 = \alpha h$ is a primitive polynomial in $R[x]$. Then
$$ 
\alpha f_0 = \alpha gh = gh_0
$$

is a product of primitives in $R[x]$, and therefore itself a primitive in $R[x]$ by Gauss’s lemma. Finally, since $gh_0$ has a primitive factor $f_0$, a lemma above implies that $\alpha \in R$ and $\alpha$ is a unit. Then $f_0 = g \cdot (\alpha^{-1}h_0)$, which shows that $g$ divides $f_0$ in $R[x]$, and we conclude that $g$ divides $f$ in $R[x]$ as well. $\quad \square$



*Completion of proof of main theorem from [[MATH-GU4042|Modern Algebra II]].* $\quad$ We want to show the forward implication: if $f \in R[x]$, with $\deg f = n$, is a product of polynomials $f = gh$ with $g, h \in F[x]$ and $\deg  g = d < n$, $\deg h = e < n$, then $f$ is also the product of two polynomials in $R[x]$ with the same conditions on degrees.

Given the assumptions, we have $f = 0$, so there exists $\alpha \in F^*$ such that $ag = g_0 \in R[x]$, where $g_0$ is primitive. Then $g_0$ divides $f$ in $F[x]$, so by the previous result $g_0$ divides $f$ in $R[x]$ as well. This means there exists $h_1 \in R[x]$ such that $f=g_0h_1$, and $\deg g_0 = \deg g = d < n$ implies $\deg h_1 = \deg h = e < n$ as claimed. $\quad \square$




---

# Applications

- Apply to $R = \mathbb Z$ and $F = \mathbb Q$.

>[!theorem] Rational roots test
>Let $R$ be a [[Unique factorization domains|unique factorization domain]] with a [[Field of quotients of an integral domain|field of quotients]] $F$, and let $f = a_nx^n + \cdots + a_0 \in R[x]$ be a polynomial of degree $n \geq 1$ with a nonzero constant term $a_0$ (i.e., so that $0$ is not a root). Suppose that $p/q \in F$ is a root of $f$ such that $\gcd(p,q) = 1$ (i.e., the fraction $p/q$ is in lowest terms). Then $p$ divides the constant term $a_0$ and $q$ divides the leading coefficient $a_n$. In particular, if $f$ is monic, then a rational root of $f$ must be an element of $R$ dividing $a_0$.

![[Pasted image 20250416015301.png]]

>[!corollary] 
>Let $f \in R[x]$ be a polynomial of degree $n \geq 1$: If there do not exist polynomials $g, h \in R[x]$ of degrees $d, e$, respectively, such that $0 < d, e < n$ and $f = gh$, then $f$ is [[Irreducible polynomials|irreducible]] in $F[x]$.
>
>Equivalently, if $f$ is reducible in $F[x]$, then $f$ factors into polynomials of smaller degree in $R[x]$.

![[Pasted image 20250413102053.png]]