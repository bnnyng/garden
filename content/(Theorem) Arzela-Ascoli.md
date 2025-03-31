---
aliases: 
tags:
  - permanent-note
  - topic-logic-mathematics
  - MATH-GU4061
status: 🔴🔨
publish: 
date: 2024-12-03 14:59
lastmod: 2024-12-18T22:33:03-05:00
---
# Arzela-Ascoli I

The first Arzela-Ascoli theorem generalizes the [[(Theorem) Bolzano-Weierstrass]] to sequences of functions.

>[!abstract] Theorem: Arzela-Ascoli I
>Let $(X, d)$ be a [[Compactness|compact]] metric space, and let $f_n : X \to \mathbb R$ be a sequence of functions that is [[Bounded sequences of functions and equicontinuity|pointwise bounded]] and [[Bounded sequences of functions and equicontinuity|uniformly equicontinuous]], meaning that for all $\epsilon > 0$, there exists a single $\delta > 0$ such that for any $x, y \in X$, we have
>$$
>d(x, y) < \delta \implies |f_n(x) - f_n(y)| < \epsilon;
>$$
>”equicontinuous” refers to the fact that the same $\delta$ works for all $n \in \mathbb N$. Then $f_n$ has a uniformly convergent subsequence.

*Proof from [[tags/MATH-GU4061|Modern Analysis I]]. Uses:*
- [[(Proof pattern) Middle-man trick]]

1. Since $X$ is a compact metric space, $X$ is [[Countability axioms|separable]], meaning it has a countable dense subset (🔺 consider the [[Topological bases and subbases|basis]] of balls with rational centers, then take a finite subcover of the largest balls).
3. By [[(Theorem) Every pointwise bounded sequence of functions has a pointwise convergent subsequence]] there is a subsequence of functions $(f_n)$ that converges for all $x \in E$. 
4. The subsequence $(f_n)$ is also [[Bounded sequences of functions and equicontinuity|uniformly equicontinuous]] by hypothesis, so given some $\epsilon > 0$, consider the $\delta(\epsilon) > 0$ that satisfies the definition: for all $x, y \in X$ and $n \in \mathbb N$, we have
$$
d(x, y) < \delta(\epsilon) \implies |f_n(x) - f_n(y)| < \epsilon.
$$
7. Since $E$ is dense in $X$, there exist points $x_1, \ldots, x_k \in E$ such that $X \subseteq \bigcup_{i = 1}^k B(x_i, \delta)$ is a finite cover of $X$. Further, since $(f_n(x_i))_{n \in \mathbb N}$ converges for $i \in \{ 1, \ldots, k\}$, the sequence is also [[Cauchy sequences and complete metric spaces|Cauchy]], so there exists $N_i \in \mathbb N$ such that for all $n, m \geq N_i$, we have
$$
|f_n(x_i) - f_m(x_i)| < \epsilon.
$$
6. (Put together the inequalities.) Set $N = \text{max}\{ N_1, \ldots, N_k\}$, and let $y \in X$. Then there exists $x_i \in E$ such that $d(x, y) < \delta$, and
$$
\begin{align}
n,m \geq N &\implies |f_n(y) - f_m(y) | \leq |f_n(y) - f_n(x_i)| \\
&+ |f_n(x_i) - f_m(x_i)| + |f_m(x_i) - f_m(x)| < 3 \epsilon.
\end{align}
$$

---
# Arzela-Ascoli II

The second Arzela-Ascoli generalizes [[(Theorem) Heine-Borel]] to spaces of continuous functions.

>[!abstract] Theorem: Arzela-Ascoli II
>Let $(X, d)$ be a [[Compactness|compact]] metric space, and let $C(X, \mathbb R)$ be the space of [[Continuous functions|continuous]] real-valued functions $f : X \to \mathbb R$ equipped with the [[Metrics, metric spaces, and the metric topology|supremum norm]] $d^\infty$ defined by
>$$
>d^\infty(f, g) = \sup_{x \in X}|f(x) - g(x)|
>$$
>for some functions $f, g \in C(X, \mathbb R)$. Let $A \subseteq C(X , \mathbb R)$. Then $A$ is compact if and only if $A$ is closed, bounded, and [[Bounded sequences of functions and equicontinuity|uniformly equicontinuous]].

*Proof from [[tags/MATH-GU4061|Modern Analysis I]].*

($\implies$) 

Since $A$ is compact and $C(X, \mathbb R)$ is a metric space when equipped with $d^\infty$, $A$ is also closed and bounded. 

For uniform equicontinuity, fix $\epsilon > 0$. We have by compactness a finite cover of neighborhoods of functions $A \subseteq \bigcup_{i=1}^kB(f_i, \epsilon)$. Since $X$ is compact, we apply [[(Theorem) Continuous functions on compact sets are uniformly continuous]] to find for each $f_i$ some exists $\delta_i > 0$ such that for all $x, y \in X$,
$$
d_X(x, y) < \delta_i \implies |f_i(x) - f_i(y)| < \epsilon.
$$
Taking the minimum $\delta_i$ that satisfies this for all $f_i$ gives the definition of [[Bounded sequences of functions and equicontinuity|uniform equicontinuity]].