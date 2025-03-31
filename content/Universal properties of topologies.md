---
aliases:
  - universal property
tags:
  - permanent-note
  - topic-logic-mathematics
  - MATH-GU4051
status: 🟠
publish: "true"
date: 2024-10-28 08:55
lastmod: 2025-02-16T12:29:13-05:00
---
# Overview

A **universal property** of a [[Topological spaces and open sets|topology]] says what data is preserved when restricting a [[Continuous functions|continuous map]] to that topology.

---
# Subspaces

>[!abstract] Theorem: Universal property of the subspace topology
>Let $f: X \to Y$ be a [[Algebra of functions|function]] between [[Topological spaces and open sets|topological spaces]], and $S \subset Y$ be a subset equipped with the [[Subspace (induced) topology|subspace topology]]. If $f(X) \subset S$ and $g: X \to S$ is the function obtained by restricting the codomain of $f$, then $g$ is [[Continuous functions|continuous]] if an only if $f$ is continuous.

^e3888e

---
# Products and disjoint unions


>[!abstract] Theorem: Universal property of the product topology
>Let $X, Y, Z$ be [[Topological spaces and open sets|topological spaces]]. If $g: X \to Y$ and $h : X \to Z$ are [[Algebra of functions|functions]], then the function $f : X \to Y \times Z$ defined by
>$$
>f(x) = (g(x), h(x))
>$$
>is [[Continuous functions|continuous]] if and only if $f$ and $g$ are. That is, a continuous map to the product $Y \times Z$ is the same data as a *pair* of continuous maps, one to $Y$ and one to $Z$. 

An arbitrary product $\prod X_\alpha$ is the “universal” set with the [[Projection and inclusion maps|projection maps]] $\pi_\alpha : \prod_{\alpha}X_\alpha \to X_\alpha$. That is, if $Y$ is a set with the maps $g_\alpha : Y \to X_\alpha$, there exists a *unique* $g : Y \to \prod X_\alpha$ such that for all $\alpha$, we have $\pi_\alpha \circ g = g_\alpha$. 

![[Pasted image 20241028092009.png|400]]

On the other hand, the disjoint union $\coprod X_\alpha$ is the “universal” set accepting functions *from* each $X_\alpha$. This means that for any collection of functions $f_\alpha : X_\alpha \to Y$, there exists a *unique* function $f: \coprod_\alpha X_\alpha \to Y$ such that for all $\alpha$, we have $f \circ i_\alpha = f_\alpha$.

>[!abstract] Theorem: Universal property of the disjoint union
>A [[Algebra of functions|function]] between [[Topological spaces and open sets|topological spaces]] $f: X \sqcup Y \to Z$ is [[Continuous functions|continuous]] with respect to the [[Disjoint unions|disjoint union]] if and only if both the restrictions $f|_X$ and $f|_Y$ are continuous. That is, the function $f$ is the same *data* as knowing 
>$$
>f|_X = f \circ i_X : X \to Z \quad \quad \text{and} \quad \quad f|_Y = f \circ i_Y : Y \to Z,
>$$
>where $i_Y, i_Z$ is the natural [[Projection and inclusion maps|inclusion]] injection.

#wip Example application HW 6.1, 7.1?
- $\pi_1 : X \times Y \to X$ closed if $Y$ compact
- $Y$ discrete, then $X \times Y \cong \coprod_{y \in Y}X_y$.

---
# Quotients

>[!abstract] Theorem: Universal property of quotient spaces
>If $X$ is a [[Topological spaces and open sets|topological space]] and $\sim$ is an [[Relation|equivalence relation]] on $X$, the projection map $p : X \to X / \sim$ is continuous. 
>
>Moreover, if $f: X \to Y$ is a [[Continuous functions|continuous]] map that is constant on equivalence classes, meaning that if $x \sim z$, then $f(x) = f(z)$, then $f$ *induces* a continuous map $\bar f: X / \sim \to Y$ defined by
>$$
>\bar f ([x]) = f(x),
>$$
>and $\bar f \circ p = f$. We say that $f$ “factors through” the quotient $X / \sim$.

^bc4d96


---
# Review

- Check that $f : \prod X_\alpha \to Y$ defined above is continuous if and only if each $f_\alpha$ is continuous. 🔺