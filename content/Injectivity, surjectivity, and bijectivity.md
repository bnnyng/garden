---
aliases:
  - injective
  - surjective
  - bijective
  - bijection
  - inverse
tags:
  - permanent-note
  - topic-logic-mathematics
publish: "true"
date: 2024-03-31 14:16
lastmod: 2025-05-09T11:27:59-04:00
---
>[!example] Definition: Injective, surjective, and bijective functions
>Suppose $f : X \to Y$ is a [[Algebra of functions|function]]. We say $f$ is
>- **Injective** if for all $x \in X$, $f(x_1) = f(x_2)$ implies that $x_1 = x_2$.
>	- Contrapositive: any two distinct elements in the [[Algebra of functions|domain]] map to distinct elements in the codomain.
>- **Surjective** if for each $y \in Y$, there exists $x \in X$ such that $f(x) = y$; that is, the [[Image and preimage|image]] of $f$ is the whole codomain.
>- **Bijective** if $f$ is both **injective** and **surjective**.

A function’s injectivity and surjectivity depends entirely on its domain and codomain. 

---
# Review

- If $f(x) = x^2$ injective, surjective, or bijective? How can the domain and codomain be restricted to satisfy each definition?