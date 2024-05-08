---
aliases:
  - measurable function
  - measurable
tags:
  - permanent-note
  - topic-logic-mathematics
  - MATH-42X
status: 🟥
publish: 
date: 2024-04-22 11:00
lastmod: 2024-04-24T16:11:59-07:00
---
Related: [[Convergence and limits of measurable functions]]

>[!example] Definition: Measurable function
>Let $E \subset \mathbb R$ be a [[Measurable sets|measurable set]]. A function to the extended real numbers $f : E \to \mathbb R \cup \{ \pm \infty \}$ is **measurable** if any of the following equivalent statements hold for all $c \in \mathbb R$:
>- (i) $f^{-1}((c, +\infty)) = \{ x \in E | f(x) > c\}$ is measurable;
>- (ii) $f^{-1}([c, +\infty)) = \{ x \in E | f(x) \geq c\}$ is measurable;
>- (iii) $f^{-1}((-\infty, c)) = \{ x \in E | f(x) < c\}$ is measurable;
>- (iv) $f^{-1}((-\infty, c]) = \{ x \in E | f(x) \leq c\}$ is measurable.
>
>It follows that the set $f^{-1}(c)$ is also measurable for all $c \in \mathbb R \cup \{\infty\}$.

Under certain conditions, combinations of measurable functions are also measurable:
- **Linear combinations and products.** If $f,g : E \to \mathbb R \cup \{ \infty\}$ are measurable and finite almost everywhere, then:
	- For all $\alpha, \beta \in \mathbb R$, the scaled sum $\alpha f + \beta g$ is measurable on $E$;
	- $fg$ is measurable on $E$.
- **Measurability of composite functions.** If $g : E \to A$ is measurable and $f: A \to \mathbb R$ is continuous, then $f \circ g : E \to \mathbb R$ is measurable.

