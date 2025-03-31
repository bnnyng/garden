---
aliases: 
tags:
  - permanent-note
  - topic-logic-mathematics
status: 
publish: 
date: 2024-12-12 21:12
lastmod: 2025-03-25T10:33:22-04:00
---
# Examples

#wip also showing that a space is connected – assume disjoint and show that one space is trivial/empty

>([[MATH-GU4051|Topology]] HW 5.2) Show that if $U \subset \mathbb R^n$ is [[(Path-)connectedness|connected]] and *open*, then $U$ is path-connected. (Here's a helpful general strategy: given $x_0 \in U$, consider the set $C$ of all points in $U$ which can be joined to $x_0$ by a path in $U$. Show that $C$ is *both closed and open* in $U$, and deduce the statement.)

Let $x_0 \in U$, and let $C$ be the set of all points $x \in U$ which are joined by a path to $U$. We will show that both $C$ and $U \backslash C$ are open in $U$.

Suppose $x \in C$, so there exists a path $f : [0, 1] \to U$ such that $f(0) = x_0$ and $f(1) = x$. Since $U$ is open, we know there exists some $\epsilon > 0$ such that the basic open neighborhood $B(x, \epsilon)$ of $x$ is entirely contained in $U$. We showed in class that balls in $\mathbb R^n$ is path-connected, so for any other point $y \in B(x, \epsilon)$, we can find a path $g: [0,1] \to U$ such that $g(0) = x$ and $g(1) = y$. Then by the [[Continuous functions|pasting lemma]], the function $h : [0, 1] \to U$ defined by 
$$
h(t) = 
\begin{cases}
    f(2t) & \text{if } 0 \leq t \leq 1/2 \\
    g(2t-1) & \text{if } 1/2 \leq t \leq 1
\end{cases}
$$
is continuous, and we have $h(0) = x_0$ and $h(1) = y$, so $y \in C$ as well. Since for any $x \in C$, we can find a neighborhood also contained in $C$, we know that $C$ is the union of open sets and is itself open in $\mathbb R^n$. Then, in particular, the intersection $C \cap U$ is open as well, so $C$ is also open as a subset of $U$.

On the other hand, if $y \in U \backslash C$, then we can pick $\epsilon > 0$ such that we have $B(y, \epsilon) \subseteq U \backslash C$. Otherwise, if there did exist some $x \in B(y, \epsilon) \cap C$, then the previous argument implies we can find a path from $x_0$ to $y$ that goes through $x$, contradicting $y \notin C$. Then $U \backslash C$ is also a union of open sets, which implies the intersection $(U \backslash C) \cap U$ is open, and $U \backslash C$ is open as a subset of $U$.  

Since $U$ is connected, the only sets that are both open and closed in $U$ are $\varnothing$ and $U$ itself, so we conclude that $C = U$ and $U$ is path-connected. $\ \square$