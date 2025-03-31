---
aliases: 
tags:
  - permanent-note
  - topic-logic-mathematics
status: 
publish: 
date: 2024-11-21 19:01
lastmod: 2025-03-04T15:40:48-05:00
---
# In topology

>[!abstract] Theorem: Fundamental theorem of algebra (point-set topology version)
>Every polynomial 
>$$
>p(z) = z^n + a_{n-1}z^{n-1} + \cdots + a_1z + a_0,
>$$
>where $n > 0$ and each $a_i \in \mathbb C$, has at least one **root** in $C$, meaning there exists some $z_0 \in \mathbb C$ such that $p(z_0) = 0$.

*Proof from [[MATH-GU4051|Topology]].*

View the circle as a subset
$$
S^1 = \{ z \in \mathbb C \ | \ |z | = 1\} \subseteq \mathbb C.
$$
Define $f : S^1 \to \mathbb  C \backslash \{ 0\}$ by $f(z) = z^n$. Note that $f$ is not [[Homotopies|nullhomotopic]], since it is equal to the composition $f = g \circ i$ where $g(z) = z^n$ and $i : S^1 \to \mathbb C \backslash \{ 0 \}$; since $g_*, i_


- Homomorphism induced by retraction and inclusions are injective
- Coefficients small (<1), then p has a root in the disc
	- Ensures that high degree terms dominate
- Certainly not true in $\mathbb R$, e.g., for $x^2 + 1$.

---
# In ring theory

>[!abstract] Theorem: Fundamental theorem of algebra (ring theory version)
>The [[Algebraic fields|field]] of [[Complex numbers, conjugates, and absolute value|complex numbers]] $\mathbb C$ is [[Algebraic extension fields and closures|algebraically closed]].

