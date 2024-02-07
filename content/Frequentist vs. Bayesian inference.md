---
aliases:
  - point estimate
  - confidence interval
  - credible interval
tags:
  - permanent-note
  - topic-logic-mathematics
publish: "true"
date: 2024-02-01
lastmod: 2024-02-07T12:08:09-08:00
---
In [[Pragmatic statistics]], **inference** is concerned with understanding a real-world property $\theta$. This can be anything from a causal effect, a classification system for different objects, a regression coefficient, a function, etc. 

A **point estimate** is a single estimate for the true value of $\theta$.

|  | Frequentist view | Bayesian view |
| ---- | ---- | ---- |
| Definition of probability | The long-run frequency of a property $\theta$ | Subjective belief in a property $\theta$ |
| What is $\theta$? | An unknown quantity that already exists or is determined in some way | A random variable that we have a prior belief on (represented as a prior distribution $P(\theta)$) |
| Distribution of the property | The **sampling distribution** of $\hat \theta$, which shows how the estimate of $\theta$ would have looked with a different random sample | The **posterior distribution** of $\theta$, which shows the belief about $\theta$ given some observed data |
| A “95% interval” for $\theta$ | The **confidence interval** that contains $\theta$ 95% of the time if many samples are collected | The **credible interval** that contains $\theta$ with 95% probability |
