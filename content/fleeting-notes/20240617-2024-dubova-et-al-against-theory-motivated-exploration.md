---
lit-author: 
aliases: 
tags:
  - literature-note
title: Paper | Against theory-motivated experimentation in science
publish: 
date: 2024-06-17 09:49
lastmod: 2024-06-17T10:03:29-06:00
---
Pre-print DOI: https://doi.org/10.31222/osf.io/ysv2u
# Summary

The authors use an agent-based model to investigate the epistemic success of different experiment strategies in science. They find that random experimentation leads to better approximations of “ground truth” than theory-based experimentation, even under different schemes of social interaction between “scientist” agents.

---
# Key terms

---
# Notes on methods

## Agents

- Agents perform two **epistemic actions**: data collection and constructing lower-dimensional “theories” from the data.
- The goal of the agents is to come up with the most *efficient* and *representative* “account of the ground truth space.”
- **Measuring theoretical error:** “The agent computes the “**theoretical error**” (reconstruction error of its neural autoencoder) on each observation in its dataset. **Reconstruction error** reflects how much information about an observation is captured in an agent’s autoencoder (theory). Low reconstruction error on an observation means that this high-dimensional observation can be successfully recovered from agent’s lower-dimensional representation of it alone.”

## Social learning strategies



- **Confirmation** – the probability of any observation being a “reference” for the new experiment is inversely related to the theoretical error on the previous observation.
	- “The better the current theory accounts for the observation, the more likely this observation is chosen as reference for a new experiment.”

