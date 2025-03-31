---
aliases: []
tags:
  - permanent-note
  - topic-logic-mathematics
  - MATH-GU4041
status: 
publish: 
date: 2024-12-13 12:18
lastmod: 2025-02-16T13:35:28-05:00
---
# Divisors

>[!example] Definition: Division terminology
>For $n \in \mathbb Z$ and $d \in \mathbb N$, if $n = dq$ for any $q \in \mathbb Z$, we write $d|n$ and say
>- $d$ **divides** $n$ or $d$ is a **divisor** of $n$;
>- $n$ is **divisible** by $d$ or $n$ is a **multiple** of $d$.

>[!abstract] Theorem: Properties of divisors
>$$ d|e \text{ and } e|f \implies d|f $$
>$$ d|m \text{ and } e|n \implies de|mn $$
>$$ d|n \text{ and }n \neq 0 \implies |n| \geq d $$
>$$ c|m \text{ and }c|n \implies c|xm + yn \text{ for all }x,y \in \mathbb Z $$

>[!abstract] Theorem: Division with remainder
>For each $n \in \mathbb Z$ and $d \in \mathbb N$, there exist $q, r \in \mathbb Z$ so that $n = dq + r$ with $0 \leq r < d$.

# Divisors, greatest common divisors, and prime numbers
---

---
## Greatest common divisors

- *(Definition)* Given $x \in \mathbb R$, $[x]$ is the largest **integer** less than or equal to $x$.
- *(Definition)* The **greatest common divisor** $(m,n)$ of *nonzero* integers $m,n \in \mathbb Z$ is the largest positive integer which **divides** both $m$ and $n$.
- *(Theorem C)* **Facts about the greatest common divisor.** If $m,n \in \mathbb Z$ which are not both zero, then:
	- (1) $(m,n)$ is the least positive integer of the form $xy + mn$ for $x,y \in \mathbb Z$;
	- (2) $(m,n)$ is divisible by each *common divisor* of $m$ and $n$. If $d | m$ and $d | n$, then $d | (m,n)$.
- *(Theorem D)* Given $l,m \in \mathbb Z$ which are not both zero, and $n \in \mathbb N$, $(ln, mn) = (l,m)n$.
- *(Theorem E)* Given $l,m,n \in \mathbb N$, if $l | mn$ and $(l, m) = l$, then $l | n$.

---
## Prime numbers
- *(Definition)* A **prime number** is an integer $p > 1$ with $1$ and $p$ as its only **divisors**.
- *(Theorem F)* For each prime $p$ and $m,n \in \mathbb N$, if $p | mn$ then at least of $p|m$ or $p|n$ is true.
- *(Theorem G)* If $p$ and $q_1, \cdots, q_r$ are primes, and $p | q_1, \cdots, q_r$, then $p = q_j$ for some $j$.
- *(Definition)* Two numbers $m,n \in \mathbb N$ are **relatively prime** if $(m,n)=1$, or, equivalently, if they have no common prime factor.

---
## Study questions

#### Definitions
- Divisor
- Prime number
- Greatest common divisor

#### Exercises
- Prove Theorem C.
