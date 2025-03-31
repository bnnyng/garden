---
aliases:
  - uniform limit theorem
  - Dini's convergence theorem
tags:
  - permanent-note
  - topic-logic-mathematics
  - MATH-GU4061
status: 🔴🔨
publish: "true"
date: 2024-09-27 22:20
lastmod: 2024-12-19T02:18:59-05:00
---
>[!abstract] Theorem (Munkres 21.6, Rudin 7.12): Uniform limit
>Let $f_n : X \to Y$ be a sequence of [[Continuous functions|continuous functions]] from the [[Topological spaces and open sets|topological space]] $X$ to the [[Metrics, metric spaces, and the metric topology|metric space]] $Y$. If $(f_n)$ [[Convergent sequences of functions|converges uniformly]] to $f$, then $f$ is continuous.

^b734a7

#wip

Note that the converse is true only under particular conditions.


>[!abstract] Theorem (Rudin 7.13): Dini’s convergence theorem
>Let $X$ be compact, and suppose $(f_n)$ is a sequence of continuous functions on $X$ such that:
>- (i) There exists a *continuous* function $f$ on $X$ such that $f_n \to f$ *pointwise*;
>- (ii) $f_n(x) \geq f_{n + 1}(x)$ for all $x \in X$, $n = 1, 2, 3, \ldots$.
>
>Then $f_n \to f$ converges *uniformly* on $X$.

^033714

*Proof from [[tags/MATH-GU4061|Modern Analysis I]]. Uses:*
- [[(Proof pattern) Defining a new function]]
- [[(Proof pattern) Trivial subset]]

Define a new function $g_n =f_n - f$. We know $g_n$ is continuous for all $n$, and $g_n \to 0$ pointwise. It remains to show that $g_n \to 0$ uniformly on $X$.

Fix $\epsilon > 0$, and let $K_n$ be the set of all $x \in X$ such that $g_n(x) \geq \epsilon$. Since $g_n$ is continuous and the set 
$$
C = \{ g_n(x) \ | \ g_n(x) \geq \epsilon \}
$$ is finite (❓ is this why?), the pre-image $g^{-1}(C) = K_n$ is closed, hence [[Compactness|compact]] as a subset $K_n \subseteq X$. Given any $x \in X$, the fact that $g_n \to 0$ implies that $x \notin K_n$ for sufficiently large $n$. Thus $x \notin \bigcap K_n$ and $\bigcap K_n = \varnothing$. Further, the fact that $g_n(x) \geq g_{n+1}(x)$ implies $K_{n+1} \subseteq K_n$ is a nested sequence of compact sets. Then we may apply the negation of [[(Theorem) Cantor intersection]] to find some $N$ such that $K_N$ is empty, and it follows that
$$
n \geq N \implies 0 \leq g_n(x) < \epsilon
$$
for all $x \in X$. 
