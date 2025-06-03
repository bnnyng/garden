---
aliases:
  - expectation
  - expected value
  - variance
  - standard deviation
tags:
  - permanent-note
  - topic-logic-mathematics
  - STAT-GU4203
status: 
publish: 
date: 2024-10-14 10:49
lastmod: 2025-05-28T11:48:16-04:00
---
# Overview

**Expected value** describes the *center of mass* of a probability distribution.

---

# Expectations of discrete random variables

>[!definition] Expectation of a discrete r.v.
>Given a [[Discrete random variables and probability mass functions|discrete random variable]] $X$ with a set of possible values $D$ and probability mass function $p(x)$, the **expected** or **mean value** of $X$ is
>$$
>E(X) = \sum_{x \in D} x \cdot p(x)
>$$

>[!proposition] Properties of expectation
>1. **Linearity.** $E(aX + bY) = aE(X) + bE(Y)$
>2. **Transformation rule.** Given a [[Vector spaces and ring modules|linear]] function $g: \mathbb R \to \mathbb R$, the expected value of the new random variable $g(X)$ is given by 
>$$ 
>E(g(X)) = \sum_x g(x)p(x). 
>$$

---

# Variance and standard deviation 

>[!definition] Variance and standard deviation
>For a random variable $X$, the **variance** of $X$ is 
>$$
>\text{Var}(X) = E(X-EX)^2 = E(X^2) - E(X)^2;
>$$
>that is, the expected value of the random variable $(X-EX)^2$. The **standard deviation** is 
>$$
>\text{SD}(X) = \sqrt{\text{Var}(X)}.
>$$

>[!proposition] Properties of variance
>Given random variables $X, Y$ and some $c \in \mathbb R$, the following properties hold:
>-  $\text{Var}(X + c) = \text{Var}(X)$ since $E(X + c) = E(X) + c$
>- $\text{Var}(cX) = c^2 \text{Var}(X)$ and $\text{SD}(X) = |c|\text{SD}(X)$
>- If $X, Y$ are independent, $\text{Var}(X + Y) = \text{Var}(X) + \text{Var}(Y)$

---
---

# Examples

#### Binomial expectation

- Variance is a metric for measuring edistance between X and mean
- Why sqrt? Gets back to original units