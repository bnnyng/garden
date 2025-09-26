---
aliases:
tags:
  - fleeting-note
  - CSOR-W4231
date: <% tp.file.creation_date() %>
lastmod: 2025-09-15T16:10:50-04:00
---
[[2025-09-08]]
# Week 2, Day 1: Asymptotic Notation
---

Main note: [[Asymptotic notation]], [[Sorting problems]]

**Rate (order) of growth**

A SET of functions… we say $f$ belongs to $\Theta(g)$
$$ 
\Theta(g) = \{ f \mid \exists \ c_1, c_2 > 0, n_0, \ c_1 g(n)  < f(n) < c_2 g(n) \ \forall n > n_0 \}
$$

- Example: $3n^2 = \Theta(n^2)$, we can pick $c_1 = 3, c_2 = ?$
	- $3n^2 + 5n$, pick $c_1 = 3, c_2 = 4$ for $n_0 = 100$ (sufficiently large) or $c_2 = 8$

**Upper bound only (half of $\Theta$)**

A function in this set is bounded above by $g$ at some point
$$ O(g) = \{ f \mid \exists n_0, \ c_2 > 0 \text{ s. t. } f(n) \leq c_2 g(n) \ \forall n > n_0 \} $$
- Example: $n$ is $O(n^2)$ but not $\Theta$ (not bounded below by a multiple of $n^2$

**Lower (“$f$ grows at least as fast as $g$”)**

$$\Omega(g) = \{ f \mid \exists n_0, \ c_1 > 0 \text{ s.t. } f(n) \geq c_1 g(n) \ \forall n > n_0 \} $$

QUESTION: notation of equality? Or inclusion in the set
- Examples: $\Omega(n^2) = 3n^2$, since $3n^2 \geq c_1n^2$ with $c_1 = n^2$. 
	- $n^5/100$, with $c_1 = 1$ and $n_0 = 100$ (but not in $\Theta$: grows STRICTLY FASTER)

**Strictly slower than $g$**

$$ o(g) = \{ f \mid \forall c > 0, \exists n_0 \text{ s.t. } \forall n \geq n_0, f(n) \leq c g(n)$$

Analogous definition for “strictly faster than $g$” denoted $\omega(g)$
Note that $o \subseteq O$ and $\omega \subseteq \Omega$
- Relevant inclusions: $\Theta \implies O, \Omega$
- Example for the opposite inclusion: $3n = O(n)$, but $3n \neq o(n)$ since it is not the case that for *all* constants $c \geq 0$, exists $n_0$ such that $3n \leq cn$ 

| Notation        | Rate of growth of $f$ vs. rate of growth of $g$ | Formal definition                                                                                                           | Behavior of $f/g$ as $n \to \infty$         |
| --------------- | ----------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| $f = o(g)$      | $<$                                             | For all $c > 0$, there exists $n_0$ such that for all $n \geq n_0$, we have $f(n) \leq c \cdot g(n)$.                       | $f/g \to 0$                                 |
| $f = O(g)$      | $\leq$                                          | There exists $c_2 >0$ and $n_0$ such that for all $n \geq n_0$, we have $f(n) \leq c_2 \cdot g(n)$.                         | $f / g \leq c$ for some $c$                 |
| $f= \Theta(g)$  | =                                               | There exist $c_1, c_2 >0$ and $n_0$ such that for all $n \geq n_0$, we have $c_1 \cdot g(n) \leq f(n) \leq c_2 \cdot g(n)$. | $c_1 \leq f/g \leq c_2$ for some $c_1, c_2$ |
| $f = \Omega(g)$ | $\geq$                                          | There exists $c_1 > 0$ and $n_0$ such that for all $n \geq n_0$, we have $c_1 \cdot g(n) \leq f(n)$.                        | $f/g \geq c$ for some $c$                   |
| $f = \omega(g)$ | $\geq$                                          | For all $c > 0$, there exists $n_0$ such that for all $n \geq n_0$, we have $f(n) \leq c \cdot g(n)$.                       | $f/g \to \infty$                            |

**Equivalent way to state in terms of rational functions**

$f/g \to 0$ as $n \to \infty$ (large $n$)
$f/g \leq c$ for some $c$

Example: $f = 3n^3 - 4n^2 + 10$, $g = n^2$
$f/g = 3n - 4 + 10/n^2$, for $n \to \infty$ then $f/g \to \infty - 4 + 0 = \infty$
$\implies f = \omega(g)$
With $g = n^3$, we have $f/g \to 3 - 0 + 0 = 3$ as $n \to \infty$
$\implies f = \Theta(n^3)$

Example: $f = 5n^7 - 3n^4 + 8n - 2 = \Omega(n^7)$
- When looking at a polynomial, immediately know that the rate of growth is the same as the highest power

**Logarithms?**

$\log_{10}n = c \cdot \log_2n$ with $c = \log_{10}2$.
- Recall change of log: $\log_{10}n / \log_2n = \log_{10}2$
- Upshot: all logarithms, regardless of base, have the same rate of growth
- e.g., $\log_{10}n = \Theta(log_2n)$

Example: $n$ grows faster than $\log_2n$
Verify: 
- Use $\log_e(n)$, $e = 2.87$

$(\log_2 n)’/(n^c)’ = (1/n)/(c\cdot n^{c-1})) = 1/(cn^c) \to 0$
QUESTION: $\sqrt n$ under $n^c$ denominator why?
Hence $\log_2n = o(n^c)$ for all $c > 0$

**General inequalities**

constant < log < $\sqrt n$ < $n$ < $n^? < n^2 < n^3 < \cdots < 2^n < 3^n < \cdots <  n ! < \cdots < n^n$
Functions to the power of $n$ are **exponential**
Functions to the power of a natural number are **polynomial**

Can also write $f(n) = 3n^2 + O(n)$, acceptable because $O(n)$ is “dominated” by $3n^2$ and hence less important

Do exercises to feel more comfortable

**Specific algorithms**

Example: (recursive) Insertion sort
If $n = 1$, nothing to do
If $n > 1$
1. INS-SORT($A[1 \cdots n - 1 ]$) 
2. Insert $A[n]$ in the right place
3. Return $A$

Notation: 
A[1…n]
|
A[1…n-1]
| 
…
|
A[1]

What is the worst case time for $n$? I.e. if $n$ is larger than everything else
$T(n) = T(n-1) + \Theta(n)$
Base case: $T(1) = \Theta(1)$
QUESTION: equivalence of time and steps?

Rewrite this as $T(n) = T(n-1) + c \cdot n$ (unfolding (expanding) recurrance)
$T(n-1) = T(n-2) + c(n-1)$
$T(n-2) = T(n-3) + c(n-2)$
Hence $T(n) = T(n-2) + c((n-1) + n)$
$= T(n-3) + c((n-2) + (n-1) + n)$
$= T(1) + c(2 + 3 + \cdots + n)$

For simplicity take $T(1) = c$, hence $T(n) = c(1 + \cdots + n)$
$=c (n(n+1)/2) = c(n^2/2 + n/2) = \Theta(n^2)$






```
\text{ s.t. }
```