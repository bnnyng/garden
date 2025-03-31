---
aliases:
  - UFD
  - unique factorization domain
tags:
  - permanent-note
  - topic-logic-mathematics
  - MATH-GU4042
status: 
publish: 
date: <% tp.file.creation_date() %>
lastmod: 2025-03-30T14:36:05-04:00
---
# Overview and basic definition

>[!example] Definition: Unique factorization domain
>An [[Cancellation laws and integral domains|integral domain]] $R$ is a **unique factorization domain (UFD)** if the following hold:
>- (i) For every $r \in R$ that is not $0$ or a [[Algebraic rings|unit]], there exist [[Factorization on integral domains|irreducible]] elements $p_1, \ldots, p_n \in R$ such that $r = p_1 \cdots p_n$;
>- (ii) If $p_1, \ldots, p_n$ and $q_1, \ldots, q_m$ are irreducibles such that $p_1 \cdots p_n = q_1 \cdots q_m$, then $n = m$ and, possibly after a reordering, $p_i, q_i$ are [[Factorization on integral domains|associates]], meaning they differ by a mul[[Unique factorization domains]].

**Related notes:**
- [[Principal ideal domains]]
- [[Euclidean domains]]

---

>[!abstract] Theorem:


- Properties
	- gcd exists
	- irreducible divides the product then it divides oen of the factors
	- irreducible iff a prime ideal
