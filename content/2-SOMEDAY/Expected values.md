---
aliases:
  - expected value
  - mean value
  - variance
  - standard deviation
tags:
  - permanent-note
  - topic-logic-mathematics
  - STAT-UN1201
publish: 
date: 2024-09-13 10:25
lastmod: 2024-09-13T10:39:37-04:00
---
# Expected values of discrete random variables


The **expected value** of a **discrete random variable** $X$ describes where the probability distribution is *centered*. Given a discrete random variable $X$ with a set of possible values $D$ and [[Probability distributions for discrete random variables|probability mass function]] $p(x)$, the **expected value** or **mean value** of $X$ is $$ \mathbb E(X) = \mu_X = \sum_{x \in D} x \cdot p(x). $$
The **variance** of $X$ shows the amount of variability in the distribution of $X$, similar to how [[Measures of location and variability|sample variance]] $s^2$ measures variability in a sample. If $X$ has pmf $p(x)$ and expected value $\mu$, then the **variance** of $X$ is the *expected* squared deviation of $X$ from its mean (i.e., the *weighted average* of squared deviations).
$$ V(X) = \sigma^2_X = \sum_D (x - \mu)^2 \cdot p(x) = \mathbb E((X-\mu)^2] $$
The **standard deviation** of $X$ is simply $$ \sigma_X = \sqrt{\sigma^2_X}. $$
The expected value and variance of any linear function $h(X)$ can be found by substitution $h(x)$ for $x$ in the formulas above.

>[!example] Formula: Variance and standard deviation of a linear function
>$$ 
>V(aX+b) = a^2 \cdot \sigma^2_X \quad \quad \quad \sigma_{aX+b} = |a| \cdot \sigma_X 
>$$

---
## Formulas

> [!example] Expected value of a function
> $$ \mathbb E[h(X)] = \mu_{h(X)} = \sum_D h(x) \cdot p(x) $$

> [!example] Expected value of a linear function
> $$ \mathbb E(aX + b) =  a \cdot \mathbb E(X) + b $$

> [!example] Shortcut formula for variance
> $$ V(X) = \sigma^2 = \left[ \sum_D x^2 \cdot p(x) \right] - \mu^2 = \mathbb E(X^2) - \mathbb E(X)^2 $$


