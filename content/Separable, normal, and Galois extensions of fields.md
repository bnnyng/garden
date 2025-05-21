---
aliases:
  - normal extension
  - separable extension
  - Galois extension
tags:
  - permanent-note
  - topic-logic-mathematics
  - MATH-GU4042
status: 
publish: 
lastmod: 2025-05-12T13:46:28-04:00
date: 2025-04-23T12:25:42-04:00
---
# Overview

$\quad$ Separable and normal field extensions 
![[Pasted image 20250507120405.png]]

- Normal extension relates spliting field to constructing utomorphisms

**Relevant theorems:**
- [[(Theorem) Every finite separable extension is a simple extension]]

**Related notes:**
- [[Splitting fields]]

---

# Separable extensions

>[!definition] Separable extension
>Let $E$ be a [[Finite extension fields|finite extension]] of a [[Algebraic fields|field]] $F$. Then $E$ is a **separable extension** of $F$ if for every extension field $K$ of $F$, there exists an extension field $L$ of $K$ such that there are exactly $[E: F]$ homomorphisms $\varphi : E \to L$ with $\varphi(a) = a$ for all $a \in F$ (i.e., homomorphisms $\varphi$ extending the identity on $F$).

>[!lemma] Relationship between separable extensions and minimal polynomials
>If $E$ is a finite extension of $F$, then $E$ is separable if and only if for all $\alpha \in E$, the [[Minimal polynomial of an element in an extension field|minimal polynomial]] $\text{irr}(\alpha, F)$ does not have [[Polynomial roots|multiple roots]].



#wip why?

![[Pasted image 20250507100719.png]]

---

# Normal extensions

>[!lemma] The image of a finite extension under a homomorphism is a finite extension of the image
>Let $L$ be an [[Extension fields|extension field]] of a field $F$ and let $\alpha_1, \ldots, \alpha_n \in L$. If $\varphi : F (\alpha_1, \ldots, \alpha_n) \to L$ is a homomorphism, then 
>$$
>\varphi (F (\alpha_1, \ldots, \alpha_n)) = \varphi(F)(\varphi(\alpha_1), \ldots, \varphi(\alpha_n)).
>$$

>[!theorem] Relation between splitting fields and constructing automorphisms
>Let $E$ be a [[Finite extension fields|finite extension]] of a [[Algebraic fields|field]] $F$. Then the following are equivalent:
>- (i) **Splitting field construction:** There exists a [[Polynomial rings|polynomial]] $f \in F[x]$ with $\deg f \geq 1$ such that $E$ is a [[Splitting fields|splitting field]] of $f$ over $F$.
>- (ii) **Fixed field under embeddings:** For every [[Extension fields|extension field]] $L$ of $E$, if $\varphi : E \to L$ is a homomorphism that fixes $F$, then $\varphi(E) = E$ and hence $\varphi$ is an automorphism of $E$. Further, $\varphi \in \text{Gal}(E / F)$.
>- (iii) **Root containment for irreducibles:** For every [[Irreducible polynomials|irreducible]] polynomial $p \in F[x]$, if there is a root of $p$ in $E$, then $p$ factors into a product of linear factors in $E[x]$.
>
>We say that $E$ is a **normal extension** of $F$ if either of these conditions are satisfied.



*Proof from [[MATH-GU4042|Modern Algebra II]]. Uses: [[(Proof pattern) Cycle of implications]].* $\quad$ ***Key steps are emphasized.***

- **(i) $\implies$ (ii):** By the assumption that $E$ is a splitting field of $F$, there exist $\alpha_1, \ldots, \alpha_n \in E$ such that we can split $f = c \prod_{i=1}^n(x - \alpha_i)$ in $E[x]$ and $E = F(\alpha_1, \ldots, \alpha_n)$. In particular, ***every root of $f$ in $L$ is already contained in $E$***. If $\varphi : E \to L$ is a homomorphism that fixes $F$, then $\varphi$ specifically fixes the coefficients of $f \in F[x]$ and ***we have $\varphi(f) = f$***. Then by a result from [[Automorphisms and polynomial roots]], we know that $\alpha_i$ is a root of $f$ if and only if $\varphi(\alpha_i)$ is a root of $\varphi(f) = f$, i.e., ***$\varphi(\alpha_i) = \alpha_j$ for some other root $\alpha_j$***, and hence $$ \varphi \{ \alpha_1, \ldots, \alpha_n \} \subseteq \{ \alpha_1, \ldots, \alpha_n \}. $$ Since $\{ \alpha_1, \ldots, \alpha_n \}$ is finite and $\varphi$ is injective, it must be bijective, and hence ***a permutation of the roots of $f$.*** Together with the lemma above, this means $$ \varphi(E) = \varphi(F)(\varphi(\alpha_1), \ldots, \varphi(\alpha_n)) = F(\alpha_1, \ldots, \alpha_n) = E, $$ showing that $\varphi$ is an automorphism of $E$ that fixes $F$.
- **(ii) $\implies$ (iii):** Suppose $p \in F[x]$ is an irreducible polynomial and $\beta \in E$ is a root of $p$. By [[(Theorem) Every nonconstant polynomial over a field has a root in some extension field]], there exists an extension field $K$ of $E$ such that $p$ is a product of linear factors in $K[x]$, i.e., $$ p = c \prod_j (x - \beta_j), \quad \quad \beta = \beta_1. $$Since $\beta_1$ and $\beta_j$ are both roots of $p$ for any $j$, ***there exists a canonical isomorphism[^1] $\sigma: F(\beta_1) \to F(\beta_j)$***, where $F(\beta_1) \leq E$ and $F(\beta_j) \leq K$, defined by $$ a \mapsto a \text{ for all }a \in F, \quad \quad \beta_1 \mapsto \beta_j, $$Now viewing $\sigma$ as a homomorphism $E \to K$, we can apply (ii) of the [[(Theorem) The number of extensions of a field homomorphism is at most the degree of the field extension|isomorphism extension theorem]] to ***find an extension field $L$ of $K$ and a homomorphism $\varphi : E \to L$ that restricts to $\sigma$*** on $F(\beta_1)$, i.e., $\varphi(b) = \sigma(b)$ for all $b \in F(\beta_1)$.  Then ***$\varphi (a) = \sigma(a) = a$ for all $a \in F$***, so $\varphi$ is a homomorphism that fixes $F$. Further, since $F, E \leq K \leq L$, ***the field $L$ is explicitly an extension of both $F$ and $E$***, so the hypothesis (ii) applies and we have $\varphi(E) = E$. But $$ \varphi(\beta_1) = \sigma(\beta_1) = \beta_j, $$ ***so $\beta_j \in E$ for every root $\beta_j$ of $p$***. It follows that $p$ is a product of linear factors in $E[x]$, as claimed.
- **(iii) $\implies$(i):** Since $E$ is a finite extension of $F$, we may write $$ E = F(\alpha_1, \ldots, \alpha_n). $$ For each $i$, the polynomial $p_i = \text{irr}(\alpha_i , F)$ is an irreducible in $F[x]$ with a root $\alpha_i$ in $E$. Then $p_i$ satisfies the hypothesis of (iii) and is therefore the product of linear factors in $E[x]$. Now let $$ f = p_1 \ldots p_n, $$ which is the product or linear factors in $E[x]$. By construction, $E$ is generated by *some* of the roots of $f$, and hence *all* of the roots of $f$, so $E$ is satisfies the definition of a splitting field for $f$. $\quad \square$

>[!remark]
>Note that the property of being a **normal extension** does not in general translate over inclusions. Suppose $F \leq E \leq K$:
>- There are sequences where $K$ is a normal extension of $E$ and $E$ is a normal extension of $K$, but $E$ is **not** a normal extension of $F$.
>- There are also sequences where $E$ is a normal extension of $F$, but $K$ is **not** a normal extension of $F$.
>- However, it is automatic that if $E$ is a normal extension of $F$, then $E$ is a normal extension of $K$ as well.

---

# Galois extensions

>[!corollary] 
>Let $E$ be a [[Finite extension fields|finite extension]] of a field $F$. Then the following are equivalent:
>- (i) $E$ is a separable extension of $F$ (automatic if $F$ has [[Characteristics of rings|characteristic]] $0$, or if $F$ is finite or more generally [[Perfect fields|perfect]]) and $E$ is a normal extension of $F$.
>- (ii) $\#(\text{Gal}(E/F) = [E:F]$.
>
>We say that $E$ is a **Galois extension** of $F$ if either of these conditions are satisfied.

*Proof from [[MATH-GU4042|Modern Algebra II]].*
- **(i) $\implies$ (ii):** Apply the definition of **separable** to the case $K = E$: there exists an extension field $L$ of $E$ with exactly $[E : F]$ homomorphisms $\varphi : E \to L$ fixing $F$. Then by a property of being **normal**, $\varphi (E) = E$ and hence $\varphi \in \text{Gal}(E/F)$. Conversely, every element of $\text{Gal}(E/F)$ is a homomorphism $E \to E \leq L$ that fixes $F$, so the two are equal as sets and $$ \#(\text{Gal}(E/F) = [E : F]. $$

#wip

---
# Examples


- Sequeces where normal extensions are not transitive?


[^1]: Explicitly, $p$ is the [[Minimal polynomial of an element in an extension field|minimal polynomial]] of both $\beta_i$ over $F$ for any $i$, and there is an isomorphism $F(\beta_i) \to F[x]/(p)$ defined by the mapping $$ a \mapsto a + (p), \quad \quad \beta_i \mapsto x + (p). $$ Hence for any other $j$, we can compose isomorphisms to obtain $F(\beta_i) \cong F[x]/(p) \cong F(\beta_j)$.