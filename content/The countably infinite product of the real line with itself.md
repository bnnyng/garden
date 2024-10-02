---
aliases: 
tags:
  - permanent-note
  - topic-logic-mathematics
  - MATH-GU4051
status: 
publish: 
date: 2024-09-26 18:19
lastmod: 2024-09-27T22:09:54-04:00
---

>[!example] Definition: $\mathbb R^\omega$
>The **countably infinite [[The product topology|product]]** of $\mathbb R$ with itself is given by
>$$
>\mathbb R^\omega = \prod_{i=1}^\infty \mathbb R = \mathbb R ^{Z_{\geq 0}};
>$$ 
>that is, $\mathbb R^\omega$ is the set of all sequences $\{x_n\}_{n \geq 1} = (x_1, x_2, ...)$ in $\mathbb R$.

^90a2bd

>[!abstract] Theorem (Munkres 20.5): Metric inducing the product topology on $\mathbb R^\omega$
>Let $\overline d (a, b) = \text{min}\{ |a-b|, 1\}$ be the [[Metrics, metric spaces, and the metric topology|standard bounded metric]] on $\mathbb R$. If $\mathbf x, \mathbf y$ are two sequences in $\mathbb R^\omega$, define
>$$
>D (x, y) = \text{sup}\left \{ \frac{\overline d (x_i, y_i)}{i} \right \}, 
>$$
>where $i > 0$. Then (1) $D$ is a metric on $\mathbb R^\omega$ and (2) $D$ induces the [[The product topology|product topology]]. 

^6ac36d

---
# Notes

- In all three topologies, [[Hausdorff spaces|Hausdorff]]