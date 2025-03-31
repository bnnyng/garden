---
aliases:
  - integration by parts
tags:
  - permanent-note
  - topic-logic-mathematics
status: 
publish: "true"
date: 2024-11-21 15:19
lastmod: 2025-02-06T22:19:27-05:00
---
>[!abstract] Theorem: Integration by parts for a single variable
>Let $F, G : [a,b ]\to \mathbb R$ be [[Derivatives of real functions|differentiable]]. If $f = F’$ and $g = G’$ are both [[Darboux and Riemann integration|Darboux integrable]] on $[a,b]$, then
>$$
>\begin{align}
>\int_a^bF(x)g(x)dx 
>&= F(b) G(b) - F(a)G(a) - \int_a^bf(x)G(x)dx.
>\end{align}
>$$

*Proof from [[MATH-GU4061|Modern Analysis I]].*

Define $H: [a,b] \to \mathbb R$ by $H(x) = F(x)G(x)$. By the [[Derivatives of real functions|product rule]] for derivatives, we have
$$
H'(x) = F'(x)G(x) + F(x)G'(x) = (fG)(x) + (Fg)(x).
$$
Applying [[(Theorem) Fundamental theorem of calculus|FTC II]], we have
$$
\begin{align}
\int_a^b H'(x)dx 
&= H(b) - H(a) = F(b)G(b) - F(a)G(a) \\
&= \int_a^b [f(x)G(x) + F(x)g(x)]dx ,
\end{align}
$$
where the final equality follows by substituting the definition of $H$. Then the statement follows by rearranging the expression. $\ \square$