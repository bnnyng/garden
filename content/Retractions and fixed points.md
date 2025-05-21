---
aliases:
  - retraction
tags:
  - permanent-note
  - topic-logic-mathematics
  - MATH-GU4051
status: 🔨
publish: 
date: 2024-12-08 12:35
lastmod: 2025-05-07T11:36:52-04:00
---

# Overview and definition

See also: [[Deformation retractions]], [[Contractible spaces]]

>[!example] Definition: Retraction
>Given $A \subset X$, a **retraction** of $X$ onto $A$ is a continuous map $r: X \to A$ that *fixes* $A$, meaning $r(a) = a$ for all $a \in A$; equivalently, if $i : A \to X$ is the canonical inclusion map, we have $r \circ i = \text{id}_A$.

^0eb16c

---
# Retractions and fundamental groups

>[!abstract] Theorem ([[MATH-GU4051|Topology]] HW 9.6): The homomorphism induced by a retraction is surjective
>If $r : X \to A$ is a retraction, then the [[Fundamental groups|induced homomorphism between fundamental groups]] $i_* : \pi_1(A, a_0) \to \pi_1(X, a_0)$ is injective and $r_* : \pi_1(X, a_0) \to (A, a_0)$ is surjective for all $a_0 \in A$.

^7eabf9

*Proof.*

We show this using the identity $r \circ i = \text{id}_A$, and the definitions of injectivity and surjectivity using *left and right inverses*. We have
$$
\text{id}_{\pi_1(A, a_0)} = (r \circ i)_* = r_* \circ i_*,
$$ 
which implies that $i_*$ is injective since it has a left inverse, and that $r_*$ is surjective since it has a right inverse. More specifically, if $[g] \in \pi_1(A, a_0)$, then
$$
r_*(i_*([g])) = [r \circ i \circ g] = [\text{id}_A \circ g] = g,
$$
so $i_*([g]) \in \pi_1(X, a_0)$ is in the preimage of $[g]$. $\ \square$


---
# Applications of $\pi_1(S^2) = \mathbb Z$

Several results about retractions follow from [[(Theorem) The fundamental group of the circle is isomorphic to the additive group of integers]].


>[!abstract] Theorem: Every continuous function on the closed disk has a fixed point
>If $f: D^2 \to D^2$ is a [[Continuous functions|continuous]] function on the closed disk, then there exists $x \in D^2$ such that $f(x) = x$.

*Proof from [[MATH-GU4051|Topology]].*

Assume $f(x) \neq x$ for all $x \in D^2$. Define $r : D^2 \to S^1$ by considering the following: Since $f(x) \neq x$, there is a ray starting at $f(x)$ and passing through $x$, and let $r(x)$ be the point where this ray intersects $S^1$. If $x \in S^1$, then $r(x) = x$.

The ray $r$ is continuous: explicitly, we set
$$
r(x) = f(x) + t(x - f(x)) = 1
$$
for $t > 0$, since $\| r (x) \| = 1$. (🔺 Verify this by applying the quadratic formula.)

Since $r$ is continuous, $r$ is a [[Deformation retractions|retraction]] of $D^2$ to $S^1$, meaning $r(x) = x$ for all $x \in S^1$. But $\pi_1(D^2, x_0) = 0$ and $\pi_1(S^1, x_0) = \mathbb Z$, so it is impossible for the [[Induced homomorphism between fundamental groups|induced homomorphism]] $r_* : \pi_1(D^2, x_0) \to \pi_1(S^1, x_0)$ to be surjective. 


>[!abstract] Lemma: 
>For a continuous $h:S^1 \to X$, the following are equivalent:
>- (i) $h$ is **nullhomotopic**, meaning it is [[Homotopies|homotopic]] to a constant map;
>- (ii) $h$ extends to a continuous map $k: D^2 \to X$ that “fills in the circle”;
>- (iii) $h_*$ is trivial, meaning $h_*([f]) = e$, the identity on the [[Fundamental groups|fundamental group]], for all $[f]$.

*Proof from [[MATH-GU4051|Topology]].*

- (i) $\implies$ (ii). Let $H : S^1 \times I \to X$ be a homotopy from $h$ to a constant map $c : S^1 \to X$. Let $q : S^1 \times I \to D^2$ be defined by $q(x, t) = (1-t)x$; 🔺 recall that $q$ is a [[Quotient spaces|quotient map]]. Then $H$ is constant on $S^1 \times \{ 1\}$ (squishes this to a point), which implies that there exists a continuous $k : D^2 \to X$ such that $k \circ q = H$. #wip 
- (ii) $\implies$ (iii). Let $i : S^1 \to D^2$ be the inclusion, so $k \circ i = h$ implies $h_* = (k \circ i)_* = k_* \circ i_*$. #wip
- (iii) $\implies$ (i). Recall $\omega : I \to S^1$ is a generator for $\pi_1(S^1, x_0)$. Since $h_*$ is trivial, we have $h_*([\omega]) = e$, the identity in $\pi_1(X)$, which implies that $h \circ \omega$ is [[Homotopies|path-homotopic]] to a constant loop $c$; let $F$ be a path-homotopy from $h \circ \omega$ to $c$.
	- Induced map from the quotient $\omega \times \text{id}_I : I \times I \to S^1 \times I$.

>[!abstract] Corollary:
>We can view $S^1 \subseteq \mathbb C$, the field of [[Complex numbers|complex numbers]] identified with the real plane $\mathbb R^2$, by defining
>$$
>S^1 = \{ z \in \mathbb C \ | \ |z| = 1\}.
>$$
>Further:
>- (i) For all $n \in \mathbb Z \backslash \{ 0\}$, the map $g : S^1 \to S^1$ defined by $g(z) = z^n$, where $z^n$ denotes complex multiplication, is not nullhomotopic.
>- (ii) **The circle cannot be contracted to a point.** The inclusion $i : S^1 \to \mathbb C \backslash \{ 0\} = \mathbb R^2 \backslash \{ 0\}$ is not nullhomotopic.



