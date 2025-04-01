---
aliases:
  - Euclidean domain
  - Euclidean norm
  - strong Euclidean norm
tags:
  - permanent-note
  - topic-logic-mathematics
  - MATH-GU4042
status: 
publish: 
date: <% tp.file.creation_date() %>
lastmod: 2025-04-01T10:12:45-04:00
---
# 

>[!example] Definition: Euclidean norm, Euclidean domain
>Let $R$ be any [[Cancellation laws and integral domains|integral domain]]. A **Euclidean norm** on $R$ is a function $N : R \backslash \{ 0\} \to \mathbb Z$ such that:
>- (i) **Non-negative:** For all $r \in R$, we have $N(r) \geq 0$.
>- (ii) **Division algorithm:** For all $a, b \in R \backslash \{ 0\}$, there exist $q, r \in R$ (not necessarily unique) such that $b = aq + r$, and either $r = 0$ or $N(r) \leq N(a)$.
>
>A domain $R$ is a **Euclidean domain** if it has Euclidean norm.

>[!example] Definition: Strong Euclidean norm
>Let $R$ be a domain and $N : R \backslash \{ 0 \} \to \mathbb Z$ be a norm on $R$. We say $N$ is a **strong Euclidean norm** if for all $a, b \in R \backslash \{ 0 \}$ where $a,b$ are *not* [[Algebraic rings|units]], we have $$ N(a) < N(ab). $$



>[!abstract] Proposition: If $R$ is a Euclidean domain, then $R$ is a [[Principal ideal domains|principal ideal domain]].

*Proof from [[MATH-GU4042|Modern Algebra II]].* 

Let $I \subseteq R$ be an ideal. The set $$ \{ N(a) \ : \ a \in I \} $$ has a minimum, so let $a \in I$ be the element with the minimal norm. We show that $I = (a)$: by definition of a Euclidean domain, for all $b \in I$, we have $b = aq + r$ for some $q, r \in R$ where $r = 0$ (since by assumption we cannot have $N(r) < N(a)$. Then $r = b-aq \in I$ and $b = aq \in (a)$ as well, so $I \subseteq (a)$. $\ \square$

- Why the step that $r = b-aq \in I$, 
- Why does norm have a minimum?

---
# Examples

#### Gaussian integers $\mathbb Z[i]$

The norm on the Gaussian integers is the function $N : \mathbb Z[i] \to \mathbb Z$ defined by $$ N(a + bi) = a^2 + b^2 = (a + bi) (a-bi); $$ note that this satisfies $N(\alpha) = \alpha \overline \alpha$. 

>[!abstract] Lemma: Properties of the norm on the Gaussian integers
>
