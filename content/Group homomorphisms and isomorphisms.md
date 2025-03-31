---
aliases:
  - group isomorphism
  - group homomorphism
tags:
  - permanent-note
  - topic-logic-mathematics
status: 
publish: 
date: 2023-02-01
lastmod: 2025-02-19T12:23:27-05:00
---
# Overview and basic definition

>[!example] Definition: Group homomorphism, isomorphism
>Let $(G_1, \cdot)$ and $(G_2, \circ)$ be [[Algebraic groups|groups]]. A map $\varphi : G_1 \to G_2$ is a **homomorphism** if $\varphi$ preserves the group operation; that is, for all $a,b \in G_1$, we have 
>$$
>\varphi(a \cdot b) = \varphi(a) \circ \varphi(b).
>$$
>If $\varphi$ is a bijective homomorphism, then we call $\varphi$ an **isomorphism** and we say $G_1 \cong G_2$ are **isomorphic**.

^81e5ae

The **fibers** of a group homomorphism $\varphi : G \to H$ is a collection of subsets that partition $G$, and gives another construction of [[Normal subgroups and quotient groups|quotient groups]] by defining multiplication of fibers using multiplication on $H$. The resulting quotient is naturally **isomorphic** to the image of $G$ under $\varphi$; this is the content of the [[(Theorem) First isomorphism theorem]].

This definition has a straightforward generalization to [[Ring homomorphisms and isomorphisms]].

**Related notes:** [[Normal subgroups and quotient groups]]

---
# Image and kernel of a homomorphism

>[!example] Definition: Image and kernel of a homomorphism
>If $\varphi : G_1 \to G_2$ is a homomorphism, then its **kernel** and **image** are defined by
>$$
> \text{ker}\varphi = \{ a \in G_1 \ | \ \varphi(a) = 1 \} = \varphi^{-1}(\{1\}) \subset G_1, 
> $$
> $$
> \text{im}\varphi = \{ \varphi(a) \ | \ a \in G_1 \} = \varphi G_1 \subset G_2,
> $$
> respectively.

