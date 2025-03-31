---
aliases:
  - fundamental theorem for ring homomorphisms
tags:
  - permanent-note
  - topic-logic-mathematics
  - MATH-GU4041
  - MATH-GU4042
status: 
publish: 
date: 2024-12-13 13:05
lastmod: 2025-03-30T16:15:52-04:00
---
# Overview




---
# In group theory

>[!abstract] Theorem: First isomorphism theorem for groups
>Let $\varphi : G_1 \to G_2$ be a group [[Group homomorphisms and isomorphisms|homomorphism]]. Then:
>- (i) The kernel is a [[Normal subgroups and quotient groups|normal subgroup]] of $G_1$;
>- (ii) The image is a [[Algebraic groups|subgroup]] of $G_2$;
>- (iii) There exists an isomorphism such that $\text{im}\varphi \cong G_1 / \text{ker}\varphi$.

>[!abstract] Theorem: Second isomorphism theorem for groups
>Let $G$ be a [[Algebraic groups|group]] with subgroups $A, B \leq G$, and assume $A \leq N_G(B)$ is a subgroup of the normalizer of $B$ in $G$, the set
>$$
>N_G(B) = \{ g \in G \ : \ gBg^{-1} = B \}.
>$$

---
# In ring theory


>[!abstract] Theorem: First isomorphism theorem for rings
>Let $\varphi : R \to S$ be a [[Ring homomorphisms and isomorphisms|ring homomorphism]]. Then there is a *unique* isomorphism $\tilde \varphi : R/\ker \varphi \to \varphi (R)$ such that $$ \varphi = i \circ \tilde \varphi \circ \pi, $$ where $\pi : R \to R/\ker \varphi$ is the quotient homomorphism $\pi(r) = r + \ker \varphi$ and $i : \varphi(R) \to S$ is the inclusion.
>
>![[IMG_AD3080436138-1.jpeg|200]]

>[!abstract] Corollary ([[MATH-GU4042|Modern Algebra II]] HW 4.4):
>Let $\varphi : R \to S$ be a [[Ring homomorphisms and isomorphisms|ring homomorphism]], and let $I \subseteq R$ and $J \subseteq S$ be [[Ideals and quotient rings|ideals]] in $R, S$, respectively. 
>- (i) The preimage $\varphi^{-1}(J)$ is an ideal in $R$. In particular, if $R \leq S$ is a [[Algebraic rings|subring]] and $J \subseteq S$ is an ideal, then $R \cap J$ is an ideal in $R$.
>- (ii) If $\varphi$ is [[Injectivity, surjectivity, and bijectivity|surjective]], then $\varphi (I)$ is an ideal of $S$. 