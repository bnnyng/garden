---
aliases: 
title: 
permalink: 
year: 
tags:
  - literature-note
lastmod: 2025-05-15T12:28:49-04:00
date: 2025-05-15T11:09:23-04:00
---
> Carroll, Micah, Rohin Shah, Mark K. Ho, Thomas L. Griffiths, Sanjit A. Seshia, Pieter Abbeel, and Anca Dragan. “On the Utility of Learning about Humans for Human-AI Coordination.” arXiv, January 9, 2020. [https://doi.org/10.48550/arXiv.1910.05789](https://doi.org/10.48550/arXiv.1910.05789).

---
# Summary

>[!example] Key terms
>


---

# Topic, thesis

> ***Briefly, why is the research question important to answer?***


---
# Background

> ***What are the main theories in the literature? Is there anything missing or problematic?***

>***What is the empirical evidence? Is there anything missing or problematic?***

- **Human-robot interaction:** Most work focuses on planning and learning with **non-optimal** models of human behavior; the current work extends the suboptimal human assumption to deep RL and tests possible solutions.

---
# Argument and hypotheses

>***Does the article advance a new theoretical argument? If yes, what is it?***

>***What are the hypotheses to be tested?***

- Agents trained to play collaborative games with other AI agents will perform much more poorly when collaborating with humans.
- Incorporating human data or models will lead to significant improvements.

---
# Research design

>***What is the methodological approach?***

- Using an environment based on the game *Overcooked* to compare agents trained with themselves to agents trained with a learned human model.
	- Agents were trained to collaborate with AI using **self-play**, **population-based training**, and **coupled planning with replanning**.
	- Agents were trained to collaborate with humans by collecting **human-human data** and training a **behavior cloning human model**, then training a **reinforcement learning** and a **planning agent** to collaborate with the behavior clone.
	- Agents were evaluated with a **proxy human**, a held-out simulated human model.

![[Pasted image 20250515113111.png]]

>***What data is used?***

>***What are the specific methods and techniques?***


---
# Results

>***What are the key findings?***

- Agents trained without human data performed very well with themselves, but much worse when paired with the proxy human compared to a “gold standard” agent that had access to the proxy human. Agents trained with the behavior-cloned human model performed much better.
	- The same trends were observed when agents were paired with real humans.
- Using behavior cloning directly for the agent’s policy outperforms self-play but underperforms relative to planning and/or reinforcement learning with a proxy human model.

>***What do these findings say about the argument and hypotheses?***


---
# Conclusion

>***What is the overall conclusion?***

- Accounting for real human behavior during training is crucial, even if the data incorporated does not completely reflect real-world human behavioral distributions.
- Planning and/or reinforcement learning for maximizing collaborative reward is more effective than using “vanilla” imitation. 


>***How did this study advance the literature? What are the main contributions?***


>***What are the key limitations?***

- An alternative hypothesis is that agents trained with BC perform better due to being exposed to a wider variety of states, rather than specifically benefiting from human data. This could be clarified by using DRL to train a single agent in a wide set of states and comparing performance.

>***What needs to be done in the future?***

- **Better human models:** Avoid distributional shift, which could be exploited by RL, by adding inductive bias (e.g., theory of mind, shared planning) to the human model to make it more likely to generalize out of distribution, or simply collecting more data.
- **Better population-based training towards humans:** Adding more models trained via human imitation learning to cover a wider range of possible human behaviors—**domain randomization** in the case of interaction with humans.
- **Adapting to the human at test time:** Rather than assuming a static agent, the agent could adapt online, for example by learning multiple human models, then selecting the most likely human model and choosing actions using a model-based algorithm (e.g., model predictive control). 
- **Humans who learn:** The human policy was also stationary to preserve the **Markov assumption**. Humans that improve while playing the game could be taken into account using recurrent architectures or a more explicit model of human learning.