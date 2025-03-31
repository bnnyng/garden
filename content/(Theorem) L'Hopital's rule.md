---
aliases: 
tags:
  - permanent-note
  - topic-logic-mathematics
status: 
publish: 
date: 2024-11-09 11:19
lastmod: 2024-11-09T12:24:18-05:00
---
>[!question]
>- Why is Tao’s version different, setting $f(a) = g(a) = 0$?

---

>[!abstract] Theorem: L’Hopital’s rule
>Let $f,g : [a, b] \to \mathbb R$ be [[Continuous functions|continuous]] functions that are [[Derivatives of real functions|differentiable]] on $(a,b)$. Suppose $\lim_{x \to a}f(x) = \lim_{x \to a}g(x) = 0$ and the limit
>$$
>\lim_{x \to a}\frac{f'(x)}{g'(x)} = L \in \mathbb R
>$$
>exists. Then we also have
>$$
>\lim_{x \to a}\frac{f(x)}{g(x)} = L.
>$$

^THM-lhopital

*Proof from [[MATH-GU4061|Modern Analysis I]].*

It suffices to show that $\ell = \lim_{x \to a}f(x)/g(x)$ is in the $\epsilon$-ball around $L$ for all $\epsilon > 0$.

Fix $\epsilon < 0$. By definition of the limit $L$, there exists $\delta > 0$ such that 
$$
\frac{f'(x)}{g'(x)} \leq L + \epsilon
$$
for all $x \in (a, a + \delta)$. #wip why?


%% d(x, a) < \delta \implies d(f'(x)/g'(x),L) < \epsilon. %%