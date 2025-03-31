---
aliases: 
tags:
  - permanent-note
  - topic-logic-mathematics
status: 
publish: "true"
date: 2024-10-27 08:19
lastmod: 2025-03-25T10:34:01-04:00
---


>[!abstract] Theorem (Munkres 26.5 & 26.6): Continuous functions and compactness
>- (i) If $f : X \to Y$ is [[Continuous functions|continuous]] and $X$ is compact, then $f(X)$ is compact.
>- (ii) Let $f: X \to Y$ be a continuous bijection. If $X$ is compact and $Y$ is [[Hausdorff spaces|Hausdorff]], then $f$ is a [[Homeomorphisms and topological embeddings|homeomorphism]].

^369996

*Proof of (i) from [[MATH-GU4061|Modern Analysis I]].*

Suppose $K \subseteq X$ is a compact subset and $f : X \to Y$ is continuous. Then let $\{ U_\alpha\}$ be an open cover of $f(K)$. By continuity of $f$, the preimages $f^{-1}(U_\alpha)$ are also open and cover $K$. Since $K$ is compact, we may find a finite subcover $\{f^{-1}(U)_i \}_{i=1}^n$. Then the union of the images of this collection is a finite subcover of $f(K)$, and we conclude that $f(K)$ is compact.

*Sketch of (ii) from [[MATH-GU4061|Modern Analysis I]]*.

Suppose $(X, d_X)$ and $(Y, d_Y)$ are [[Metrics, metric spaces, and the metric topology|metric spaces]]. To show $f^{-1}$ is continuous, it suffices to show that $f(A)$ is open for any $A \subseteq X$.

1. If $A \subseteq X$ is open, then $A^C$ is closed and therefore compact by [[(Theorem) Heine-Borel|Heine-Borel]].
2. $A^C$ compact $\implies$ $f(A^C)$ compact, hence closed by [[(Theorem) Heine-Borel|Heine-Borel]] again.
3. Conclude that $f(A)$ open.

*Sketch of (ii) from [[MATH-GU4051|Topology]].*

To show $f^{-1}$ is continuous, we want to show that *images of closed sets under $f$ are also closed*. This can be done by applying the earlier lemmas.
1. Suppose $A \subseteq X$ closed. Since $X$ is compact, $A$ is also compact (Munkres 26.2).
2. Since $A \subseteq X$ is compact, its image under a continuous function $f(A) \subseteq Y$ is also compact (above; Munkres 26.5).
3. By [[(Theorem) Compact subspaces of Hausdorff spaces are closed]], since $f(A) \subseteq Y$ is compact and $Y$ is Hausdorff, $f(A)$ is also closed. 