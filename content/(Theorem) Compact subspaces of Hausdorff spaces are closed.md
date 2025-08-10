---
aliases: 
tags:
  - permanent-note
  - topic-logic-mathematics
status: 
publish: "true"
date: 2024-11-03 10:15
lastmod: 2025-08-09T00:24:26-04:00
---
>[!theorem] 
>Every compact subspace of a Hausdorff space is closed.

*Proof from [[MATH-GU4061|Modern Analysis I]].* $\quad$ Let $X$ be [[Hausdorff spaces|Hausdorff]] and $K \subseteq X$ be [[Compactness|compact]]. We will show that $A$ is closed by showing that the complement $X \backslash K$ is open.

$\quad$Fix $x \in X \backslash K$. By the Hausdorff property, for every $y \in K$, we may find a neighborhood $U$ of $x$ and $V$ of $y$ such that $U \cap V = \varnothing$. Then $\bigcup_{y \in Y} V_y$ is a cover of $K$, and by compactness, it has a finite subcover. Then there is a corresponding *finite* intersection $\bigcap_{y \in Y}U_y$ of neighborhoods of $x$, which is itself an open neighborhood of $x$ disjoint from $K$. Since $x \in X\backslash K$ is arbitrary, we conclude that every point of $X \backslash K$ is an interior point.$\quad \square$