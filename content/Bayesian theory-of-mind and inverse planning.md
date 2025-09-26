---
aliases:
  - inverse planning
  - Bayesian theory-of-mind
tags:
  - permanent-note
  - topic-cognitive-science
publish: 
date: 2025-05-04T13:41:27-04:00
lastmod: 2025-08-13T23:45:42-04:00
---

$\quad$Theory-of-mind includes the ability to understand intentions from actions ([[@2021wuToo]]). This can be modeled computationally using **inverse planning**, which is a [[Bayesian models of cognition|Bayesian framework]] for inferring mental states that assumes the actions observed are performed by [[Rationality in cognitive science|rational]] agents, then works backwards to infer the most likely intentions and beliefs that could have produced those actions.

[[@2025kleiman-weinerEvolving]]: inferring the utility functions of others by performing Bayesian inference over a generative model of their latent decision-making and learning processes.

---
# References

| Cite key                                                  | One-line takeaway                                                                                                                                                              |
| --------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [[@2008yoshidaGame]], “Game theory of mind”               |                                                                                                                                                                                |
| [[@2016jara-ettingerNaive]], “The naïve utility calculus” | Introduces the [[The Naive Utility Calculus, after Jara-Ettinger et al. (2016)\|Naive Utility Calculus]] for formalizing aspects of mindreading as Bayesian inverse inference. |


## 🧠 1. The Core Idea: **Inverse Planning / Inverse Reinforcement Learning**

- **Assumption**: Other agents behave approximately **rationally**, seeking to **maximize utility** (rewards minus costs).
    
- **Forward model**: Given an agent’s **goals, beliefs, and preferences**, we can predict their likely actions using a **Boltzmann (softmax) policy** over expected utility.
    
- **Inverse inference**: Observers **invert** this model—using **Bayes' theorem**—to infer hidden mental states (beliefs, desires, costs, and goals) from observed action trajectories [MDPI](https://www.mdpi.com/1999-4893/16/2/68?utm_source=chatgpt.com)[Wikipedia](https://en.wikipedia.org/wiki/Inverse_planning?utm_source=chatgpt.com)[DSpace@MIT](https://dspace.mit.edu/handle/1721.1/113204?utm_source=chatgpt.com)[PubMed](https://pubmed.ncbi.nlm.nih.gov/32738590/?utm_source=chatgpt.com).