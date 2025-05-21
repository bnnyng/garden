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
lastmod: 2025-05-09T11:46:44-04:00
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
# Cycles and transpositions

>[!definition] Cycle
>If $X$ is any set, a permutation $\sigma \in S_X$ is called a **cycle of length $k$** if there exist elements $a_1, \ldots, a_k \in X$ such that 
>$$
>\sigma(a_1) = a_2, \ \sigma(a_2) = a_3, \ldots, \sigma(a_{k}) = a_1,
>$$
>and $\sigma(x) = x$ is fixed for all other elements $x \in X$. In this case, we denote the cycle $\sigma = (a_1, \ldots, a_k)$.

- Every element is a product of disjoint cycles
- 


>[!definition] Transposition
>A **transposition** is a cycle of length 2, meaning it is a permutation that swaps two elements.

>[!proposition] Judson 5.12
>Any permutation of a *finite* set containing at least two elements can be written as the product of transpositions.

---
# The alternating group on $n$ letters

>[!definition] Alternating group on $n$ letters
>The alternating group $A_n \leq S_n$ is the set of **even** permutations, which are permutations that can be expressed as the product of an even number of transpositions. 






---
# Example

#### $S_3$

The symmetric group on $3$ letters has …?

The subgroups of $S_3$ are
$$
\{ 1\}, \quad \langle (12) \rangle, \quad \langle (23) \rangle, \quad \langle (13) \rangle, \quad A_3 = \langle (123) \rangle, \quad S_3.
$$

