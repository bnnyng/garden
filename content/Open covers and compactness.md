---
aliases:
  - open cover
  - compact set
  - compactness
  - subcover
tags:
  - permanent-note
  - topic-logic-mathematics
  - MATH-42X
publish: "true"
date: 2024-04-10 20:02
lastmod: 2024-04-10T20:39:04-07:00
status: 🟥
---
Compactness is a topological generalization of [[Closed sets, closures, and dense subsets|closed]] and [[Supremum and infimum|bounded]] sets in $\mathbb R$, and specifically the [[(Theorem) Heine-Borel|Heine-Borel]] property.

---
# Open coverings of a set

>[!example] Definition: Open cover
>An **open cover** of a set $E \subset X$ is a collection of [[Open sets|open sets]] such that $E$ is a subset of the collection. A **subcover** is a subset of the collection that also covers $E$.

---
# Compactness of sets and metric spaces

>[!example] Definition: Compact set
>A set $E \subset X$ is said to be **compact** if every open cover of $E$ has a finite subcover. 

We have the following results for general compact sets:
- (Rudin 2.34) Every compact set is closed.
- (Rudin 2.35) If $E$ is compact, and $F \subset E$ is a closed subset, then $F$ is compact.

>[!example] Definition: Compact metric spaces
>A [[Metrics and metric spaces|metric space]] $(X, d)$ is **compact** if $X$ is compact as a subset of $(X, d)$.

#concept-question Parse this definition!

---
# Review

- Show that $(0, 1]$ is not compact. Is $[a, \infty)$ closed and/or compact?
