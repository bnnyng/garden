---
aliases: 
tags:
  - permanent-note
  - topic-logic-mathematics
  - MATH-GU4051
status: 
publish: 
date: 2024-09-14 13:04
lastmod: 2024-09-14T13:11:57-04:00
---
>[!abstract] Theorem (Munkres 17.5): Describing the closure of a set using a topological basis
>Let $A$ be a subset of the [[Topological spaces and open sets|topological space]] $X$. Recall that $A, B$ **intersect** if $A \cap B \neq \varnothing$.
>- (i) A point $x \in X$ is in the [[Closed sets, closures, and dense subsets|closure]] of $A$ $\iff$ every neighborhood of $x$ intersects $A$.
>- (ii) If $\mathcal B$ is a [[Basis for a topology|basis]] that generates the topology of $X$, then $x \in \bar A \iff$ for every basis element $B \in \mathcal B$ intersects $A$.

^111747

*Sketch*.

1. **Prove (i) using the contrapositive.**  Show that $x \notin A \iff$ there exists a neighborhood $U$ of $x$ that does not intersect $A$.
2. **Show (ii) follows from (i).**
