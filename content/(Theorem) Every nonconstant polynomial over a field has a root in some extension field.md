---
aliases: 
tags:
  - permanent-note
  - topic-logic-mathematics
status: 
publish: "true"
lastmod: 2025-05-07T10:41:14-04:00
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

$\quad$ By induction, the theorem implies that for every nonconstant polynomial $f \in F[x]$, there is *some* extension field $E$ of $F$ such that $f$ **splits into linear factors** in $E$. This result is related to, but not sufficient to prove the existence of a [[Splitting fields|splitting field]] for $f \in F[x]$, which is the *smallest* extension $E$ of $F$ where $f$ splits completely.


---
# Statement and proof of the theorem

>[!theorem] [[MATH-GU4042|Modern Algebra II]] 3.4: Constructing larger fields to find polynomial roots
>If $f \in F[x]$ is a *nonconstant [[Polynomial rings|polynomial]]* in $F[x]$, then there exists a field $E$ containing a subfield [[Ring homomorphisms and isomorphisms|isomorphic]] to $F$ such that $f$ has a root in $E$, i.e., there is $\alpha \in E$ such that $f(\alpha) = 0$.

*Proof from [[MATH-GU4042|Modern Algebra II]].* $\quad$ The key insight is that if $p$ is an [[Factorization on polynomial rings|irreducible]] factor of $f$ in $F[x]$, we can take $E = F[x] / (p)$ and $\alpha = x + (p)$, identifying $F$ with the subfield $\{ a + (p) \ : \  a \in F\}$ of $E$. 

$\quad$Let $p$ be an irreducible factor of $f$. Then $E = F[x]/(p)$ is a field (since $p$ irreducible implies $(p) \subseteq F[x]$ is [[Prime and maximal ideals|maximal]]). Further, the projection $F \to F[x]/(p)$ defined by $a \mapsto a + (p)$ has kernel $$ \{ a + (p) = 0 \ : \ a \in F \} = \{ a \in (p) \ : \ a \in F \} = \{ 0 \}, $$ so it is [[Injectivity, surjectivity, and bijectivity|injective]] and hence gives an isomorphism identifying $F$ with a subfield of $F[x]/(p)$. Finally, the coset $\alpha = x + (p)$ is clearly a root of $p$ in $E$ (as $p(\alpha) = p + (p) = 0$), so if $g \in F[x]$ is another factor such that $f = pg$, then $$ f(\alpha) = p(\alpha) g(\alpha) = 0 $$ and we conclude that $\alpha$ is a root of $f$ in $E$. $\quad \square$

---
# Corollary: Every nonconstant polynomial splits into linear factors in some extension

>[!corollary] [[MATH-GU4042|Modern Algebra II]] 3.5: Every nonconstant polynomial splits into linear factors in some extension
>If $f \in F[x]$ is a *nonconstant* polynomial, then there exists a field $E$ containing a subfield isomorphic to $F$ such that $f$ factors into *linear factors* in $E[x]$, i.e., there exist $\alpha_1, \ldots, \alpha_n \in E$ and $c \in F$ such that $f = c (x - \alpha_1) \ldots (x - \alpha_n)$ in $E[x]$. In this case, we say that $f$ **splits completely** in $E[x]$.

*Proof from [[MATH-GU4042|Modern Algebra II]].* $\quad$ We proceed by [[(Proof pattern) Mathematical induction|induction]] on $\deg f$. If $\deg f = 1$, this is obvious. Now suppose we know that $\deg f = n$, and we have proven this claim for all fields $F$ and all polynomials in $F[x]$ of degree $n-1$. By the theorem above, we can define a field $E_1 = F[x]/(f)$ so that $F \leq E$ by the injective mapping 
$$
F \to E_1 = F[x]/(f), \quad \quad a \mapsto a + (f) \text{ for all }a \in F
$$
and $\alpha = x + (f)$ is a root of $f$ in $E$. Thus $f$ has at least one linear factor in $E_1[x]$, meaning there exists some $g \in E_1[x]$ such that
$$
f = (x - \alpha) g, \quad \quad \deg g = n-1.
$$
Applying the inductive hypothesis to the field $E_1$ and the polynomial $g$, there exists a field $E$ containing a subfield isomorphic to $E_1$ (i.e., an injection $E_1 \to E$ that embeds $E_1$ as a subfield) such that $g$ splits into linear factors in $E$. Then $f$ is a product of linear factors in $E$, and the composition of injections 
$$
F \to E_1 \to E
$$
gives an isomorphism between $F$ and a subfield of $E$, completing the proof. $\quad \square$