---
aliases:
  - uniform convergence
  - pointwise convergence
  - sequence of functions
  - converges uniformly
  - converges pointwise
tags:
  - permanent-note
  - topic-logic-mathematics
  - MATH-42X
status: 🔴
publish: "true"
date: 2024-04-24 15:12
lastmod: 2024-10-12T16:54:13-04:00
---
# For measurable functions

Related: [[Limits and accumulation points]]


>[!example] Definition: Convergence for measurable functions
>Let $f : E \to \mathbb R$ be a [[Measurable functions|measurable function]] and let $f_n : E \to  \mathbb R \cup \{ \pm \infty \}$ be any function to the extended real numbers.
>- $f_n \to f$ **pointwise** if for all $x \in E$ and all $\epsilon > 0$, there exists $N \in N$ such that 
>$$
n > N \implies |f_n(x) - f(x)| < \epsilon.
>$$
>- $f_n \to f$ **almost everywhere** if the set of all points which do not converge to $f$ has zero [[Lebesgue measure|measure]].
>$$
> m(\{x \in E \ | \ f_n(x) \not \to f(x) \}) = 0
>$$
>- $f_n \to f$ **uniformly** if for all $\epsilon > 0$, there exists $N \in \mathbb N$ such that for all $x \in E$,
>$$
>n > N \implies |f_n(x) - f(x) | < \epsilon.
>$$

---
# In metrizable (topological) spaces

Uniformity of convergence for a sequence on functions depends on both the [[Topological spaces and open sets|topology]] of their range and the [[Metrics, metric spaces, and the metric topology|metric]].

>[!example] Definition: Uniform convergence in metrizable spaces
>Let $f_n : X \to Y$ be a sequence of functions from the set $X$ to the [[Metrics, metric spaces, and the metric topology|metric space]] $Y$. We say $(f_n)$ **converges uniformly** to $f: X \to Y$ if for all $\epsilon > 0$, there exists an integer $N$ such that for all $n \geq N$ and all $x \in X$, we have
>$$
>d(f_n(x), f(x)) < \epsilon.
>$$

^aee289

>[!abstract] [[MATH-GU4051|Topology]] HW 3.5: Relationship between uniform convergence and the uniform metric
>Let $X$ be a set and let $f_n :X \to \mathbb R$ be a sequence of functions. Let $\overline{\rho}$ be the [[Metrics, metric spaces, and the metric topology|uniform metric]] on the space $\mathbb R^X$ of all functions $X\to \mathbb R$. If $f_n : X\to \mathbb R$ is a sequence of functions, show that $(f_n)$ [[Convergence of functions|converges uniformly]] to the function $f: X\to \mathbb R$ if and only if the sequence $(f_n)$ converges to $f$ as elements of the metric space $(\mathbb R^X, \overline{\rho})$. 

^b137c9
