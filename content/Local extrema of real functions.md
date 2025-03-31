---
aliases:
  - local maximum
  - local minimum
tags:
  - permanent-note
  - topic-logic-mathematics
  - MATH-GU4061
date: 2024-11-09 10:55
lastmod: 2024-11-30T15:26:02-05:00
status: 🔨
publish: 
---



>[!example] Definition: Local extremum of a real function
>Let $(X,d)$ be any [[Metrics, metric spaces, and the metric topology|metric space]] and $U \subseteq X$. Given function $f: U \to \mathbb R$, we say $x_0 \in U$ is a:
>- **Local maximum** if there exists $\epsilon > 0$ such that $d(x, x_0) < \epsilon \implies f(x) \leq f(x_0)$.
>- **Local minimum** if there exists $\epsilon > 0$ such that $d(x, x_0) < \epsilon \implies f(x) \geq f(x_0)$. 

^DEF-local-extremum

>[!abstract] Theorem: Local extrema are stationary
>If $f: U \to \mathbb R$ is [[Derivatives of real functions|differentiable]] and $x_0 \in U$ is a local is a local extremum of $f$, then $df_{x_0} = 0$.
^THM-first-derivative-test

*Proof from [[MATH-GU4061|Modern Analysis I]]*.

We show that this holds for local maxima:
$$
\lim_{n \to \infty} \frac{f(x_0 + 1/n) - f(x_0)}{1/n} \leq 0
\quad \quad \quad
\lim_{n \to \infty} \frac{f(x_0) - f(x_0 - 1/n)}{1/n} \geq 0.
$$
Thus, $f’(x_0) \leq 0$ and $f’(x_0) \geq 0$, so we conclude that $f’(x_0) = 0$. $\ \square$

