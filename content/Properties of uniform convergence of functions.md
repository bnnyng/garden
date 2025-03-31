---
aliases:
  - uniform convergence
  - converges uniformly
tags:
  - permanent-note
  - topic-logic-mathematics
  - MATH-GU4061
status: 🔴🔨
publish: 
date: 2024-12-12 22:59
lastmod: 2024-12-12T23:19:10-05:00
---
# Alternative characterizations of uniform convergence


>[!example] Definition: Supremum norm characterization of uniform convergence of functions
>Suppose $\{ f_n\}$ is a sequence converging to $f$ pointwise, meaning $\lim_{n \to \infty} f_n(x) = f(x)$ for all $x \in E$. Then $f_n \to f$ **uniformly** if and only if
>$$
>\lim_{n \to \infty} \sup_{x \in E} |f_n(x) - f(x)| = 0.
>$$

>[!abstract] Theorem (Rudin 7.8): Cauchy criterion for uniform convergence of sequences of functions
>A sequence of functions $\{ f_n \}_{n \in \mathbb N}$ defined on a set $E$ converges **uniformly** if and only if for all $\epsilon > 0$, there exists an integer $N$ such that for $m, n \geq N$, we have
>$$
>|f_n(x) - f_m(x)| < \epsilon
>$$
>for any $x \in E$.

---
# Properties of uniform convergence

![[(Theorem) The limit of a uniformly convergent sequence of continuous functions is continuous#^b734a7]]

![[(Theorem) The limit of a uniformly convergent sequence of continuous functions is continuous#^033714]]

>[!abstract] Theorem (Rudin 7.16): Uniform limit of integrable functions is integrable
>Let $f_n : [a, b] \to \mathbb R$ be a sequence of continuous functions. If each $f_n$ is [[Darboux and Riemann integration|Darboux integrable]] and $f_n \to f$ uniformly, then $f$ is also integrable with 
>$$
>\int f = \lim_{n \to \infty} \int f_n.
>$$

>[!abstract] Theorem: Uniform limit of differentiable functions with uniformly converging derivatives is differentiable
>Let $f_n : [a, b] \to \mathbb R$ be a sequence of [[Derivatives of real functions|differentiable]] functions. If $f_n \to f$ uniformly and $f_n’ \to g$ uniformly as well, then $f$ is differentiable and $f’ = g$.

