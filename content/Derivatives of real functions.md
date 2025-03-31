---
aliases:
  - power rule
  - chain rule
  - derivative
  - differentiable
  - product rule
tags:
  - permanent-note
  - topic-logic-mathematics
  - MATH-GU4061
status: 🟠
publish: "true"
date: 2024-10-29 13:24
lastmod: 2025-02-17T12:18:16-05:00
---
>[!question]
>- Why don’t endpoints matter?


---
# Overview

>[!example] Definition: Differentiable function on $\mathbb R$
>A function $f : \mathbb R \to \mathbb R$ is called **differentiable** at $x_0 \in \mathbb R$ if:
>- (1) There exists a [[Limits and accumulation points|limit]]
>$$ 
>f^\prime (x_0) = \lim_{h \to 0} \ \frac{f(x_0 + h) - f(x_0)}{h}.
>$$
>- (2) There exists a [[Vector spaces and ring modules|linear map]] $df_{x_0} : \mathbb R \to \mathbb R$ such that 
>$$ 
>\lim_{h\to 0} \ \frac{|f(x_0 + h) - f(x_0) - df_{x_0}(h)|}{|h|} = 0.
>$$
>
>In this case, the limit in (1) is called the **derivative** of $f$ at $x_0$, and denoted $f’(x_0)$. A function is **differentiable** if it is differentiable at every point.

^DEF-differentiable-function-in-R

**Relevant theorems:**
- [[(Theorem) Rolle's and mean value]]
- [[(Theorem) L'Hopital's rule]]

**Related notes:** [[Local extrema of real functions]]

---
# Rules of differential calculus

>[!abstract] Theorem: Sums and products of differentiable functions are differentiable
>Let $f, g : \mathbb R \to \mathbb R$  be differentiable at $x_0 \in \mathbb R$. Then:
>- (1) $(f + g) (x) = f’(x_0) + g’(x_0)$;
>- (2) $(fg)(x_0) = f'(x_0)g(x_0) + g'(x_0)f(x_0)$.
>
>Note that differentiability of $f + g$ and $fg$ follows from the direct computation of the limit.

^THM-sum-product-rule-in-R

>[!abstract] Theorem: Power rule for derivatives in $\mathbb R$
>Let $f: \mathbb R \to \mathbb R$ be defined by $f(x) = x^n$ for some $n \in \mathbb N$. Then $f$ is differentiable everywhere and $f’(x) = nx^{n-1}$.

^THM-power-rule-in-R

>[!abstract] Theorem: Chain rule for derivatives in $\mathbb R$
>Let $f, g : \mathbb R \to \mathbb R$ be differentiable. Let $x_0 \in \mathbb R$. Then $g \circ f$ is also differentiable, and 
>$$
>(g \circ f)’ (x_0) = g’(f(x_0))f’(x_0).
>$$

^THM-chain-rule-in-R

---
# Monotone functions and derivatives

>[!abstract] Theorem: 
>Let $f:[a,b] \to \mathbb R$ be differentiable.
>- If $f’(x) \geq 0$ for all $x \in [a, b]$, then $f$ is monotonically increasing.
>- If $f’(x) = 0$ for all $x \in [a,b ]$, then $f$ is constant.

^ea75f5

---
# Proof appendix

![[Derivatives of real functions#^THM-sum-product-rule-in-R]]

*Proof of (2) from [[MATH-GU4061|Modern Analysis I]].*

$$ 
\begin{align*}
\lim_{h \to 0} \frac{f(x_0 + h)g(x_0 + h) - f(x_0)g(x_0)}{h}
&= \lim_{h \to 0} \frac{f(x_0 + h)(g(x_0 + h) - g(x_0)}{h} \\
&\ + \lim_{h \to 0} \frac{g(x_0 + h)(f(x_0 + h) - f(x_0)}{h} \\
&= f'(x_0)g(x_0) + g'(x_0)f(x_0)
\end{align*}
$$

![[Derivatives of real functions#^THM-power-rule-in-R]]

*Proof from [[MATH-GU4061|Modern Analysis I]].*

$$ 
\begin{align*}
\lim_{h \to 0} \frac{(x_0 + h)^n - x_0^n}{h}
&= \lim_{h \to 0} \frac{x^n_0 + nhx^{n-1}_0 + \cdots + h^2 - x_0^n}{h} \\
&= \lim \frac{nhx_0^{n-1}}{h} = \lim_{h \to 0} n x_0^{n-1} = n x_0^{n-1}.
\end{align*}
$$
The $\cdots$ are lower-order terms involving $h^2, h^3, \ldots, h^n$. #concept-question try doing this computation explicitly?

![[Derivatives of real functions#^THM-chain-rule-in-R]]

*Proof from [[MATH-GU4061|Modern Analysis I]].*

Since $f$ is differentiable, we have 
$$
f(x + h) = f(x) + f'(x)h + \varphi (x + h),
$$
where $\varphi(x) \to 0$ as $x \to x_0$. Similarly, 
$$
g(y + h) = g(y) + hg'(y) + \psi(y + h),
$$
where $\psi(y + h) \to 0$ as $h \to 0$. We now compute
$$ 
\begin{align*}
\lim_{h \to 0} \frac{g(f(x_0+h))-g(f(x_0))}{h}
&= \lim_{h \to 0} \frac{g(f(x_0) + f'(x_0)h + \varphi(x_0 + h)) - g(f(x_0))}{h} \\
&= \lim_{h \to 0} \frac{g(f(x_0)) + h g'(f'(x_0) + \varphi(x_0 + h)) + \psi(f(x_0) + h)) - g(f(x_0))}{h}\\
&= g'(f(x_0))f'(x_0).
\end{align*}
$$
