---
aliases:
  - Darboux integrable
tags:
  - permanent-note
  - topic-logic-mathematics
  - MATH-UN1208
status: 🔨
publish: 
date: 2024-04-24 15:55
lastmod: 2024-12-12T19:28:26-05:00
---

See also: [[Development of the Darboux integral]]

---
# Which functions are Darboux integrable?

>[!abstract] Theorem (Rudin 6.6): $\epsilon$ characterization of integrability
>Let $f: [a, b] \to \mathbb R$ be bounded. Then $f$ is [[Darboux and Riemann integration|Darboux integrable]] if and only if for all $\epsilon > 0$, there exists a partition $P$ of $[a, b]$ such that 
>$$
>U(f, P) - L(f, P)  < \epsilon.
>$$

^6fe17d

%% from 11/14 %%
>[!abstract] Theorem: Bounded monotone increasing functions are Darboux integrable
>Let $f: [a, b] \to \mathbb R$ be [[Bounded sets and functions|bounded]] and increasing. Then $f$ is Darboux integrable.

^c67962



>[!abstract] Theorem: Compositions of Darboux integrable functions are Darboux integrable
>

^242f6e


---
# Examples

#### Riemann integral of a constant function

Let $f: [a,b] \to \mathbb R$ be given by $f(x) =1$. If $P = \{ x_0, \ldots, x_n \}$ is a partition of $[a, b]$, then 

$$
\begin{align}
U(f, P) 
&= \sum_{k =1}^n (x_k-x_{k-1}) \sup_{x \in [x_{k-1}, x_k]}f(x) \\
&= \sum_{k=1}^n (x_k - x_{k-1}) = x_n - x_0 = b-a,
\end{align}
$$
$$
\begin{align}
L(f, P) 
&= \sum_{k =1}^n (x_k-x_{k-1}) \inf_{x \in [x_{k-1}, x_k]}f(x) \\
&= \sum_{k=1}^n (x_k - x_{k-1}) = x_n - x_0 = b-a,
\end{align}.
$$

Then the upper and lower Darboux sums are 
$$
\overline{\int^b_a} f = \underline{\int^b_a} f = b-a,
$$
so $f$ is Darboux integrable (hence Riemann integrable).

#### The Dirichlet function is Lebesgue integrable but not Riemann integrable

Let $g : [a,b] \to \mathbb R$ be the Dirichlet function defined by
$$
g(x) = 
\begin{cases}
1 &\text{if } x \in \mathbb Q \\
0 &\text{if } x \in \mathbb R \backslash \mathbb Q,
\end{cases}
$$
and let $P = \{ x_0, \ldots, x_n \}$ be a partition of $[a, b]$. Then
$$
U(g, P) = b-a
\quad \quad
L(g, P) = 0,
$$
so the upper and lower Darboux sums of $g$ are not equivalent, and $g$ is not Darboux (hence Riemann) integrable.

---
# Continuous functions and integrability
