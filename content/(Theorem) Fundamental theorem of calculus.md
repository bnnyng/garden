---
aliases:
  - FTC I
  - FTC II
tags:
  - permanent-note
  - topic-logic-mathematics
status: 
publish: "true"
date: 2024-11-21 14:41
lastmod: 2024-12-19T19:13:29-05:00
---
>[!abstract] Theorem (Rudin 6.20): FTC I for a single variable
>Suppose $f: [a, b] \to \mathbb R$ is [[Darboux and Riemann integration|Darboux integrable]]. Define $F : [a, b] \to \mathbb R$ by 
>$$
>F(x) = \int_a^x f(t)dt.
>$$
>Then $F$ is [[Continuous functions|uniformly continuous]] on $[a,b]$. Moreover, if $f$ is continuous at $x_0 \in [a, b]$, then $F$ is [[Derivatives of real functions|differentiable]] at $x_0$ with $F’(x_0) = f(x_0)$.

*Proof from [[MATH-GU4061|Modern Analysis I]]. Uses:*
- [[(Proof pattern) Middle-man trick]]

First, we show $F$ is uniformly continuous. Since $f$ is Darboux integrable, it is also bounded on $[a, b]$, and there exists $M > 0$ such that $|f(t)| \leq M$ for all $t \in [a, b]$. For all $\epsilon > 0$, set $\delta = \epsilon / M$. Then for all $a \leq x \leq y \leq b$, we have
$$
\begin{align}
|x-y| < \delta \implies &|F(y) - F(x)| 
= \left | \int_x^y f(t) dt \right | \\
&\leq \int_x^y|f(t)|dt \leq M |y-x| \leq M\delta = \epsilon.
\end{align}
$$

Now suppose $f$ is continuous at $x_0 \in [a,b]$, and let $\epsilon > 0$. Then there exists some $\delta > 0$ such that 
$$
|f(t) - f(x_0)| < \epsilon
$$
for all $t \in B(x_0, \delta) \cap [a, b]$. In particular, for all $t > x_0$, we have

$$
\begin{align}
\frac{F(t) - F(x_0)}{t-x_0} 
&= \frac{1}{t-x_0} \int_{x_0}^t f(x) dx
= \frac{1}{t-x_0} \int_{x_0}^t |f(x) - f(x_0)| dx + f(x_0).
\end{align}
$$
By continuity of $f$ at $x_0$, we know
$$
\frac{1}{t - x_0}\int_{x_0}^t |f(x) - f(x_0)|dx \leq \frac{1}{t-x_0}\int_{x_0}^t|f(x) - f(x_0)|dx < \epsilon,
$$
so 
$$
\left | \frac{F(t) - F(x_0)}{t-x_0} - f(x_0) \right | < \epsilon.
$$
Since $\epsilon > 0$ is arbitrary, it follows from taking the limit as $t \to x_0$ that $F’(x_0) = f(x_0)$ as claimed. $\ \square$

>[!abstract] Theorem (Rudin 6.20): FTC II for a single variable
>Let $f : [a,b] \to \mathbb R$ be [[Darboux and Riemann integration|Darboux integrable]], and suppose there exists a [[Derivatives of real functions|differentiable]] function $F: [a, b] \to \mathbb R$ such that $F’ = f$. Then
>$$
>\int_a^b f(x)dx = F(b) - F(a).
>$$

*Proof from [[MATH-GU4061|Modern Analysis I]].*

Let $\epsilon > 0$. Since $f$ is Darboux integrable, there exists a partition $P = \{ x_0, \ldots, x_n\}$ of $[a,b]$ such that the [[Development of the Darboux integral|upper and lower sums]] satisfy
$$
U(f, P) - L(f, P) < \epsilon.
$$
By the [[(Theorem) Rolle's and mean value|mean value theorem]], for each $j \in 1 \ldots n$, there exists $\epsilon_j \in [x_{j-1}, x_j]$ such that 
$$
F(x_j) - F(x_{j-1}) = f(\epsilon_j)(x_j - x_{j-1}).
$$
Then we have
$$
L_f \leq F(b) - F(a) = \sum_{j=1}^n f(\epsilon_j)(x_j -  x_{j-1}) \leq U_f,
$$
and 
$$
U_f - L_f < \epsilon \implies \left | \int_a^bf(x)dx - (F(b)-F(a))\right | < \epsilon
$$
as well. The equality follows since $\epsilon > 0$ is arbitrary. $\ \square$