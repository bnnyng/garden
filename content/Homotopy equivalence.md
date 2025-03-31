---
aliases:
  - homotopy type
  - homotopy equivalent
  - homotopy equivalence
tags:
  - permanent-note
  - topic-logic-mathematics
  - MATH-GU4051
  - MATH-GU4053
status: 🔨
publish: 
date: 2024-12-04 13:53
lastmod: 2025-02-04T11:45:25-05:00
---
# Overview and basic definition

Two *spaces* are **homotopy equivalent** if one can be continuously deformed into the other; this is parallels the notion of [[Homotopies|homotopy]], which says when one *map* can be continuously deformed into the other. A key property of homotopy equivalence is that two spaces with the same **homotopy type** have the same [[Fundamental groups|fundamental group]]. Homotopy equivalence also preserves the usual invariants like [[(Path-)connectedness|connectedness]], [[(Path-)connectedness|path-connectedness]], and [[Compactness|compactness]].

>[!example] Definition: Homotopy equivalence between maps, homotopy equivalent spaces
>A [[Continuous functions|continuous]] map $f : X \to Y$ is a **homotopy equivalence** if there exists $g : Y \to X$ such that we have [[Homotopies|homotopies]]
>$$
>g \circ f \simeq \text{id}_X \quad \quad f \circ g \simeq \text{id}_Y.
>$$
>In this case, we call $g$ a homotopy inverse of $f$, and we say $X, Y$ are **homotopy equivalent** or have the same **homotopy type.**

^b4e292
🔺 *Exercise.* Homotopy equivalence satisfies the properties of an equivalence relation (strictly speaking, there is no set of all spaces to define this on).

---
# Ways to (dis-)prove homotopy equivalence

To *prove* homotopy equivalence, we explicitly define $f, g$, as well as the desired homotopies, and show that each function in the continuous family is well-defined (e.g., has the same domain domain and range).


---
# Homotopy equivalence and fundamental groups

>[!abstract] Lemma:
>Let $h, k : X \to Y$ be [[Homotopies|homotopic]] with $h(x_0) = y_0$ and $k(x_0) = y_1$. Then if $H$ is the homotopy between $h,k$, there exists a path $\alpha(t) = H(x_0, t)$ in $Y$ from $y_0$ to $y_1$ such that the [[Fundamental groups|change-of-basepoint map]] satisfies $\hat \alpha \circ h_* = k_*$. In particular, we have:
>- (i) $h_*$ is injective/surjective $\iff$ $k_*$ is injective/surjective;
>- (ii) If $h$ is [[Contractible spaces|nullhomotopic]], then $h_*$ is trivial.
>
>![[Pasted image 20241216145541.png|200]]

>[!abstract] Theorem: Homotopy equivalent spaces have isomorphic fundamental groups
>If $f: X\to Y$ is a homotopy equivalence, then the [[Induced homomorphism between fundamental groups|induced homomorphism between fundamental groups]]
>$$
>f_* : \pi_1(X, x_0) \to \pi_1(Y, f(x_0))
>$$
>is an [[Group homomorphisms and isomorphisms|isomorphism]] between fundamental groups based at any $x_0 \in X$.

---
# Examples

#### Homeomorphic spaces are homotopy equivalent

If $f: X \to Y$ is a [[Homeomorphisms and topological embeddings|homeomorphism]], then $f$ is a homotopy equivalence since
$$
f^{-1} \circ f = \text{id}_X \quad \quad f \circ f^{-1} = \text{id}_Y;
$$
this essentially uses the fact that a function is homotopic to itself. Note that homotopy equivalence is a much weaker notion than homeomorphism.
#### Deformation retracts are homotopy equivalent

If $X$ [[Deformation retractions|deformation retracts]] onto $A \subseteq X$ via [[Homotopies|homotopy]] $H$, then $i : A \to X$ is a homotopy equivalence with homotopy inverse $r : X \to A$ defined by $r(x) = H(x, 1)$, since
$$
r \circ i = \text{id}_A \quad \quad i \circ r \simeq \text{id}_X \text{ via }H.
$$
Note that $r$ depends on the homotopy $H$, but $i$ does not.

#### A set is contractible iff it is homotopy equivalent to a point

If $A = \{ p\}$ is a single point and $f : A \to X$ is a homotopy equivalence with homotopy inverse $g: X \to A$, then
$$
g \circ f = \text{id}_A \quad \quad f \circ g \simeq \text{id}_X,
$$
so $f \circ g$ is a constant function. Then the identity on $X$ is [[Homotopies|nullhomotopic]], and we conclude that $X$ is contractible.

#### All Euclidean space are homotopy equivalent

#wip
Since $\mathbb R^n$ is convex for all $n$, 

---
# Notes

- The definition of homotopy equivalence is a more relaxed version of [[Homeomorphisms and topological embeddings|homeomorphism]]: instead of having compositions equal precisely the identities of both spaces, we can go between two spaces continuously and “wiggle around a bit” to get back to exactly where we started.