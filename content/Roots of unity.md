---
aliases:
  - root of unity
tags:
  - permanent-note
  - topic-logic-mathematics
  - MATH-GU4042
status: 
publish: 
lastmod: 2025-04-13T10:11:51-04:00
date: 2025-04-13T10:09:03-04:00
---
# Overview 

---

# Basic definition and properties

>[!definition] $n$th root of unity
>An $n$th root of unity in a [[Algebraic fields|field]] $F$ is an element $\zeta \in F$ such that $\zeta^n = 1$, i.e., $\zeta$ is a root of the [[Polynomial rings|polynomial]] $x^n - 1$ in $F$. The set of all such $n$th roots of unity is denoted
>$$
>\mu_n(F) = \{ \zeta \in F \ : \ \zeta^n = 1 \}.
>$$

>[!lemma] Subgroup of the $n$th roots of unity
>The set of roots of unity
>$$
>\mu_n(F) = \{ \zeta \in F \ : \ \zeta^n = 1 \}
>$$
>is a finite [[Cyclic groups|cyclic]] [[Algebraic groups|subgroup]] of the group of units $F^*$ (under the group operation multiplication) with order dividing $n$.

---

# Examples

#### Multiplicative group of complex numbers

The $n$th roots of unity for the [[Multiplicative group of complex numbers]] is the cyclic subgroup

$$
\mu_n(\mathbb C) = \mu_n = \langle e^{2 \pi i/n} \rangle.
$$


![[Pasted image 20250413101205.png]]