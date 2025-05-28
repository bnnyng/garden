---
aliases: 
title: 
permalink: 
year: 
tags:
  - literature-note
lastmod: 2025-05-15T13:00:42-04:00
date: 2025-03-08T23:30:20-05:00
---
# Summary

---

# Topic, thesis

> ***Briefly, why is the research question important to answer?***

- This article investigates whether [[§ Reinforcement Learning|reinforcement learning]] agents can improve performance by learning from other agents, including expert demonstrations.

---
# Background

> ***What are the main theories in the literature? Is there anything missing or problematic?***


>***What is the empirical evidence? Is there anything missing or problematic?***

- Another technique for transmitting skills between agents in AI systems is **imitation learning (IL)**, which uses “manually curated expert trajectories”, or expert demonstrations, as data. 
	- In contrast, social learning in humans and animals enables **adapting online** to novel circumstances.
	- Humans are also selective about which experts are **relevant** to their own interests.

---
# Argument and hypotheses

>***Does the article advance a new theoretical argument? If yes, what is it?***

>***What are the hypotheses to be tested?***

- (H1) Social learning can discover more **complex policies** that would be difficult to discover though individual exploration.
- (H2) Social learning can be used to **adapt online** to new environments when the social learning policy encodes learning from experts.

---
# Research design

>***What is the methodological approach?***

- Agents are trained independently, do not share parameters, and do not have direct access to other agents’ observations or actions.
- **Experts** are distinguished by their task skill, rather than privileged information about the environment as in previous related work.
- Each agent has a **model-based auxiliary loss** that helps agents learn from experts by predicting the next demonstration state, implicitly improving the agent’s ability to model other agents’ policies.
- A **social learning environment** encourages social learning by making individual exploration difficult and expensive, and introduces **prestige cues** that indicate how well agents perform in the environment to social learners.

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

- **Other task domains:** The current study focuses on exploratory navigation tasks, but future studies could extend to task domains like manipulation, different expert/novice goals, and more diverse expert strategies.
- **Different strategies for augmenting solitary with social experience:** Clarifying when adding social experiences could aid solitary task performance, and which algorithms enable this for arbitrary tasks.
- Predicting performance with prestigue cues. 