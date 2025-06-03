---
aliases:
  - maximum a posteriori
  - MAP
  - posterior mean
tags:
  - permanent-note
  - topic-information-computation-statistics
publish: 
date: 2025-05-28T10:59:30-04:00
lastmod: 2025-05-28T11:26:30-04:00
---
# Preliminaries: Bayes’ rule for a random variable

>[!definition] Equation: Posterior density of a continuous random variable
>Given a (continuous) random variable $\theta \in [0, 1]$ with a prior distribution $p(\theta)$, the **posterior density** of $\theta$ is implied by [[Conditional probability and Bayes' rule|Bayes' rule]]:
>$$
>p(\theta | x ) = \frac{P(x | \theta)}{P(x)} = \frac{P(x | \theta)}{\int_0^1 P(x | \theta) p(\theta) d \theta}.
>$$

---

# Maximum a posteriori estimation

>[!definition] Equation: Maximum a posteriori estimation
>Given a continuous random variable $\theta \in [0, 1]$, the **maximum a posteriori estimate** for $\theta$ is given by the **mode** (i.e., the most common value) in the posterior density:
>$$
>\hat \theta_{MAP}(x) = \arg \max_\theta p(\theta | x) = \arg \max_\theta p(x | \theta) p (\theta).
>$$

