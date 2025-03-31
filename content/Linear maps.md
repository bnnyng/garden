---
aliases:
  - linear map
  - linearity
  - linear isomorphism
  - -linear
tags:
  - permanent-note
  - topic-logic-mathematics
status: 
publish: 
date: <% tp.file.creation_date() %>
lastmod: 2025-03-30T16:50:32-04:00
---
# Overview and basic definitions

>[!example] Definition: Linear maps
>Let $F$ be a [[Algebraic fields|field]] and $V, V’$ be two $F$[[Vector spaces and ring modules|-vector spaces]]. A map $\varphi : V \to V’$ is said to be $F$**-linear** or a **linear map** if it is satisfies the following:
>- (i) **”Respects addition”:** $\varphi : (V, +) \to (V', +)$ is a [[Group homomorphisms and isomorphisms|group homomorphism]];
>- (ii) **”Respects scaling”:** For all $t \in F$ and $v \in V$, we have $\varphi(tv) = t\varphi(v)$. 
>
>We say $\varphi$ is a **linear isomorphism** if it is both linear and [[Injectivity, surjectivity, and bijectivity|bijective]], in which case the inverse $\varphi^{-1}$ is also linear. 

---
# Linear maps out of a field

>[!example] Definition: Linear map out of a field
>Let $V$ be an $F$[[Vector spaces and ring modules|-vector space]] and define the map $\varphi : F^n \to V$ by $\varphi (e_i) = v_i$, where $e_i \in F^n$ is a [[Vector bases and dimension|standard basis]] vector. Then $\varphi$ is a linear map if and only if $$ \varphi(t_1, \ldots, t_n) = \varphi \left ( \sum_i t_ie_i \right ) = \sum_i t_i \varphi(e_i). $$
>Further $\varphi$ is injective iff the $v_i = \varphi(e_i)$ are [[Linear independence|linearly independent]] for all $i$, and surjective iff $V = \textup{span} \{ v_1, \ldots, v_n \}$.

