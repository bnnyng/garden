---
aliases:
  - u-substitution
tags:
  - permanent-note
  - topic-logic-mathematics
status: 
publish: 
date: 2024-11-21 15:29
lastmod: 2024-12-12T10:06:37-05:00
---
# For functions of a single variable

>[!abstract] Theorem: Change of variables for a single variable ($u$-substitution)
>Let $f: [a, b] \to \mathbb R$ be [[Continuous functions|continuous]] and $g: [c,d] \to \mathbb R$ be [[Higher-order derivatives of real functions|continuously differentiable]] with $g([c,d]) \leq [a,b]$. Then 
>$$
>\int_c^df(g(x))g'(x)dx = \int_{g(c)}^{g(d)}f(y)dy.
>$$

*Proof from [[MATH-GU4061|Modern Analysis I]].*

Define $F : [a, b] \to \mathbb R$ by 
$$
F(x) = \int_a^b f(t)dt.
$$
Since $f$ is continuous on all of $[a,b]$, we know by [[(Theorem) Fundamental theorem of calculus|FTC I]] that $F$ is differentiable on $[a,b]$ and $F’(x) = f(x)$. Now consider the composition $F \circ g : [c, d] \to \mathbb R$. By the [[Derivatives of real functions|chain rule]], we have
$$
\begin{align}
(F \circ g)'(x)
&= F'(g(x))g'(x) = f(g(x))g'(x).
\end{align}
$$
Applying [[(Theorem) Fundamental theorem of calculus|FTC II]], we obtain the claimed equality:
$$
\begin{align}
\int_c^df(g(x))g'(x)dx 
&= (F \circ g)(d) - (F \circ g)(c) \\
&= \int_a^{g(d)}f(t)dt - \int_a^{g(c)}f(t)dt \\
&= \int_{g(c)}^{g(d)}f(t)dt.
\end{align}
$$
---
# For functions of multiple variables

>[!abstract] Theorem: Change of variables in higher dimensions
>Suppose $U \subseteq \mathbb R^n$ is open, $D \subseteq U$ is closed and bounded, and $\varphi : D \to \mathbb R^n$ is $C^2$ or [[Higher-order derivatives of real functions|continuously differentiable]]. Set $D’ = \varphi(D)$. Further, suppose there exists a volume-0 subset $C \subseteq D$ such that:
>- (i) The [[Multivariable derivatives|dervative map]] $d\varphi_{\vec x}$ is [[Invertibility|invertible]] for $\vec x \in D \backslash C$;
>- (ii) $\varphi$ is injective on $D \backslash C$;
>
>that is, $\varphi$ is “essentially” an invertible $C^2$ mapping $D \to D’$ except on a volume 0 subset, which *does not affect the integral*. 
>
>In this situation, if $f: D’ \to \mathbb R$ is integrable on $D’ = \varphi(D)$, then 
>$$
>\int_{D'} f(\vec y) \ d\text{vol}_n(\vec y) = \int_D f(\varphi(\vec x) |\text{det}(d\varphi_{\vec x}| \ d\text{vol}_n(\vec x).
>$$

In particular, the claim of the theorem is that the right-hand side of the theorem is defined and can be used to compute the expression on the left-hand side.

*Proof from [[MATH-UN1208|Honors Mathematics B]].* #wip

---
# Examples