---
aliases:
  - isomorphism
  - homomorphism
  - ring homomorphism
tags:
  - permanent-note
  - topic-logic-mathematics
  - MATH-GU4042
status: 🔨
publish: 
date: <% tp.file.creation_date() %>
lastmod: 2025-02-16T13:49:21-05:00
---
# Overview and basic definition

>[!example] Definition: Ring homomorphism, isomorphism
>Let $R_1, R_2$ be [[Algebraic rings|rings]]. A **homomorphism** $f : R_1 \to R_2$ is a function such that for all $r, s \in R$, we have
>$$ f(r + s) = f(r) + f(s) \quad \quad f(rs) = f(r)f(s). $$
>An **isomorphism** is a [[Injectivity, surjectivity, and bijectivity|bijective]] homomorphism. Note that if $S \leq R$ is a subring, then the canonical [[Projection and inclusion maps|inclusion]] $i : S \to R$ is a homomorphism. 


---
# Conventions for rings with unity

*From [[MATH-GU4042|Modern Algebra II]].*

 By convention, if $R_1$ is a [[Algebraic rings|ring with unity]] $1$ and $f : R_1 \to R_2$ is a homomorphism, we require that $f(1) = 1 \in R_2$. This implies the following:
- The zero map defined by $f(r) = 0$ for all $r\in R_1$ is *not* a homomorphism between rings with unity *unless* $R_2$ is the zero ring.
- If $r \in R_1$ is a [[Algebraic rings|unit]] with inverse $r^{-1} \in R_1$, so is $f(r) \in R_2$ with $(f(r))^{-1} = f(r^{-1})$, since $$ 1 = f(1) = f(rr^{-1}) = f(r)f(r^{-1}). $$
Further, if $R$ is a ring with unity and $S \leq R$ is a [[Algebraic rings|subring]], we require $1 \in S$.

---
# Images and kernels of ring homomorphisms

>[!example] Definition: Kernel of a ring homomorphism
>If $\varphi : R \to S$ is a homomorphism of [[Algebraic rings|rings]], then the **kernel** of $\varphi$ is the set of elements mapping to $0$:
>$$ \ker \varphi  = \{ r \in R \ : \ \varphi(r) = 0 \in S \} \subset R. $$ 

In other words, the kernel of a ring homomorphism is its kernel as a [[Group homomorphisms and isomorphisms|homomorphism]] of additive groups.

>[!abstract] Proposition (Dummit & Foote 7.3.5): Images and kernels of homomorphisms are subrings
>Let $\varphi : R \to S$ be a [[Ring homomorphisms and isomorphisms|ring homomorphism]].
>- (i) The image of $\varphi$ is a [[Algebraic rings|subring]] $\textup{Im} \varphi \leq S$.
>- (ii) The kernel $\varphi$ is a subring $\ker \varphi \leq R$. Further, $\ker \varphi$ is closed under multiplication by elements from $R$, i.e., if $a \in \ker \varphi$ then $r a \in \ker \varphi$ for all $r \in R$.
