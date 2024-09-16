---
aliases:
  - field
  - field axioms
  - fields
tags:
  - permanent-note
  - topic-logic-mathematics
  - MATH-UN1207
publish: "true"
date: 2024-03-28 10:52
lastmod: 2024-09-15T09:38:46-04:00
---

>[!example] Definition: Field 
>A **field** ( $\mathbb F, +, \cdot$ ) consists of the following three pieces of data:
>- (D1) A set $\mathbb F$, whose contents are "the scalars" or "the elements of the field"
>- (D2) An addition map $+ : \mathbb F \times \mathbb F \to \mathbb F$, meaning for every pair of *scalars* $a,b \in \mathbb F$, we define a *sum* $a + b \in \mathbb F$
>- (D3) A product map $\cdot : \mathbb F \times \mathbb F \to \mathbb F$, meaning for every pair of *scalars* $a, b \in F$, we define a *product* $a \cdot b \in \mathbb F$

>[!abstract] Axioms: Fields
>- (F1) **Associativity.** Addition and multiplication are "associative," meaning that for all $a,b,c \in \mathbb F$, we have $(a+b)+c = a + (b+ c)$ and $(a \cdot b) \cdot c = a \cdot (b \cdot c)$.
>- (F2) **Commutativity**. Addition and multiplication are "commutative," meaning that for all $a,b \in \mathbb F$, we have $a + b = b + a$ and $a \cdot b = b \cdot a$.
>- (F3) **Distributivity.** Multiplication distributes over addition, meaning that for all $a,b,c \in \mathbb F$, we have $a \cdot (b + c) = a \cdot b + a \cdot c$.
>- (F4) **Identities.** There exist elements $0,1 \in \mathbb F$ which serve as "additive and multiplicative identities," meaning that for all $a \in \mathbb F$ we have
>$$ 
>0+a =a \quad \quad 1 \cdot a = a
>$$
>- (F5) **Additive inverses**. For all $a \in \mathbb F$, there exists an element $b \in \mathbb F$ with $a + b = 0$. We call $b$ the "additive inverse" of $a$, and denote it as $-a$.
>- (F6) **Multiplicative inverses.** For all $a \in \mathbb F$, there exists an element $b \in \mathbb F$ with $ab = 1$. We call $b$ the "multiplicative inverse" of $a$, and denote it as $1/a$ or $a^{-1}$.
>- (F7) **Nontriviality.** There are at least two elements of $\mathbb F$.

## Field lemmas
- *(Lemma 17)* The additive identity in a field is unique.
- *(Lemma 18)* Additive inverses in a field are unique.
- *(Lemma 19)* Let $\mathbb F$ be a field, and write $0 \in \mathbb F$ for the additive identity. Then $0 \cdot x = 0$ for all $x \in \mathbb F$. 
- *(Lemma 20)* If $a \in \mathbb F$, then the additive inverse is given by $-a = (-1) \cdot a$.
- *(Proposition 21)* If $a,b \in \mathbb F$, then $a \cdot b = 0$ if and only if $a = 0$ or $b = 0$.