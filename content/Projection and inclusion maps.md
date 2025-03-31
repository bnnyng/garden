---
aliases:
  - projection map
  - inclusion map
  - projection
  - inclusion
tags:
  - permanent-note
  - topic-logic-mathematics
  - MATH-GU4051
status: 🔨
publish: 
date: 2024-10-28 09:28
lastmod: 2024-12-13T11:22:53-05:00
---
>[!question]
>- Relationship between inclusions and [[Homeomorphisms and topological embeddings|embedding]]?

---
# Overview

![[Pasted image 20241028092009.png|400]]

The product topology is the *unique* topology such that each $\pi_\alpha$ is continuous and has the [[Universal properties of topologies|universal property]]: each $g$ is continuous if and only if $g_\alpha$ is continuous.

Related: [[Universal properties of topologies]]

---
# Projection maps

>[!example] Definition: Open map
>A map $f: X \to Y$ between [[Topological spaces and open sets|topological spaces]] $X, Y$ is called an **open map** if for every open subset $U \subseteq X$, the image $f(U)$ is open in $Y$.

>[!example] Definition: Projection maps
>Let $\pi_1 : X \times Y \to X$ and $\pi_2 : X \times Y \to Y$ be defined by the equations
>$$
>\pi_1(x, y) = x \quad \text{and} \quad \pi_2(x, y) = y.
>$$ 
>The maps $\pi_1, \pi_2$ are called the **projections** of $X \times Y$ onto its first and second factors, respectively.

#wip Add information from HW6 about conditions when a projection map is closed

#wip Add information about projections and the fundamental gorup
