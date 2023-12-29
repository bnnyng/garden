---
aliases:
  - field
  - vector space
  - subspace
  - field axioms
  - vector space axioms
  - complementary subspaces
  - linear subspace
tags:
  - permanent-note
  - topic-logic-mathematics
publish: "true"
date: 2022-10-12
lastmod: 2023-12-28T18:05:35-08:00
---
# Overview

The axioms for fields, vector spaces, and vector subspaces are the basic operations of [[§ Linear algebra]].

---
# Fields

>[!example] Definition: Field 
>A **field** ( $\mathbb F, +, \cdot$ ) consists of the following three pieces of data:
>- (D1) A set $\mathbb F$, whose contents are "the scalars" or "the elements of the field"
>- (D2) An addition map $+ : \mathbb F \times \mathbb F \to \mathbb F$, meaning for every pair of *scalars* $a,b \in \mathbb F$, we define a *sum* $a + b \in \mathbb F$
>- (D3) A product map $\cdot : \mathbb F \times \mathbb F \to \mathbb F$, meaning for every pair of *scalars* $a, b \in F$, we define a *product* $a \cdot b \in \mathbb F$

## Field axioms
- (F1) **Associativity.** Addition and multiplication are "associative," meaning that for all $a,b,c \in \mathbb F$, we have $(a+b)+c = a + (b+ c)$ and $(a \cdot b) \cdot c = a \cdot (b \cdot c)$.
- (F2) **Commutativity**. Addition and multiplication are "commutative," meaning that for all $a,b \in \mathbb F$, we have $a + b = b + a$ and $a \cdot b = b \cdot a$.
- (F3) **Distributivity.** Multiplication distributes over addition, meaning that for all $a,b,c \in \mathbb F$, we have $a \cdot (b + c) = a \cdot b + a \cdot c$.
- (F4) **Identities.** There exist elements $0,1 \in \mathbb F$ which serve as "additive and multiplicative identities," meaning that for all $a \in \mathbb F$ we have
$$ 0+a =a $$
$$1 \cdot a = a$$
- (F5) **Additive inverses**. For all $a \in \mathbb F$, there exists an element $b \in \mathbb F$ with $a + b = 0$. We call $b$ the "additive inverse" of $a$, and denote it as $-a$.
- (F6) **Multiplicative inverses.** For all $a \in \mathbb F$, there exists an element $b \in \mathbb F$ with $ab = 1$. We call $b$ the "multiplicative inverse" of $a$, and denote it as $1/a$ or $a^{-1}$.
- (F7) **Nontriviality.** There are at least two elements of $\mathbb F$.

## Field lemmas
- *(Lemma 17)* The additive identity in a field is unique.
- *(Lemma 18)* Additive inverses in a field are unique.
- *(Lemma 19)* Let $\mathbb F$ be a field, and write $0 \in \mathbb F$ for the additive identity. Then $0 \cdot x = 0$ for all $x \in \mathbb F$. 
- *(Lemma 20)* If $a \in \mathbb F$, then the additive inverse is given by $-a = (-1) \cdot a$.
- *(Proposition 21)* If $a,b \in \mathbb F$, then $a \cdot b = 0$ if and only if $a = 0$ or $b = 0$.

---
# Vector spaces

>[!example] Definition: Vector space
>A **vector space** ( $V, + , \cdot$ ) over the field $\mathbb F$ consists of the following data:
>- (D1) A set $V$ of vectors.
>- (D2) An addition map $+ : V \times V \to V$, meaning for each pair of *vectors* $v,w \in V$, we define a sum $v + w \in V$.
>- (D3) A scalar multiplication map $\cdot : \mathbb F \times V \to V$, meaning for each *scalar* $a \in \mathbb F$ and each *vector* $v \in V$, we define a scalar multiplication $a \cdot v \in V$. In other words, the scalar multiplication function outputs a new vector in the vector space $V$.

## Vector space axioms
- (V1) **Associativity.** Addition and scalar multiplication in $V$ are associative.
- (V2) **Commutativity.** Addition is commutative.
- (V3) **Distributivity.** Addition distributes over scalar multiplication: for all $a \in \mathbb F$ and all $v,w \in V$, we have $a(v+w) = av + aw$.
- (V4) **Additive identity.** There exists an additive identity, the "zero vector" $\vec 0 \in V$, so that for all $v \in V$ we have $$\vec 0 + v = v$$
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
