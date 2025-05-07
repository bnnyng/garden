---
aliases:
  - isomorphism extension theorem
tags:
  - permanent-note
  - topic-logic-mathematics
status: 
publish: "true"
lastmod: 2025-05-06T18:02:05-04:00
date: 2025-04-27T14:49:19-04:00
---
# Overview

$\quad$ The **isomorphism extension theorem** says that if $F, F’$ are fields with [[Finite extension fields|finite extensions]] $E, K$, respectively, then any [[Ring homomorphisms and isomorphisms|ring homomorphism]] $\sigma : F \to F’$ has at most $[E : F]$ **extensions** to homomorphisms $E \to K$, with equality if $F$ is of [[Characteristics of rings|characteristic]] zero, finite, or [[Perfect fields|perfect]].

$\quad$ The proof of the theorem for [[Extension fields|simple extensions]] is a direct corollary of [[(Theorem) Universal property of simple field extensions]], and the proof for general finite extensions proceeds by [[(Proof pattern) Mathematical induction|induction]].

$\quad$ The theorem is especially interesting when $F’ = F$ and $\sigma = \text{id}_F$, in which case it counts the [[Galois groups|automorphisms]] of $K = E$ that fix $F$:
$$
\#(\text{Gal}(E/F)) \leq [E:F].
$$

In particular, this is an equality when $E$ is a [[Separable, normal, and Galois extensions of fields|Galois extension]] of $F$. This is an important preliminary result for [[(Theorem) Fundamental theorem of Galois theory]], which links intermediate fields to subgroups. #wip  

![[Pasted image 20250506150350.png]]

---

# Preliminaries: Isomorphism extension theorem for simple extensions

>[!corollary] Isomorphism extension theorem for simple extensions
>Let $E$ be a [[Extension fields|simple extension]] of a field $F$, meaning $E = F(\alpha)$ for some $\alpha \in E$ where $\alpha$ is algebraic over $F$, and let $\sigma: F \to F’$ be a homomorphism. Then we have the following:
>- (i) For every extension $K$ of $F’$, there exist at most $[ E : F]$ homomorphisms $\varphi : E \to K$ extending $\sigma$, i.e., such that $\varphi (\alpha)= \sigma(\alpha)$ for all $\alpha \in F$.
>- (ii) There exists an extension field $K$ of $F’$ and a homomorphism $\varphi : E \to K$ extending $\sigma$.
>- (iii) If $F$ has [[Characteristics of rings|characteristic]] $0$ (or $F$ is finite or [[Perfect fields|perfect]]) and $E’$ is an extension field of $F’$, then there exists an extension field $K$ of $E’$ such that there are exactly $[E : F]$ homomorphisms $\varphi : E \to K$ extending $\sigma$.

*Proof from [[MATH-GU4042|Modern Algebra II]].* 
- (i) From [[(Theorem) Universal property of simple field extensions]], we know that the extensions of $\sigma$ to a homomorphism $F(\alpha) \to K$ are in one-to-one correspondence with the $\beta \in K$ where $\beta$ is a root of $\sigma(f)$, with $f = \text{irr}(\alpha, F)$. Since $\sigma(f)$ has at most $$ \deg(f) = \deg(\text{irr}(\alpha, F)) = [E: F] $$ roots in any extension field $K$ of $F’$, this implies that there are at most $[E: F]$ such extensions.
- (ii) Since [[(Theorem) Every nonconstant polynomial over a field has a root in some extension field]], we can choose an extension field $K$ of $F’$ such that $\sigma(f)$ has a root $\beta$ in $K$. Thus [[(Theorem) Universal property of simple field extensions]] implies that there will be at least one homomorphism $\varphi : F(\alpha) \to K$ extending $\sigma$.
- (iii) From a corollary of [[(Theorem) Every nonconstant polynomial over a field has a root in some extension field]], we can choose an extension field $K$ of $F’$ such that $\sigma(f)$ factors into a product of linear factors in $K[x]$. If $F$ is [[Perfect fields|perfect]] (i.e., $F$ is finite, has characteristic 0, or has characteristic $p > 0$ and the [[Frobenius homomorphism]] is surjective), then from a result of [[Formal derivatives on polynomial rings]] we know that the irreducible polynomial $f$ has no [[Polynomial roots|multiple roots]] in *any* extension field. Then there are $\deg (f)$ distinct roots of $f$ in $J$, and hence [[(Theorem) Universal property of simple field extensions]] implies that there are $\deg (f)$ different extensions of $\sigma$ to a homomorphism $F (\alpha) \to K$. $\quad \square$

---

# Statement and proof of the theorem

>[!theorem] Isomorphism extension theorem
>Let $E$ be a [[Finite extension fields|finite extension]] of a [[Algebraic fields|field]] $F$, and suppose $\sigma: F \to F’$ is a [[Ring homomorphisms and isomorphisms|homomorphism]] to another field $F’$. Then we have the following:
>- (i) For every extension field $K$ of $F’$, there exist at most $[E : F]$ homomorphisms $\varphi:E \to K$ extending $\sigma$, i.e., such that $\varphi (\alpha) = \sigma (\alpha)$ for all $\alpha \in F$.
>- (ii) There exists an extension field $K$ of $F’$ and a homomorphism $\varphi : E \to K$ extending $\sigma$. 
>- (iii) If $F$ has [[Characteristics of rings|characteristic]] $0$ (or $F$ is finite or [[Perfect fields|perfect]]) and $E’$ is an extension field of $F’$, then there exists an extension field $K$ of $E’$ such that there are exactly $[E : F]$ homomorphisms $\varphi : E \to K$ extending $\sigma$.

*Proof from [[MATH-GU4042|Modern Algebra II]].* $\quad$ Let 
$$
E = F(\alpha_1, \ldots, \alpha_n), \quad \quad \alpha_i \in E
$$
be a finite extension. We proceed by [[(Proof pattern) Mathematical induction|induction]] on $n$, with the base case $n =1$ already proven for simple extensions.
$\quad$ Let $F_1 = F(\alpha_1, \ldots, \alpha_{n-1})$ and $\alpha = \alpha_n$, so we view $E = F_1(\alpha)$ as a simple extension, and we have a sequence of extensions $F \leq F_1 \leq E$. We first observe that that any extension $\varphi : F_1 \to K$ of $\sigma$ can itself be extended to a homomorphism $\psi: E \to K$, where $\psi$ is clearly also an extension of $\sigma$; conversely, if $\psi : E \to K$ is an extension of $\sigma$, then we can find an extension of $\sigma$ to a homomorphism $\psi : F_1 \to K$ by simply taking the restriction $\psi|_{F_1} = \varphi$.

- (i) By the inductive hypothesis, any homomorphism $\sigma : F \to F'$ has at most $[F_1 : F]$ extensions to homomorphisms $F_1 \to K$; let $$ \{ \varphi_1, \ldots, \varphi_m \}, \quad \quad m \leq [F_1 : F] $$ be the set of all such extensions. For each $\varphi_i : F_1 \to K$, the $n=1$ case implies there can be at most $$ [E : F_1 ] = [F_1(\alpha) : F_1] $$ extensions of $\varphi_i$ to homomorphisms $E = F_1(\alpha) \to K$. Then summing this for all $m$ extensions and applying the [[Finite extension fields|tower law]] for finite extension degrees, we see that there are $$ [F_1 : F] [F(\alpha) : F_1] = [E : F_1] [F_1 : F] = [E : F] $$ extensions of $\sigma$ to homomorphisms $E \to K$, as claimed.
- (ii) The inductive hypothesis implies that for $\sigma : F \to F’$, there is an extension $\varphi_1 : F_1 \to K_1$, where $K_1$ is some field containing $F’$. Let $f_1 = \text{irr}(\alpha, F_1)$. By [[(Theorem) Every nonconstant polynomial over a field has a root in some extension field]], we can find an extension $K$ of $K_1$ such that $\sigma_1(f_1)$ has a root in $K$ (e.g., by formally adjoining a root $\beta$ to define $K = K_1(\beta) \cong K_1[x]/(\sigma_1(f_1))$, if there is not a root in $K_1$ already). Then it follows from the $n=1$ case that there is an extension of $\varphi_1$ to a homomorphism $\varphi : E = F(\alpha) \to K$, hence extending $\sigma$ as well.

#wip 
![[Pasted image 20250506160935.png]]


---
# Corollary: An upper bound for the size of the Galois group

![[Pasted image 20250506180155.png]]

---

# Code snippets

```
\text{ev}_\beta \circ \sigma
```