---
aliases:
  - Cantor set
tags:
  - permanent-note
  - topic-logic-mathematics
status: 
publish: 
date: 2024-10-31 19:09
lastmod: 2024-10-31T19:27:47-04:00
---
>[!example] Definition: 

>[!abstract] Theorem: Properties of the Cantor set $C$
>- $C$ is (1) [[Closed sets and closures|closed]], (2) [[Compactness|compact]], (3) totally disconnected (meaning the only connected subspaces are singletons) and (4) contains no isolated points (meaning, in particular, $C$ is not discrete).
>- $C$ is uncountable.

*Proof from [[MATH-GU4051|Topology]]*.

(1) and (2) are clear.

🔺 (3) is an exercise; use the fact that $C$ does not contain any interval $[a, b]$ since $C_n$ is a union of intervals of length $\frac{1}{3^n}$. Can always find a smaller interval?

>[!abstract] Theorem:
>$$
>C \cong \prod_{i=1}^\infty \{ 0, 1\},
>$$
>where each $\{0, 1\}$ is discrete.

Each $x \in [0,1]$ has a ternary expansion (analogous to decimals)
$$
x = \sum_{n=1}^\infty \frac{a_n}{3^n},
$$
with $a_n \in \{ 0, 1 , 2\}$. The ternary expansion always converges (use [[Series|comparison test]] with the geometric series $2/(3^n)$?).


analogous to decimals?
- The ternary expansion always converges (geometric series, comparison test)?
- Every $x$ can be written this way, just set the $a_n$ term to 0 if length is less.

Claim: C has numbers which have ternary expansions that do not have 1 anywhere, only 0 and 2.

Just go left or right on the intervals.
Domain compact, codomain hausdorff, go from {0, 1} to C. Hard part is proving continuity.