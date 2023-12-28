---
aliases:
  - union
  - intersection
  - complement
  - index set
  - disjoint set
  - power set
tags:
  - permanent-note
  - topic-logic-mathematics
---
# Overview

## Algebra of sets

There are four ways to construct new sets out of old ones: products, power sets, unions, and intersections. The definitions of products and power sets are included in the [[Axioms of set theory]].

---
# Notes

## Basic set definitions

- *(Definition)* For sets $A$ and $B$:
	- $A = B$ means that $A$ and $B$ consist of the same elements, so that $x \in A \iff x \in B$.
	- $A \subset B$ means that each element of $A$ is an element of $B$, so that $x \in A \implies x \in B$.
	- $A \supset B$ means $B \subset A$, so that $x \in B \implies x \in A$.
	- $A \subsetneq B$ means **strict inclusion**; $A \subset B$ but $A \neq B$.
- *(Definition)* The **empty set** $\emptyset$ has no elements.
- **Double containment.** $A = B \iff A \subset B \wedge A \supset B$.
- For any three sets $A, B, C$, if $A \subset B$ and $B \subset C$, then $A \subset C$.
## Index sets
- *(Definition)* For any collection of sets $A_i$ with $i \in I$, an **index set**:
	- $\bigcup_{i \in I} A_i = \{ x : x \in A_i \text{ for some } i \in I \}$
	- $\bigcap_{i \in I} A_i = \{ x : x \in A_i \text{ for all } i \in I \}$
- For any collection of sets $A_i$, and any set $B$,
	- $\bigcup_{i \in I} A_i \cap B = \bigcup_{i \in I} (A_i \cap B)$
	- $\bigcap_{i \in I} A_i \cup B = \bigcap_{i \in I} (A_i \cup B)$
## Power sets
- If $A$ is a set of $n$ elements, denoted $\# A = n$, then the size of its **power set**, or the set of all subsets, is $\# \mathcal P(A) = 2^n$.
- If $A,B$ are *finite* sets, then $\# (A\cup B) + \# (A\cap B) = \# A + \# B$.
## Operations on subsets 

- *(Definition)* Let $S,T \subseteq X$, where $S,T$ are a pair of subsets of the larger ambient set $X$.
	- **Union** = the set of points $x$ which are in either $S$ or $T$. $$ S \cup T  = \{ x\in X \mid [x\in S] \vee [x \in T] \}$$
	- **Intersection** = the set of points $x$ in both $S$ and $T$. $$ S \cap T  = \{ x\in X \mid [x\in S] \wedge [x \in T] \}$$
	- **Complement** = The set of points $X$ which are not in $S$. $$ S^c = X\backslash S =  \{ x\in X \mid x \notin S \}$$
- **Union and intersection are commutative, associative, and distributive**. For any three sets $A, B, C$:
	- $A \cup B = B \cup A$ and $A \cap B = B \cap A$.
	- $(A\cup B) \cup C = A \cup (B \cup C)$ and $(A \cap B) \cap C = A \cap (B \cap C)$.
	- $A \cap (B \cup C) = (A \cap B) \cup (A \cap C)$ and $A \cup (B \cap C) = (A \cup B) \cap (A \cup C)$.
- *(Definition)* Sets $A,B$ are **disjoint** if $A \cap B = \emptyset$. In this case, their union is the **disjoint union** $A \cup B = A + B$.
## Operation equivalencies

Set operation equivalencies are direct consequences of [[Propositional logic|de Morgan's laws]].
#### Unions/intersections with empty/full sets
$S \cup X = X$
$S \cap X = S$

$S \cup \emptyset = S$
$S \cap \emptyset = \emptyset$
#### Unions/intersections with arbitrary sets

$A \cup B = B \cup A$
$A \cap B = B \cap A$
$(A\cup B) \cup C = A \cup (B \cup C)$
$(A \cap B) \cap C = A \cap (B \cap C)$

$A \cup (B \cap C) = (A \cup B) \cap (A \cup C)$
$A \cap (B \cup C) = (A \cap B) \cup (A \cap C)$
#### de Morgan’s rules
$(S^c)^c = S$
$(A \cup B)^c = A^c \cap B^c$
$(A \cap B)^c = A^c \cup B^c$

---
# Review

## Honors Math A
- Proof of $(A \cup B)^c = A^c \cap B^c$. ⭐
- Check that $S(P \wedge Q) = S(P) \cap S(Q)$, while $S(P \vee Q) = S(P) \cup S(Q)$. ⭐

## Modern Algebra I
- Prove that $\sqrt{2}$ is not rational. That is, $\sqrt{2} \notin \mathbb Q = \{ \frac{m}{n} : m \in \mathbb Z, n \in \mathbb N \}$.
- Prove $\bigcup_{i \in I} A_i \cap B = \bigcup_{i \in I} (A_i \cap B)$ and $\bigcap_{i \in I} A_i \cup B = \bigcap_{i \in I} (A_i \cup B)$. ⭐
- Prove that $A^C \cup B^C = (A \cap B)^C$ using the other **de Morgan's rules**.
- Prove $(\bigcup_{i \in I} A_i)^C = \bigcap_{i \in I} A_i^C$ and $(\bigcap_{i \in I} A_i)^C = \bigcup_{i \in I} A_i^C$. ⭐
- Use $\# (A\cup B) + \# (A\cap B) = \# A + \# B$ and a proof by induction to show the **inclusion-exclusion principle**, written below.⭐
$$\# (A\cup B \cup C) = \# A + \# B + \# C - \# (A\cap B) - \# (A\cap C) - \# (B\cap C) + \# (A \cap B \cap C).$$

