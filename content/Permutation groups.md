---
aliases:
  - symmetric group
  - symmetries
  - permutation group
  - permutations
tags:
  - permanent-note
  - topic-logic-mathematics
  - MATH-GU4041
status: 
publish: 
lastmod: 2025-04-16T20:14:05-04:00
date: 2025-04-16T20:06:58-04:00
---
# Overview 


---
# The symmetric group on $n$ letters

>[!definition] Symmetric group on $n$ letters
>If $X$ in any set, the **symmetric group** $S_X$ is the set of its permutations. In particular, if $X = \{ 1 , 2, \ldots, n\}$ is finite, then we write $S_X = S_n$ and call this group the **symmetric group on $n$ letters**. 
>
>A **permutation group** is a subgroup of $S_n$.

>[!theorem] The symmetric group is a group
>The symmetric group on $n$ letters, as defined above, is a [[Algebraic groups|group]] with $n!$ elements where the binary operation is composition of maps.


---
# Cycles

>[!definition] Cycle
>If $X$ is any set, a permutation $\sigma \in S_X$ is called a **cycle of length $k$** if there exist elements $a_1, \ldots, a_k \in X$ such that 
>$$
>\sigma(a_1) = a_2, \ \sigma(a_2) = a_3, \ldots, \sigma(a_{k} = a_1,
>$$
>and $\sigma(x) = x$ is fixed for all other elements $x \in X$. In this case, we denote the cycle $\sigma = (a_1, \ldots, a_k)$.

- Every element is a product of disjoint cycles
- 


Someday: alteranting groups, permutations, cycles