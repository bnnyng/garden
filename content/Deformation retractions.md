---
aliases:
  - deformation retracts
  - deformation retraction
tags:
  - permanent-note
  - topic-logic-mathematics
  - MATH-GU4051
  - MATH-GU4053
status: 🟠
publish: 
date: 2024-11-26 18:52
lastmod: 2025-04-08T12:09:00-04:00
---
# Overview and basic definition

A **deformation retraction** of a space $X$ onto a subspace $A \subseteq X$ is is a [[Homotopies|homotopy]] from $X$ to a [[Retractions and fixed points|retraction]] mapping of $X$ onto $A$. Points in $A$ are fixed by such a homotopy.

>[!definition] Deformation retract
>Given $A \subseteq X$, we say $A$ is a **deformation retract** of $X$ if there exists a [[Homotopies|homotopy]] $H: X \times I \to X$ such that:
>- (i) & (ii) For all $x \in X$, we have $H(x, 0) = x$ and $H(x, 1) \in A$;
>- (iii) $H$ **fixes** $A$, meaning $H(a, t) = a$ for all $t \in I, a \in A$.
>
>Note that since $H(x, 1) \in A$ and $H(a, 1) = a$, then $r(x) = H(x, 1)$ is precisely a [[Retractions and fixed points|retraction]] of $X$ onto $A$. Thus, the homotopy $H$ is also called a **deformation retraction**.

^9bee46

Deformation retracts are related to [[Homotopy equivalence|homotopy equivalence]] by the following: if $A \subseteq X$ is a deformation retract of $X$, then the inclusion mapping $i : A \to X$ is a homotopy equivalence.

Related: [[Retractions and fixed points]], [[Homotopy equivalence]]

---
# Deformation retracts and fundamental groups

>[!theorem] Inclusion of a deformation retract induces an isomorphism of fundamental groups
>If $X$ deformation retracts onto $A \subseteq X$, then $i_* : \pi_1(A, a_0) \to \pi_1(X, a_0)$ is an [[Group homomorphisms and isomorphisms|isomorphism]] for all $a_0 \in A$, where $i : A \to X$ is the [[Projection and inclusion maps|inclusion]] map.

^d77966

*Proof from [[MATH-GU4051|Topology]].*

Recall that the homomorphism induced by a [[Retractions and fixed points|retraction]] map is surjective, and therefore the canonical inclusion map is injective. For surjectivity, let $f: I \to X$ be a loop based at $a_0 \in A$, and let $H$ be a homotopy satisfying the deformation retract conditions. Then the function $H’(t) = H(f(s), t)$ is a homotopy between 
$$
H'(s, 0) = H(f(s), 0) = f(s) \quad \quad
H'(s, 1) = r(f(s)),
$$
where $r: X \to A$ is a retraction. Since $H$ fixes $A$, we know $r(f(s))$ is a map in $A$ based at $a_0$. Moreover, $H’$ is a path-homotopy, since
$$
H'(0, t) = H(f(0),t) = H(a_0, t) = a_0 \quad \quad H'(1, t) = a_0
$$
for all $t \in I$. Then
$$
i_* (\pi_1(A, a_0)) = i_*([r \circ f]) = [i \circ r \circ f] = [f],
$$
where the final equality follows via $H’$. Thus, $i_*$ is surjective.

---
# Deformation retracts and homology

>[!definition] Good pair
>Let $A \subseteq X$ be a closed subspace. We say that $A$ is a **deformation retract of a neighborhood** in $X$, or simply that $(X, A)$ is a **good pair**, if there exists a set $U \subseteq X$ with $A \subseteq \textup{int}(U)$ and a [[Homotopies|homotopy]] $H : U \times I \to U$ relative to $A$ from the identity to a [[Retractions and fixed points|retraction]] map $r : U \to A \subseteq U$.

>[!exm] 
>This definition rules out pathological cases such as $X = \mathbb R$ and $A$ as the Cantor set, or $A = \{ 0 \} \cup \{ 1/n \ | \ n \in \mathbb Z_{>0}\}$. 


- Definition rules out X = R and A = cantor set for example, or 0 union 1.n
- Something that is a good pair is a cell attachment—take an annulus around the boundary


---
# Examples

#### $S^n$ is a deformation retract of the punctured plane

From [[MATH-GU4051|Topology]] HW 9.6, we showed $S^n$ is a deformation retract of $\mathbb R^{n+1} \backslash \{ \vec 0 \}$ via
$$
H(x, t) = (1-t)x + t \frac{x}{\| x\|},
$$
*almost* the [[Homotopies|straight line homotopy]]. 

#### A convex set deformation retracts onto any point


If $C \subseteq \mathbb R^n$ is convex, then $C$ deformation retracts onto any $x_0 \in C$ via
$$
H(x, t) = (1-t) x + tx_0,
$$
the [[Homotopies|straight line homotopy]].

#### The filled torus retracts onto a circle

$S^1 \times D^2$ deformation retracts onto $S^1 \times \{ \vec 0\}$ via 
$$
H(x, y, t) = (x, (1-t)y).
$$

#### The plane with two punctures retracts onto a figure 8

$\mathbb R^2 \backslash \{ \text{two point}\}$ deformation retracts onto the figure 8, denoted $S^1 \vee S^1$; the “wedge” $\vee$ just means the sets are connected at one point.

🔺 *Exercise.* Proof by a picture.

#### The punctured torus retracts onto two circles

Define $A \subseteq S^1 \times S^1$ by
$$
A = (S^1 \times \{p\}) \cup (\{q\} \times S^1),
$$
where $p,q$ are any points on the torus; $A$ is the union of two circles that intersect at the point $(q, p)$. This is *not* a deformation retract of the torus, but it is of the torus with one point removed, $(S^1 \times S^1) \backslash \{ z\}$. 

🔺 *Exercise.* Draw a picture by representing the torus as a rectangle. What is $A$ homeomorphic to?

---
# Review

- Show that $S^1 \times \{ 0\}$ is a deformation retract of $S^1 \times D^2$. 