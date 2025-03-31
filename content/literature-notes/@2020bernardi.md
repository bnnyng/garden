---
citekey: 2020bernardi
aliases:
  - 
tags:
  - literature-note
title: journalArticle | The Geometry of Abstraction in the Hippocampus and Prefrontal Cortex
year: 2020
permalink: 
publish: 
date: 2024-10-17
lastmod: 2024-11-11T18:29:16-05:00
---
> Bernardi, S., Benna, M. K., Rigotti, M., Munuera, J., Fusi, S., & Salzman, C. D. (2020). The Geometry of Abstraction in the Hippocampus and Prefrontal Cortex. _Cell_, _183_(4), 954-967.e21. [https://doi.org/10.1016/j.cell.2020.09.031](https://doi.org/10.1016/j.cell.2020.09.031)

---

# Key terms

>[!example] Key terms for [[@2020bernardi]]:
>- **Serial reversal learning** = an experimental task where subjects learn to respond differently to two different stimuli, then changing (“reversing”) the reward contingencies.
>- **Context** = also known as a **task set**, defined by a set of **stimulus-response outcome (SRO) mappings**; context is a **hidden variable** determined by temporal statistics of events.
>- **Cross-condition generalization performance (CCGP)** = the performance of a linear decoder trained to report the value of an “abstract variable” on situations not experienced by the decoder during training.
>- **Shattering dimensionality (SD)** = “the number of different ways that points corresponding to the firing rates of one or more neurons in different (experimental) conditions can be separated (shattered) by a linear decoder”; operationalized as the performance of a linear decoder averaged over all possible balanced dichotomies.
>	- **Dichotomy** = a way of grouping points (in this study, the average firing rate over three neurons), which is assumed to correspond to a different variable; a variable is **decodable** when its two-group dichotomy is **linearly separable**.
>- **Parallelism score (PS)** = degree to which coding directions are parallel when training a decoder to classify a variable for different sets of conditions; correlated with CCGP but focuses on specific aspects of the geometry.


---

# Reading notes

## Background

- **Successful abstraction of context reflects dimensionality reduction:** “Some variables were observable (related to sensory input or motor output) while **context**, a hidden variable, was defined by the temporal statistics of events and could not be directly inferred by the value of any observable variable.”
- **Linear transformations enable neurons with mixed selectivity to represent multiple abstract variables:** “Neurons that respond to a single variable are rarely observed, a finding consistent with many studies showing that neurons more commonly exhibit mixed selectivity for ultiple variables [[@2016fusi]]. Nonetheless, the generalization properties of factorized representations are preserved when all the points are rotated in the firing space.”
	- “Under the assumption that a decoder is linear, CCGP will not change if a linear operation like rotation is performed on the data points. Using a similar construction, *it is therefore possible to represent as many variables in an abstract format as the number of neurons.*”
	- 💭 Related to [[Vector bases and dimension]]?

## Methods

- **Task and behavior:**
	- Monkeys are trained to look at four different fractal patterns (abstract visual stimuli).
	- Correct operant action is to hold down a button and release between 400 ms and 900 ms; correct performance was rewarded for two out of four stimuli.
	- Context switched after between 50 and 70 trials.

## Results

- **HPC, DLPFC, and ACC represent variables in an abstract format.**
	- **Geometry of the firing rate space is insufficient for detecting abstract representations:**
- 