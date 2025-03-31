---
aliases: 
tags:
  - permanent-note
  - topic-logic-mathematics
  - MATH-GU4042
status: 🔨
publish: 
date: <% tp.file.creation_date() %>
lastmod: 2025-01-28T10:52:11-05:00
---
# Overview and basic definition

The **quaternions** are an extension of the [[Complex numbers, conjugates, and absolute value|complex numbers]].

>[!example] Quaternions

$\mathbb H$ is subring of either 2x2 matrices with complex coeffs., or 4x4 matrices with real coeffs.

Hard exericse: If D is a division ring, if it has a subring isomorphic to the reals, then elements of R commute with every element of D; and now D is a real vector space (using multiplication to define scaling), and D is finite-dimensional. Then D is isomorphic to either Reals, complex, or quaternions.
- Upshot: hard to find division rings that contain the reals.

----
# As a group

>[!example] Definition: Group presentation of the quaternions
>The **quaternion [[Algebraic groups|group]]** has [[Group generators, relations, and presentations|presentation]]
>$$
>\langle i, j, k \ | \ -1 := i^2 = j^2 = k^2 = ijk \rangle,
>$$
>where $-1$ denotes the common element. Further, the identity is written as $1$, and the elements $i^3, j^3, k^3$ are also denoted $-i, -j, -k$, respectively.

Explicitly, the **quaternion group** is the group of eight elements
$$
1, -1, i, -i, j, -j, k, -k,
$$
where $1$ is the identity, $(-1)^2 = 1)$, and all the other elements are square roots of $-1$ such that
$$
(-1)i = -1 \quad \quad (-1)j = -j \quad \quad (-1)k = k
$$
and the relations 
$$
ij = k \quad \quad ji = -k \quad \quad jk = i
$$
$$
kj = -i \quad \quad ki=j \quad \quad ik = -j
$$
hold.

---

# As a ring

>[!example] Definition: Quaternion ring
>