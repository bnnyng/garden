---
aliases:
  - finite complement topology
tags:
  - permanent-note
  - topic-logic-mathematics
  - MATH-GU4051
publish: "true"
status: 🟠🔨
date: 2024-10-13 13:05
lastmod: 2024-11-03T15:24:21-05:00
---

>[!example] Definition: Finite complement topology
>The **finite complement topology** of a set $X$ is the collection of all subsets $U \subseteq X$ such that the complement $X \backslash U$ is either finite or all of $X$. We write $X_f$ to denote the set $X$ equipped with the finite complement topology.

^e721c8

A set $X$ equipped with the finite complement topology $\mathcal T_f$ has the following properties:
- $\mathcal T_f$ is *minimal* [[Hausdorff spaces|T1]] topology—the condition where finite subsets are closed—meaning it is the [[Topological spaces and open sets|coarsest]] topology on $X$ such that singletons are closed.
- If $A \subseteq X$ is infinite, then every point $x \in X$ is a [[Limits and accumulation points|limit point]] of $A$, since any open set of $X$ is infinite and must contain a point of $A$. 
- $X$ and all its subsets are [[Compactness|compact]]. 

#wip Homeworks, midterm