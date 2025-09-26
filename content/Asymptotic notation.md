---
aliases:
  - big O
  - rate of growth
  - order of growth
  - asymptotically tight bound
  - asymptotic upper bound
  - asymptotic lower bound
  - asymptotic bound
tags:
  - permanent-note
  - topic-information-computation-statistics
  - CSOR-W4231
publish:
date: 2025-09-08T14:18:26-04:00
lastmod: 2025-09-22T12:31:44-04:00
status: 🔨 ❓
---
# Overview

$\quad$ **Rate** or **order of growth** is a simplifying abstraction for analyzing the [[Time complexity|running time]] of an [[§ Algorithms and Computational Problems|algorithm]] which only considers the *leading term* of a formula for time complexity without constant coefficients. This emphasizes behavior of an algorithm for large input size $n$ (i.e., how $T(n)$ grows as $n \to \infty$). 

| Notation        | Rate of growth of $f$ vs. rate of growth of $g$ | Formal definition                                                                                                           | Behavior of $f/g$ as $n \to \infty$         |
| --------------- | ----------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| $f = o(g)$      | $<$                                             | For all $c > 0$, there exists $n_0$ such that for all $n \geq n_0$, we have $f(n) \leq c \cdot g(n)$.                       | $f/g \to 0$                                 |
| $f = O(g)$      | $\leq$                                          | There exists $c_2 >0$ and $n_0$ such that for all $n \geq n_0$, we have $f(n) \leq c_2 \cdot g(n)$.                         | $f / g \leq c$ for some $c$                 |
| $f= \Theta(g)$  | =                                               | There exist $c_1, c_2 >0$ and $n_0$ such that for all $n \geq n_0$, we have $c_1 \cdot g(n) \leq f(n) \leq c_2 \cdot g(n)$. | $c_1 \leq f/g \leq c_2$ for some $c_1, c_2$ |
| $f = \Omega(g)$ | $\geq$                                          | There exists $c_1 > 0$ and $n_0$ such that for all $n \geq n_0$, we have $c_1 \cdot g(n) \leq f(n)$.                        | $f/g \geq c$ for some $c$                   |
| $f = \omega(g)$ | $>$                                             | For all $c > 0$, there exists $n_0$ such that for all $n \geq n_0$, we have $f(n) \leq c \cdot g(n)$.                       | $f/g \to \infty$                            |

$\quad$ In this context, the term “**asymptotic**” generally refers to a property that holds when input size $n$ is sufficiently large. For example, the definition of the sets $\Theta, O, \Omega$, etc. require their elements to be **asymptotically nonnegative** functions, meaning $f(n) \geq 0$ for $n$ sufficiently large; **asymptotically positive** functions are analogously defined.

$\quad$ Importantly, the concept of rate is *orthogonal* to performance measure (e.g., worst case, average case); it merely describes the asymptotic bounds of the chosen performance function. Typically, an algorithm is said to be more **efficient** than another if its *worst-case* running time has a lower order of growth.

---
# Formal definitions

#### Asymptotically tight bounds

>[!definition] $\Theta$-notation
>Let $g$ be any function (for algorithms, typically assumed to be defined over $\mathcal N$). We denote
>$$
>\Theta(g(n)) = \{ f \ : \ \exists c_1, c_2 > 0, \ n_0 \text{ s.t. } \forall n \geq n_0, \ 0 \leq c_1g(n) \leq f(n) \leq c_2g(n) \}.
>$$
>If $f$ is a function in the set $\Theta(g(n))$, we say that $g$ is an **asymptotically tight bound** for $f$ and write $f(n) = \Theta(n)$.


#### Asymptotic upper bounds

---
# Properties

![[Pasted image 20250915124115.png]]