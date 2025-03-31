---
aliases:
  - simply connected
tags:
  - permanent-note
  - topic-logic-mathematics
  - MATH-GU4051
status: 🟠
publish: "true"
date: 2024-12-08 12:28
lastmod: 2025-02-21T18:58:29-05:00
---
# Overview and basic definition

>[!example] Definition: Simply connected
>A space $X$ is **simply connected** if it is [[(Path-)connectedness|path-connected]] and if its [[Fundamental groups|fundamental group]] $\pi_1(X, x_0)$ is the trivial (one-element) group for some $x_0 \in X$, and hence for all $x_0 \in X$. The fact that the fundamental group is trivial is often denoted $\pi_1(X, x_0) = 0$. 
>
>Intuitively, this means that every closed curve in $X$ can be continuously shrunk to a point in $X$, i.e., any loop with base point $x_0$ is [[Homotopies|homotopic relative to]] $x_0$ to the constant loop.

^43089d

We have the following key facts about simply connected spaces:
- Any two paths having the same initial and final points are [[Homotopies|path-homotopic]], i.e., any two paths are [[Homotopies|homotopic rel]] endpoints. 
- Equivalently, a space is simply connected if and only if there is a unique path-homotopy class between any two points.
- If $p: \widetilde X \to X$ is a [[Covering maps|covering space]], the [[Lifting properties of covering spaces|lifting correspondence]] $\phi : \pi_1(X, x_0) \to p^{-1}(x_0)$ is a bijection; further, since $p$ is both continuous and open, then $p$ is a [[Homeomorphisms and topological embeddings|homeomorphism]].

**Relevant theorems:**
- [[(Theorem) The fundamental group of the n-sphere is trivial in higher dimensions]]

---
# Properties of simply connected spaces


>[!abstract] Lemma (Munkres 52.3): In a simply connected space, any two paths with the same initial and final points are [[Homotopies|path-homotopic]].

^5f18e8

*Proof from [[MATH-GU4051|Topology]]. Uses:*
- [[(Proof pattern) Middle-man trick]] (but for the identity!)

Suppose $f, g$ are paths in $X$ from some point $x_0$ to $x_1$. Then $f * \bar g$ is a loop based at $x_0$, so by simply-connectedness, $f * g \simeq_p \mathbf 1_{x_0}$. Since path-homotopy is an equivalence relation, this implies
$$
f \simeq_p f * \bar g * g \simeq_p \mathbf 1_{x_0} * g \simeq_p g.
$$
 
