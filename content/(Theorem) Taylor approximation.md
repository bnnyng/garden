---
aliases:
  - Taylor's theorem
  - Taylor polynomial
tags:
  - permanent-note
  - topic-logic-mathematics
status: 
publish: "true"
date: 2024-11-09 12:51
lastmod: 2024-11-15T06:41:12-05:00
---
# Taylor’s theorem

>[!example] Definition: Taylor polynomial
>If $f: [a, b] \to \mathbb R$ is $n$[[Higher-order derivatives of real functions|-times differentiable]] at $x_0 \in [a, b]$, then its $n$-th order **Taylor polynomial** centered at $x_0$ is the [[Series|series]] defined as
>$$
>T_{n, x_0}(x) := \sum_{k=0}^n \frac{f^{(k)}(x_0)}{k!}(x-x_0)^k.
>$$
>Notice that for all $0 \leq k \leq n$, we have $T_{n, x_0}(x_0) = f^{(k)}(x_0)$. Further, denote the **approximation error** or **remainder** as $x \to x_0$ by
>$$
>R_n(x) = f(x) - T_{n, x_0}(x) = o(|x-x_0|^n),
>$$
>where the final expression uses little-o notation. 

^ed4433

#wip Taylor of order 1 is the tangent?


>[!abstract] Theorem: Taylor approximation
>Let $f: [a, b] \to \mathbb R$ be $(n = k+1)$[[Higher-order derivatives of real functions|-times continuously differentiable]] at some point $x_0 \in [a,b]$, where $k > 0$, and write  $T_{n, x_0}$ for the $n$-th order Taylor polynomial of $f$ and $R_n(x)$ for the approximation error as $x \to x_0$.  Then:
>- (i) **Peano form of the remainder.** There exists a function $h_n : [a,b] \to \mathbb R$ defined by $h_n(x) := f(x) - (T_{n, x_0})(x)$ which satisfies
>$$
>\lim_{x \to x_0}\frac{h_n(x)}{(x-x_0)^n} = 0.
>$$
>Thus, Taylor’s theorem says that the error term $o(|x-x_0|^n)$ decays as fast as some multiple of $|x-x_0|^{n+1}$, and in particular faster than any multiple of $|x-x_0|^n$.
>- (ii) **Cauchy form of the remainder.** There exists some $\xi_C \in (x_0, x)$ such that 
>$$
>R_{k, C}(x) = \frac{f^{(k+1)} (\xi_C)}{k!}(x-x_0)(x-\xi_C)^k.
>$$
>- (iii) **Lagrange form of the remainder.** There exists some $\xi_L \in (x_0, x)$ such that 
>$$
>R_{k, L}(x) = \frac{f^{(k+1)}(\xi_L)}{(k+1)!}(x-x_0)^{k+1}.
>$$
>- (iv) **Integral form of the remainder.**
>$$
>R_k(x) = \int_{x_0}^x \frac{f^{(k+1)}(t)}{k!}(x-t)^kdt.
>$$

^e31b76

*Proof (i) from [[MATH-GU4061|Modern Analysis I]].*

By [[(Theorem) L'Hopital's rule]], 
$$
\begin{align}
\lim_{x \to x_0}\frac{h_n(x)}{(x-x_0)^n}
&= \lim_{x \to x_0}\frac{h_n'(x)}{n (x-x_0)^{n-1}}
= \lim_{x \to x_0}\frac{h_n^{(n)}(x)}{n!} \\
&= \frac{h^{(n)}(x_0)}{n!}
= \frac{f^{(n)}(x_0) - T_{n, x_0}^{(n)}(x_0)}{n!}
=0.
\end{align}
$$

#wip

---
# Estimating the remainder

>[!abstract] Theorem: Estimating the remainder of Taylor’s approximation
>If $f$ is $C^{(k+1)}$ on an interval $[x-h, x + h]$ and $M = \text{max}_{t \in [0,h]} |f^{(k+1)}(x+t)|$, then the remainder can be estimated by
>$$
>|R_k(x)| = |f(x+h)- P_k(h) | \leq \frac{M}{(k+1)!}h^{k+1}
>$$
>where 
>$$ P_n(h) = \sum^n_{i=0}\frac{f^{(i)}(x)}{i!}h^i = f(x) + f'(x)h + \frac{f''(x)}{2}h^2 + \cdots + \frac{f^{(n)}(x)}{n!}h
>$$
>is Taylor’s polynomial.
