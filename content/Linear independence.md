---
aliases:
  - linearly independent
  - linear relation
  - redundant
  - trivial linear relation
  - linear independence
tags:
  - permanent-note
  - topic-logic-mathematics
publish: "true"
---
# Overview

A set of vectors in a vector space $\{v_1, \cdots , v_n \} \subset V$ is **linearly independent** if any **linear relation** has all coefficients equal to zero. 

Redundant vectors can be deleted from an ordered list to get a linearly independent set with the same [[Linear combinations and spanning|span]] as the original (Lemma 27).

Additionally, given a linearly independent set and a spanning set, the size of the linearly independent set must be less than or equal to the size of the span (Theorem 31).

---
# Linear relations

>[!example] Definition: Linear relation
>Let $V$ be a vector space over a field $\mathbb F$. Given a set $S = \{v_1, \cdots, v_n \} \subset V$, a **linear relation** between them is a sequence $(a_1, \cdots , a_n ) \in \mathbb F$ whose [[Linear combinations and spanning|linear combination]] produces the **zero vector**.
$$ a_1v_1+ \cdots a_nv_n = \vec 0 $$

$(0, \cdots , 0)$ is the **trivial linear relation**, which doesn't say anything "interesting" about the relation between elements of the vector set.
$$ 0v_1 + \cdots + 0v_n = \vec 0 $$
A **nontrivial linear relation** means there exists an $i$ so that $a_i \neq 0$.

The set of linear relations $(a_1, \cdots , a_n) \in \mathbb F^n$ for $\{v_1, \cdots, v_n \} \subset V$ is a [[Axioms for fields and vector spaces|linear subspace]] of $\mathbb F^n$, since each condition in the subspace definition is satisfied:
- The zero vector is the **trivial relation**.
- Addition is closed, since the sum of any two sequences $(a_1 + b_1, \cdots , a_n + b_n)$ is a linear relation producing $\vec 0 + \vec 0 = \vec 0$.
- Scalar multiplication is closed by a similar argument.

---
# Linear independence

>[!example] Definition: Linear independence
>A set $S = \{v_1, \cdots , v_n \}$ is **linearly independent** if the only linear relation between each vector is the trivial linear relation. $$ a_1v_1 + \cdots + a_nv_n = \vec 0 \implies a_1 = 0, \cdots, a_n = 0 $$

Alternatively, $S$ is linearly independent if there exists a *nontrivial* linear relation so that $a_i \neq 0$ for some $1 \leq i \leq n$. 

---
# Redundancy

>[!example] Definition: Redundant vector
>Given vector space $V$ and an ordered of vectors $(v_1, \cdots , v_n)$ with all $v_i \in V$ for all $1 \leq i \leq n$, a vector $v_i$ is **redundant** if it can be written as a linear combination of the previous elements in the list. $$v_i = a_1v_1 + \cdots + a_{i-1}v_{i-1}$$
>$$ v_i \in \text{span}(v_1, \cdots , v_{i-1}) $$

- *(Lemma 27)* Given vector space $V$, if $(v_1, \cdots, v_n) \in V$ is a list of vectors and $v_i$ is **redundant** for some $1 \leq i \leq n$, then the [[Spans|span]] of the list does not change does not change by *excluding* $v_i$.
$$ \text{span}(v_1, \cdots, v_{i-1}, v_{i+1}, \cdots, v_n) = \text{span}(v_1, \cdots v_n)$$
- *(Corallary 28)* Given a list of vectors in a vector space $(v_1, \cdots, v_n) \in V$, a smaller list $(v_1, \cdots, v_k)$ can be made by removing the **redundant** vectors of the first set so that $\text{span}(v_1, \cdots v_n) = \text{span}(v_1, \cdots v_k)$.
- *(Proposition 29)* Given a **finite list** $(v_1, \cdots v_n) \in V$, the list of vectors is **linearly dependent** *if and only if* there is some $v_i$ that is **redundant** for $1 \leq i \leq n$.
$$ [(v_1, \cdots v_n) \text{ is linearly dependent}] \iff [v_i \text{ is redundant for some } 1 \leq i \leq n]$$
- *(Corollary 30)* Given any set of vectors in a vector space $S = \{v_1, \cdots, v_n\} \subset V$, there is a subset $S^{\prime} = \{v_{i_1}, \cdots, v_{i_k} \}$ with $S^{\prime} \subset S$ so that $\text{span}(S^{\prime}) = \text{span}(S)$ and $S^{\prime}$ is **linearly independent**.
- [[(Theorem) The size of a linearly independent set is less than or equal to the size of its spanning set]]
