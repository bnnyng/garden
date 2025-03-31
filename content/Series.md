---
aliases:
  - series
  - partial sum
  - converges absolutely
  - converges
  - comparison test
  - ratio test
tags:
  - permanent-note
  - topic-logic-mathematics
  - MATH-GU4061
status: 🔴
publish: 
date: 2024-10-13 18:46
lastmod: 2024-10-15T09:38:21-04:00
---
>[!question]
>- Simply confused by the definition of a converging in terms of partial sums/subsequences—why define limit as partial sums converge and not just addition?

>[!example] Definition: Partial sum, series in $\mathbb C$
>Let $(a_n)_{n \in \mathbb N}$ be a sequence of [[Complex numbers, conjugates, and absolute value|complex numbers]]. The $N$**-th partial sum** is defined to be
>$$
>\sum_{n=0}^N a_n = a_0 + a_1 + \cdots + a_N + \cdots.
>$$
>The **(infinite) series** of $a_n$ is the expression
>$$
>\sum_{n=0}^\infty a_n.
>$$
>We say the series **converges** if the sequence of the $N$-th partial sum converges as $N \to \infty$. In this case, the limit of the series is the **sum** $\sum_{n=0}^N a_n = s$, which represents the *limit of a sequence of sums*.

^d80ac1

---
# Conditions for convergence

>[!abstract] Theorem: Cauchy criterion for series
>Let $(x_n)_{n \in \mathbb N}$ be a sequence in $\mathbb R$. Then the series $\sum_{n=0}^\infty a_n$ converges if and only if $s_N = \sum_{n=1}^N a_n$ is a [[Cauchy sequences and complete metric spaces|Cauchy sequence]]. That is, for all $\epsilon > 0$ there exists $N \in \mathbb N$ such that for all $n \geq m \geq N$, we have
>$$
>\left | \sum_{k=m}^n a_k \right | < \epsilon.
>$$

^b60f35

>[!abstract] Proposition: A series converges if its sequence converges to 0
>If $(a_n)_{n \in \mathbb N}$ be a [[Sequences|sequence]] in $\mathbb R$ such that series $\sum_{n=0}^\infty a_n$ converges, then $\lim_{n \to \infty} a_n = 0$. Conversely, if the sequence $(a_n)_{n \in \mathbb N}$ does not converge to $0$, then the associated series diverges.

^1e6adc

>[!abstract] Proposition: Comparison test for series convergence
>Let $(a_n)_{n \in \mathbb N}$ and $(b_n)_{n \in \mathbb N}$ be sequences in $\mathbb R$ such that $\sum_{n=0}^\infty b_n$ is convergent. If there exists some $N \in \mathbb N$ such that for all $n \geq N$, we have $|a_n| \leq b_n$, then $\sum_{n=0}^\infty a_n$ converges *absolutely*.

^8b4150

>[!abstract] Theorem: Ratio test for series convergence
>A series $\sum_{n=0}^\infty a_n$ converges absolutely if
>$$
>\lim \sup_{n \to \infty} \left | \frac{a_{n+1}}{a_n} \right | < 1.
>$$

^35baae

---
# Absolute convergence

>[!example] Definition: Absolute convergence of a series
>Let $(a_n)_{n \in \mathbb N}$ be a sequence in $\mathbb C$. We say that the series $\sum_{n = 0}^\infty a_n$ **converges absolutely** if $\sum_{n = 0}^\infty |a_n|$ converges.

^b11689

>[!abstract] Proposition: Absolute convergence implies convergence

^ad405d

---
# Examples

#### Harmonic series

>[!example] Definition: Harmonic series
>$$
>\sum_{n=1}^\infty \frac{1}{n}
>$$

#### Geometric series

>[!abstract] Theorem: Convergence of geometric series
>If $0 \leq x < 1$, then the **geometric series** converges to
>$$
>\sum_{n=0}^\infty x^n = \frac{1}{1-x}.
>$$
>If $x \geq 1$, then the series diverges.

^df4dba

#### Series that converges but not absolutely

$$
\sum_{n=1}^\infty (-1)^n \frac{1}{n}
$$