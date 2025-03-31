---
aliases:
  - evaluation homomorphism
tags:
  - permanent-note
  - topic-logic-mathematics
  - MATH-GU4042
status: 🔴 ❓
publish: 
date: <% tp.file.creation_date() %>
lastmod: 2025-03-30T16:11:43-04:00
---
# Overview and 

#wip Consequence of [[(Theorem) Long division with remainder]]: the eval hom is injective
- When is it the case that 

**Related notes:** [[Ideals and quotients in polynomial rings]]

---
# Basic definition

>[!example] Definition: Evaluation of a polynomial
>Let $R$ be a commutative [[Algebraic rings|ring]] with unity. Given an element $r \in R$ and a [[Polynomial rings|polynomial]] $f = \sum_ia_ix^i$, we define the **evaluation of $f$ at $a$** by the formula 
>$$
>\text{ev}_r = f(r) = \sum_ia_ia^i \in R.
>$$
>Thus, each element of the polynomial ring $f \in R[x]$ defines a function $E(f) : R \to R$ by the formula
>$$
>E(f)(R) = f(a) = \text{ev}_a(f).
>$$


---
# The evaluation homomorphism

Every polynomial in the ring $R[x]$ defines a function $R \to R$, so that: 
- The operations of polynomial addition and multiplication correspond to pointwise addition and multiplication of functions, respectively;
- The constant polynomial $1$ corresponds to the constant function.

>[!abstract] Proposition: The evaluation homomorphism
>Let $R$ be a [[Algebraic rings|commutative ring with unity]].
>- (i) For all $r \in R$, the evaluation function $\text{ev}_r : R[x] \to R$ is a [[Ring homomorphisms and isomorphisms|homomorphism]].
>- (ii) The function $E$ is a homomorphism from $R[x]$, the ring of [[Polynomial rings|polynomials]] with coefficients in $R$, to $R^R$, the ring of all functions from $R$ to itself (equipped with the operations of pointwise addition and multiplication).

---
# Generalizations of evaluations

#### Evaluations of subrings

>[!example] Definition: Evaluation homomorphism for a subring
>Let $R \leq S$ be a subring and let $s \in S$. Then the restriction of $\text{ev}_s$ to the subring $R[x] \leq S[x]$ gives a [[Ring homomorphisms and isomorphisms|homomorphism]] $\text{ev}_s : R[x] \to S$. Then the image of $\textup{ev}_s$ 
>$$ R[s] = \left \{ \sum_i a_is^i \ : \ a_i \in R \right \} $$
>is the *smallest* subring of $S$ containing both $R$ and $s$.

#### Homomorphisms of coefficients

>[!example] Definition: Homomorphism of polynomial coefficients
>If $\varphi: R \to S$ is any [[Ring homomorphisms and isomorphisms|homomorphism]], then there exists a homomorphism $R[x] \to S[x]$ defined by applying $\varphi$ to all the coefficients of each polynomial:
>$$ f = \sum_i a_ix^i \mapsto \varphi(f) = \sum_i \varphi_i(a_i)x^i. $$

💬 ***Remark*.** $\ \text{}$ This is implicitly used in the earlier definition: if $R \leq S$ is a subring, then $R[x] \leq S[x]$ is a subring.

***Example.*** $\ \text{}$ Given a homomorphism $\varphi : R \to S$ and an element $s \in S$, we can combine the previous two definitions by defining $$ \textup{ev}_{\varphi, s} = \textup{ev}_s \circ \varphi, $$
which is the function that first applies $\varphi$ to a polynomial $f \in R [x]$ to a polynomial with coefficients in $S$, and then evaluate it at $s$.

---
# Examples

#### Constant polynomials

If $a \in R \subseteq R[x]$ is a **constant polynomial**, then $\textup{ev}_r(a) = a$ and $E(f): R \to R$ is the **identity**. 

#### Polynomials with real coefficients

The evaluation of a polynomial $f = \sum_ia_ix^i$ with [[The real numbers|real]] coefficients is simply a **function** $f: \mathbb R \to \mathbb R$ defined by $f(t) = \sum_i a_i t^i$ for all $t \in \mathbb R$. The input value is typically called the **variable** (as opposed to a formal symbol in general polynomials).

#### Gaussian integers as a polynomial subring

![[Gaussian integers#^704b4e]]

The **Gaussian integers** $\mathbb Z [i]$ are the *smallest* subring containing both $\mathbb Z$ and $i$. Since $i^2 = -1$, given $a_n \in \mathbb Z$ we can write each polynomial $f = \sum_na_ni^n$ as a sum involving only integer terms (in the case that $n$ is even) or integers multiplied by $i$ (in the case that $n$ is odd), so every element has the form $a + bi$ for $a, b \in \mathbb Z$ as expected.

The same holds for the variant $\mathbb Z [\sqrt[3]{2}]$, where the term $(\sqrt[3]2)^n$ is always of one of the forms $a, b\sqrt[3]2, c(\sqrt[3]2)^2$ for $a, b, c \in \mathbb Z$ depending on whether $n$ is congruent to $0, 1, 2 \mod 3$.

#### Projection modulo $n$ as a homomorphism of polynomial coefficients

If $\pi : \mathbb Z \to \mathbb Z / n \mathbb Z$ be the projection of an integer to its congruence class modulo $n$, then there exists a homomorphism $\mathbb Z [x] \to (\mathbb Z / n \mathbb Z)[x]$ which reduces the coefficients of an integer polynomial modulo $n$.

Further, given a polynomial $f \in \mathbb Z [x]$, we can apply $\pi$ to get a polynomial $\pi(f) \in (\mathbb Z / n \mathbb Z) [x]$ and then evaluate it on an element of $\mathbb Z / n \mathbb Z$. #concept-question what does this mean?