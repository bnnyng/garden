---
aliases:
  - transcendental over
  - algebraic over
  - extension field
  - simple extension
  - generated over
  - field extension
tags:
  - permanent-note
  - topic-logic-mathematics
  - MATH-GU4042
status: 🔴 🔨
publish: 
date: <% tp.file.creation_date() %>
lastmod: 2025-04-07T22:38:32-04:00
---
# Overview

**Extension fields** are relevant when we have $F \leq E$ for some [[Algebraic fields|fields]] $F, E$, and $F$ is the object we are interested in studying. Note that when $F \leq E$ is a subfield in general, multiplication defined in $E$ makes $E$ into an $F$[[Vector spaces and ring modules|-vector space]].

Extension fields are used to investigate [[Polynomial roots]] with coefficients in the underlying field $F$. We say an element $\alpha \in E$ is **algebraic** over $F$ if $\alpha$ is the root of a *nonzero* polynomial $f \in F[x]$, and **transcendental** otherwise. 

The simplest example of an extension field is the *smallest* field containing $F$ and an additional element $\alpha$, denoted $F(\alpha)$. The structure of a **simple extension** $F(\alpha)$ depends on whether $\alpha$ is transcendental or algebraic. In the latter case, the [[(Theorem) First isomorphism theorem|fundamental theorem for ring homomorphisms]] applied to the [[Polynomial evaluation|evaluation homomorphism]] $\textup{ev}_\alpha$ implies that $F(\alpha) \cong F[x] / (p)$, where $p$ is a unique irreducible generator for $\ker \textup{ev}_\alpha$ called the [[Minimal polynomial in an extension field|minimal polynomial]].

- Also building finite extensions

**Related notes:**
- [[Factorization on polynomial rings]]
- [[Algebraic extension fields and closures]]
- [[Finite extension fields]]

---

# Extensions with irreducible factors 

>[!theorem] [[MATH-GU4042|Modern Algebra II]] 3.4: Constructing larger fields to find polynomial roots
>If $f \in F[x]$ is a *nonconstant [[Polynomial rings|polynomial]]* in $F[x]$, then there exists a field $E$ containing a subfield [[Ring homomorphisms and isomorphisms|isomorphic]] to $F$ such that $f$ has a root in $E$, i.e., there is $\alpha \in E$ such that $f(\alpha) = 0$.

*Proof from [[MATH-GU4042|Modern Algebra II]].* $\ \textup{ }$ The key insight is that if $p$ is an [[Factorization on polynomial rings|irreducible]] factor of $f$ in $F[x]$, we can take $E = F[x] / (p)$ and $\alpha = x + (p)$, identifying $F$ with the subfield $\{ a + (p) \ : \  a \in F\}$ of $E$. 

Let $p$ be an irreducible factor of $f$. Then $E = F[x]/(p)$ is a field (since $p$ irreducible implies $(p) \subseteq F[x]$ is [[Prime and maximal ideals|maximal]]). Further, the projection $F \to F[x]/(p)$ defined by $a \mapsto a + (p)$ has kernel $$ \{ a + (p) = 0 \ : \ a \in F \} = \{ a \in (p) \ : \ a \in F \} = \{ 0 \}, $$ so it is [[Injectivity, surjectivity, and bijectivity|injective]] and hence gives an isomorphism identifying $F \cong F[x]/(p)$. Finally, the coset $\alpha = x + (p)$ is clearly a root of $p$ in $E$ (as $p(\alpha) = p + (p) = 0$), so if $g \in F[x]$ is another factor such that $f = pg$, then $$ f(\alpha) = p(\alpha) g(\alpha) = 0 $$ and we conclude that $\alpha$ is a root of $f$ in $E$. $\ \square$

>[!corollary] [[MATH-GU4042|Modern Algebra II]] 3.5: Every irreducible factor of $f$ in the extension $E[x]$ is linear
>If $f \in F[x]$ is a *nonconstant* polynomial, then there exists a field $E$ containing a subfield isomorphic to $F$ such that $f$ factors into *linear factors* in $E[x]$, i.e., there exist $\alpha_1, \ldots, \alpha_n \in E$ and $c \in F$ such that $f = c (x - \alpha_1) \ldots (x - \alpha_n)$ in $E[x]$. In this case, we say that $f$ **splits completely** in $E[x]$.

#wip 

---

# The minimal subfield containing an element

>[!definition] Transcendental, algebraic elements over a field
>Let $F,E$ be [[Algebraic fields|fields]] such that $F \leq E$, i.e., $E$ is an **extension field** of $F$. Given an $\alpha \in E$, we have the associated [[Polynomial evaluation|evaluation homomorphism]] $\textup{ev}_\alpha : F[x] \to E$ and image $$ \textup{Im} \ \textup{ev}_\alpha = F[\alpha ] = \{ f(\alpha) \ : \ f \in F[x] \}. $$ Then we have two possible cases for $\alpha$:
>- (i) We say $\alpha$ is **transcendental** over $F$ if $\ker \textup{ev}_\alpha = \{ 0 \}$. 
>- (ii) We say $\alpha$ is **algebraic** over $F$ if $\ker \textup{ev}_\alpha \neq \{ 0 \}$, meaning there exists a *nonzero* [[Polynomial rings|polynomial]] $f \in F[x]$ such that $f(\alpha) = 0$.

>[!proposition] Smallest subfield of $E$ containing $F$ and $\alpha$
>Let $E$ be an extension field of $F$, $\alpha \in E$, and $\textup{ev}_\alpha : F[x] \to E$ be the [[Polynomial evaluation|evaluation homomorphism]]. Then the smallest subfield of $E$ containing both $F$ and $\alpha$ is defined by one of the following:
>- If $\alpha$ is **transcendental**, then $F(\alpha)$ is the image of the extension of the [[Injectivity, surjectivity, and bijectivity|injective]] homomorphism $\textup{ev}_\alpha$ to the [[Field of quotients of an integral domain|field of quotients]] (in particular, the [[Field of rational functions]]) $$ Q(F[x]) = \{ f(\alpha)/g(\alpha) \ : \ f, g \in F[x], \ g \neq 0 \}. $$
>- If $\alpha$ is **algebraic**, then $F(\alpha) = F[x] / (p)$ is the field [[(Theorem) First isomorphism theorem|arising as the image]] of $\textup{ev}_\alpha$, which has kernel generated by an [[Factorization on polynomial rings|irreducible]] $p \in F$.

#### Transcendental elements

If $\alpha$ is transcendental over $F$, then $\textup{ev}_\alpha : F[x] \to E$ is [[Injectivity, surjectivity, and bijectivity|injective]] and hence an isomorphism onto its image $F[\alpha] \subseteq E$, meaning every element of $F[\alpha]$ is of the form $f(\alpha)$ for a *unique* polynomial $f \in F[x]$. 

While this immediately implies $F[\alpha]$ is not a field, we can consider the [[Field of quotients of an integral domain|field of quotients]] $F(x)$. Since $\textup{ev}_\alpha$ is injective, it extends to a *unique* injective homomorphism $\widetilde{ \textup{ev}}_\alpha : F(x) \to E$ with image $$ \textup{Im}\ \widetilde{ \textup{ev}}_\alpha = F(\alpha) = \{ f(\alpha)/g(\alpha) \ : \ f, g \in F[x], \ g \neq 0 \} $$ and elements satisfying $$ f(\alpha) / g(\alpha) = f’(\alpha)/g’(\alpha) \iff fg' = f'g. $$ In this case, $F(\alpha)$ is the *smallest subfield* of $E$ containing $F$ and $\alpha$.

#### Algebraic elements

>[!proposition] The smallest field containing an algebraic element arises from the evaluation homomorphism
>Let $E$ be an extension field of $F$ and let $\alpha \in E$.
>- (i) The [[Polynomial evaluation|evaluation homomorphism]] $\textup{ev}_\alpha$ induces an *isomorphism* $\hat{\textup{ev}_\alpha} : F[x]/(p) \to F(\alpha)$ which satisfies $$ \hat{\textup{ev}_\alpha} (x + (p)) = \alpha. $$ 
>- (ii) The evaluation $\textup{ev}_\alpha$ has $\ker \textup{ev}_\alpha = (p)$ for some [[Irreducibility|irreducible]] polynomial $p \in F[x]$. 
>- (iii) If $f \in F[x]$ is any polynomial such that $f(\alpha) = 0$, then $p | f$.
>- (iv) $F[\alpha] = F(\alpha)$ is the smallest subfield of $E$ containing both $F$ and $\alpha$.

---

# Generated extensions

>[!definition] Simple extension, generated over
>A field $E$ is a **simple extension** of $F$ if there exists $\alpha \in E$ such that $E = F(\alpha)$. If instead $$ E = F(\alpha_1, \ldots, \alpha_n)$$ for some $\alpha_1, \ldots, \alpha_n \in E$, we say $E$ is **generated over** $F$ by $\alpha_1, \ldots, \alpha_n$.

#wip AGain smallest subfield of E contianing F and the sequence, also can iterate out (a_1,…, ak)(a_{k+1}, …, a_n

---

# Examples

---

# Code snippets

```
\textup{ev}_\alpha
```

```
\ker \textup{ev}_\alpha
```

```
\textup{Im} \ \textup{ev}_\alpha
```

```
\widetilde{ \textup{ev}}_\alpha
```

```
\hat{\textup{ev}_\alpha}
```

```
\textup{irr}(\alpha, F)
```