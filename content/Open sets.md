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
publish: "true"
date: 2024-03-31 14:56
lastmod: 2024-04-17T16:26:45-07:00
status: 🟨
---
>[!example] Definition: Open set in a metric space
>A set $E \subset X$ is **open** if every point of $E$ is an **interior point**. More precisely, for all points $x \in E$, there exists $r>0$ such that the $r$-neighborhood or $r$-ball about $x$ given by 
>$$
>B(x, r) = \{y \in X \ | \ d(x,y) < r \},
>$$ 
>where $d$ is a [[Metrics and metric spaces|metric]] on $E$, is completely contained in $E$.

^06ed9e

^956753
We have the following facts about open sets:
- The $r$-ball about a point $x$, as defined above, is an open set.
- If $f: X \to Y$ is a [[Continuity|continuous]] function and $U \subset Y$ is open, then the [[Image and preimage|preimage]] $f^{-1}(U)$ is open as well.
- $f$ is continuous *if and only if* for all open sets $U \subset X$, the image $f(U$) is an open set (see also: equivalent definitions of [[Continuity#Continuity in metric spaces|continuity in metric spaces]]).

Related: [[Closed sets, closures, and dense subsets]]

---
# Review

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
