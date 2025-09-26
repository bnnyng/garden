---
aliases:
  - recurrence
  - recurrence equation
tags:
  - permanent-note
  - topic-information-computation-statistics
  - CSOR-W4231
publish:
date: 2025-09-15T11:44:31-04:00
lastmod: 2025-09-22T12:30:01-04:00
status: ⚫
---
# Overview

$\quad$ A **recurrence relation** is a property of a [[Sequences|sequence]] in which the $n$th term of a sequence is some combination of the previous terms; the **order** of the relation is the number $k$ of previous terms that appear in the relation, where $k$ is independent of $n$.



**Related notes:**

- [[(Proof pattern) Methods for solving recurrences]]

---
# Examples

#### Running time of recursive algorithms

$\quad$The [[Time complexity|running time]] of a [[Self-reference|recursive]] [[§ Algorithms and Computational Problems|algorithm]], which contains a recursive call to itself, can often be described using a recurrence equation that breaks down the overall running time in terms of the running time on smaller inputs (i.e., subproblems). 