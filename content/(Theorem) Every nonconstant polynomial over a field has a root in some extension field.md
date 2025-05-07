---
aliases: 
tags:
  - permanent-note
  - topic-logic-mathematics
status: 
publish: "true"
lastmod: 2025-05-06T15:34:09-04:00
date: 2025-05-06T14:34:58-04:00
---
# Overview

$\quad$ The claim that every *nonconstant* polynomial over a field $F$ has a root in some [[Extension fields|extension field]] is a consequence of an important construction relating **field extensions** and **irreducible polynomials**: if $f \in F[x]$ is [[Irreducible polynomials|irreducible]], we can identify $F$ as a subfield of $E = F[x]/(f)$ is a field, and hence $E$ as an **extension** of $F$, by the embedding 
$$
a \mapsto a + (f), \quad \quad a \in F,
$$
and define a [[Polynomial roots|root]] of $f$ in $E$ by
$$
\alpha = x + (f).
$$
$\quad$ For example, this construction relates **simple extensions** with **minimal polynomials**: if $E = F(\alpha)$, where $\alpha$ is algebraic over $F$ and $f = \text{irr}(\alpha, F)$ is its [[Minimal polynomial of an element in an extension field|minimal polynomial]], then it can be shown that the projection $\alpha \mapsto x + (f)$ as above defines an inverse for the isomorphism 
$$
\overline{\text{ev}}_\alpha : F [x] / (f) \to F(\alpha), \quad \quad g + (f) \mapsto g(\alpha),
$$
induced by [[Polynomial evaluation|evaluation]] $g \mapsto g(\alpha)$ for all $g \in F[x]$, where
$$
(f) =  \{ g \in F[x] \ : \ g(\alpha) = 0 \} = \ker (\text{ev}_\alpha).
$$

---
# Statement and proof of the theorem

>[!theorem] [[MATH-GU4042|Modern Algebra II]] 3.4: Constructing larger fields to find polynomial roots
>If $f \in F[x]$ is a *nonconstant [[Polynomial rings|polynomial]]* in $F[x]$, then there exists a field $E$ containing a subfield [[Ring homomorphisms and isomorphisms|isomorphic]] to $F$ such that $f$ has a root in $E$, i.e., there is $\alpha \in E$ such that $f(\alpha) = 0$.

*Proof from [[MATH-GU4042|Modern Algebra II]].* $\quad$ The key insight is that if $p$ is an [[Factorization on polynomial rings|irreducible]] factor of $f$ in $F[x]$, we can take $E = F[x] / (p)$ and $\alpha = x + (p)$, identifying $F$ with the subfield $\{ a + (p) \ : \  a \in F\}$ of $E$. 

Let $p$ be an irreducible factor of $f$. Then $E = F[x]/(p)$ is a field (since $p$ irreducible implies $(p) \subseteq F[x]$ is [[Prime and maximal ideals|maximal]]). Further, the projection $F \to F[x]/(p)$ defined by $a \mapsto a + (p)$ has kernel $$ \{ a + (p) = 0 \ : \ a \in F \} = \{ a \in (p) \ : \ a \in F \} = \{ 0 \}, $$ so it is [[Injectivity, surjectivity, and bijectivity|injective]] and hence gives an isomorphism identifying $F \cong F[x]/(p)$. Finally, the coset $\alpha = x + (p)$ is clearly a root of $p$ in $E$ (as $p(\alpha) = p + (p) = 0$), so if $g \in F[x]$ is another factor such that $f = pg$, then $$ f(\alpha) = p(\alpha) g(\alpha) = 0 $$ and we conclude that $\alpha$ is a root of $f$ in $E$. $\quad \square$

>[!corollary] [[MATH-GU4042|Modern Algebra II]] 3.5: Every irreducible factor of $f$ in the extension $E[x]$ is linear
>If $f \in F[x]$ is a *nonconstant* polynomial, then there exists a field $E$ containing a subfield isomorphic to $F$ such that $f$ factors into *linear factors* in $E[x]$, i.e., there exist $\alpha_1, \ldots, \alpha_n \in E$ and $c \in F$ such that $f = c (x - \alpha_1) \ldots (x - \alpha_n)$ in $E[x]$. In this case, we say that $f$ **splits completely** in $E[x]$.

#wip

