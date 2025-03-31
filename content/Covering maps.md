---
aliases:
  - covering space
  - evenly covered
  - covering map
  - universal covering
tags:
  - permanent-note
  - topic-logic-mathematics
  - MATH-GU4051
  - MATH-GU4053
status: 🔴 🔨
publish: 
date: 2024-11-30 14:19
lastmod: 2025-03-07T17:16:17-05:00
---
🔨 Add examples.

---
# Overview and basic definition

>[!example] Definition: Covering space
>A **covering space** of $X$ is a space $\widetilde X$ and a [[Continuous functions|continuous]] map $p : \widetilde X \to X$ such that for all $x \in X$, there exists a neighborhood $U \subseteq X$ of $x$ such that $p^{-1}(U)$ is a union of disjoint open sets called **slices**, and each slice is mapped [[Homeomorphisms and topological embeddings|homeomorphically]] onto $U$ by $p$. In this case, we say $U$ is **evenly covered**. If the entire space is evenly covered, we say the map $p$ is a **trivial covering map**.

^0c6070



#wip composition of covering maps from Topology

**Relevant theorems:**
- [[Lifting properties of covering spaces]]
- [[(Theorem) Classification of covering maps]]

**Related notes:** [[Group actions on topological spaces]], [[Lifting properties of covering spaces]]

---
# Properties of covering maps

Let $p : X \to Y$ be a covering map.

- **The preimage of every point in the base space is discrete:**  Notice that the preimage $p^{-1}(x_0) \subseteq \widetilde X$ is [[Discrete topology|discrete]] for any $x_0 \in X$: if $U \subseteq X$ is an evenly covered neighborhood of $x_0$, the $p^{-1}(U) = \bigcup_{i \in J}\widetilde U_i$, where the $\widetilde U_i$ are disjoint, open, and $p|_{\widetilde U_i}$ is a [[Homeomorphisms and topological embeddings|homeomorphism]] for all $i \in J$. Then $\widetilde x_0 \in p^{-1}(x_0)$ is in *exactly one* $\widetilde U_i$, and since $p|_{\widetilde U_i}$ is in specifically *injective*, we have 
$$
\widetilde U_i \cap p^{-1}(x_0) = \{ \widetilde x_0\},
$$
which is open in the [[Subspace (induced) topology|subspace topology]].


>[!abstract] ([[MATH-GU4051|Topology]] HW 10.2)
>If $p: X \to Y$ is a covering map, $X$ is [[(Path-)connectedness|path-connected]], and $Y$ is [[Simply connected spaces|simply connected]], then $p$ is a homeomorphism. 


Base locally path-conn implies covering space locally oath-conn

---

# Covering spaces and fundamental groups

>[!abstract]
>If $p : \widetilde X \to X$ is a covering, then the [[Induced homomorphism between fundamental groups|induced homomorphism between fundamental groups]]
>$$ p_* : \pi_1(\widetilde X, \tilde x) \to \pi_1 (X, p(\tilde x))$$
>is injective.

*Proof from [[MATH-GU4053|Algebraic Topology]].*
```
\pi_1(\widetilde X, \tilde x)
```

![[IMG_0787.jpg|150]]

Suppose $[\tilde f] \in \pi_1(\widetilde X, \tilde x)$ is in the kernel of $p_*$, i.e., $$ p_* ([\tilde f]) = [p \circ \tilde f] = [c], $$ where $c : I \to X$ defined by $s \mapsto p(\tilde x)$ is the constant map. This implies $p \circ \tilde f$ is [[Homotopies|homotopic relative to]] the endpoints $\partial I$, so there exists a unique [[Lifting properties of covering spaces|lift]] of the *homotopy* rel $\partial I$ to a homotopy $I \times I \to \widetilde X$ between $\tilde f$ to some lift of $c$. Another lift of $s \mapsto p(\tilde x)$ is explicitly $s \mapsto \tilde x$, so by uniqueness, the lifted homotopy rel $\partial I$ ends at $s \mapsto \tilde x$, hence $[f] = c \in \pi_1(\widetilde X, \tilde x)$?

❓ What is this end?

>[!example] Definition: Universal covering
>If $X$ is a [[(Path-)connectedness|path-connected]] space, a **universal covering map** for $X$ is a covering $p : \widetilde X \to X$ for which $\widetilde X$ is [[Simply connected spaces|simply connected]]. 

#wip In this case, is bijection


---
# Examples

#### The discrete product has the trivial covering

If $Y$ is [[Discrete topology|discrete]], then $p : X \times Y \to X$ defined by $p(x, y) = x$ is a covering space. This works because the discrete product is homeomorphic to the [[Disjoint unions|disjoint union]], i.e., $X \times Y \cong \coprod_{y \in Y} X$, so we can simply take $U = X$. This is called a **trivial covering**.

#### Covering space of the circle

The standard covering space of the circle $S^1$ has the map $p : \mathbb R \to S^1$ defined by
$$
p(t) = (\cos 2 \pi t, \sin 2 \pi t).
$$
🔺*Exercise.* Check this is indeed a covering. (Hint: start with $U = \{ (x_1, x_2) \ | \ x_1 > 0\}$. What does $p^{-1}(U)$ look like? What other “pieces” are needed to completely cover $S^1$?)

----
# Notes

- Things (e.g., paths) in the base space are often referred to as “downstairs,” and things in the covering space are referred to as “upstairs.”