---
aliases:
  - vector space
  - subspace
  - vector space axioms
  - complementary subspaces
  - linear subspace
tags:
  - permanent-note
  - topic-logic-mathematics
  - MATH-UN1207
publish: "true"
date: 2022-10-12
lastmod: 2024-04-10T17:55:39-07:00
---
The axioms for [[Field axioms|fields]], vector spaces, and vector subspaces are the basic operations of [[§ Linear algebra]]. 

---
# Vector spaces

>[!example] Definition: Vector space
>A **vector space** ( $V, + , \cdot$ ) over the [[Field axioms|field]] $\mathbb F$ consists of the following data:
>- (D1) A set $V$ of vectors.
>- (D2) An addition map $+ : V \times V \to V$, meaning for each pair of *vectors* $v,w \in V$, we define a sum $v + w \in V$.
>- (D3) A scalar multiplication map $\cdot : \mathbb F \times V \to V$, meaning for each *scalar* $a \in \mathbb F$ and each *vector* $v \in V$, we define a scalar multiplication $a \cdot v \in V$. In other words, the scalar multiplication function outputs a new vector in the vector space $V$.

## Vector space axioms
- (V1) **Associativity.** Addition and scalar multiplication in $V$ are associative.
- (V2) **Commutativity.** Addition is commutative.
- (V3) **Distributivity.** Addition distributes over scalar multiplication: for all $a \in \mathbb F$ and all $v,w \in V$, we have $a(v+w) = av + aw$.
- (V4) **Additive identity.** There exists an additive identity, the "zero vector" $\vec 0 \in V$, so that for all $v \in V$ we have $\vec 0 + v = v.$
- (V5) **Additive inverse.** For any $v \in V$, there exists a $w \in V$ so that $v + w = \vec 0$. We usually denote $w$ by the symbol $-v$.
- (V6) **Multiplicative identity.** If $1 \in \mathbb F$ is the multiplicative identity, then for any $v \in V$, we have $1 \cdot v = v$. 

## Vector space lemmas
*(Proposition 22)* Let $V$ be a vector space over a field $\mathbb F$. Then the following are true:
- Additive identities in $V$ are unique.
- Additive inverses in $V$ are unique.
- If $a \in \mathbb F$ and $v \in V$, then $a \cdot v = \vec 0$ if and only if either $a = 0$ or $v = \vec 0$.
- The additive inverse to $v \in V$ is given by $-v = (-1) \cdot v$, the scalar multiplication of $v$ by $-1 \in \mathbb F$.

---
# Subspaces of vector spaces

>[!example] Definition: Linear subspace
>Suppose $V$ is a vector space over the field $\mathbb F$. A subset $W \subset V$ is said to be a **linear subspace** of $V$ if the following three conditions hold:
>- (S1) **$W$ is closed under addition.** For all $w_1, w_2 \in W$, we have $w_1 + w_2 \in W.$
>- (S2) **$W$ is closed under scalar multiplication.** For all $c \in \mathbb F$ and all $w \in W$, we have $cw \in W$.
>- (S3) We have $\vec 0 \in W$, so that $W$ is not the empty set $\emptyset$.

>[!example] Definition: Complementary subspaces
> If $V$ is a *finite-dimensional* vector space, the subspaces $W,U \subset V$ are **complementary** if both of the following are true:
>- For every $v \in V$, there exist $w \in W$ and $u \in U$ so that $v = w + u$;
>- $U \cap W = \{\vec 0 \}$; that is, $U,W$ intersect **trivially**.
## Subspace propositions
- *(Proposition 23)* Consider $\mathbb F$ as a *vector space* over itself. If $V \subset \mathbb F$ is a *linear subspace*, then $V = \{ \vec 0\}$ or $V = \mathbb F$.
- *(Proposition 24)* If $W \subset V$ is a *linear subspace* of the *vector space* $V$, then $W$ is once again a *vector space.*
	- Definitions of addition and scalar multiplication are the same operations from $V$.
	- Axioms (A1)-(A3) and (A6) follow from the corresponding axioms for $V$.
	- (A4) is true since (S3) asserts the existence of $\vec 0$, which we can prove is the *additive identity* since the addition operation is the same as that of $V$.
	- (A5) is true since the existence of *additive inverses* in $V$ are given by $-1 \cdot v$, and $W$ is closed under scalar multiplication.
