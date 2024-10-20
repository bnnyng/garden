---
aliases:
  - expectation
  - expected value
tags:
  - permanent-note
  - topic-logic-mathematics
  - STAT-GU4203
status: 
publish: 
date: 2024-10-14 10:23
lastmod: 2024-10-14T10:53:30-04:00
---
# Overview

**Expected value** describes the *center of mass* of a probability distribution.

---
# Expectations of discrete random variables



>[!example] Definition: Expectation of a discrete r.v.
>Given a [[Discrete random variables and probability mass functions|discrete random variable]] $X$ with a set of possible values $D$ and probability mass function $p(x)$, the **expected** or **mean value** of $X$ is
>$$
>E(X) = \sum_{x \in D} x \cdot p(x)
>$$

^3fd087


>[!abstract] Theorem: Properties of expectation
>1. **Linearity.** $E(aX + bY) = aE(X) + bE(Y)$
>2. **Transformation rule.** Given a [[Linear maps|linear]] function $g: \mathbb R \to \mathbb R$, the expected value of the new random variable $g(X)$ is given by 
>$$ 
>E(g(X)) = \sum_x g(x)p(x). 
>$$

^1fe688

---
# Examples

#### Binomial expectation
