---
aliases:
  - cyclotomic extension
  - root extensions
tags:
  - permanent-note
  - topic-logic-mathematics
  - MATH-GU4042
status: 
publish: "true"
lastmod: 2025-08-09T00:37:55-04:00
date: 2025-05-08T17:07:53-04:00
---

# Overview

***$\quad$In these notes, we assume $F$ is a field of [[Characteristics of rings|characteristic]] zero.***

>[!definition] Abelian extension of a field
>If $E$ is a finite extension of a field $F$, then $E$ is an **abelian extension** if $E$ is a [[Separable, normal, and Galois extensions of fields|Galois extension]] (i.e., both normal and separable) and the [[Galois groups|Galois group]] $\text{Gal}(E/F)$ is an [[Abelian groups|abelian]] group. 
>
>Likewise, if $f \in F[x]$ is a nonconstant polynomial, then we say the Galois group of $f$ is abelian if the Galois group of its [[Splitting fields|splitting field]] over $F$ is abelian.

$\quad$ Importantly, since every subgroup of an abelian group is a [[Normal subgroups and quotient groups|normal subgroup]], it follows from [[(Theorem) Fundamental theorem of Galois theory]] that every subgroup of $\text{Gal}(E/F)$ is normal, and hence *every* intermediate field $K$ such that $F \leq K \leq E$ is a [[Separable, normal, and Galois extensions of fields|Galois extension]] of $F$ (as well as itself an abelian extension). In particular, for all $\alpha \in E$, the [[Extension fields|simple extension]] $F(\alpha)$ is normal, and hence the [[Minimal polynomial of an element in an extension field|minimal polynomial]] $\text{irr}(\alpha, F)$ splits into linear factors in $F(\alpha)[x]$; in other words, once one root of $\text{irr}(\alpha, F)$ has been adjoined to $F$, all of its other roots are expressible in terms of $\alpha$. 

$\quad$ The two main examples of abelian extensions are **cyclotomic extensions**—roughly, those obtained using roots of unity—and **$n$th root extensions**—those for which the Galois group is isomorphic to a subgroup of $\mathbb Z / n \mathbb Z$ (equivalently, have order dividing $n$).

---

# Cyclotomic extensions

>[!proposition]
>Let $E$ be a [[Splitting fields|splitting field]] of $x^n - 1$ over $F$ and let $\mu_n(E)$ denote the set of roots of $x^n-1$ in $E$. Given a generator $\zeta$ for the cyclic group $\mu_n(E) \leq E^*$, we have $E = F(\zeta)$ and $\text{Gal}(E/F)$ is isomorphic to a subgroup of $(\mathbb Z/n \mathbb Z)^*$. In particular, $\text{Gal}(E/F)$ is abelian.

*Proof from [[MATH-GU4042|Modern Algebra II]].* $\quad$ By the definition of a splitting field, $f = x^n - 1$ factors into linear factors in $E$. We first show that all of these factors are distinct: since $F$ has characteristic zero, the roots of $Df = nx^{-1}$ are exactly $0$. But $0$ is not a root of $f$, so $f, Df$ do not share a root and by the criteria in [[Formal derivatives on polynomial rings]], $f$ does not have multiple roots. Thus, the set $\mu_n(E)$ of $n$th roots of unity is a subgroup of $E^*$ with order $n$. 

$\quad$ We also know that $\mu_n(E) \leq E^*$ is a finite subgroup, hence cyclic by [[(Theorem) Existence of a primitive root]]. Then for any generator $\zeta \in \mu_n(E)$, we know that $F(\zeta)$ is a subfield of $E$ containing all the roots of $f = x^n - 1$. But by the definition of a splitting field again, $E$ is generated over $F$ but the roots of $f$, so $E$ is the *minimal* such subfield and hence $F(\zeta) = E$. This proves the first part of the claim.

$\quad$ Next, we show that if $\zeta$ is a generator for $\mu_n(E)$, then $\sigma(\zeta)$ is also a generator for all $\sigma \in \text{Gal}(E/F)$. Let $\sigma \in \text{Gal}(E/F)$, so $\sigma(\zeta)$ is also a root of $x^n - 1$ and hence $\sigma(\zeta) = \zeta^i$ for some $i$. Then setting $d = \text{gcd}(i, n)$, we must have $(\zeta^i)^{n/d} = 1$, and hence $\zeta^i$ is a root of $f(x^{1/d}) = x^{n/d}-1$. But this implies that $\zeta = \sigma^{-1}(\zeta^i)$ is also a root of $x^{n/d}-1$, and since $\zeta$ has order $n$ in $\mu_n(E)$, this means $n/d \geq n$. Thus $d = \gcd(i, n) = 1$ and $i$ is relatively prime to $n$.

$\quad$ To identify $\text{Gal}(E/F)$ with a subgroup of $(\mathbb Z/n \mathbb Z)^*$, define the map $$ \varphi : \text{Gal}(E/F) \to (\mathbb Z/n \mathbb Z)^*, \quad \quad \sigma(\zeta) \mapsto \zeta^{\varphi(\sigma)}$$

where $\varphi(\sigma)$ is an integer $i$ which we can take $\mod n$. The fact that $\text{gcd}(i, n) = 1$ means that $\varphi(\sigma) = i$ is a well-defined element of $(\mathbb Z/n \mathbb Z)^*$. It is straightforward to check that $\varphi$ is a homomorphism, i.e., that $\varphi(\sigma \circ \sigma’) = \varphi(\sigma) \varphi(\sigma’)$, using the fact that $(\sigma \circ \sigma’) (\zeta) = \zeta^{\varphi(\sigma)\varphi(\sigma’)}$ for all $\sigma, \sigma’ \in \text{Gal}(E/F)$. Finally, $\varphi$ is injective since $$ \varphi(\sigma) = 1 \implies \sigma(\zeta) = \zeta \implies \sigma = \text{id}_E, $$

and thus $\ker \varphi = \{ 1 \}$ is trivial. Thus, $\varphi$ embeds $\text{Gal}(E/F)$ as a subgroup, as claimed. $\quad \square$

>[!definition] Primitive $n$th root of unity
>Let $E$ is a [[Splitting fields|splitting field]] of $x^n  - 1$ and $\mu_n(E) \leq E^*$ be the set of roots of $x^n - 1$ in $E$. A **primitive $n$th root of unity** is a generator of $\mu_n(E)$.

>[!remark]
> - Since [[(Theorem) Existence of a primitive root]] implies that $\mu_n(E)$ is **cyclic** of order $n$, there are exactly $\varphi(n)$ generators of $\mu_n(E)$, where $\varphi$ is the [[Euler totient function]]. Thus, there are exactly $\varphi(n)$ primitive $n$th roots of unity. 
> - The **cyclotomic polynomial** $$ \Phi_n = \prod_{\zeta \in \mu_n(E), \ \zeta \text{ primitive}}(x - \zeta) $$ therefore splits into $\varphi(n)$ linear factors, showing that $\deg \Phi_n = \varphi(n)$.
> - The proof above shows that $\text{Gal}(E/F)$ **permutes** the primitive $n$th roots of unity. In particular, the roots of $\Phi_n$ are permuted by $\text{Gal}(E/F)$, so it follows from the definition of $\Phi_n$ that $$ \sigma(\Phi_n) = \Phi_n, \quad \quad \sigma \in \text{Gal}(E/F). $$
> - Following the proof, since $\text{Gal}(E/F)$ is identified with a subgroup of $(\mathbb Z / n \mathbb Z)^*$, by [[(Theorem) Lagrange]] we know that the order of $\text{Gal}(E/F)$ will divide $\varphi(n)$ in general. However, we have $$ \text{Gal}(E/F) \cong (\mathbb Z / n \mathbb Z)^* \iff \# (\text{Gal}(E/F)) = \varphi(n) \iff \Phi_n \text{ irreducible in }F[x]. $$

---

# $n$th root extensions

>[!proposition] 
>Let $n>0$ and suppose $x^n-1$ has $n$ distinct roots in $F$, i.e., that $\#(\mu_n(F)) = n$. Let $a \neq 0 \in F$ and $E$ be a [[Splitting fields|splitting field]] for $x^n - a$. If $\alpha = \sqrt[n]{a}$ is a root of $x^n - a$ in $E$, then every root of $x^n - a$ is of the form $\zeta \alpha$ for some $\zeta \in \mu_n(F)$, i.e., a root of $x^n-1$. In this case, 
>$$
>x^n - a = \prod_{\zeta \in \mu_n(F)} (x - \zeta \alpha), 
>$$
>and $E = F(\alpha) = F(\sqrt[n]{a})$. Moreover, $\text{Gal}(E/F)$ is abelian and isomorphic to a subgroup of $\mu_n(F) \cong \mathbb Z/n \mathbb Z$.

$\quad$ In this situation, we have $$ x^n-a \text{ irreducible} \iff [E:F] = n \iff \#(\text{Gal}(E/F)) = n \iff \text{Gal}(E/F) \cong \mathbb Z / n \mathbb Z. $$

*Proof from [[MATH-GU4042|Modern Algebra II]].* $\quad$ We first show that the splitting field is of the form $E = F(\alpha)$, where $\alpha = \sqrt[n]{a}$ is a root of $x^n-a$ in $E$. Since $\mu_n(F) \subseteq F \subseteq E$, if root $\alpha \in E$ is a root of $x^n-a$, then so is $\zeta\alpha$ for all $n$th roots of unity $\zeta \in \mu_n(F)$. Then there are *at least* $n$ distinct linear factors $(x - \zeta\alpha)$, and hence

$$
\prod_{\zeta \in \mu_n(F)} (x - \zeta \alpha)
$$

divides $x^n - a$ in $E[x]$. However, since both sides are monic of degree $n$, they must be exactly equal. This shows that $x^n-a$ splits into linear factors in $F(\alpha)$, so $F(\alpha)$ must be a splitting field for $x^n-a$ and thus $F(\alpha) \cong E$.

$\quad$ We now show the inclusion of $\text{Gal}(E/F)$ into $\mu_n(F) \cong \mathbb Z / n \mathbb Z$. Recall that the Galois group for the splitting field $E$ acts transitively on the roots of $x^n-a$. Thus for any $\sigma \in \text{Gal}(E/F)$, the image $\sigma(\alpha)$ is just another root of $x^n - a$ and hence $\sigma(\alpha) = \zeta(\alpha)$ for some uniquely specified $\zeta \in \mu_n(F)$ (since $\alpha$ assume nonzero). Then the map 

$$
\varphi: \text{Gal}(E/F) \to \mu_n(F), \quad \quad \sigma \mapsto \sigma(\alpha)/\alpha
$$

sending each $\sigma$ to the unique $\zeta \in \mu_n(F)$ such that $\sigma(\alpha) = \varphi(\alpha) \cdot \alpha$, is well-defined. We can check that $\varphi$ is a homomorphism using the fact that for all $\sigma, \sigma’ \in \text{Gal}(E/F)$, we have

$$
\sigma(\varphi(\sigma') \cdot \alpha) = \varphi(\sigma')\sigma(\alpha),
$$

since $\varphi(\sigma’) \in \mu_n(F) \subseteq F$ and hence is fixed. Finally, $\varphi$ is injective since $E = F(\alpha)$ implies that 

$$
\sigma \in \ker\varphi \iff \sigma (\alpha) = \alpha \iff \sigma = \text{id}_E,
$$

and we conclude that $\text{Gal}(E/F)$ is isomorphic to a subgroup of $\mu_n(F) \cong \mathbb Z / n \mathbb Z$. $\quad \square$

---

# Code snippets

```
(\mathbb Z/n \mathbb Z)^*
```