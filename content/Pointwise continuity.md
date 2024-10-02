---
aliases:
  - continuous at
  - epsilon-delta argument
  - pointwise continuous
  - continuous
tags:
  - permanent-note
  - topic-logic-mathematics
  - MATH-UN1208
  - MATH-42X
publish: "true"
date: 2023-01-30
lastmod: 2024-05-06T12:16:54-07:00
---
# Overview

**Continuity** is the simplest restriction or analyzing functions. 

The distance between outputs of a function, or **error**, is a very small value $\epsilon > 0$, and the distance between “close enough” inputs is a value $\delta(\epsilon) > 0$. What is precisely “close enough” depends on choice of $\epsilon$. 

See also: [[(Theorem) Intermediate value]]

---
# Continuity in $\mathbb R$

Most presentations of continuity use the “epsilon-delta” property.

>[!example] Definition: Pointwise continuity
>Let $D \subset \mathbb R$ be a subset, and $f : D \to \mathbb R$ be any function. We say $f$ is **continuous at** $x_0 \in D$ if for all $\epsilon > 0$, there exists a $\delta > 0$—where the value of $\delta(x_0, \epsilon)$ depends on both $x_0$ and $\epsilon$—so that for all $x \in D$ with $|x - x_0| < \delta$ we have $|f(x) - f(x_0)| < \epsilon$.
>$$ 
>\forall_{\epsilon > 0} \ \exists_{\delta > 0} \ [ \ \forall_{x \in D} \ |x - x_0| < \delta \implies |f(x) - f(x_0)| < \epsilon \ ] 
>$$

---
# Epsilon-delta arguments

- **Problem**: Show that some function $f: D \to \mathbb R$ is **continuous**.
- **Proof**: Given $x_0 \in D$ with particular properties and a positive value $\epsilon > 0$, find $\delta > 0$ such that $|x-x_0| < \delta \implies |f(x) - f(x_0)| < \epsilon$. 
	1. State what you want to prove.
	2. Choose $\delta$ in terms of $\epsilon, x_0$ (hardest step).
	3. Assume $|x-x_0| < \delta$.
	4. Justify choice of $\delta$ by doing the manipulations to show $|f(x)-f(x_0)| < \epsilon$.
- **Thought process**: 
	1. Begin with the thing to prove, the right-hand side of the implication. Try to rearrange it to isolate the expression $|x - x_0|$.
	2. If the expression for $\epsilon$ still depends on $x$, notice what $\delta$ has to be. Choose $\delta$, then make a claim about what $|x|$ is the upper or lower bound for.
	3. Get an upper or lower bound for the expression with $x$ in terms of just $\delta, x_0$. Often, this uses the [[Triangle inequality]].
	4. Choose $\delta$ which satisfies this, use arithmetic to rewrite as an expression where $\delta$ depends on $x_0, \epsilon$.

---

# Continuity in metric spaces

>[!example] Definition: Pointwise continuity in metric spaces
>Suppose $(X, d_X)$ and $(Y, d_Y)$ are [[Metrics, metric spaces, and the metric topology|metric spaces]]. Then a function $f: X \to Y$ is **continuous at** $a \in X$ if for all $\epsilon > 0$, there exists $\delta > 0$ such that for all $x \in X$, we have
>$$
>d_X(x, a) < \delta \implies d_Y(f(x), f(a))< \epsilon.
>$$
>We can also characterize pointwise continuity using [[Open sets|neighborhoods]]:
>$$
>f(B(a, \delta)) \subset B(f(a), \epsilon) \quad \text{and} \quad B(a, \delta) \subset f^{-1}(B(f(a), \epsilon)).
>$$
>Finally, $f$ is **continuous** if it is continuous for all points $a \in X$.

---
# Notes

- A function $f: D \to \mathbb R$ is **continuous at** an input $x_0$ in the arbitrary subset $D$ if no matter how close the outputs are chosen to be, we can look at inputs close enough to $x_0$ so that inputs $\delta$-close to $x_0$ produce outputs $\epsilon$-close to $f(x_0)$. 