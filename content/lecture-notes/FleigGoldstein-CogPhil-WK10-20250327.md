---
aliases: 
tags:
  - fleeting-note
date: <% tp.file.creation_date() %>
lastmod: 2025-03-28T17:17:39-04:00
---
[[2025-03-27]]
# Week 10, Day 2: Interpretable AI and PDP
---

**Presentation (continued)**

- **Unconscious biases and opacity in human decision-making:**
	- People are usually unaware of their own biases, even when dealing with sensitive information.
	- Biases usually result from **heuristics**, such as a recency bias.
- Central question: If we accept human decision-making as inherently opaque, why do we expect AI to provide full transparency?
	- AI interpretability should parallel Dennett’s **intentional stance**, requiring explanations of decisions to be publicly understandable.
	- However, there’s a trade-off: higher standards and more regulation stifles **innovation**.

**Presentation: Rogers & McClelland, “Parallel Distributed Processing at 25”**

- Shortcomings of symbolic approaches:
	- Cannot account for partial or approximate patterns.
	- Assumes innate knowledge, fixed developmental patterns that have empirical exceptions.
	- Strict modularity is unlikely, as brain injury studies show **graceful degradation** of abilities rather than immediate loss.
- One metaphor for **parallel distributed processing** is a honeycomb, which is a cohesive, complicated structure formed by the actions of individual bees.
- PDP systems are **dynamical** with **attractor states**.
- *Example.* $\ \text{}$ Language comprehension happens over time (e.g., recognizing words requires breaking up continuous streams of speech, long-distance dependencies). A model that captures this is a **simple recurrent network**, which shows that linguistic segmentation can be learned from patterns rather than built-in grammatical rules.
- *Example.* $\ \text{}$ **Boltzmann machines** are architectures for solving problems with incomplete information.

**Interpolation and extrapolation**

- Note that these terms seem ill-defined.