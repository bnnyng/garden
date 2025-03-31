---
aliases: 
tags:
  - permanent-note
  - topic-logic-mathematics
  - MATH-GU4051
status: 🔨
publish: 
date: 2024-12-04 14:10
lastmod: 2025-02-13T12:24:30-05:00
---
In contrast to [[(Theorem) The fundamental group of the circle is isomorphic to the additive group of integers]], the [[Fundamental groups|fundamental group]] of $S^n$ is trivial for $n \geq 2$. Consequently, $S^n$ is [[Simply connected spaces|simply connected]] whenever $n\geq 2$.

First, we use a special case of [[(Theorem) van Kampen]]:

>[!abstract] Lemma (Munkres 59.1): A based loop in the union of spaces is path-homotopic to a concatenation of based loops from each space
>Suppose $X = \bigcup_{\alpha \in J} A_\alpha$, where each $A_\alpha$ is open and [[(Path-)connectedness|path-connected]], and each intersection $A_\alpha \cap A_\beta$ is also path-connected. If $x_0 \in \bigcup_{\alpha \in J} A_\alpha$ is any point, then any [[Fundamental groups|loop]] $f$ in $X$ at $x_0$ is [[Homotopies|path-homotopic]] to a concatenated product,
>$$
>f \simeq_p f_1 * \cdots * f_k,
>$$
>where each $f_i$ is a loop in $A_{\alpha_i}$ based at $x_0$.

^9db065

*Proof from [[MATH-GU4051|Topology]].*

- Find subdivision with [[(Lemma) Lebesgue numbers exist for compact metric spaces|Lebesgue number lemma]]
- Path-conn to make loops

>[!abstract] Theorem: $S^n$ is [[Simply connected spaces|simply connected]] for $n \geq 2$, meaning the [[Fundamental groups|fundamental group]] group $\pi_1(S^n) = 0$ is trivial.


>[!abstract] Corollary: $\mathbb R^2 \ncong \mathbb R^n$ if $n \neq 2$.

