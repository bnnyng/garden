---
aliases:
  - pointwise convergence
  - sequence of functions
  - converges pointwise
tags:
  - permanent-note
  - topic-logic-mathematics
  - MATH-42X
status: 🔴
publish: "true"
date: 2024-04-24 15:12
lastmod: 2024-12-12T23:19:16-05:00
---
# Overview 

Convergence of sequences of functions is defined by considering the behavior of each sequence of numbers $(f_n(x))$, where $x \in X$ is any point. If the numbers $(f_n(x))$ all converge to some $f(x)$—meaning that for some arbitrary distance $\epsilon > 0$ we can find a sufficiently large index $N \in \mathbb N$ that guarantees $f_n$ and $f$ will be less than $\epsilon$ apart—then $f_n \to f$ **pointwise**. If there is some index $N$ that shows pointwise convergence at all $x \in X$, then $f_n \to f$ **uniformly**.

**Uniform convergence** preserves both [[Bounded sets and functions|boundedness]] and [[Continuous functions|continuity]], meaning that if every function in the sequence has some property, then the uniform limit also has the property.

Relevant theorems:
- [[(Theorem) The limit of a uniformly convergent sequence of continuous functions is continuous]]

See also: [[Properties of uniform convergence of functions]] [[Bounded sequences of functions and equicontinuity]]

---
# Convergence of measurable functions

>[!example] Definition: Convergence for measurable functions
>Let $f : E \to \mathbb R$ be a [[Measurable functions|measurable function]] and let $f_n : E \to  \mathbb R \cup \{ \pm \infty \}$ be any sequence of functions to the extended real numbers.
>- $f_n \to f$ **pointwise** if for all $x \in E$ and all $\epsilon > 0$, there exists $N \in N$ such that 
>$$
n > N \implies |f_n(x) - f(x)| < \epsilon.
>$$
>That is, the sequence of numbers $\{ f_n(x)\}$ converges to some $f(x)$ for all $x \in E$.
>- $f_n \to f$ **almost everywhere** if the set of all points which do not converge to $f$ has zero [[Lebesgue measure|measure]].
>$$
> m(\{x \in E \ | \ f_n(x) \not \to f(x) \}) = 0
>$$
>- $f_n \to f$ **uniformly** if for all $\epsilon > 0$, there exists $N \in \mathbb N$ such that for all $x \in E$,
>$$
>n > N \implies |f_n(x) - f(x) | < \epsilon.
>$$

^78d4ca

>[!example] Definition: $L^p$ (integral) convergence
>Let $f_n : X \to \mathbb R$ be a sequence of functions. We say $f_n \to f$ has $L^p$ **convergence** for a fixed $p$ if for all $\epsilon > 0$, there exists $N \in \mathbb N$ such that for all $n \geq N$ we have
>$$
>\int |f_n(x)-f(x)|^p < \epsilon.
>$$

^488b87

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
>Let $X$ be a set and let $f_n :X \to \mathbb R$ be a sequence of functions. Let $\overline{\rho}$ be the [[Metrics, metric spaces, and the metric topology|uniform metric]] on the space $\mathbb R^X$ of all functions $X\to \mathbb R$. If $f_n : X\to \mathbb R$ is a sequence of functions, show that $(f_n)$ [[Convergent sequences of functions|converges uniformly]] to the function $f: X\to \mathbb R$ if and only if the sequence $(f_n)$ converges to $f$ as elements of the metric space $(\mathbb R^X, \overline{\rho})$. 

^b137c9
