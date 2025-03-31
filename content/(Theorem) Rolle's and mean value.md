---
aliases:
  - mean value theorem
  - Rolle's theorem
tags:
  - permanent-note
  - topic-logic-mathematics
status: 
publish: "true"
date: 2024-11-09 11:03
lastmod: 2024-11-30T15:23:27-05:00
---
>[!question]
>- Why isn’t differentiability required at endpoints?


---
# Rolle’s theorem

>[!abstract] Theorem (Tao 10.2.7): Rolle’s theorem
>Let $f: [a, b] \to \mathbb R$ be a [[Continuous functions|continuous]] function which is [[Derivatives of real functions|differentiable]] on $(a, b)$. If $f(a) = f(b)$, then there exists some $x_0 \in (a, b)$ such that $f’(x_0) = 0$.

^THM-rolles

#wip 

Use the fact that differentiable → continuous, [[(Theorem) Extreme value|extreme value theorem]], followed by fact that local extrema are stationary. 

---
# Mean value theorem

>[!abstract] Theorem: Generalized mean value theorem
>If $f, g: [a,b] \to \mathbb R$ are [[Continuous functions|continuous]] functions which are differentiable on $(a, b)$, then there exists a point $x_0 \in (a,b)$ such that
>$$
>[f(b) - f(a)]g'(x_0) = [g(b)-g(a)]f'(x_0).
>$$
>Note that by taking $g(x) = x$, we obtain “the” mean value theorem
>$$
>f(b) - f(a) = (b-a)f'(x_0) 
>\implies
>f'(x_0) = \frac{f(b)-f(a)}{b-a}.
>$$
^THM-mean-value

*Proof from [[MATH-GU4061|Modern Analysis I]]. Uses:*
- [[(Proof pattern) Middle-man trick]]
- [[(Proof pattern) Defining a new function]]

Our general strategy is to define a new function that satisfies the assumptions of Rolle’s theorem. Let $h : [a,b] \to \mathbb R$ be given by
$$
h(x) = f(x)(g(b)-g(a))-g(x)(f(b)-f(a)).
$$
Then $h$ is differentiable, and we have
$$
\begin{align}
h(a)
&= f(a)(g(b)-g(a)) - g(a)(f(b)-f(a)) \\
&= f(a)g(b) - f(a)g(a) - f(b)g(a) + f(a)g(a) \\
&= f(b)g(b) - f(b)g(a) - f(b)g(b) + f(a)g(b) \\
&= f(b)(g(b)-g(a)) - g(b)(f(b)-f(a)) = h(b).
\end{align}
$$
It follows from Rolle’s theorem that there exists some $x_0 \in (a, b)$ such that
$$
h'(x_0) = f'(x_0)(g(b)-g(a)) - g'(x_0)(f(b)-f(a)),
$$
and rearranging gives us the desired conclusion. $\ \square$

