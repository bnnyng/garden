---
aliases: 
title: Conference Paper | Feature-based joint planning and norm learning in collaborative games
permalink: 
year: 
tags:
  - literature-note
lastmod: 2025-07-21T11:35:53-04:00
date: 2025-06-03T09:41:29-04:00
---
> Ho, Mark K, Amy Greenwald, Elizabeth M Hilliard, Stephen Brawner, and Max Kleiman-Weiner. “Feature-Based Joint Planning and Norm Learning in Collaborative Games,” 2016.

---

# Overview

#### Summary

$\quad$ This work presents a novel model of [[Norms|norm]] learning as making inferences about joint reward function biases that all agents follow and expect others to follow. 

#### Atomic notes

---

# Key terms

- **Norms:** “instructions that individuals follow and expect others to follow.”
- **Inverse reinforcement learning:** for a single agent, inferring the goals or reward function of another agent based on observations of the latter’s behavior in an [[Markov decision processes|MDP]].

---

# Topic, thesis

> ***Briefly, why is the research question important to answer?***

---

# Background

> ***What are the main theories in the literature? Is there anything missing or problematic?***

- **Best-response models:** instead of reasoning about a **joint policy** directly, agents reason and plan individually by using a [[Markov decision processes|transition function]] that includes a predictive model of another agent’s policy.

>***What is the empirical evidence? Is there anything missing or problematic?***

---

# Argument and hypotheses

>***Does the article advance a new theoretical argument? If yes, what is it?***

- The model captures two ways in which norms are jointly learned and represented:
	- Agents reason over joint mental states;
	- Norms are represented as joint planning biases.

>***What are the hypotheses to be tested?***

---

# Research design

>***What is the methodological approach?***

- **Norms as reward function biases:** norms are implemented as collective preferences for certain states. Specifically, given a feature function $\phi$, the norm bias is represented as a linear combination $$ R_{norm}(s) = \theta^T \phi(s), $$ where $\theta$ is a feature weighting vector. The total reward function for an individual agent $i$ is $$ R^i(s) = R^i_{individual}(s) + R_{norm}(s). $$
- **Norm learning model:** based on **group inverse reinforcement learning**, a norm-learning agent attempts to infer the norm—the joint reward function bias—based on a history of group interaction: $$ \hat R_{norm} = \text{argmax}_{R_{norm}} P(R_{norm}  | \mathcal H), $$ where $\mathcal H = ((s_0, j_0, s_1), \ldots, (s_{T-1}, j_{T-1}, s_T))$. By the definition of $R_{norm}$ above, this is the same as finding the most likely set of weights $\hat \theta$.
- **Assumptions:** all agents have the same goal, i.e., $$ R^i_{individual} = R^j_{individual} \quad \quad \text{for all }i, j. $$

>***What data is used?***

>***What are the specific methods and techniques?***

---

# Results

>***What are the key findings?***

>***What do these findings say about the argument and hypotheses?***

---

# Conclusion

>***What is the overall conclusion?***

>***How did this study advance the literature? What are the main contributions?***

>***What are the key limitations?***

>***What needs to be done in the future?***

- How norm learning interacts in competitive scenarios