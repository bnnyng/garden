---
aliases:
  - (Theorem) Every finite subset of a Hausdorff space is closed
tags:
  - permanent-note
  - topic-logic-mathematics
  - MATH-GU4051
status: 
publish: "true"
date: 2024-09-19 09:22
lastmod: 2024-09-19T09:58:09-04:00
---

>[!abstract] Theorem (Munkres 17.8 & 17.10)
>If $X$ is Hausdorff, then:
>- (a) Every finite subset of $X$ is closed;
>- (b) Every sequence in $X$ converges to at most one point of $X$.

^78121d

*Sketch.*

1. **Show (a) by showing every singleton set in a Hausdorff space is closed.**
	- **Method from Munkres:** Since $X$ is Hausdorff, what does [[(Theorem) Describing the closure of a set using a topological basis]] tell us about the closure of a singleton set $\{x_0\}$?
	- **Method from class:** Use the Hausdorff property and [[Subspace (induced) topology|Topology HW1, P1]] to show $X \backslash \{ x_0\}$ is open.
1. **Show (b) by choosing disjoint neighborhoods for two distinct points, then showing that it is impossible fo a sequence to converge to both.**
