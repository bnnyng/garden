---
aliases:
  - continuous function
  - continuous
tags:
  - permanent-note
  - topic-logic-mathematics
  - MATH-UN1208
  - MATH-42X
status: 
publish: "true"
date: 2024-05-06 12:11
lastmod: 2024-09-05T13:30:01-04:00
---


>[!example] Definition: Continuous function
>A function $f : D \to \mathbb R$ is **continuous** if for all $x \in D$, $f$ is **continuous at** $x_0$.
>$$ 
>\forall_{x_0 \in D} \ \forall_{\epsilon > 0} \ \exists_{\delta(x_0, \epsilon) > 0} \ \forall_{x \in D} \ [ \   |x - x_0| < \delta \implies |f(x) - f(x_0)| < \epsilon \ ] 
>$$

More continuous functions can be generated from the following rules:
- The identity function $f(x) = x$ is continuous.
- Constant functions $f(x) = c$ for some chosen $c \in \mathbb R$ are continuous.
- The function $f(x) = 1/x$ is continuous on $\mathbb R \backslash \{0\}$.
- The function $f: (0, \infty) \to \mathbb R$ defined by $f(x) = \sqrt{x}$ is continuous.
- Products, sums, and composites of continuous functions (when defined) are continuous.

See also: [[Pointwise continuity]], [[Uniform continuity]]