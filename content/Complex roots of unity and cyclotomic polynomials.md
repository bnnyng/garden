---
aliases:
  - cyclotomic polynomial
  - complex root of unity
tags:
  - permanent-note
  - topic-logic-mathematics
  - MATH-GU4042
status: 
publish: 
lastmod: 2025-05-14T10:55:46-04:00
date: 2025-04-13T09:58:13-04:00
---
# Overview

$\quad$ The **$n$th [[Roots of unity|roots of unity]]** in the field $\mathbb C$ are points on the unit circle 
$$
\zeta_n^k = e^{2\pi i k / n}, \quad \quad k = 0, 1, \ldots, n -1,
$$
and the **primitive $n$th roots of unity** are those that generate the entire group $\mu_n$, i.e., $\gcd(k, n) = 1$. 

$\quad$ The **$n$th cyclotomic polynomial** is defined as the [[Polynomial rings|polynomial]] whose roots are precisely the primitive $n$th roots of unity:
$$
\Phi_n = \prod_{1 \leq k < n, \ \gcd(k, n) = 1} (x - e ^{2\pi i k/n}), \quad \quad \Phi_p = \sum_{i = 0}^{n-1} = x^{n-1} + \cdots + x + 1 \text{ for prime }p.
$$
This is the [[Minimal polynomial of an element in an extension field|minimal polynomial]] of any primitive $n$th root of unity over $\mathbb Q$. 





#wip notes from factorization 3

---
# Summary of properties

- [[Minimal polynomial of an element in an extension field]]: The **minimal polynomial** of *any* primitive $n$th root of unity over $\mathbb Q$ is exactly the cyclotomic polynomial $\Phi_n$, since $\Phi_n$ is [[Irreducible polynomials|irreducible]] over $\mathbb Q$ and vanishes at $\zeta_n = e^{2\pi i /n}$ and its primitive conjugates. 
- [[Splitting fields]]: #wip
![[Pasted image 20250506175529.png]]


---

# Cyclotomic polynomials

>[!definition] $n$th cyclotomic polynomial
>Given some positive integer $n$, the $n$th **cyclotomic polynomial** $\Phi_n \in \mathbb C[x]$ by 
>$$
>\Phi_n = \prod_{\zeta \in \mu_n, \ \zeta \text{ primitive}} (x - \zeta),
>$$
>where $\mu_n$ is the group of complex $n$th [[Roots of unity|roots of unity]], i.e., $\zeta = e^{2 i \pi k/n}$ is a primitive $n$th root of unity. 

We have $\deg \Phi_n = \varphi(n)$, where $\varphi$ is the [[Euler totient function]]. Further, 
$$ 
x^n-1 = \prod_{d|n}\Phi_d, 
$$ which reflects that $\sum_{d|n} \varphi(d) = n$. This means that $\alpha$ is a root of $x^n - 1$ if and only if it is a $d$th primitive root of unity for some $d$ that [[Factorization on integral domains|divides]] $n$.

>[!theorem] Irreducible factors of $x^n - 1$ are $d$th cyclotomic polynomials for $d$ dividing $n$
>The polynomial $\Phi_n$ has integer coefficients, i.e.,
> $\Phi_n \in \mathbb Z [x]$, and $\Phi_n$ is irreducible in $\mathbb Q[x]$. Thus, the irreducible factors of $x^n - 1$ are exactly the polynomials $\Phi_d$ for $d$ dividing $n$.


---
# Cyclotomic polynomials for prime $p$


>[!theorem] $p$th cyclotomic polynomials are irreducible for prime $p$
>Let $p$ be prime. Then the **cyclotomic polynomial**
>$$
>\Phi_p = \frac{x^p-1}{x-1} = x^{p-1} + x^{p-2} + \cdots + x + 1
>$$
>is irreducible in $\mathbb Q[x]$.

>[!corollary]
> If $p$ is prime, then $[\mathbb Q(e^{2\pi i/p}) : \mathbb Q] = p-1$.



