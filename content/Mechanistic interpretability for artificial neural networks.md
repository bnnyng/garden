---
aliases:
  - mechanistic interpretation
  - mechanistic interpretability
  - ablation
  - activation patching
  - causal tracing
  - interchange intervention
tags:
  - permanent-note
  - topic-information-computation-statistics
publish: "true"
date: 2025-04-14T18:17:43-04:00
lastmod: 2025-04-14T18:44:32-04:00
---
# Overview

**Mechanistic interpretability** is the project of achieving explanatory understanding of causal mechanisms in artificial neural networks, particularly [[Large language models|large language models]]. Most interpretability research involves an attempt to **reverse engineer** the computations to obtain human-intelligible descriptions of **functional modules** in the network. 

Like **systems neuroscience**, the mechanistic explanations occur at the [[Classical levels of cognitive theory|algorithmic level]]. The relevant functional modules for general neural networks are **features**, which are human-interpretable properties of the input data, and **circuits**, which are chains of operations that select for certain input features. **Computational graphs** give a formalism for representing circuits in general neural networks.

---
# Intervention methods

Mechanistic explanations are often obtained using an **interventionist** approach, “which holds that causal relationships are best understood in terms of what would change under would change under intervention or manipulations to parts of the system” (Woodward 2005, cited in [[@2024millierePhilosophical]]). For example, certain patterns of internal activation can be linked to specific capacities, such as language translation.

There are three main methods for mechanistic interpretation: probing, attribution, and causal intervention

| Method                                                        | Description                                                                                                                                                                               | What we can learn                                                                                                                                    | What we cannot learn                                                             |
| ------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| Probing (not interventional)                                  | Training a separate classifier model, a **diagnostic probe**, to predict certain properties (e.g., parts-of-speech tags, dependency relations) based on the model’s internal activations. | High decoding accuracy implies that an activation is *sensitive* to a particular linguistic feature; there is *some* information in the activations. | Whether the activations are used for a particular purpose in generating outputs. |
| Attribution (not interventional)                              | Broadly, techniques for determining which parts of the input have the largest impact on outputs.                                                                                          | Which input features (e.g., words, phrases) are most important for individual model predictions.                                                     | Can only suggest relevance, doesn’t explain much else.                           |
| Ablation                                                      | Eliminating or disabling individual neurons.                                                                                                                                              |                                                                                                                                                      |                                                                                  |
| Activation patching, causal tracing, interchange intervention |                                                                                                                                                                                           |                                                                                                                                                      |                                                                                  |

---
