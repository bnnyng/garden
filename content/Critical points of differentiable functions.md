---
aliases: 
tags:
  - permanent-note
  - topic-logic-mathematics
status: 
publish: 
date: 2024-10-29 14:18
lastmod: 2024-10-29T14:23:47-04:00
---
>[!abstract] Theorem: (Rolle’s theorem)
>Suppose $f: [a, b] \to \mathbb R$ is a [[Derivatives of real functions|differentiable]] function with $f(a) = f(b)$. Then there exists some $x_0 \in (a, b)$ such that $f'(x_0) = 0$.

^75b5aa


---
# Proof appendix

![[Critical points of differentiable functions#^75b5aa]]

*Proof from [[MATH-GU4061|Modern Analysis I]].*

Since $f$ is differentiable, it is also [[Continuous functions|continuous]], and it follows from the [[(Theorem) Extreme value|extreme value theorem]] that $f$ attains a maximum and a minimum on $[a, b]$. If the minimum or maximum are attained on the interior $(a, b)$, we are done. On the other hand, if the minimum and maximum are both attained at $a, b$, then 
$$
\max_{x \in [a,b]}f(x) = \min_{x \in [a,b]}f(x),
$$
which implies that $f$ is constant.