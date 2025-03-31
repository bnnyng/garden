---
aliases:
  - prior distribution
  - posterior distribution
  - prior
  - posterior
  - likelihood
  - data-generating process
  - Markov Chain Monte Carlo
  - MCMC
tags:
  - permanent-note
  - topic-logic-mathematics
publish: "true"
date: 2024-02-07 12:13
lastmod: 2024-02-19T20:08:28-08:00
---
Bayesian modeling is an approach to estimating some property $\theta$ where, beginning with a **prior** subjective belief $p(\theta)$, we use new data $X$ and a likelihood model $p(X | \theta)$ to form a new **posterior** belief $p(\theta | X)$. 

Practically speaking, the Bayesian approach simulates the **data-generating process**: what distributions generate the data, and with what parameters, and what parameter distributions, and so on? …Models can become very complicated!

Related: [[All models are wrong, but some are useful]], [[Conditional probability and Bayes' theorem|Bayes' theorem]], [[Pragmatic statistics]], [[Frequentist vs. Bayesian inference]]

---
# Choosing priors

*No choice of prior is truly objective or uninformative.* If we do not have enough knowledge to know what a reasonable prior distribution is, we can use the following guidelines:
- If a parameter should be bounded (e.g., strictly positive), the prior distribution should have no mass outside of the bounds.
- Priors with a normal distribution centered at 0 can offer **regularization**.
- Try different possible distributions to see effect on answers. If there is little difference, choose one with easiest computation (e.g., a conjugate prior).

---
# Getting and using posterior samples

Posteriors are rarely computed analytically; instead, use **Markov Chain Monte Carlo** (e.g., libraries like Python’s `PyMC` and R’s `Stan`) to produce samples from the posterior distribution. Check for convergence in the MCMC algorithm to ensure the entire parameter space has been explored.

Each **posterior sample** is a vector containing every parameter of the model. From there, we can get posterior samples for any *function* of the parameters by applying that function to the posterior samples, and obtain posterior distributions for predictions (see [[20240201-MCM|MCM 2024]] project write-up for an example).