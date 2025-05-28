---
aliases:
  - CoDec Lab
tags:
  - workspace
publish: 
date: 2024-08-29 17:56
lastmod: 2025-05-27T14:23:08-04:00
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

#### May

[[2025-05-27]]

**General questions**

- [ ] How are Bellman equations used—direct computation or “stops changing”? “The optimal value is a solution to the Bellman equation”?

**Project-specific questions**

- [ ] Not sequential games/decision-making, but synchronous?

**Project-specific thoughts**

- Interested in strategic teaching or learning from experts?

**Other notes**

- Further readings for cognitive game theory
	- Strategic teaching: Camerer CF, Ho TH, Chong JK (2002) Sophisticated experience-weighted attraction learning and strategic teaching in repeated games. J Econ Theory 104: 137–188.

2025-05-23

**Drop everything and read shortlist**

- Bayesian reading list/syllabus from Brendan

[[2025-05-21]]

- Key words from RL homeworks
	- **Non-stationary problem:** e.g., bandit environment where reward distribution changes over time.
 
[[2025-05-15]]

**Topics for meeting with Mark and Maya**

- [ ] Discuss summer research, interested in the Overcooked AI kind of experiment

[[2025-05-02]]

- Next time:
	- [x] Try with and without GPU (`jax-metal`) and compare time, both with state GP and Maya’s learner model

#### April



[[2025-04-25]]

- Next time:
	- [ ] Numbers about batching on the GPU (e.g., training a GP on a lot of points, requiring matrix inversion)

[[2025-04-18]]

- Meeting: Testing loss
	- $(y - y^*)^2$ is variance + expected y^2 - 2….
	- Selecting x points using uniform distribution over domain
	- Have target fn
	- Learner hyperparams: lengthscale, sigma
	- SVGD to adjust learner hyperparams for multiple sets of hyperparams
- Next time: 
	- [ ] Vectorize GP state
	- [ ] Change target function to closed form
	- [ ] Look into rest of model (code on GitHub)

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