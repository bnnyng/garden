---
aliases: 
tags:
  - permanent-note
  - topic-logic-mathematics
  - topic-logic-mathematics
status: 
publish: "true"
date: 2024-10-20 16:28
lastmod: 2025-08-09T00:25:20-04:00
---

>[!theorem] Munkres 28.1
>[[Compactness]] implies limit point compactness in any topological space.

*Proof.* $\quad$We will show the contrapositive: If $X$ is a [[Compactness|compact]] [[Topological spaces and open sets|topological space]] and $A \subseteq X$ is any subset, then if $A$ does not have a [[Limits and accumulation points|limit point]], then $A$ is finite.

$\quad$If $A$ has no limit points, then every point $a \in A$ has a neighborhood $U_a$ that intersects $A$ at that that point alone, i.e., $U \cap A = \{ a\}$. Then these neighborhoods $\bigcup_{a \in A} U_a$ cover $A$. Further, $A$ is *trivially* closed, so the complement $X \backslash A$ is open, and the union $\bigcup_{a \in A} U_a \cup X \backslash A$ covers $X$. Since $X$ is compact, this cover must have a finite subcover, so $A$ is covered by finitely many sets $U_a$. Each $U_a$ contains only one point $a \in A$, so we conclude that $A$ has finitely many points. $\quad \square$

>[!theorem] Munkres 28.2: Equivalent forms of compactness in metric spaces
>Let $(X, d)$ be a [[Metrics, metric spaces, and the metric topology|metrizable]] space. Then the following are equivalent:
>- (i) $X$ is [[Compactness|compact]];
>- (ii) $X$ is limit point compact;
>- (iii) $X$ is sequentially compact
>
>Note that (i) $\implies$ (ii) in any [[Topological spaces and open sets|topological space]].

*Proof that (ii) $\implies$ (iii); also see [[Compactness]], Proof Appendix.*

$\quad$ Let $(x_n)_{n \in \mathbb N}$ be a sequence in $X$, and let $A \subseteq X$ be the set of all points in the sequence. We have two possible cases:

1. **The sequence (or $A$) is finite.** Then there exists some $N \in \mathbb N$ such that for all $n \geq N$, the value $x_n$ is constant. Constant sequences converge trivially.
2. **The sequence (or $A$) is infinite.** By limit point compactness, $A$ has a limit point $x$. Then we can construct a convergent subsequence as follows: fix a basic open neighborhood $B(x, 1)$ about $x$; since $x \in A$ is a limit point, there exists some $x_{n_1} \in A$ that lies in $B(x,1)$. For each $i$, continue fixing points $x_{n_i}$  that lie in the neighborhood $B(x, 1/i)$. Since each ball intersects $A$ at infinitely many points, such an element $x_{n_i}$ always exists, so $x_{n_i} \to x$. $\quad \square$