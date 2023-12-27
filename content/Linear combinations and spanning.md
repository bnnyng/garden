---
aliases:
  - span
  - spans
  - linear combination
  - spanning set
tags:
  - permanent-note
  - topic-mathematics-and-logic
publish: "true"
---
# Overview

A **linear combination** of the elements of a [[Axioms for fields and vector spaces|vector space]] $V$ defines another element of $V$. The **spanning set** is the set of all possible linear combinations that can be made out of elements in a subset of a vector space.

Note the following phrasing:
- “The span of $S$” = the vector subspace which is the set of all possible linear combinations we can make out of elements in the [[Axioms of set theory|set]] $S$. 
- “Spanning set” = the set of vectors which linear combinations are made out of.
- “$S$ spans $V$” = the span of the subset $S \subset V$ is the whole space $V$. That is, everything in $V$ is a linear combination of the elements in $S$. 

---
# Linear combinations

Linear combinations are a meaningful way to make vectors out of other vectors. 

>[!example] Definition: Linear combination
>If $a_1, \cdots , a_n \in \mathbb F$ and $V$ is a vector space over $\mathbb F$, the **linear combination** of $v_1, \cdots , v_n \in V$, then is an element of $V$ given by $$a_1v_1 + \cdots + a_nv_n.$$

---
# Spans

>[!example] Definition: Span
>If $V$ is a vector space over the field $\mathbb F$, and $S \subset V$ is *any* subset, the **span** of $S$ is the set of all linear combinations that can be made out of the elements of $S$.
$$ \text{span}(S) = \{a_1v_1 + \cdots + a_nv_n \mid a_1, \cdots, a_n \in \mathbb F \text{ and } v_1, \cdots, v_n \in S \} \subset V.$$

We can also define spans constructively: the set $v_1, \cdots , v_n$ **spans** $V$ if every element of $V$ can be written as a **linear combination** of the set of vectors. 
$$ \text{span}(v_1,...,v_n) = \forall_{v \in V}\exists_{a_1, \cdots , a_n \in \mathbb F} [a_1v_1 + \cdots + a_nv_n] $$

---
# Spanning subspaces

- *(Proposition 25)* See notes for example. The set of eventually-zero functions $S = \{f_0, f_1, f_2 \cdots \} \subset \text{Map}(\mathbb N, \mathbb F)$ is spanned by $S$. 
$$span(S) = \text{Map}_{fin}$$
- *(Proposition 26)* If $S \subset V$ is an arbitrary subset of vector space $V$, the set $\text{span}(S)$ satisfies the following properties:
	- The set $\text{span}(S) \subset V$ is a [[Axioms for fields and vector spaces|linear subspace]];
	- We have $S \subset \text{span}(S)$;
	- If $S \subset W \subset V$ for a **linear subspace** $W$, then we have $\text{span}(S)$ in $W$;
- Intuitively, $\text{span}(S)$ is the *smallest* subspace containing $S$.

---
# Review 

Prove the following statements:
- Any $\mathbb F^n$ space can be described all **linear combinations** of the standard vectors $e_1, ... , e_n$. 
- A **linear combination** of elements of $V$ defines another element of $V$. 
- *Prop. 26* by induction.
- The line through a vector $L_v = \{av \mid a \in \mathbb F \} \subset V$ is just $L_v = \text{span}(V)$.
- The span of the **zero vector** is just the subspace containing the zero vector $\text{span}(\vec 0) = \{ \vec 0 \}$.
- In $\mathbb F^3$, $\text{span} ((1, 0, -1), (0, 1, -1)) = \{ (x, y, z) \in \mathbb F^3 \mid x + y + z = 0 \}$.