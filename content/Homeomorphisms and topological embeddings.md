---
aliases:
  - homeomorphism
  - homeomorphic
  - embedding
  - topological embedding
  - topological property
tags:
  - permanent-note
  - topic-logic-mathematics
  - MATH-GU4051
status: 🔴
publish: "true"
date: 2024-09-23 08:35
lastmod: 2024-09-24T16:07:00-04:00
---
# Overview

Recall the definition of a [[Continuous functions|continuous function]] between [[Topological spaces and open sets|topological spaces]]. 

![[Continuous functions#^9fa13a]]

A homeomorphism is a “[[Injectivity, surjectivity, and bijectivity|bijective]] correspondence” between collections of open sets in different topological spaces; that is, a function that is continuous, bijective, and has a continuous inverse.

>[!example] Definition: Homeomorphism, homeomorphic
>A function between [[Topological spaces and open sets|topological spaces]] $f : X \to Y$ is a **homeomorphism** if $f$ is [[Continuous functions|continuous]], bijective, and its inverse $f^{-1} : X \to Y$ is continuous.
>
>$X, Y$ are **homeomorphic** if there exists a homeomorphism between them, and we write $X \cong Y$. Equivalently, we have $X \cong Y$ if there exists continuous functions $f : X \to Y$, $g : Y \to X$ such that $g \circ f = \text{id}_X$ and $f \circ g = \text{id}_Y$.

^c54cde

Crucially, since homeomorphisms give correspondences between *collections of open sets* in topological spaces, any **topological property** on one space (i.e., a property that can be entirely expressed in terms of the topology on the space) can be used to express the corresponding property on another, homeomorphic space.

Homeomorphisms, which preserve *topological structure*, are analogous to [[Isomorphism|isomorphisms]] in algebra, which are bijective correspondences that preserve *algebraic structure*. However, while a isomorphism—or bijective homomorphism—in algebra is guaranteed to have an inverse that is also a homomorphism, a continuous function in topology is NOT guaranteed to have a continuous inverse.

---
# Examples of homeomorphisms

#wip 



---
# Embeddings

>[!example] Definition: Topological embedding
>A function between [[Topological spaces and open sets|topological spaces]] $f: X \to Y$ is an **embedding** if it is [[Continuous functions|continuous]], injective, and the restriction of its range to the image of $f$, the function $f’ : X \to f(X)$ defined by $x \mapsto f(x)$ is a homeomorphism.

^b02723

---
# Review

- Is a [[Continuous functions|continuous]] bijection necessarily a homeomorphism? Give an example.