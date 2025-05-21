---
aliases:
  - dihedral group
tags:
  - permanent-note
  - topic-logic-mathematics
  - MATH-GU4041
status: 
publish: 
lastmod: 2025-05-09T11:58:31-04:00
date: 2025-04-15T11:30:50-04:00
---

# Overview

$\quad$ The **$n$th dihedral group** $D_n$ is the [[Permutation groups|permutation group]] for **rigid motions** of a regular $n$-gon. 

![[Pasted image 20250509115117.png|300]]

More explicitly, $D_n$ is a subgroup of $S_n$ with the [[Group generators, relations, and presentations|presentation]]
$$
D_n = \langle r, s \ | \ r^n = s^2 = 1, \ srs = r^{-1} \rangle \leq S_n.
$$

----
# Examples

#### Rigid motions of a square

$\quad$ The group of rigid motions of a square $D_4$ has eight elements. Labeling the vertices of the square with $1, 2, 3, 4$, we have:
- The rotations $$ r = (1234) \quad r^2 = (13)(24) \quad r^3 = (1432) \quad r^4 =1. $$
- The reflections $$ s_1 = (24) \quad \quad s_2 = (13). $$
- The remaining two elements $$ rs_1 = (12) (34) \quad \quad r^3 = (14)(23). $$

