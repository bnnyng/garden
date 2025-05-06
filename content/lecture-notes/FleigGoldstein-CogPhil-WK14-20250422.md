---
aliases: 
tags:
  - fleeting-note
date: <% tp.file.creation_date() %>
lastmod: 2025-04-25T10:42:57-04:00
---

[[2025-04-22]]

# Week 14, Day 1: Multimodal Data and Sensory Grounding II

---

**Training on infant data**

- Underlying question: What explains the gap between human learning and machine learning? Why are humans able to learn with far fewer examples, and what might allow language models to behave similarly?
- [[@2024orhanLearning]] train models on the **SAYCan** dataset, and show that they achieve similar performance to models trained on **ImageNet** on various evaluation tasks.
- *Discussion.* $\quad$ Why focus on infants and not data from adults?

**Different scenarios for learning**

- **Active learning** leans nativist (e.g., Bayesianism, classical symbolic AI) when it is construed as **hypothesis testing**, which can imply world models, etc.
	- How do we construe active learning for deep learning models?
- Active learning is a somewhat different phenomenon than **social learning** as a result of a socially constructed environment.

**Presentation: [[@2024luoFinding]], “Finding Unsupervised Alignment of Conceptual Systems in Image-Word Representations”**

- This study compared supervised and self-supervised learning methods for vision-language **alignment**, or convergence, with human developmental conceptual systems.
- The study showed that models trained with developmental SAYCam data alone had limited alignment, while models with more supervision and inductive biases showed more alignment.