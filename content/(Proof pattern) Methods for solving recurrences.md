---
aliases:
tags:
  - permanent-note
  - topic-information-computation-statistics
publish:
date: 2025-09-15T12:36:12-04:00
lastmod: 2025-09-25T09:04:06-04:00
---
# Overview

$\quad$ [[Recurrence relation|Recurrences]] are expressions (equations or inequalities) that describe a function in terms of its value on smaller inputs. Solving recurrences entails finding an [[Asymptotic notation|asymptotically tight bound]] on the solution of a recurrence relation $T(n)$, i.e., proving both an upper bound $T(n) = O(g(n))$ and a lower bound $T(n) = \Omega(f(n))$. 

$\quad$ 

---
# Unfolding (expanding) the recursion

$\quad$ See proof of the time complexity of [[Merge sort|merge sort]] for an example.

---
# Substitution (verification)

$\quad$ The **substitution method** for solving recurrences has two steps:
1. Guess the form of the solution.
2. Use mathematical induction—in particular, substituting the guess back into the form of the original recurrence—to find the constants and show that the solution works.

>[!exm] [[@2009cormenIntroduction]] p. 83
>Consider the problem of finding an upper bound on 
>$$
>T(n) = 2(T(\text{floor}(n/2) + n,
>$$
>which resembles the running time of [[Merge sort|merge sort]]. Thus, a good guess for an asymptotic upper bound is $T(n) = O(n \log n)$. The inductive hypothesis says that this bound holds for all $k < n$, and in particular $k = \text{floor}(n/2)$, so we can substitute this into the recurrence to obtain
>$$
>\begin{align}
>T(n) &\leq 2(c \cdot \text{floor}(n/2) \log(\text{floor}(n/2))) + n \\
>&\leq c n \log (n/2) + n = cn \log n - cn \log 2 + n \\
>&= cn \log n - cn + n \leq cn \log n,
>\end{align}
>$$
>which proves the desired upper bound when taking $c \geq 1$.

>[!exm] [[CSOR-W4231]] Lecture 3: Creating a stronger inductive assumption by subtracting a lower-order term
>Consider the recurrence relation 
>$$
>T(n) = T(\text{floor}(n/2)) + T(\text{ceil}(n/2)) + 1.
>$$
>First, we guess that the solution is $T(n) = \Theta(n)$. For the upper bound, we guess $T(n) \leq cn$. This corresponds to the inductive hypothesis
>$$
>T(n) \leq c \cdot \text{floor}(n/2) + c \cdot \text{ceil}(n/2) + 1 = cn + 1,
>$$
>in which case showing that $cn + 1 \leq cn$ impossible and induction does not go through. Changing our guess to $T(n) \leq cn - b$, we verify that
>$$
>T(n) \leq c \cdot \text{floor}(n/2) - b + c \cdot \text{ceil}(n/2) - b + 1 = cn - 2b + 1.
>$$
>To simplify, we know that $cn - 2b +1 \leq cn - b$ whenever $b \geq 1$, and it suffices to choose $c$ large enough to handle boundary conditions (i.e., values for small $n$, often assumed to be $\Theta(n)$; for example, if $T(1) = 3$, then let $b= 1$ and $c = 4$).

---
# Recursion tree

- Tolerable sloppiness? (p. 88); ignore floors and ceilings, assume n is an exact power of the divisor so all subproblems are integers

---
# Master method

$\quad$ **Primary note:** [[(Theorem) Master theorem for solving recurrences]]