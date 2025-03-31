---
aliases:
  - real projective plane
  - real projective space
tags:
  - permanent-note
  - topic-logic-mathematics
  - MATH-GU4051
  - MATH-GU4053
status: 🔴 🔨
publish: "true"
date: 2024-10-31 09:36
lastmod: 2025-03-11T10:57:49-04:00
---
# Overview and basic definition

>[!example] Definition: Real projective space
>Define an [[Relation|equivalence relation]] $\sim$ on $\mathbb R^{n+1} \backslash \{ \vec 0\}$ by setting $x \sim y$ if and only if $x, y$ are on the same line through the origin; precisely, this means that there exists $t \in \mathbb R \backslash \{ 0\}$ such that $x = ty$. Then $x$ and $y$ are sometimes said to be **antipodal**.
>
>The **$n$-dimensional real projective space** $\mathbb {RP}^n = \mathbb R^{n+1}/\sim$ is the “space of lines in $\mathbb R^{n+1}$.”

^DEF-real-projective-space

---
# In point-set topology

- [[Homeomorphisms and topological embeddings]]: The real projective space is homeomorphic to the following [[Quotient spaces|quotient spaces]]:
	- $S^n/(x \sim -x)$, the **[[Euclidean spheres and disks|sphere]] with antipodal points identified**;
	- $D^n / \sim$, where where $D^n \subset \mathbb R^n$ is the closed unit [[Euclidean spheres and disks|disk]] centered at the origin and the equivalence classes are given by $x \sim -x$ if $\| x \| = 1$;
	- In the case $n=1$, we have $\mathbb RP^1 \cong S^1$.
- [[Topological manifolds]]: The homeomorphisms above imply that $\mathbb RP^n$ is a topological $n$-manifold, i.e., locally Euclidean, [[Hausdorff spaces|Hausdorff]], and [[Countability axioms|second-countable]] (has a countable [[Topological bases and subbases|basis]]).

---
# In algebraic topology

- [[Cell attachments and complexes]]: $\mathbb RP^n$ has the cell complex structure $$e^0 \cup e^1 \cup \cdots \cup e^n, $$ with one cell $e^i$ in each dimension $0 \leq i \leq n$.
- [[(Theorem) The fundamental group of the circle is isomorphic to the additive group of integers|Fundamental group of the circle]]: Since $\mathbb RP^1 \cong S^1$, we know that it has fundamental group $\pi_1(\mathbb RP^1, x) \cong \mathbb Z$.
- [[(Theorem) A group acting on a simply connected space is isomorphic to the fundamental group of its orbits|Calculating fundamental groups]]: This theorem can be applied to calculate the [[Fundamental groups|fundamental group]] when $n \geq 2$ by “guessing” a homeomorphism $\mathbb RP^n \cong S^n/G$, where $G = \mathbb Z/2\mathbb Z$ is the [[Cyclic groups|cyclic]] group of order 2 whose generator acts on $S^n$ by $x \mapsto -x$. Thus, $$ \pi_1(\mathbb RP^n) \cong \mathbb Z/2\mathbb Z $$



---
# Notes

#### Homeomorphism with $S^n / (x \sim -x)$

>[!abstract] Claim: The real projective space is locally $n$-Euclidean.

*Proof from [[MATH-GU4051|Topology]].*

For $0 \leq i \leq n$, define the set of equivalence classes
$$
U_i = \{ [x_0, \ldots, x_n] \in \mathbb {RP}^n  \ | \ x_i \neq 0 \}.
$$
This is well-defined since if $x_i \neq 0$, then $tx_i \neq 0$ for all $t \in \mathbb R \backslash  \{ 0 \}$. Each $U_i$ is open since
$$
q^{-1}(U_i) = \{x \in \mathbb R^{n+1} \ | \ x_i \neq 0  \} 
$$
is open in $\mathbb R^{n+1}$ (see the following commutative diagram). We will show that $U_i \cong \mathbb R^n$ for all $i$, then the claim follows from the fact that $\bigcup_{i=0}^n U_i = \mathbb {RP}^n$.

![[Pasted image 20241111130113.png|250]]

#concept-question Why is the vector $n$-dimensional?

#wip
Define $f : q^{-1}(U_i) \to \mathbb R^n$ by $f(\mathbf x) = \mathbf x / x_i$ for all $\mathbf x = (x_0, \ldots, x_n)$. Note that $f(\mathbf x) = f(t \mathbf x)$ since both numerator and denominator will be scaled by $t$, so $f$ induces a map $\bar f : U_i \to \mathbb R^n$ satisfying
$$
f(\mathbf x) 
= \bar f([\mathbf x]) 
= \left (\frac{x_0}{x_i}, \ldots, \frac{x_{i-1}}{x_i}, \frac{x_{i+1}}{x_i}, \ldots, \frac{x_n}{x_i} \right ).
$$
The map $\bar f$ is bijective since we can define an explicit inverse
$$
\bar f^{-1}([\mathbf x]) = [(x_0, \ldots, x_{i-1}, 1, x_{i+1}, \ldots, x_n)].
$$
As a concrete example, for $n = 1$ we have
![[Pasted image 20241111125408.png|400]].
#### As a topological manifold

>[!abstract] Theorem ([[MATH-GU4051|Topology]] HW 8.4): The real projective space is homeomorphic to quotients of spheres and closed disks
>The real projective space $\mathbb {RP}^n$ is homeomorphic to the following [[Quotient spaces|quotient spaces]]:
>- (i) $S^n/(x \sim -x)$, the unit sphere in $\mathbb R^{n+1}$ with antipodal points identified;
>- (ii) $D^n / \sim$, where $D^n \subset \mathbb R^n$ is the closed unit disk centered at the origin and the equivalence classes are given by $x \sim -x$ if $\| x \| = 1$.
>
>Thus, $\mathbb {RP}^n$ is a topological [[Topological manifolds|n-manifold]].

^ee538c

Facts: 
- Sn quotient map is open
- Sn Hausdorff.


