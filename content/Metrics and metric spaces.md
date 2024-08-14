---
aliases:
  - metric
  - metric space
tags:
  - permanent-note
  - topic-logic-mathematics
publish: "true"
date: 2024-04-10 17:32
lastmod: 2024-08-04T12:04:13-06:00
---
>[!example] Definition: Metric, metric space 
>A **metric** on a set $X$ is a function $d: X \times X \to \mathbb R$ that satisfies the following conditions for all $x, y, z \in X$:
>- (M1) **Non-negativity and identity.** $d(x, y) \geq 0$, with $d(x,y) = 0$ if and only if $x = y$;
>- (M2) **Symmetry.** $d(x,y) = d(y,x)$;
>- (M3) **Triangle inequality**. We have $d(x,y) \leq d(x,z) + d(z,y)$.
>
>A **metric space** is a pair $(X, d)$ where $X$ is any set and $d$ is a metric on $X$.

^2a64da

Related: [[Inner product spaces]]