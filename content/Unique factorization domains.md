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
lastmod: 2025-04-08T21:11:55-04:00
---
# Overview and basic definition

>[!definition] Unique factorization domain
>An [[Cancellation laws and integral domains|integral domain]] $R$ is a **unique factorization domain (UFD)** if the following hold:
>- (i) For every $r \in R$ that is not $0$ or a [[Algebraic rings|unit]], there exist [[Factorization on integral domains|irreducible]] elements $p_1, \ldots, p_n \in R$ such that $r = p_1 \cdots p_n$;
>- (ii) If $p_1, \ldots, p_n$ and $q_1, \ldots, q_m$ are irreducibles such that $p_1 \cdots p_n = q_1 \cdots q_m$, then $n = m$ and, possibly after a reordering, $p_i, q_i$ are [[Factorization on integral domains|associates]], meaning they differ by a mul

**Related notes:**
- [[Principal ideal domains]]
- [[Euclidean domains]]

---

# Factorization in UFDs


>[!proposition] Existence of the GCD
>If $R$ is a UFD, then the [[Factorization on integral domains|greatest common divisor]] of two elements that are not both $0$ exists.

*Sketch of proof from [[MATH-GU4042|Modern Algebra II]].* $\ \text{ }$ There are three cases to consider. If $r = 0$, then $\gcd(r, s)$ exists and is equal to $s$. If $r$ is a unit, then it has no irreducible factors and so $\gcd(r,s)$ exists and is the **empty product** $1$ (or any other unit). 

When neither $r, s$ is $0$ or a unit, we use the following general strategy: consider the unique factorizations of $r, s$. First, write both elements using the same sequence of irreducibles by substituting in [[Factorization on integral domains|associates]] and multiplying by the other irreducibles to their $0$th powers. Then set the $\gcd$ to be the same sequence of irreducibles to the minimal power at each index, and check that any other element that divides $r, s$ can be written in the same sequence with powers leq the powers in the $\gcd$. $\ \square$


- Properties
	- gcd exists
	- irreducible divides the product then it divides oen of the factors
	- irreducible iff a prime ideal


>[!proposition] A generator of a prime ideal is irreducible
>Let $R$ be an integral domain and let $r \in R$ be a nonzero element. If $(r)$ is a [[Prime and maximal ideals|prime ideal]] (i.e., $(r) \neq R$ and for all $s, t \in R$, if $st \in (r)$ then either one of $s, t \in (r)$), then $r$ is irreducible. The converse holds when $R$ is a [[Unique factorization domains|unique factorization domain]].

*Proof from [[MATH-GU4042|Modern Algebra II]].*
- $\implies$: If $(r) \neq (0)$ is a prime ideal, then $R$ is not a field and $(r) \subseteq R$ is a proper subset. Then by definition, $r$ is not a unit and for all $s, t \in R$, if $r | st$ then $r|s$ or $r | t$. WLOG, suppose $r=st$ and $r | s$, so there exists some $u \in R$ (not assumed to be a unit) such that $r = su$. This implies $r =rut$, so $ut = 1$, and $t$ is a unit while $s$ is an associate of $r$. Then $r$ satisfies the definition of an irreducible element.
- $\impliedby$: Suppose $R$ is UFD and $r$ is irreducible. By definition, $r$ is not a unit, so $(r) \neq R$. We know that whenever $r | st$ for some $s, t \in R$, then either $r | s$ or $r | t$, meaning precisely one of $s, t \in (r)$. Thus, $(r)$ is a prime ideal. $\ \square$