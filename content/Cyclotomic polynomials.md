---
aliases:
  - cyclotomic polynomial
tags:
  - permanent-note
  - topic-logic-mathematics
  - MATH-GU4042
status: 
publish: 
lastmod: 2025-04-29T15:39:54-04:00
date: 2025-04-13T09:58:13-04:00
---

#wip notes from factorization 3

>[!definition] $n$th cyclotomic polynomial
>Given some positive integer $n$, the $n$th **cyclotomic polynomial** $\Phi_n \in \mathbb C[x]$ by 
>$$
>\Phi_n = \prod_{\zeta \in \mu_n, \ \zeta \text{ primitive}} (x - \zeta),
>$$
>where $\mu_n$ is the group of complex $n$th [[Roots of unity|roots of unity]], i.e., $\zeta = e^{2 i \pi k/n}$ is a primitive $n$th root of unity. 

---
# Relation to primitive roots of unity

We have $\deg \Phi_n = \varphi(n)$, where $\varphi$ is the [[Euler totient function]]. Further, 
$$ 
x^n-1 = \prod_{d|n}\Phi_d, 
$$ which reflects that $\sum_{d|n} \varphi(d) = n$. This means that $\alpha$ is a root of $x^n - 1$ if and only if it is a $d$th primitive root of unity for some $d$ that [[Factorization on integral domains|divides]] $n$.

>[!theorem] Irreducible factors of $x^n - 1$ are $d$th cyclotomic polynomials for $d$ dividing $n$
>The polynomial $\Phi_n$ has integer coefficients, i.e.,
> $\Phi_n \in \mathbb Z [x]$, and $\Phi_n$ is irreducible in $\mathbb Q[x]$. Thus, the irreducible factors of $x^n - 1$ are exactly the polynomials $\Phi_d$ for $d$ dividing $n$.


---
# Cyclotomic polynomials for prime $p$


>[!theorem] 
>Let $p$ be prime. Then the **cyclotomic polynmomial**
>$$
>\Phi_p = \frac{x^p-1}{x-1} = x^{p-1} + x^{p-2} + \cdots + x + 1
>$$
>is irreducible in $\mathbb Q[x]$.

>[!corollary]
> If $p$ is prime, then $[\mathbb Q(e^{2\pi i/p}) : \mathbb Q] = p-1$.



