---
aliases:
  - Gaussian process
  - Gaussian distribution
  - multivariate normal distribution
  - Gaussian process regression
  - kernel function
tags:
  - permanent-note
publish: 
date: 2024-09-13 10:09
lastmod: 2024-09-13T10:43:24-04:00
---
A **Gaussian process (GP)** defines a probability distribution over functions. It is fully specified by a mean function parameter $\mu$, which describes the expected value of a function at each point, and a **kernel** or **covariance** function $k$, which describes how much two random variables change together. The choice of kernel defines the shape and properties (e.g., smoothness) of the functions being modeled.

>[!example] Definition: Gaussian process
>