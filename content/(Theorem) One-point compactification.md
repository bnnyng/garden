---
aliases: 
tags:
  - permanent-note
  - topic-logic-mathematics
status: 
publish: "true"
date: 2024-10-17 18:50
lastmod: 2024-12-17T18:01:22-05:00
---
# Proof

>[!abstract] Theorem: One-point compactification
>A [[Topological spaces and open sets|topological space]] $X$ is [[Local compactness and compactification|locally compact]] and [[Hausdorff spaces|Hausdorff]] if and only if there exists a space $Y$ and an [[Homeomorphisms and topological embeddings|embedding]] $i : X \to Y$ such that:
>- (i) $Y$ is [[Compactness|compact]] and Hausdorff;
>- (ii) $Y \backslash i (X) = \{ p\}$, a single point;
>- (iii) $(Y, i)$ is unique, in the sense that if any other $(Y’, i’)$ satisfies these properties, there exists a *unique* [[Homeomorphisms and topological embeddings|homeomorphism]] $f : Y \to Y’$ such that $f \circ i = i’$ (someday…commutative algebra diagram).

^7fecb4

*Proof from [[MATH-GU4051|Topology]]*.

The reverse implication is easier to show:
1. **Show $X$ is Hausdorff.** Restricting the embedding $i : X \to Y$ to the domain $i (X) \subseteq Y$ gives a homeomorphism. Since $Y$ is Hausdorff, the subspace $i (X)$ is also Hausdorff, and $i (X) \cong X$ implies $X$ is Hausdorff.
2. **Show $X$ is [[Local compactness and compactification|locally compact]].** Let $x \in X$. Since $p$ is the complement of $X$ in $Y$, there exist disjoint neighborhoods $U$ of $i (x)$ and $V$ of $p \in Y$. Then the set $C = Y \backslash V$ is a closed subset of $i(X)$, and hence compact. Now note that $i ^{-1}(U)$ is a neighborhood of $x$ and $i^{-1}(C)$ is compact since the embedding $i$ is a [[Homeomorphisms and topological embeddings|homeomorphism]]. Since $U \subseteq C$ implies $i^{-1}(U) \subset i^{-1}(C)$, we know $X$ is locally compact at $x$. This holds for any $x \in X$, so $X$ is locally compact overall. 

For the forward implication:
1. **Define a topology on $Y$.** We declare open sets to be of two types: (1) any open subset $U \subset X$, and (2) $Y \backslash C$ where $C \subseteq X$ is compact. This is a topology because:
	- **Finite intersections.** We need to consider three cases:
		- (1) intersecting (1) produces another type (1) open set;
		- (1) intersecting (2) produces a type (1) open set. Explicitly, $U \cap (Y \backslash C) = U \cap (X \backslash C)$, and $X$ Hausdorff $\implies C$ closed $\implies$ $X \backslash C$ open;
		- (2) intersecting (2) produces another type (2), since $(Y \backslash C_1) \cap (Y \backslash C_2) = Y \backslash (C_1 \cup C_2)$.
	- **Arbitrary unions.** 
		- (2) union with (2) produces another (2). Explicitly, $\bigcup_\alpha (Y \backslash C_\alpha) = Y \backslash (\bigcap_\alpha C_\alpha)$. We know each $C_\alpha$ closed, since **compact subspaces of Hausdorff spaces are closed** $\implies$ $\bigcap_\alpha C_\alpha$ closed $\implies \bigcap_\alpha C_\alpha$ compact since **closed subspaces of compact spaces are compact**.
		- (1) union with (2) produces (2). Note that arbitrary unions of (1)s and (2)s have already been shown to be (1), (2) respectively, so suffices to consider union of a single type (1) with a single type (2). We have $U \cup (Y \backslash C) =  Y \backslash (C \backslash U)$, and $C \backslash U$ is compact because $X$ is Hausdorff.
1. **Check the [[Subspace (induced) topology|subspace topology]] on $X \subseteq Y$ is the same as the topology on $X$.**  
	- Type (1) open sets: $U \cap X = U$ is clearly open in $X$.
	- Type (2) open sets: $(Y \backslash C) \cap X = X \backslash C$ is open in $X$.
1. **Show $Y$ compact using [[Compactness|compactness]] of $X$.** Let $\mathcal C$ be open cover of $Y$. Then there exists a type (2) set $Y \backslash C$ where $C$ is compact. Then $C$ is covered by all type (1) sets, and we can find a finite subcover $\{U_1, \ldots, U_n\}$. Then $Y$ has the finite cover $\{ U_1, \ldots, U_n, Y\backslash C\}$.
4. **Show $Y$ Hausdorff using [[Local compactness and compactification|local compactness]] of $X$.** Let $x \in X$. Choose a compact set $C \subseteq X$ and an open neighborhood $U$ of $x$ such that $U \subset C$. For any other point $p \in Y$, suppose $p \notin X$ (we know $X$ is Hausdorff, so this is uninteresting). Then $Y \backslash C$ is an open neighborhood of $p$, and we have $U \cap (Y \backslash C)$ for open neighborhoods of $x \neq p$, respectively.

---
# Examples

#### One point compactification of Euclidean space is $\hat {\mathbb R}^n \cong S^n$

This follows from the fact that $\mathbb R^n \cong \mathbb S^n \backslash \{ N\}$, the $n + 1$ dimensional sphere with a point removed (see examples in [[Homeomorphisms and topological embeddings]]).