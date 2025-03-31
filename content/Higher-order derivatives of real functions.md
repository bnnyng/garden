---
aliases:
  - -times differentiable
  - smooth
  - continuously differentiable
tags:
  - permanent-note
  - topic-logic-mathematics
status: 
publish: 
date: 2024-11-09 12:41
lastmod: 2024-12-10T15:01:32-05:00
---
>[!example] Definition: Higher-order derivatives of real functions
>Let $f: [a,b] \to \mathbb R$. We say $f$ is **$n$-times differentiable** with $n$-th derivative $f^{(n)}$ if the following holds:
>- $f$ is $(n-1)$-times [[Derivatives of real functions|differentiable]];
>- For all $x \in [a, b]$ the limit
>$$
>\lim_{n \to 0} \frac{f^{(n-1)}(x+h) - f^{(n-1)}(x)}{h}
>$$
>exists.

^e63a85

>[!example] Definition: $C^k$ function, smooth function
>Let $f: [a, b] \to \mathbb R$. For $k \geq 0$, we say $f$ is $C^k$ if $f$ is $k$-times differentiable and the associated derivative $f^{(k)}$ is [[Continuous functions|continuous]].
>
>We write $C^k([a,b])$ for the space of $k$-times continuously differentiable functions on $[a, b]$; of particular interest are space of continuous functions $C^0([a,b])$ and the space of **smooth functions**
>$$
>C^\infty([a,b]) := \bigcap_{k=0}^\infty C^k([a,b]).
>$$

^869725

Related: [[(Theorem) Taylor approximation]]
