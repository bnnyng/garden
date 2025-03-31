---
aliases:
  - Bayesian model
  - Bayesian inference
tags:
  - permanent-note
  - topic-cognitive-science
publish: 
date: 2024-02-22 15:20
lastmod: 2025-03-07T11:51:54-05:00
---
# Overview 

Bayesian models of cognition formalize [[Rationality in cognitive science|rational]] belief updating in response to observed data. 

According to [Griffiths et al. 2023](https://arxiv.org/pdf/2311.10206.pdf), Bayesian models of cognition are compatible with artificial neural networks because they define different [[Classical levels of cognitive theory|levels of explanation]]. Bayesian models fall at the [[Classical levels of cognitive theory|computational level]]—which is concerned with an agent’s abstract goals and solutions—for problems of learning and inductive reasoning, while ANNs implement an intelligent system at [[Classical levels of cognitive theory|algorithmic]] and [[Classical levels of cognitive theory|physical]] levels.

Related: [[Conditional probability and Bayes' theorem]], [[Probabilistic reasoning]]

---
# Models

- [[(Model) General Bayesian model of pedagogical reasoning, after Shafto et al. (2014)]]

---

# Examples

#### Function learning

A learner updates a belief distribution about a **continuous function** $f$ conditioned on **data points** $D \in \{ (x_1, y_1), \ldots, (x_n, y_n)\}$: $$ P_L(f|D) \propto P(D|f) P(f). $$

