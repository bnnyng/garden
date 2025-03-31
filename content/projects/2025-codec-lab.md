---
aliases:
  - CoDec Lab
tags:
  - workspace
publish: 
date: 2024-08-29 17:56
lastmod: 2025-03-28T13:50:11-04:00
---
# Associated notes

- [[Gaussian process regression]]
- [[Stein variational inference]]

---
# Resources

- Deisenroth et al. (2020), [“A Practical Guide to Gaussian Processes”](https://infallible-thompson-49de36.netlify.app/)

---
# Key biblography

**Rational models of learning and teaching**

- Shafto et al. (2014), “[[@2014shafto|A rational account of pedagogical reasoning]].”

---

# Log

- [[20250321-codec-log-archive]]

#### March

[[2025-03-28]]

- Model comparison notebook
	- `jsp.stats.multivariate_normal.logpdf`: likelihood of outputs (y) given mean and kernel
	- `jsp.stats.multivariate_normal` vs. `random.multivariate_normal`
- Implementing GP in jax
	- Implement normal distribution, then parallelize (vmap?) to make it multivariate
- Optionally, model comparison?
	- Teacher vs. basic heuristic (what behavior does it generate under some circumstance?)

[[2025-03-21]]

- Questions about JAX `vmap` tutorial
	- Clarification: `x1, x2` are arrays of $d$ dimensional points, but can be of different lengths? 
	- Why is the output shape like that if each RBF kernel function should output a scalar (from $d$ dimensional point inputs)?
	- Why does it end up being a `mxn` matrix?
		- Know that $K_*$ is supposed to be $n \times d$, where $n$ is number of points and $d$ is dimensions