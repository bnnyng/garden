---
aliases:
  - minimal polynomial
  - monic generator
tags:
  - permanent-note
  - topic-logic-mathematics
  - MATH-GU4042
status: 
publish: "true"
date: <% tp.file.creation_date() %>
lastmod: 2025-04-27T10:06:35-04:00
---
# Overview and basic definition

>[!definition] Minimal polynomial
>If $E$ is an [[Extension fields|extension field]] of $F$ and $\alpha \in E$ is algebraic over $F$, then the **minimal polynomial** $\textup{irr}(\alpha, F)$ is the *unique* [[Factorization on polynomial rings|irreducible]] [[Polynomial rings|monic]] polynomial that generates $\ker \textup{ev}_\alpha$. By definition, $\textup{irr}(\alpha, F)$ is the polynomial of smallest [[Polynomial rings|degree]] for which $\alpha$ is a root (i.e., for all $g \in F[x]$, we have $g(\alpha) = 0$ iff $\textup{irr}(\alpha, F)$ [[Factorization on integral domains|divides]] $g$).
>
>The value of $\deg \textup{irr}(\alpha, F)$ is called the **degree of $\alpha$ over $F$**.


---
# Notes

>[!definition] Minimal polynomial
>If $E$ is an [[Extension fields|extension field]] of $F$ and $\alpha \in E$ is algebraic over $F$, then there exists a *unique* [[Irreducibility|irreducible]] [[Polynomial rings|monic]] polynomial $p \in F[x]$ that generates $\ker \textup{ev}_\alpha = (p)$, which is denoted $\textup{irr}(\alpha, F)$. 

>[!proposition] Facts for finding $\textup{irr}(\alpha, F)$
>Let $E$ be an extension field of $F$ and $\alpha \in E$.
>- (i) If $p \in F[x]$ is any [[Irreducibility|irreducible]] [[Polynomial rings|monic]] polynomial for which $\alpha$ is a root, i.e., $p (\alpha) = 0$, then $p = \textup{irr}(\alpha, F)$ is unique.
>- (ii) Suppose $K$ is an extension field of $E$ and $\beta \in K$. If $\beta$ is algebraic over $F$, then $\beta$ is algebraic over $E$ (by definition) and $\textup{irr}(\beta, E)$ [[Factorization on integral domains|divides]] $\textup{irr}(\beta, F)$.

