---
aliases: 
tags:
  - permanent-note
  - topic-logic-mathematics
status: 
publish: "true"
date: 2024-10-31 18:27
lastmod: 2024-10-31T18:38:16-04:00
---
>[!abstract] Theorem: Every compact metric space is complete.

*Proof from [[MATH-GU4051|Topology]].*

Let $(X, d)$ be a [[Compactness|compact]] [[Metrics, metric spaces, and the metric topology|metric space]] and let $(x_n)_{n \in \mathbb N}$ be a [[Cauchy sequences and complete metric spaces|Cauchy sequence]]. By [[Sequences|sequential compactness]], there exists a convergent subsequence $x_{n_i} \to x$. We want to show that the entire sequence has $x_n \to x$.

Given $\epsilon > 0$, convergence of the subsequence implies there exists $N \in \mathbb N$ such that if $i \geq N$, then $d(x_{n_i}, x) < \epsilon / 2$, and Cauchy-ness of the overall sequence implies there exists $M \in \mathbb N$ such that if $n, m \geq M$, then $d(x_n, x_m) < \epsilon / 2$. Then if $k \geq K = \max(N, M)$, pick any $n_i \geq K$. Then 
$$
d(x_n, x) \leq d(x_n, x_{n_i}) + d(x_{n_i}, x_n) = \epsilon/2 + \epsilon/2 = \epsilon.
$$