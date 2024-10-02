---
aliases:
  - uniformly continuous
  - uniform
  - uniform continuity
tags:
  - permanent-note
  - topic-logic-mathematics
  - MATH-UN1208
  - MATH-42X
status: 🟨
publish: "true"
date: 2024-05-06 12:11
lastmod: 2024-09-27T22:33:36-04:00
---
Informally, a function is **uniformly continuous** if it is [[Pointwise continuity|continuous]] “in the same way” at every point—no matter how close the outputs are chosen to be, as long as the inputs are some close enough, then the outputs will be at least that close.

>[!example] Definition: Uniformly continuous
>A function $f: \mathbb R \to \mathbb R$ is **uniformly continuous** if for all [[The real numbers|real numbers]] $\epsilon > 0$, there exists a $\delta$—where the value $\delta(\epsilon)$ depends on choice of $\epsilon$—so that for all $x, y$ in the domain, we have
>$$ 
>|x-y| < \delta \implies |f(x) - f(y)| < \epsilon.
>$$