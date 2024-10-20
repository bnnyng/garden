---
aliases:
  - discrete topology
  - indiscrete topology
  - discrete
  - discrete metric
tags:
  - permanent-note
  - topic-logic-mathematics
  - MATH-GU4051
status: 🔴
publish: 
date: 2024-10-13 13:06
lastmod: 2024-10-13T13:51:11-04:00
---

>[!example] Definition: Discrete, indiscrete topology
>Given any set $X$, the collection of all subsets of $X$ (i.e., the [[Axioms of set theory|power set]] $\mathcal P (X)$) is a [[Topological spaces and open sets|topology]] on $X$ called the **discrete topology**. The collection $\{\emptyset, X\}$ is also a topology called the **indiscrete** or **trivial** topology.

^aa370a

Note that a topological space is discrete, meaning every set is an open set $\iff$ every singleton (sets containing a single element) is also open.

>[!example] Definition: Discrete metric
>For any set $X$, the [[Metrics, metric spaces, and the metric topology|metric]] generating the **discrete topology** is given by
>$$
>d(x,y) = \left\{
>\begin{align}
>1 \quad  x \neq y \\
>0 \quad x = y
>\end{align}
>\right. .
>$$
>Recall that to show a topology is the discrete topology, it suffices to show *every singleton is open*, and we have $\{ x\} = B_d(x, 1/2)$ for all $x \in X$.

^6abe9b
