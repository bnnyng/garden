---
aliases:
tags:
  - fleeting-note
  - CSOR-W4231
date: <% tp.file.creation_date() %>
lastmod: 2025-09-15T14:33:58-04:00
---
```
\text{ s.t. }
```

[[2025-09-15]]

# Week 3, Day 1: Title
---

```
^{\log_b a}
```


**Master method for solving recurrences**

- Steps to the master method:
	1. Divide into subproblems of size $n/b$
	2. Conquer (recursively solve) subproblems $a T(n/b)$
	3. Combine solutions
- Key criterion: Compare $f(n)$ with the function $g(n) = n^{\log_b a}$
- Compare to recursion tree: let $a, b$ be constants
	- Height is $h = \log_b n$
	- Note that number leaves (i.e., amount of time spent in leaves) is $a^{\log_b n} = n^{\log_ba}$, since $$ a^{\log_b n} = a^{\log_a n \cdot \log_b a} = [a^{\log_a n}]^{\log_b a} = n^{\log_b a} $$
	- Remaining terms come from summing across each level → which term dominates? Three cases again $$ f(n) \Theta(n^{\log_b a} + \sum_{i=0}^{\log_b n - 1} a^i f(n/b^i)$$
**Proof in case 2**

- Goal of proof is to determine which term dominates (recover the original statement)
- Case 2: $f(n) = \Theta(n ^{\log_b a})$, want to bound the amount of work spent at different levels (the sum) $$ \sum^{\log} a^i f(n/b^i) \leq \sum^{\log - 1} a^i \cdot c(n^{\log_b a}/b^{i \log_b a}), $$ but $a = b^{\log}…$ so denominator is $a^i$, $$ = \sum c \cdot n^{\log_ba} = cn^{\log_ba}\cdot \log_bn$$
	- #question  How does this summation work?

**Proof in case 1**

$$ f(n) = O(n^{\log_ba} / n^\epsilon) $$
- Everything the same as above, except with additional denominator: $$ \leq \sum a^i c \frac{(n/b^i)^{\log_b a}}{(n/b^i)^\epsilon} = \sum c\frac{n ^{\log_b a}}{n^\epsilon/b^{i\epsilon}} = cn ^{\log_b a}/n^\epsilon \sum b^{i\epsilon} $$
**Example: Merge sort**

$f(n) = n$
$a = 2, b = 2$
$n^{\log_2 2} = n$

**Example: Binary search**

$T(n) = T(n/2) + 1$
$a = 1, b= 2$
$n^{\log_b a} = n^{\log_2 1} = n^0 = 1$
$f(n) = 1 \implies$ case 2 of master theorem, and $T(n) = \Theta(\lg n)$

If instead $T(n) = 2T(n/2) + 1$, $f(n) = 1$
$n^{\log_b a} = n \implies T(n) = \Theta(n)$

**Example**

$T(n) = 2T(\sqrt n) + \log n$
Master thm cannot be applied directly, since not of the form $n/b$
Rewrite: $m = \lg n$, setting $2^m = n$
Let $S(m) = T(2^m) = 2T(2^{n/2}) + m$, then $S(m) = 2S(m/2)+m$
Becomes a case of merge sort: $S(m) = \Theta(m \lg m)$, hence $T(n) = \Theta(\lg n \cdot \lg \lg n)$
“Stare at it until it jumps at you”
