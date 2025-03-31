---
aliases:
  - Gaussian process
  - Gaussian process regression
  - periodic kernel
tags:
  - permanent-note
  - topic-information-computation-statistics
publish: 
date: 2024-11-10 23:14
lastmod: 2025-03-21T10:22:43-04:00
---
# Overview

A **Gaussian process (GP) model** defines a probability distribution over possible functions that fit a set of points. It is fully specified by a **mean function** parameter $\mu$, which describes the expected value of a function at each point, and a **kernel** or **covariance** function $k$, which describes how much two random variables change together. 

The choice of kernel defines the shape and properties (e.g., smoothness) of the functions being modeled, effectively incorporating **prior knowledge** about these functions. 

Gaussian process models are **non-parametric**, meaning the number of parameters grows with the size of the observed dataset.

**Related notes:** [[Radial basis function kernel]]

---
# Formal definition


>[!example] Definition: Gaussian process
>A **Gaussian process $\mathcal{GP}$** is a collection of random variables for which any finite subset is Gaussian distributed. A real-valued function $f : X \to \mathbb R$ can be modeled as a random draw $$ f \sim \mathcal{GP}(\mu, k), $$ where $\mu$ is a **mean function** and $k$ is a **kernel function** specifying the covariance between outputs: $$ \mu(x) = \mathbb E[f(x)] \quad \quad k(x, x') = \mathbb E [(f(x)-\mu(x))(f(x')-\mu(x'))]. $$
>
>The [[Conditional probability and Bayes' theorem|posterior predictive distribution]] for a new input $x_*$ is Gaussian with mean and variance given by $$ \mathbb E[f(x_*)|\mathcal D] = K(x,x_*)^\top(K(x,x) + \sigma^2I)^{-1}y \quad \quad \mathbb V[f(x_*)|\mathcal D] = K(x_*, x_*) - K(x, x_*)^\top (K(x,x) + \sigma^2 I)^{-1}K(x,x_*), $$ where $$ \mathcal D = \{ x_n, y_n\}^N_{n=1}, \quad \quad y_n \sim \mathcal N(f(x_n), \sigma^2 $$ is the observed data with $y_n$ a noise-corrupted draw from the latent function, $y = [y_1, \ldots, y_n]^\top$, and $K$ is the $N \times N$ matrix of covariances evaluated at each pair of observed inputs.

💬 *Remark.* $\ \text{}$ Suppose we have a Gaussian process regression model where the GP has realizations which are functions $f : \mathbb R^d \to \mathbb R$, and we have $n$ datapoints as inputs. Then the dimensions of the matrices in the predictive covariance equation $\mathbb V[f(x_*)|\mathcal D]$ are $$ ( d \times d ) - (d \times n) (n \times n) (n \times d). $$

---
# Kernel functions

Every kernel function has an **output variance** parameter $\sigma^2$ that acts as a scale factor, determining the average distance of the estimated function away from its mean.

>[!example] Definition: Radial basis kernel
>The **squared exponential** (or **radial basis function**, **Gaussian**) kernel is defined by
>$$
>k_{SE}(x, x') = \sigma^2 \exp \left ( - \frac{(x-x')^2}{2\ell^2}\right ),
>$$
>where the **lengthscale $\ell$** determines the distance of extrapolation away from the data.

>[!example] Definition: Periodic kernel
>The **periodic** kernel is given by
>$$
>k_{Per}(x, x') = \sigma^2 \exp \left ( - \frac{2 \sin^2(\pi|x - x'|/p)}{\ell^2}\right).
>$$

- Universal: https://jmlr.csail.mit.edu/papers/volume7/micchelli06a/micchelli06a.pdf

---
# Resources

- Duvenaud,[“The Kernel Cookbook: Advice on Covariance functions”](https://www.cs.toronto.edu/~duvenaud/cookbook/)