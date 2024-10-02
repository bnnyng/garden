---
aliases:
  - Cauchy
  - Cauchy sequence
tags:
  - permanent-note
  - topic-logic-mathematics
  - MATH-GU4061
status: 🟡
publish: 
date: 2024-10-01 13:44
lastmod: 2024-10-01T14:14:02-04:00
---
# Overview


>[!example] Definition: Cauchy sequence in a metric space
>A **Cauchy sequence** in a [[Metrics, metric spaces, and the metric topology|metric space]] $(X, d)$ is a [[Sequences|sequence]] $(x_n)_{n \in \mathbb N}$ in $X$ such that for all $\epsilon > 0$, there exists $N \in \mathbb N$ where 
>$$
>m, n \geq N \implies d(x_n, x_m) < \epsilon.
>$$

^e1c6fb

Cauchy sequences are closely related to [[Sequences|convergent sequences]]; however, a Cauchy sequence has terms that are getting closer and closer to each other, while a convergent sequence has terms that are approaching some fixed limit value.

---
# Boundedness and convergence

>[!abstract] Proposition: Cauchy sequences *in metric spaces* are bounded
>Let $(X, d)$ be a [[Metrics, metric spaces, and the metric topology|metric space]], and let $(x_n)_{n \in \mathbb N}$ be a Cauchy sequence in $X$. Then $(x_n)_{n \in \mathbb N}$ is [[Bounded sets and functions|bounded]].
^66bce9

#concept-question What about in a general [[Topological spaces and open sets|topological space]]?

>[!abstract] Theorem:
>Let $(X, d)$ be a [[Compact sets|compact]] [[Metrics, metric spaces, and the metric topology|metric space]], and let $(x_n)_{n \in \mathbb N}$ be a Cauchy sequence in $X$. Then $(x_n)_{n \in \mathbb N}$ converges.

^e8fe08

---
# Review

- Prove or justify the following facts:
	- Cauchy sequences are [[Bounded sets and functions|bounded]] (hint: choose $N$ that satisfies the definition of boundedness).
	- [[Sequences|Convergent sequences]] are Cauchy (hint: choose $N$ that satisfies the definition of Cauchy).
	- Cauchy does not imply convergence.

---
# Proof appendix

![[Cauchy sequences#^66bce9]]

*Proof*.

Since $(x_n)_{n \in \mathbb N}$ is Cauchy, there exists $N \in \mathbb N$ such that for all $n, m > N$, we have $d(x_n, x_m) < 1$. In particular, we know $d(x_N, x_n) < 1$ for all $n > N$. Set 
$$
R = \text{max}\{ 1, \ d(x_N, x_n) : n < N\}.
$$
Then for all $n \in \mathbb N$, we have $d(x_N, x_n) \leq R$, so $(x_n)_{n \in \mathbb N}$ is bounded.

![[Cauchy sequences#^e8fe08]]

*Proof.*

- Use cantor’s intersection theorem