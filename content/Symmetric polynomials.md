---
aliases:
  - symmetric polynomial
  - symmetric rational function
  - elementary symmetric function
tags:
  - permanent-note
  - topic-logic-mathematics
  - MATH-GU4042
status: 
publish: 
lastmod: 2025-05-08T19:37:45-04:00
date: 2025-05-08T19:11:03-04:00
---
# Overview


---
# Symmetric polynomials and rational functions

>[!definition] Symmetric polynomial, symmetric rational function
>Let $K$ be a field, and consider the ring $K[t_1, \ldots, t_n]$ as well as its [[Field of quotients of an integral domain|field of quotients]] $K(t_1, \ldots, t_n)$. A [[Polynomial rings|polynomial]] $P(t_1, \ldots, t_n) \in K[t_1, \ldots, t_n]$ is a **symmetric polynomial** if $P$ is unchanged after permuting the variable:
>$$
>P(t_1, \ldots, t_n) = P(t_{\sigma(1)}, \ldots, t_{\sigma(n)}).
>$$
>for all permutations $\sigma \in S_n$ in the [[Permutation groups|symmetric group]]. A **symmetric rational function** is defined similarly.

$\quad$ The group $S_n$ defines an [[Group actions and orbits|group action]] on $K[t_1, \ldots, t_n]$ and $K(t_1, \ldots, t_n)$ by setting 
$$
\sigma(P)(t_1, \ldots, t_n) = P(t_{\sigma(1)}, \ldots, t_{\sigma(n)}).
$$
In particular, we have $S_n \leq \text{Aut}\ K [t_1, \ldots, t_n]$, the group of [[Galois groups|automorphisms]] of $K[t_1, \ldots, t_n]$, and every $\sigma \in S_n$ fixes $K$. Thus we can define the fixed subring
$$
K[t_1, \ldots, t_n]^{S_n} = \{ P \in K[t_1, \ldots, t_n] \ : \sigma(P) = P \text{ for all }\sigma \in S_n \} \leq K[t_1, \ldots, t_n].
$$
Likewise, the **field of symmetric rational functions** is the subfield of $K(t_1, \ldots, t_n)$ fixed by $S_n$. 

---
# Elementary symmetric functions

>[!definition] Elementary symmetric functions in $n$ variables
>The elementary symmetric functions in $n$ variables $t_1, \ldots, t_n$ are the functions 
>$$
>s_k = \sum_{1 \leq a_1 < \ldots < a_k \leq n} t_{a_1}\cdots t_{a_k},
>\quad \quad
>k = 1, \ldots, n.
>$$

$\quad$ For example, in $n$ variables, we have
$$
\begin{align}
s_1 &= \sum_{1 \leq a \leq n}t_a = t_1 + \cdots + t_n \\
s_2 &= \sum_{1 \leq a < b \leq n} t_1t_2 + t_1t_3 + t_2 t_3 + \cdots + t_{n-1}t_n \\
s_3 &= \sum_{1 \leq a < b < c \leq n} t_1t_2t_3 + t_1t_2t_4 + t_1t_3t_4 + \cdots + t_{n-1}t_{n-2}t_n \\
&\vdots \\
s_n &= t_1 \cdots t_n.
\end{align}
$$

![[Pasted image 20250508193728.png]]




---

# Code snippets

```
P(t_1, \ldots, t_n)
```

```
K[t_1, \ldots, t_n]
```