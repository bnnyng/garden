---
aliases:
  - isomorphism extension theorem
tags:
  - permanent-note
  - topic-logic-mathematics
status: 
publish: 
lastmod: 2025-05-05T16:55:44-04:00
date: 2025-04-27T14:49:19-04:00
---
# Overview



---
# Preliminaries: Isomorphism extension theorem for simple extensions

>[!lemma] The existence of a homomorphism for a root (for simple extensions)
>Let $E$ be a [[Extension fields|simple extension]] of a field $F$, meaning $E = F(\alpha)$ for some $\alpha \in E$ that is algebraic over $F$. Write $f = \text{irr}(\alpha, F)$ for the [[Minimal polynomial of an element in an extension field|minimal polynomial]]. Suppose $\sigma : F \to F’$ is a [[Ring homomorphisms and isomorphisms|homomorphism]] and $K$ is an extension of $F’$. Under these conditions, if $\beta \in K$ is a [[Polynomial roots|root]] of $\sigma(f)$, then there is a *unique* extension of $\sigma$ to a homomorphism $\varphi : E \to K$ such that $\varphi(\alpha) = \beta$.
>

$\quad$ In other words, there is a bijection from the set of homomorphisms $\varphi : E \to K$ that restrict to $\sigma$ on $F$ (i.e., $\varphi(a) = \sigma(a)$ for all $a \in F$) to the set of roots of the polynomial $\sigma(f)$ in $K$, where $\sigma(f) \in F'[x]$ is the polynomial obtained by applying the homomorphism $\sigma$ to the coefficients of $K$.

*Proof from [[MATH-GU4042|Modern Algebra II]].* 

>[!corollary]
>Let $E$ be a [[Extension fields|simple extension]] of a field $F$, meaning $E = F(\alpha)$ for some $\alpha \in E$ where $\alpha$ is algebraic over $F$, and let $\sigma: F \to F’$ be a homomorphism. Then we have the following:
>- (i) For every extension $K$ of $F’$, there exist at most $[ E : F]$ homomorphisms $\varphi : E \to K$ extending $\sigma$, i.e., such that $\varphi (\alpha)= \sigma(\alpha)$ for all $\alpha \in F$.
>- (ii) There exists an extension field $K$ of $F’$ and a homomorphism $\varphi : E \to K$ extending $\sigma$.
>- (iii) If $F$ has [[Characteristics of rings|characteristic]] $0$ (or $F$ is finite or [[Perfect fields|perfect]]) and $E’$ is an extension field of $F’$, then there exists an extension field $K$ of $E’$ such that there are exactly $[E : F]$ homomorphisms $\varphi : E \to K$ extending $\sigma$.

#wip 
 p. 9 Galois theory 2


---
# Statement and proof

>[!theorem] Isomorphism extension theorem
>Let $E$ be a [[Finite extension fields|finite extension]] of a [[Algebraic fields|field]] $F$, and suppose $\sigma: F \to F’$ is a [[Ring homomorphisms and isomorphisms|homomorphism]] to another field $F’$. Then we have the following:
>- (i) For every extension field $K$ of $F’$, there exist at most $[E : F]$ homomorphisms $\varphi:E \to K$ extending $\sigma$, i.e., such that $\varphi (\alpha) = \sigma (\alpha)$ for all $\alpha \in F$.
>- (ii) There exists an extension field $K$ of $F’$ and a homomorphism $\varphi : E \to K$ extending $\sigma$. 
>- (iii) If $F$ has [[Characteristics of rings|characteristic]] $0$ (or $F$ is finite or [[Perfect fields|perfect]]) and $E’$ is an extension field of $F’$, then there exists an extension field $K$ of $E’$ such that there are exactly $[E : F]$ homomorphisms $\varphi : E \to K$ extending $\sigma$.
