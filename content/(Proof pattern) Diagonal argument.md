---
aliases: 
tags:
  - permanent-note
  - topic-logic-mathematics
status: 
publish: "true"
date: 2024-11-14 17:17
lastmod: 2024-11-19T19:48:55-05:00
---
# Examples

> ([[MATH-GU4051|Topology]] Homework 8.2) Let $X = \mathbb Z \times [0,1]$ and let $Y= X/(\mathbb Z \times \{0\})$, where $\mathbb Z$ has the [[Topological spaces and open sets|discrete topology]]. Show that $X$ is [[Countability axioms|second-countable]] (and hence first-countable). Show that $Y$ is not first-countable (and hence not second-countable). 

*Proof.*

We know $\mathbb Z$ with the discrete topology is second-countable since it has countably many singletons as basis elements, and $[0,1]$ is second countable since it is a subset of the second-countable space $\mathbb R$, so their product $X = \mathbb Z \times [0, 1]$ is second-countable as well. 

We use a **diagonal argument** to show that $Y$ is not first-countable. Suppose, towards a contradiction, that every point of $Y$ has a countable local basis. In particular, let $\mathcal B = \{ B_n\}_{n \in \mathbb N}$ be a countable local basis for $[0] \in Y$, and let $p : X \to Y$ be the canonical projection. If $I_k$ is the $k$-th copy of $[0, 1]$ in $X$, there exists some $B_k \in \mathcal B$ such that $p^{-1}(B_k) \cap I_k$ is a non-empty open subset. In particular, there is some $x_k \in [0, 1]$ such that $p^{-1}(B_k) \cap I_k = [0, x_k) \subset I_k$. Then the union of all such intersections $U = \bigcup_{n \in \mathbb N} [0, x_n/2)$ is open in $X$, so $p(U)$ is open in $Y$. But then $p(U)$ is an open neighborhood of $[0]$ that does not contain any element of $\mathcal B$, so $Y$ does not have a countable local basis at $[0]$. $\ \square$