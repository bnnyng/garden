---
aliases:
  - norm
  - magnitude
  - p-norm
  - Euclidean norm
  - equivalent norms
  - standard norm
tags:
  - permanent-note
  - topic-logic-mathematics
status: 
publish: "true"
date: 2024-05-01 13:24
lastmod: 2024-09-05T15:27:38-04:00
---
Related: [[Metrics, metric spaces, and the metric topology]]

---
# Norms on inner product spaces

>[!example] Definition: Norm on an inner product space
>If $V$ is an [[Inner product space]], the **norm**, or **magnitude**, is a function $\| \cdot \| : V \to [0, \infty)$ defined by $\sqrt{\langle v, v \rangle} \in [0, \infty)$.

>[!abstract] [[MATH-UN1207]], Lemma 102
>The **norm** on an **inner product space** satisfies the following properties:
>- (N1) $\| v \| \geq 0$, and $\|v\| = 0 \iff v = \vec 0$.
>- (N2) $\|cv\| = |c| \|v\|$
>- (N3) $\|v + w \|^2 = \|v\|^2 + \|w\|^2 + 2\text{Re} \langle v,w \rangle$. In particular, $\|v + w \|^2 = \|v\|^2 + \|w\|^2$ if and only if $\langle v, w \rangle$ has no real part. 

----
# Norms on $\mathbb R^n$

>[!example] Definition: Norm on $\mathbb R^n$
>A **norm** on $\mathbb R^n$ is a function $N : \mathbb R^n \to [0, \infty)$ which satisfies the following properties:
>- $N(\vec x) = 0 \iff \vec x = \vec 0$
>- $N(c\vec x) = |c|N(\vec x)$
>- $N(\vec x + \vec y) \leq N(\vec x) + N(\vec y)$
>
>The $p$-norm function is defined as
>$$
> N_p\begin{pmatrix}x_1 \\ \cdots \\ x_n\end{pmatrix} = [|x_1|^p + \cdots + |x_n|^p]^{1/p}
>$$
>for $1 \leq p < \infty$, and 
>$$
> N_\infty \begin{pmatrix}x_1 \\ \cdots \\ x_n\end{pmatrix} = \text{max}(|x_1|, \cdots, |x_n|)
> $$
> for $p = \infty$.

For example, the **Euclidian [[Inner product spaces|norm]]** or $2$-norm is given by 
$$ 
\| (x_1 \cdots x_n)^T\|_2 = \sqrt{x^2_1 + \cdots + x^2_n}.
$$

>[!example] Definition: Equivalent norms
>Two norms $N, N^\prime$ are **equivalent** if there exist positive constants $c,C>0$ so that 
>$$ 
>cN^\prime(\vec x) \leq N(\vec x) \leq C N^\prime(\vec x).
>$$