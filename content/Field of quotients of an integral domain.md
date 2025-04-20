---
aliases:
  - field of quotients
tags:
  - permanent-note
  - topic-logic-mathematics
  - MATH-GU4042
status: 
publish: 
date: <% tp.file.creation_date() %>
lastmod: 2025-04-16T00:28:04-04:00
---
# Overview

The **field of quotients** is a way of *extending* an [[Cancellation laws and integral domains|integral domain]] to a field by taking “fractions.” In particular, we can identify each element $r \in R$ with the fraction $r/1 \in Q(R)$, and thus obtain $R \leq Q (R)$ as a [[Algebraic rings|subring]].

#wip [[Universal properties of rings]]

**Relevant theorems:**
- [[(Theorem) A factorization in a UFD exists iff a factorization exists in its field of quotients]]
- [[(Theorem) A polynomial ring with coefficients in a UFD is a UFD]]

**Related notes:** [[Prime (sub)fields]]

---
# Fractions on fields

>[!lemma] Fraction on a field
>If $F$ is a [[Algebraic fields|field]] and $r, s \in F$ with nonzero $s \neq 0$, then a **fraction** is an element of the form 
>$$ r/s = rs^{-1}. $$
>Laws for adding and multiplying fractions are induced by associativity and distributivity in $F$, for example: 
>$$
>\begin{align}
>r/s + t/w &= rs^{-1} + tw^{-1} = (rw)(sw)^{-1} + (ts)(tw)^{-1} \\
>&= (rw+ts)(sw)^{-1} = (rw+ts)/(sw).
>\end{align}
>$$

>[!lemma] Identification of fractions is an equivalence relation
>Two fractions are $r/s$ and $t/w$ are identified if $rw = st$. Explicitly, given the set $R \times (R \backslash \{ 0 \})$, the relation $\sim$ defined by $$ (r, s) \sim (t, w) \iff rw = st $$ is an [[Relation|equivalence relation]].

----
# Fields of quotients

>[!definition] Field of quotients
>If $R$ is an [[Cancellation laws and integral domains|integral domain]], the **field of quotients** of $R$, denoted $Q(R)$ is the set of equivalence classes $(R \times (R \backslash \{ 0 \})) / \sim$ under the identification $$ (r, s) \sim (t, w) \iff rw = st. $$ We define addition and multiplication on $Q(R)$, respectively, by
>$$ [(r, s)] + [(t, w)] = [(rw, sw)] + [(st, sw)] = [(rw + st, sw)] $$ 
>$$ [(r, s)] \cdot [(t, w)] = [(rt, sw)]. $$

>[!lemma] Verifying properties of the field of quotients
>Let $\sim$ and $Q(R)$ be defined as above.
>- (i) The addition and multiplication operations defined above are well-defined on equivalence classes.
>- (ii) $Q(R)$ is indeed a [[Algebraic fields|field]].
>- (iii) The map $\rho : R \to Q(R)$ defined by $\rho(r) = [(r, 1)]$ is an injective [[Ring homomorphisms and isomorphisms|homomorphism]]. Thus, we may identify each element $r \in R$ with its image $\rho(r) = r/1 \in Q(R)$, and we have $R \leq Q(R)$ as a subring.

---
# Homomorphisms to other fields

>[!theorem] Induced homomorphism from the field of quotients
>Let $R$ be an [[Cancellation laws and integral domains|integral domain]], $F$ be a [[Algebraic fields|field]], and $\varphi : R \to F$ be an [[Injectivity, surjectivity, and bijectivity|injective]] homomorphism. Then there exists a *unique* injective homomorphism $\tilde \varphi : Q(R) \to F$ such that $\varphi = \tilde \varphi \circ \rho$, i.e.,  $$ \tilde \varphi ([(r, 1)]) = \varphi (r) \quad \quad \tilde \varphi([a,b]) = \varphi(a)/\varphi(b). $$ 
>The induced map $\tilde \varphi$ is surjective, hence an isomorphism, *if and only if* every element of $F$ is of the form $\varphi(r) /\varphi(s)$ for some $r, s \in R$ with $s \neq 0$.
>
>![[IMG_0814.jpg|150]]

---
# Examples

#### Every field is its own field of quotients

Suppose $F$ is a field and $r, s \in F$. Then the identification gives $$ (r, s) \sim (rs^{-1}, 1) \iff r \cdot 1 = s \cdot rs^{-1}, $$ 
so the injective homomorphism $\rho : F \to Q(F)$ defined by the inclusion $\rho(r) = (r, 1)$ is also surjective, and hence an isomorphism.

#### Field of rational functions





