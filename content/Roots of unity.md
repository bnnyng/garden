---
aliases:
  - root of unity
  - circle group
  - primitive root of unity
  - roots of unity
tags:
  - permanent-note
  - topic-logic-mathematics
  - MATH-GU4042
  - MATH-GU4041
status: 
publish: 
lastmod: 2025-05-06T17:36:56-04:00
date: <% tp.file.creation_date() %>
---
# Overview

$\quad$The **$n$th roots of unity** are the [[Algebraic fields|field]]-theoretic solutions to the expression $x^n = 1$. A **primitive $n$th root of unity** generates all the other roots, and is denoted $\zeta_n$. Thus a general $n$th root of unity is denoted $\zeta^k_n$, and a root of unity is primitive iff $\gcd(k, n) = 1$. 

$\quad$ When the field is $\mathbb C$, these are points on the unit circle $\zeta = e^{2\pi i k / n}$ for $k = 0, 1, \ldots, n -1$. 

---
# Basic definitions

>[!definition] $n$th root of unity
>An $n$th root of unity in a [[Algebraic fields|field]] $F$ is an element $\zeta \in F$ such that $\zeta^n = 1$, i.e., $\zeta$ is a root of the [[Polynomial rings|polynomial]] $x^n - 1$ in $F$. The set of all such $n$th roots of unity is denoted
>$$
>\mu_n(F) = \{ \zeta \in F \ : \ \zeta^n = 1 \}.
>$$
>A [[Cyclic groups|generator]] for $\mu_n$ is called a **primitive $n$th root of unity**.

>[!lemma] Subgroup of the $n$th roots of unity
>The set of roots of unity
>$$
>\mu_n(F) = \{ \zeta \in F \ : \ \zeta^n = 1 \}
>$$
>is a finite [[Cyclic groups|cyclic]] [[Algebraic groups|subgroup]] of the group of [[Algebraic rings|units]] $F^*$ (under the group operation multiplication) with order dividing $n$.



----
# Properties

- [[Splitting fields]]: If $\zeta$ is any generator of $\mu_n$, the group of $n$th root of unity (e.g., $\zeta = e^{2\pi i/n}$), then $\mu_n = \langle \zeta \rangle$ and 
#wip

![[Pasted image 20250505163417.png]]

- [[Separable, normal, and Galois extensions of fields]]: 
![[Pasted image 20250505164421.png]]

---

# Examples

#### Multiplicative group of complex numbers

The multiplicative group of complex numbers is the cyclic subgroup

$$
\mu_n(\mathbb C) = \mu_n = \langle e^{2 \pi i/n} \rangle.
$$


![[Pasted image 20250413101205.png]]