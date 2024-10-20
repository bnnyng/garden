---
aliases: 
tags:
  - permanent-note
  - topic-logic-mathematics
  - MATH-GU4051
status: 
publish: 
date: 2024-10-17 18:50
lastmod: 2024-10-17T19:28:51-04:00
---



>[!abstract] Theorem (when you can compactify?)
>A [[Topological spaces and open sets|topological space]] $X$ is [[Compactness|compact]] and [[Hausdorff spaces|Hausdorff]] if and only if there exists a space $Y$ and an [[Homeomorphisms and topological embeddings|embedding]] $\mathbf i : X \to Y$ such that:
>- (i) $Y$ is compact and Hausdorff;
>- (ii) $Y \backslash \mathbf i (X) = \{ p\}$, a single point;
>- (iii) $(Y, \mathbf i)$ is unique, in the sense that if any other $(Y’, \mathbf i’)$ satisfies these properties, there exists a *unique* [[Homeomorphisms and topological embeddings|homeomorphism]] $f : Y \to Y’$ such that $f \circ i = i’$ (someday…commutative algebra diagram).

*Proof from [[MATH-GU4051|Topology]]*.

The reverse implication is easier to show:
1. **Show $X$ is Hausdorff.** Restricting the embedding $\mathbf i : X \to Y$ to the domain $\mathbf i (X) \subseteq Y$ gives a homeomorphism. Since $Y$ is Hausdorff, the subspace $\mathbf i (X)$ is also Hausdorff, and $\mathbf i (X) \cong X$ implies $X$ is Hausdorff.
2. **Show $X$ is locally connected.** Let $x \in X$. Since $p$ is the complement of $X$ in $Y$, there exist disjoint neighborhoods $U$ of $\mathbf i (x)$ and $V$ of $p \in Y$. #wip

For the forward implication:
1. **Define a topology on $Y$.** We declare open sets to be of two types: (1) any open subset $U \subset X$, and (2) $Y \backslash C$ where $C \subseteq X$ is compact. This is a topology because:
	- **Finite intersections.** We need to consider three cases:
		- (1) intersecting (1) produces another type (1) open set;
		- (1) intersecting (2) produces a type (1) open set. Explicitly, $U \cap (Y \backslash C) = U \cap (X \backslash C)$, and $X$ Hausdorff $\implies C$ closed $\implies$ $X \backslash C$ open;
		- (2) intersecting (2) produces another type (2), since $(Y \backslash C_1) \cap (Y \backslash C_2) = Y \backslash (C_1 \cup C_2)$.
	- **Arbitrary unions.** 
		- (2) union with (2) produces another (2). Explicitly, $\bigcup_\alpha (Y \backslash C_\alpha) = Y \backslash (\bigcap_\alpha C_\alpha)$. We know each $C_\alpha$ closed, since **compact subspaces of Hausdorff spaces are closed** $\implies$ $\bigcap_\alpha C_\alpha$ closed $\implies \bigcap_\alpha C_\alpha$ compact since **closed subspaces of compact spaces are compact**.
		- (1) union with (2) produces (2). Note that arbitrary unions of (1)s and (2)s have already been shown to be (1), (2) respectively, so suffices to consider union of a single type (1) with a single type (2). We have $U \cup (Y \backslash C) =  Y \backslash (C \backslash U)$, and $C \backslash U$ is compact. ❓why?
1. **Check thee [[Subspace (induced) topology|subspace topology]] on $X \subseteq Y$ is the same as the topology on $X$.**  
	- Type (1) open sets: $U \cap X = U$ is clearly open in $X$.
	- Type (2) open sets: $(Y \backslash C) \cap X = X \backslash C$ is open in $X$.
1. **Show $Y$ compact using [[Compactness|compactness]] of $X$.** Let $\mathcal C$ be open cover of $Y$. Then there exists a type (2) set $Y \backslash C$ where $C$ is compact. C covered by finite subset obviously, so add Y\backslash C to this finite subcover makes a finitie subcover.
2. **Show $Y$ Hausdorff using [[Local compactness and compactification|local compactness]] of $X$.** Let $x \in X$. Choose U open nbhd of X, C compact, U subset C (local compactness). Then p is in the complement (otherwise uninteresting, since X is known Hausdorff) and x in U and Y \backslash C \cap U empty.

- Complements of compact sets
	- Closed subspeace of Hausdorff is compact
	- Compact subspace of Hausdorff is closed