---
aliases: 
tags:
  - permanent-note
  - topic-logic-mathematics
status: 
publish: "true"
date: 2024-10-31 18:33
lastmod: 2025-08-09T00:19:11-04:00
---
>[!theorem] A closed subspace of a complete metric space is complete
>If $(X, d)$ is a [[Completeness|complete]] [[Metrics, metric spaces, and the metric topology|metric space]] and $A \subseteq X$ is [[Closed sets and closures|closed]], then $(A, d|_{A \times A})$ is complete.

*Proof from [[MATH-GU4051|Topology]].*

Let $(x_n)$ be a [[Cauchy sequences and complete metric spaces|Cauchy sequence]] in $A$. Then $x_n$ converges to some $x \in X$, and since $A$ is closed, we have $x \in \overline A = A$.