---
aliases:
  - open set
  - open
  - interior
  - interior point
  - ball
  - neighborhood
tags:
  - permanent-note
  - topic-logic-mathematics
  - MATH-UN1208
  - MATH-42X
  - MATH-GU4061
publish: "true"
date: 2024-03-31 14:56
lastmod: 2024-09-24T14:15:16-04:00
status: 🟠
---
>[!example] Definition: Open set in a metric space
>A set $E \subset X$ is **open** if every point of $E$ is an **interior point**. More precisely, for all points $x \in E$, there exists $r>0$ such that the $r$-neighborhood or $r$-ball about $x$ given by 
>$$
>B(x, r) = \{y \in X \ | \ d(x,y) < r \},
>$$ 
>where $d$ is a [[Metrics, metric spaces, and the metric topology|metric]] on $E$, is completely contained in $E$.

^06ed9e

^956753
We have the following facts about open sets:
- The $r$-ball about a point $x$, as defined above, is an open set.
- If $f: X \to Y$ is a [[Pointwise continuity|continuous]] function and $U \subset Y$ is open, then the [[Image and preimage|preimage]] $f^{-1}(U)$ is open as well.
- $f$ is continuous *if and only if* for all open sets $U \subset X$, the image $f(U$) is an open set (see also: equivalent definitions of [[Pointwise continuity#Continuity in metric spaces|continuity in metric spaces]]).

![[Topological spaces and open sets#^f12524]]

Related: [[Closed sets, closures, and dense subsets]], [[Topological spaces and open sets]]

---
# Review

## Exercises

[[MATH-GU4061|Modern Analysis I]]
- Using the definition of an open set in a metric space, prove that arbitrary unions and *finite* intersections of open sets are open. ⭐

[[MATH-42X]]

- Determine whether the following intervals in $\mathbb R$ are open, closed, both, or neither: 
	- Bounded: $(a,b)$, $[a,b)$ $(a,b]$, $[a,b]$
	- Unbounded: $(a,\infty)$, $[a,\infty)$ $(-\infty, a)$, $[-\infty, a]$
	- $\emptyset$ and $\mathbb R$
- Given a finite collection of open sets, is their intersection open or closed? Justify.
	- Does this result also hold for infinite (countable) intersections? Give an example or counter-example. ⭐
- Prove that every ball is open. ⭐

---
# Notes

- The definition for open set used above is a generalization of the following definition from $\mathbb R^n$ to metric spaces:

>[!example] Definition: Open set in $\mathbb R^n$
>A set $U \subset \mathbb R^n$ is **open** if for all $\vec x_0 \in U$, there exists $\epsilon > 0$ such that
>$$ 
>\| \vec x - \vec x_o \|_2 < \epsilon \implies \vec x \in U.
>$$

#wip Define interior point