---
aliases: []
tags:
  - permanent-note
  - topic-logic-mathematics
  - topic-logic-mathematics
status: 
publish: 
date: 2024-10-03 14:06
lastmod: 2024-12-10T17:03:06-05:00
---
>[!abstract] Theorem: Every [[Sequences|bounded sequence]] in $\mathbb R^n$ has a convergent subsequence.

*Proof.*

Let $(x_n)_{n \in \mathbb N}$ be a bounded sequence. Then the closure of all points in the sequence 
$$
\overline E = \overline {\{ x_n \ | \ n \in \mathbb N\}}
$$
is [[Compactness|compact]], and therefore limit point compact. Since $(x_n)_{n \in \mathbb N}$ is a sequence in $\overline E$ by construction, and limit point compactness implies subsequence compactness by [[(Theorem) Compactness, limit point compactness, and sequential compactness are equivalent on metric spaces]], it has a convergent subsequence.