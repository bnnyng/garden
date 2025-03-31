---
aliases:
  - fundamental theorem of arithmetic
tags:
  - permanent-note
  - topic-logic-mathematics
status: 
publish: 
date: <% tp.file.creation_date() %>
lastmod: 2025-02-23T18:36:54-05:00
---
# Overview

In terms of [[Algebraic rings|ring]] theory, **fundamental theorem of arithmetic** states that every *nonconstant* [[Polynomial rings|polynomial]] $f \in F[x]$ with coefficients in a [[Algebraic fields|field]] $F$ has a unique factorization into [[Factorization on polynomial rings|irreducible]] polynomials. 


---
# Statement and proof

>[!abstract] Theorem: Unique factorization of nonconstant polynomials
>Let $f \in F[x]$ be a *nonconstant* [[Polynomial rings|polynomial]], i.e., $\deg f \geq 2$. Then there exist [[Factorization on polynomial rings|irreducible]] polynomials $p_1, \ldots, p_k \in F[x]$ such that $$ f = p_1 \cdots p_k. $$ Further, this factorization is *unique* in the following sense: if $q_1, \ldots, q_\ell$ are polynomials and $$ p_1 \cdots p_k = q_1 \cdots q_\ell, $$ then $k = \ell$ and, possibly after a reordering of $q_i$, for every $1 \leq i \leq k$ there exists $c_i \in F^*$ such that $q_i = c_ip_i$.

*Proof from [[MATH-GU4042|Modern Algebra II]].*

**Existence:** We argue by (complete) [[(Proof pattern) Mathematical induction|induction]] on $\deg f$. 
- **Base case:** If $\deg f = 1$, i.e., $f$ is linear, then $f$ is [[Factorization on polynomial rings|irreducible]] and we can take $k = 1$, $p_1 = f$.
- **Inductive step:** Let $f$ be a polynomial of degree exactly $n > 1$, and suppose existence has been shown for all polynomials of degree less than $n$. If $f$ is irreducible, then we again set $k = 1$, $p_1 = f$. Otherwise, $f$ is reducible and we can factor $f = gh$ as the product of *nonconstant* polynomials $g, h$ with *strictly smaller* degrees. By the inductive hypothesis, both $g,h$ have factorizations in terms of irreducible polynomials, hence the product $f = gh$ does as well. 

**Uniqueness:** Suppose $$ f = p_1 \cdots p_k = q_1 \cdots q_\ell, $$ where all $p_i$ and $q_j$ are irreducible. We prove uniqueness by [[(Proof pattern) Mathematical induction|induction]] on the $k$ factors in the first product.

- **Base case:** If $k = 1$, then $f = p_1$ and $p_1$ must divide the product $\prod q_j$. Since an irreducible polynomial that divides a product must in particular divide one term of the product, we know there exists some distinguished $1 \leq j_0 \leq \ell$ such that $p_1 | q_{j_0}$; after a reordering we can assume $j_0 = 1$. But since $q_1$ is irreducible and $p_1$ is not a unit, then there exists a unit $c \in F^*$ such that $q_1 = cp_1$. Finally, suppose towards a contradiction that $\ell \neq 1$, i.e., $\ell \geq 2$. Then $$ p_1 = cp_1 q_2\cdots p_\ell \implies 1 = c q_2 \cdots q_\ell, $$ where the implication follows from applying the [[Cancellation laws and integral domains|cancellation law]] law to $p_1 \neq 0$. Thus $q_i$ must be a unit for $i \geq 2$, which contradicts the fact that $q_i$ is irreducible. This proves uniqueness for $k = 1$.
- **Inductive step:** Suppose $f$ has the two separate factorizations into irreducible polynomials as above, and that uniqueness has been proven for products of $k - 1$ irreducible polynomials. Again, $p_1$ divides a distinguished element $q_{j_0}$, which we can take to be $q_1$ after a reordering. Thus, there exists $c \in F^*$ such that $q_1 = c p_1$, and we again obtain $$ p_1 \cdots p_k = (c p_1)q_2 \cdots q_\ell \implies p_2 \cdots p_k = (c q_2) \cdots q_\ell, $$ where the implication follows from cancellation. Since the product on the left-hand side involves $k-1$ factors, by the inductive hypothesis we have $k-1 = \ell - 1$ and hence $k = \ell$. Moreover, the inductive hypothesis implies there exist $c_i \in F^*$ such that $q_i = c_i p_i$ for $i > 2$, and by construction $c_2p_2 = cq_2$. Then by setting $c_2’ = c^{-1}c_2$, we have that $q_2 = c_2’ p_2$, and the condition is now satisfied for all $i \geq 1$. This completes the inductive step and hence the proof of uniqueness. $\ \square$