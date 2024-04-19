---
aliases:
  - Cauchy sequence
  - Cauchy
tags:
  - permanent-note
  - topic-logic-mathematics
  - MATH-42X
publish: "true"
date: 2024-04-10 18:42
lastmod: 2024-04-10T20:19:27-07:00
status: ⬛
---
>[!example] Definition: Cauchy sequence
>A **Cauchy sequence** in a set $X$ equipped with [[Metrics and metric spaces|metric]] $d$ is a [[Sequences|sequence]] $x_n \in X$ such that for all $\epsilon > 0$, there exists $N \in \mathbb N$ where 
>$$
>m, n \geq N \implies d(x_n, x_m) < \epsilon.
>$$

^e1c6fb

Cauchy sequences are closely related to [[Sequences|convergent sequences]]; however, a Cauchy sequence has terms that are getting closer and closer to each other, while a convergent sequence has terms that are approaching some fixed limit value.

---
# Review

- Prove or justify the following facts:
	- Cauchy sequences are [[Bounded sets|bounded]] (hint: choose $N$ that satisfies the definition of boundedness).
	- [[Sequences|Convergent sequences]] are Cauchy (hint: choose $N$ that satisfies the definition of Cauchy).
	- Cauchy does not imply convergence.
