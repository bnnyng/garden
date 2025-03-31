---
aliases: 
tags:
  - fleeting-note
date: <% tp.file.creation_date() %>
lastmod: 2025-03-08T18:24:14-05:00
---

See also: [[Axiomatic definition of fields]]


>[!example] Definition: Vector space
>A **vector space** ( $V, + , \cdot$ ) over the [[Axiomatic definition of fields|field]] $\mathbb F$ consists of the following data:
>- (D1) A set $V$ of vectors.
>- (D2) An addition map $+ : V \times V \to V$, meaning for each pair of *vectors* $v,w \in V$, we define a sum $v + w \in V$.
>- (D3) A scalar multiplication map $\cdot : \mathbb F \times V \to V$, meaning for each *scalar* $a \in \mathbb F$ and each *vector* $v \in V$, we define a scalar multiplication $a \cdot v \in V$. In other words, the scalar multiplication function outputs a new vector in the vector space $V$.

Vector space axioms:

- (V1) **Associativity.** Addition and scalar multiplication in $V$ are associative.
- (V2) **Commutativity.** Addition is commutative.
- (V3) **Distributivity.** Addition distributes over scalar multiplication: for all $a \in \mathbb F$ and all $v,w \in V$, we have $a(v+w) = av + aw$.
- (V4) **Additive identity.** There exists an additive identity, the "zero vector" $\vec 0 \in V$, so that for all $v \in V$ we have $\vec 0 + v = v.$
- (V5) **Additive inverse.** For any $v \in V$, there exists a $w \in V$ so that $v + w = \vec 0$. We usually denote $w$ by the symbol $-v$.
- (V6) **Multiplicative identity.** If $1 \in \mathbb F$ is the multiplicative identity, then for any $v \in V$, we have $1 \cdot v = v$. 

Vector space lemmas: *(Proposition 22)* Let $V$ be a vector space over a field $\mathbb F$. Then the following are true:
- Additive identities in $V$ are unique.
- Additive inverses in $V$ are unique.
- If $a \in \mathbb F$ and $v \in V$, then $a \cdot v = \vec 0$ if and only if either $a = 0$ or $v = \vec 0$.
- The additive inverse to $v \in V$ is given by $-v = (-1) \cdot v$, the scalar multiplication of $v$ by $-1 \in \mathbb F$.


>[!example] Definition: Linear subspace
>Suppose $V$ is a vector space over the field $\mathbb F$. A subset $W \subset V$ is said to be a **linear subspace** of $V$ if the following three conditions hold:
>- (S1) **$W$ is closed under addition.** For all $w_1, w_2 \in W$, we have $w_1 + w_2 \in W.$
>- (S2) **$W$ is closed under scalar multiplication.** For all $c \in \mathbb F$ and all $w \in W$, we have $cw \in W$.
>- (S3) We have $\vec 0 \in W$, so that $W$ is not the empty set $\emptyset$.

>[!example] Definition: Complementary subspaces
> If $V$ is a *finite-dimensional* vector space, the subspaces $W,U \subset V$ are **complementary** if both of the following are true:
>- For every $v \in V$, there exist $w \in W$ and $u \in U$ so that $v = w + u$;
>- $U \cap W = \{\vec 0 \}$; that is, $U,W$ intersect **trivially**.

Subspace propositions:

- *(Proposition 23)* Consider $\mathbb F$ as a *vector space* over itself. If $V \subset \mathbb F$ is a *linear subspace*, then $V = \{ \vec 0\}$ or $V = \mathbb F$.
- *(Proposition 24)* If $W \subset V$ is a *linear subspace* of the *vector space* $V$, then $W$ is once again a *vector space.*
	- Definitions of addition and scalar multiplication are the same operations from $V$.
	- Axioms (A1)-(A3) and (A6) follow from the corresponding axioms for $V$.
	- (A4) is true since (S3) asserts the existence of $\vec 0$, which we can prove is the *additive identity* since the addition operation is the same as that of $V$.
	- (A5) is true since the existence of *additive inverses* in $V$ are given by $-1 \cdot v$, and $W$ is closed under scalar multiplication.

>[!example] Definition: 

>[!abstract] Theorem:

# Overview

**Linear maps** are functions that send elements from one [[Vector spaces and ring modules|vector space]] to another in a way that is compatible with the [[Vector spaces and ring modules]]. 

**Linearity** is ubiquitous, meaning addition and scaling can be applied before or after the linear transformation without changing the result.

Linear maps are defined with respect to a [[Vector bases and dimension|basis]]. One upshot of this fact is that equality can be checked with a finite list of vectors.

---
# Linearity

>[!example] Definition: Linear map
>If $V,W$ are vector spaces over the field $\mathbb F$, a **linear map** (i.e., linear transformation, linear operator) from $V$ to $W$ is a function $A: V \to W$ with the following properties:
>- (L1) **$A$ respects addition**. For all $v_1,v_2 \in V$, $A(v_1+v_2) = A(v_1) + A(v_2)$
>- (L2) **$A$ respects scaling.** For all $v \in V$ and $c \in \mathbb F$, $A(cv) = cA(v)$.

Every linear function $f : \mathbb F^n \to F$ for some $a_1, \cdots , a_n \in \mathbb F$ takes the form 
$$ 
f\begin{pmatrix} x_1 \\ \cdots \\  x_n\end{pmatrix} = a_1x_1 + \cdots + a_nx_n.
$$

Properties of linear maps include:
- *(Lemma 44)* If $A : V \to W$ is a linear map, we have $A(\vec 0) = \vec 0.$
	- Informally, this means linear maps do not have constant terms. A function in the form $f(x) = ax + b$ for $b \neq 0$ is an **affine function**.
- [[(Theorem) Linear maps are determined by their values on a basis]]

---
# Examples of linear maps

- Rotation
- Differentiation and integration
- Identity map

#wip Make notes for each of these examples

---
# Overview

A **linear combination** of the elements of a [[Vector spaces and ring modules|vector space]] $V$ defines another element of $V$. The **spanning set** is the set of all possible linear combinations that can be made out of elements in a subset of a vector space.

Note the following phrasing:
- “The span of $S$” = the vector subspace which is the set of all possible linear combinations we can make out of elements in the [[20250128-axioms-of-naive-set-theory|set]] $S$. 
- “Spanning set” = the set of vectors which linear combinations are made out of.
- “$S$ spans $V$” = the span of the subset $S \subset V$ is the whole space $V$. That is, everything in $V$ is a linear combination of the elements in $S$. 

---
# Linear combinations



Linear combinations are a meaningful way to make vectors out of other vectors. 

>[!example] Definition: Linear combination
>If $a_1, \cdots , a_n \in \mathbb F$ and $V$ is a vector space over $\mathbb F$, the **linear combination** of $v_1, \cdots , v_n \in V$, then is an element of $V$ given by 
>$$
>a_1v_1 + \cdots + a_nv_n.
>$$

---
# Spans

>[!example] Definition: Span
>If $V$ is a vector space over the field $\mathbb F$, and $S \subset V$ is *any* subset, the **span** of $S$ is the set of all linear combinations that can be made out of the elements of $S$.
>$$ 
>\text{span}(S) = \{a_1v_1 + \cdots + a_nv_n \mid a_1, \cdots, a_n \in \mathbb F \text{ and } v_1, \cdots, v_n \in S \} \subset V
>$$

We can also define spans constructively: the set $v_1, \cdots , v_n$ **spans** $V$ if every element of $V$ can be written as a **linear combination** of the set of vectors. 
$$ 
\text{span}(v_1,...,v_n) = \forall_{v \in V}\exists_{a_1, \cdots , a_n \in \mathbb F} [a_1v_1 + \cdots + a_nv_n] 
$$

---
# Spanning subspaces

- *(Proposition 25)* See notes for example. The set of eventually-zero functions $S = \{f_0, f_1, f_2 \cdots \} \subset \text{Map}(\mathbb N, \mathbb F)$ is spanned by $S$. 
$$
span(S) = \text{Map}_{fin}
$$
- *(Proposition 26)* If $S \subset V$ is an arbitrary subset of vector space $V$, the set $\text{span}(S)$ satisfies the following properties:
	- The set $\text{span}(S) \subset V$ is a [[Vector spaces and ring modules|linear subspace]];
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

---

# Overview

Every [[Vector spaces and ring modules|vector space]] has a **basis**, which combines notions from [[Linear combinations and spanning|spans]] and [[Linear independence|linear independence]]. We can study vector spaces by studying their bases.

One special basis is the **standard basis** for $\mathbb F^n$ is the set $\{e_1, \cdots, e_n\}$, where the only non-zero coordinate in each vector $e_i$ is the $i$th coordinate.

**Dimensions** tell us exactly how many coordinates are needed to describe an arbitrary element of a vector space.

---
# Bases

>[!example] Definition: Basis
>If $V$ is a finite-dimensional vector space, a **basis** for $V$ is a set of vectors $\{v_1, \cdots, v_n\} \subset V$ which:
>- Spans the entire space, so every vector in $V$ is some [[Linear combinations and spanning|linear combination]] of these vectors;
>- Is linearly independent, so only the trivial linear combination produces $\vec 0$.

- *(Lemma 35)* If $V$ is a vector space, a set $S = \{v_1, \cdots, v_n\}$ is a basis for $V$ if and only if there is a unique way to express each $v \in V$ as a linear combination of the elements of $S$.
- *(Proposition 37)* Every finite-dimensional vector space has a finite basis.
	- *(Lemma 36)* **Basis reduction lemma.** If $S = \{v_1, \cdots, v_n\}$ is any spanning set for $V$, there is a subset $S^{\prime} \subset S$ which is a basis for $V$.
		- Proposition 37 can be proven by choosing a spanning set and applying the **basis reduction lemma** to find a basis contained in the set.
	- *(Lemma 38)* **Basis extension lemma.** If $S = \{v_1, \cdots, v_n\}$ is any linearly independent set for a finite-dimensional vector space $V$, there is a larger set $S^{\prime} = \{v_1, \cdots, v_n, w_1, \cdots, w_m\}$ which is a **basis** for $V$ (with $k = 0$ if $\text{span}(S) = V$).
- *(Proposition 39)* If $W \subset V$ is a [[Vector spaces and ring modules|subspace]] of a finite-dimensional vector space, then there exists a basis $(w_1, \cdots, w_n, v_1, \cdots, v_k)$ for $V$ which begins with the basis for $W$. 
	- *(Corollary 40)* **Dimension is well-defined.** Any two **bases** for a **finite-dimensional** vector space $V$ have the same number of elements.

---
# Dimensions

>[!example] Definition: Dimension
>If $V$ is a finite-dimensional vector space, then its **dimension** $\text{dim}(V) \in \mathbb N$ is the number of elements in a basis for $V$.

By the “dimension is well-defined” corollary, we know the choice of basis doesn’t matter since this number is unambiguous.

- [[(Theorem) A subspace of a finite-dimensional vector space has dimension less than or equal to the latter's]]
- If $(v_1, \cdots, v_n)$ is a basis for $V$, then there is a [[Injectivity, surjectivity, and bijectivity|bijection]] $A : \mathbb F^n \to V$ defined by $A(a_1 \cdots a_n) = a_1v_1 + \cdots + a_nv_n.$ The transformation is injective because $(v_1, \cdots, v_n)$ is linearly independent and surjective because $(v_1, \cdots, v_n)$ spans $V$.
- If two subspaces $U, W \subset V$ intersect **trivially** so that $U \cap W = \{\vec 0\}$, then $\text{dim}V = \text{dim}U + \text{dim}W = \text{dim}(U+W).$
	- *Proof.* The union of two bases for $U,W$ forms a basis for $V$.

---
# Examples

- The **standard basis** for $\mathbb F^n$ is the set $\{e_1, \cdots, e_n\}$ where the only non-zero coordinate in each $e_i$ is the $i$th coordinate.

---
# Review

## Honors Math A
- Prove Lemma 35.
- Prove Corollary 40.

---

# Overview

A set of vectors in a vector space $\{v_1, \cdots , v_n \} \subset V$ is **linearly independent** if any **linear relation** has all coefficients equal to zero. 

Redundant vectors can be deleted from an ordered list to get a linearly independent set with the same [[Linear combinations and spanning|span]] as the original (Lemma 27).

Additionally, given a linearly independent set and a spanning set, the size of the linearly independent set must be less than or equal to the size of the span (Theorem 31).

---
# Linear relations

>[!example] Definition: Linear relation
>Let $V$ be a vector space over a field $\mathbb F$. Given a set $S = \{v_1, \cdots, v_n \} \subset V$, a **linear relation** between them is a sequence $(a_1, \cdots , a_n ) \in \mathbb F$ whose [[Linear combinations and spanning|linear combination]] produces the **zero vector**.
>$$ 
>a_1v_1+ \cdots a_nv_n = \vec 0 
>$$

$(0, \cdots , 0)$ is the **trivial linear relation**, which doesn't say anything "interesting" about the relation between elements of the vector set.
$$ 
0v_1 + \cdots + 0v_n = \vec 0 
$$
A **nontrivial linear relation** means there exists an $i$ so that $a_i \neq 0$.

The set of linear relations $(a_1, \cdots , a_n) \in \mathbb F^n$ for $\{v_1, \cdots, v_n \} \subset V$ is a [[Vector spaces and ring modules|linear subspace]] of $\mathbb F^n$, since each condition in the subspace definition is satisfied:
- The zero vector is the **trivial relation**.
- Addition is closed, since the sum of any two sequences $(a_1 + b_1, \cdots , a_n + b_n)$ is a linear relation producing $\vec 0 + \vec 0 = \vec 0$.
- Scalar multiplication is closed by a similar argument.

---
# Linear independence

>[!example] Definition: Linear independence
>A set $S = \{v_1, \cdots , v_n \}$ is **linearly independent** if the only linear relation between each vector is the trivial linear relation. 
>$$ 
>a_1v_1 + \cdots + a_nv_n = \vec 0 \implies a_1 = 0, \cdots, a_n = 0 
>$$

Alternatively, $S$ is linearly independent if there exists a *nontrivial* linear relation so that $a_i \neq 0$ for some $1 \leq i \leq n$. 

---
# Redundancy

>[!example] Definition: Redundant vector
>Given vector space $V$ and an ordered of vectors $(v_1, \cdots , v_n)$ with all $v_i \in V$ for all $1 \leq i \leq n$, a vector $v_i$ is **redundant** if it can be written as a linear combination of the previous elements in the list. 
>$$
>v_i = a_1v_1 + \cdots + a_{i-1}v_{i-1}
>$$
>$$ 
>v_i \in \text{span}(v_1, \cdots , v_{i-1}) 
>$$

- *(Lemma 27)* Given vector space $V$, if $(v_1, \cdots, v_n) \in V$ is a list of vectors and $v_i$ is **redundant** for some $1 \leq i \leq n$, then the [[Spans|span]] of the list does not change does not change by *excluding* $v_i$.
$$ 
\text{span}(v_1, \cdots, v_{i-1}, v_{i+1}, \cdots, v_n) = \text{span}(v_1, \cdots v_n)
$$
- *(Corallary 28)* Given a list of vectors in a vector space $(v_1, \cdots, v_n) \in V$, a smaller list $(v_1, \cdots, v_k)$ can be made by removing the **redundant** vectors of the first set so that $\text{span}(v_1, \cdots v_n) = \text{span}(v_1, \cdots v_k)$.
- *(Proposition 29)* Given a **finite list** $(v_1, \cdots v_n) \in V$, the list of vectors is **linearly dependent** *if and only if* there is some $v_i$ that is **redundant** for $1 \leq i \leq n$.
$$ 
[(v_1, \cdots v_n) \text{ is linearly dependent}] \iff [v_i \text{ is redundant for some } 1 \leq i \leq n]
$$
- *(Corollary 30)* Given any set of vectors in a vector space $S = \{v_1, \cdots, v_n\} \subset V$, there is a subset $S^{\prime} = \{v_{i_1}, \cdots, v_{i_k} \}$ with $S^{\prime} \subset S$ so that $\text{span}(S^{\prime}) = \text{span}(S)$ and $S^{\prime}$ is **linearly independent**.
- [[(Theorem) The size of a linearly independent set is less than or equal to the size of its spanning set]]

---
# Overview

Every [[Vector spaces and ring modules|vector space]] has a **basis**, which combines notions from [[Linear combinations and spanning|spans]] and [[Linear independence|linear independence]]. We can study vector spaces by studying their bases.

One special basis is the **standard basis** for $\mathbb F^n$ is the set $\{e_1, \cdots, e_n\}$, where the only non-zero coordinate in each vector $e_i$ is the $i$th coordinate.

**Dimensions** tell us exactly how many coordinates are needed to describe an arbitrary element of a vector space.

---
# Bases

>[!example] Definition: Basis
>If $V$ is a finite-dimensional vector space, a **basis** for $V$ is a set of vectors $\{v_1, \cdots, v_n\} \subset V$ which:
>- Spans the entire space, so every vector in $V$ is some [[Linear combinations and spanning|linear combination]] of these vectors;
>- Is linearly independent, so only the trivial linear combination produces $\vec 0$.

- *(Lemma 35)* If $V$ is a vector space, a set $S = \{v_1, \cdots, v_n\}$ is a basis for $V$ if and only if there is a unique way to express each $v \in V$ as a linear combination of the elements of $S$.
- *(Proposition 37)* Every finite-dimensional vector space has a finite basis.
	- *(Lemma 36)* **Basis reduction lemma.** If $S = \{v_1, \cdots, v_n\}$ is any spanning set for $V$, there is a subset $S^{\prime} \subset S$ which is a basis for $V$.
		- Proposition 37 can be proven by choosing a spanning set and applying the **basis reduction lemma** to find a basis contained in the set.
	- *(Lemma 38)* **Basis extension lemma.** If $S = \{v_1, \cdots, v_n\}$ is any linearly independent set for a finite-dimensional vector space $V$, there is a larger set $S^{\prime} = \{v_1, \cdots, v_n, w_1, \cdots, w_m\}$ which is a **basis** for $V$ (with $k = 0$ if $\text{span}(S) = V$).
- *(Proposition 39)* If $W \subset V$ is a [[Vector spaces and ring modules|subspace]] of a finite-dimensional vector space, then there exists a basis $(w_1, \cdots, w_n, v_1, \cdots, v_k)$ for $V$ which begins with the basis for $W$. 
	- *(Corollary 40)* **Dimension is well-defined.** Any two **bases** for a **finite-dimensional** vector space $V$ have the same number of elements.

---
# Dimensions

>[!example] Definition: Dimension
>If $V$ is a finite-dimensional vector space, then its **dimension** $\text{dim}(V) \in \mathbb N$ is the number of elements in a basis for $V$.

By the “dimension is well-defined” corollary, we know the choice of basis doesn’t matter since this number is unambiguous.

- [[(Theorem) A subspace of a finite-dimensional vector space has dimension less than or equal to the latter's]]
- If $(v_1, \cdots, v_n)$ is a basis for $V$, then there is a [[Injectivity, surjectivity, and bijectivity|bijection]] $A : \mathbb F^n \to V$ defined by $A(a_1 \cdots a_n) = a_1v_1 + \cdots + a_nv_n.$ The transformation is injective because $(v_1, \cdots, v_n)$ is linearly independent and surjective because $(v_1, \cdots, v_n)$ spans $V$.
- If two subspaces $U, W \subset V$ intersect **trivially** so that $U \cap W = \{\vec 0\}$, then $\text{dim}V = \text{dim}U + \text{dim}W = \text{dim}(U+W).$
	- *Proof.* The union of two bases for $U,W$ forms a basis for $V$.

---
# Examples

- The **standard basis** for $\mathbb F^n$ is the set $\{e_1, \cdots, e_n\}$ where the only non-zero coordinate in each $e_i$ is the $i$th coordinate.

---
# Review

## Honors Math A
- Prove Lemma 35.
- Prove Corollary 40.