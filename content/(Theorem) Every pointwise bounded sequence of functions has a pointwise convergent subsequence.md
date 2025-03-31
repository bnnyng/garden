---
aliases: 
tags:
  - permanent-note
  - topic-logic-mathematics
status: 
publish: 
date: 2024-12-12 10:23
lastmod: 2024-12-12T10:27:53-05:00
---

>[!abstract] Theorem (Rudin 7.23): Every pointwise bounded sequence of functions has a pointwise convergent subsequence
>If $\{ f_n\}$ is a pointwise bounded sequence of functions on a *countable* set $E$, then there exists a subsequence $\{ f_{n_k}\}$ such that $\{f_{n_k}(x)\}$ converges for every $x \in E$.

^dd5982

*Proof from [[tags/MATH-GU4061|Modern Analysis I]]. Uses:*
- [[(Proof pattern) Diagonal argument]]

Write $E = \{ x_k\}$ as a sequence. Pointwise boundedness means that for any fixed $x_i \in E$, the set of numbers $\{ f_n(x_i)\}$ is also bounded, so we may apply [[(Theorem) Bolzano-Weierstrass]] on $\mathbb C = \mathbb R^2$ to find a subsequence $\{f_{i, k}\}$ that converges as $k \to \infty$.

Now consider the sequences
$$
\begin{matrix}
S_1: & f_{1, 1} & f_{1, 2} & f_{1, 3} &\cdots \\
S_2: & f_{2, 1} & f_{2, 2} & f_{2, 3} &\cdots \\
S_3: & f_{3, 1} & f_{3, 2} & f_{3, 3} &\cdots \\
\vdots
\end{matrix}
$$
with the following properties:
- (i) $S_n \subseteq S_{n-1}$ is a subsequence for $n = 2, 3, 4, \ldots$;
- (ii) Using boundedness of each $\{f_n(x_n)\}$, $S_n$ is chosen such that $\{f_{n, k}(x_n)\}$ converges as $k \to \infty$; ❓
- (iii) The order of the functions is the same in each sequence, so the nested structure implies that functions can “move” left but not right.

Further, consider the diagonal as a sequence
$$
\begin{matrix}
S : & f_{1, 1} & f_{2, 2} & f_{3, 3} &\cdots.
\end{matrix}
$$
It follows from property (iii) that given $S_n$ for $n = 1, 2, 3, \ldots$, the diagonal $S$ is a subsequence of the 
❓ Diagonal is a subsequence of $S_n$ for $n-1$ terms? Then how is it a subsequence at all? Why not just the diagonal has an element in S_n?