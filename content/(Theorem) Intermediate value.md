---
aliases:
  - intermediate value theorem
tags:
  - permanent-note
  - topic-logic-mathematics
  - topic-logic-mathematics
publish: "true"
date: 2024-03-31 14:44
lastmod: 2025-08-09T00:31:05-04:00
status: 
---
# For continuous functions

>[!theorem] Intermediate values for continuous functions
>Let $f : [a,b] \to \mathbb R$ be [[Continuous functions|continuous]]. Suppose $f(a) \leq f(b)$, and $y_0 \in \mathbb R$ has $f(a) \leq y_0 \leq f(b)$. Then there exists some $c \in [a,b]$ so that $f(x) = y_0$.

^5a526b

As a corollary, we see that The function $f: [0, \infty) \to [0, \infty)$ defined as $f(x) = x^n$ is a [[Algebra of functions|bijection]], so its [[Invertibility|inverse]] $g(x) = x^{1/n}$ is defined.

---

# For derivatives

A function that has a derivative defined on its entire domain is not necessarily continuous on that domain. However, a function that is a derivative shares an important property with a function that is continuous: we can assume intermediate values.

>[!theorem] Intermediate values for derivatives
>Let $f: [a,b] \to \mathbb R$ be [[Derivatives of real functions|differentiable]]. If $f’(a) \leq c \leq f’(b)$ for some $c \in \mathbb R$, then there exists $x_0 \in (a, b)$ such that $f’(x_0) = c$.

^5d62ea

*Proof from [[MATH-GU4061|Modern Analysis I]]. Uses:*
- [[(Proof pattern) Defining a new function]]

Define a new function $g : [a,b ] \to \mathbb R$ by $g(x) = f(x) - cx$, so that $g’(x) = 0$ if and only if $f’(x) = c$. Since $g$ is differentiable, $g$ is continuous, and it follows from the [[(Theorem) Extreme value|extreme value theorem]] that $g$ attains a minimum at some $x \in [a, b]$. Further, at the boundary, we have
$$
g'(a) = f'(a) - c < 0
\quad \quad \quad
g'(b) = f'(b) - c > 0,
$$
so the minimum cannot be attained on either $a, b$. Then $x \in (a,b)$ with $f’(x) = c$, as desired. $\ \square$

#wip Why minimum?

---
# Notes

- Special case of no-retract theorem from algebraic topology.