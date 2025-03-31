---
aliases:
  - fundamental group
  - loop
  - base-point preserving
  - based
  - change-of-basepoint isomorphism
tags:
  - permanent-note
  - topic-logic-mathematics
  - MATH-GU4051
  - MATH-GU4053
status: 🟠
publish: "true"
date: 2024-11-26 18:41
lastmod: 2025-02-19T12:09:40-05:00
---
# Overview

The **fundamental group** $\pi_1(X, x)$ of a [[Topological spaces and open sets|topological space]] $X$ at a point $x \in X$ is the [[Quotient spaces|quotient space]] of loops $f: I \to X$ based at $x$ after identifying loops that are [[Homotopies|homotopic relative to]] the endpoints $\partial I =  \{ 0, 1\}$.

Two fundamental groups are [[Group homomorphisms and isomorphisms|isomorphic]] if they are connected by a path. In particular, if $\alpha$ is such a path between two basepoints $x_0, x_1$, then we can define an isomorphism $\hat \alpha$ between fundamental groups called the **change-of-basepoint map**.

A space is **simply connected** if it is [[(Path-)connectedness|path-connected]], hence any two fundamental groups are isomorphic, and its fundamental group is *trivial*.

We have the following methods for “computing” the fundamental group of a space:
- [[(Theorem) van Kampen]]
- [[(Theorem) A group acting on a simply connected space is isomorphic to the fundamental group of its orbits]]

**Relevant theorems:**
- [[(Theorem) The fundamental group of the circle is isomorphic to the additive group of integers]]
- [[(Theorem) The fundamental group of the n-sphere is trivial in higher dimensions]]

**Related notes:** [[Induced homomorphism between fundamental groups]], [[Simply connected spaces]]

---
# Basic definition 

>[!example] Definition: Fundamental group of a space
>Let $X$ be any space any $x_0 \in X$ be any point. A **loop based at $x_0$** is a path in $X$ that starts and ends at $X_0$. 
>
>The **fundamental group** of $X$ **relative to** $x_0$ is the set $\pi_1(X, x_0)$ of [[Homotopies|path-homotopy]] classes of loops in $X$ based at $x_0$. The [[Algebraic groups|group]] operation is [[Path concatenation|path concatenation]] defined by
>$$
>[f] \cdot [g] = [f * g],
>$$
>inverses $[f]^{-1} = [\bar f]$ are reverse paths, and the identity is $e = [1_{x_0}]$.

^a00d94

---
# Change-of-basepoint isomorphisms

>[!abstract] Theorem (52.1): Points connected by a path have isomorphic fundamental groups
>Let $X$ be any space and $x_0, x_1 \in X$ be any points, and suppose $\alpha$ is a path from $x_0$ to $x_1$. Then we define a corresponding map **change-of-basepoint map** between fundamental groups
>$$
>\hat \alpha : \pi_1(X, x_0) \to \pi_1(X, x_1)
>$$
>by
>$$
>\hat \alpha ([f]) = [\bar \alpha] * [f]* [\alpha].
>$$
>The map $\hat \alpha$ is a [[Group homomorphisms and isomorphisms|group isomorphism]].

^eb0f7e

🔺*Review*. Why is $\hat \alpha$ well-defined?

>[!abstract] Theorem: Properties of change-of-basepoint isomorphisms
>Let $\alpha$ be a path between two points $x_0, x_1 \in X$, and let $\hat \alpha : \pi_1(X, x_0) \to \pi_1(X, x_1)$ be the corresponding change-of-basepoint isomorphism. 
>- (i) If $\beta$ is a path from $x_1$ to $x_2$, then $\widehat{(\beta * \alpha)} = \hat \alpha \circ \hat \beta$;
>- (ii) #wip **Compatibility with [[Fundamental groups|induced homomorphisms between fundamental groups]]:**

>[!abstract] Theorem ([[MATH-GU4051|Topology]] HW 9.5): The fundamental group is abelian if and only if any two change-of-basepoint maps are equal
>Let $X$ be [[(Path-)connectedness|path-connected]] and $x_0, x_1 \in X$. Then $\pi_1 (X, x_0)$ is [[Algebraic groups|abelian]] if and only if for any paths $\alpha, \beta$ from $x_0$ to $x_1$, the corresponding [[Group homomorphisms and isomorphisms|isomorphisms]] satisfy $\hat \alpha = \hat \beta$ as functions $\pi_1(X, x_0) \to \pi_1(X, x_1)$.  

^d2e2e0

---
# Examples

#### The fundamental group of Euclidean space is a single point

Let $c(t) = x$ be the constant loop, which gives a special element $[c] \in \pi_1(X, x)$. Then for any loop $f$ in $\mathbb R^n$, the [[Homotopies|straight line homotopy]] between $f$ and $c$ is a homotopy relative to $\partial I$.
