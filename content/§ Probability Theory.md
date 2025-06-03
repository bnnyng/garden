---
aliases: 
tags:
  - permanent-note
  - topic-information-computation-statistics
  - moc
publish: 
date: 2025-05-27T15:26:48-04:00
lastmod: 2025-05-28T10:41:09-04:00
---

**See also:** [[§ Bayesian Statistics]]

---
# Topics

## Counting and fundamentals

- [[Basic combinatorics]]
- [[General definition of probability]]

## Conditional probability

- [[Conditional probability and Bayes' rule]]
- [[Independent and conditionally independent probabilities]]

## Random variables and probability distributions

- [[Discrete random variables and probability mass functions]]
- [[Expected value, variance, and standard deviation]]
- [[Bernoulli and binomial distributions]]
- [[Poisson distribution]]

**Theorems:**
- [[(Theorem) Poisson approximation to binomial]]


---
# Probability distribution cheat sheet

**Discrete random variables**

| Name                                                                              | Probability mass function $P(X = k)$                                                                | Expectation | Variance  |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | ----------- | --------- |
| Bernoulli distribution $\text{Bern}(p)$, where $0 < p < 1$                        | $P(X = 1) = p$ and $P(X = 0) = 1- p$                                                                |             |           |
| Binomial distribution $\text{Bin}(n, p)$, where $n \in \mathbb N$ and $0 < p < 1$ | $\begin{pmatrix} n \\ p \end{pmatrix} p^k (1-p)^{n-k}$ for $k = 0, 1, \ldots, n$, and $0$ otherwise |             |           |
| [[Poisson distribution]] $\text{Pois}(\lambda)$, where $\lambda > 0$              | $e^{-\lambda}\lambda^k/k!$ with $k = 0, 1, 2, \ldots$                                               | $\lambda$   | $\lambda$ |
