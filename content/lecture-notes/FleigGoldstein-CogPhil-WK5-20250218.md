---
aliases: 
tags:
  - fleeting-note
date: <% tp.file.creation_date() %>
lastmod: 2025-02-18T21:11:25-05:00
---
[[2025-02-18]]
# Week 5, Day 1: Genetic encoding
---

**Genetic encoding and decoding**

- **Autoencoders** make a **low-dimensional latent space representation** of high-dimensional inputs by passing information through an **encoding network**, which is reconstructed by a **decoding network**.
- [[@2024shuvaev]] use this principle to condense weights in a trained **phenotype network (p-net)** with a smaller **genome network (g-net)**, which is then used to reconstruct a new p-net. Performance is then compared between reconstructed p-nets and networks directly trained on input data.
	- Results showed that p-nets performed fairly well. Perhaps the effect is similar to the innate “head start” of animals?
- The **bias-variance tradeoff** is the principle that stronger inductive biases tuned to exploit a particular environment correspond with lower performance on varying environments, and vice versa.
	- This is an extreme version of the [[@1997wolpert|No free lunch theorems for optimization]], which state that there does not exist a **learning algorithm** (e.g., neural network function approximation, Bayesian inference) that performs equally well on all **distributions**. Note that the theorem only holds when assuming a uniform prior on true distributions.
	- However, one can circumvent the NFL theorems given assumptions (non-uniform priors) on the environment, which then justify specific learning algorithms.
- [[@2024shuvaev]] suggests that, rather than being characteristically **empiricist**, learning in neural networks is agnostic to how parameters are initialized.

**Human cognitive flexibility**

- While human cognition is closer to non-human animal cognition than to information processing by AI in some ways, non-human animals demonstrate far clearer **instincts** and effective behavior early in life.
	- Humans have an exceptionally prolonged period of **adolescence**; this suggests that humans have less innate knowledge: “The whole story of human evolution is a drive toward **domain-general minds**.”
	- **Neoteny** is the retention of juvenile features into adulthood. This could be evolutionary advantageous in cases where adult forms would be overspecialized for the environment.
- Culture can be considered a form of **software** that “complete” human minds.
- **Nurture** happens in the womb; see Giudice (2010), “Modeling the conditions for visual experience in human fetuses.”
	- Conversely, fetuses respond to face-like stimuli (projected through the uterus) over non face-like stimuli; see Reid et al. (2017), “The Human Fetus Preferentially Engages with Face-like Visual Stimuli.”

**Presentation: [[@2020mitchell]], *Innate* Ch. 6**

- Associating genes with personality is challenging because personality traits are not **genetically modular**; genome-wide association studies also found that no shared genetic variant has a significant effect on personality.
- On the other hand, mutations can disrupt **neuromodulator systems** (e.g., serotonin receptors), leading to abnormal and anti-social behavior.
- *Discussion.* $\ \text{}$ Is personality an exclusively human trait, or can it be a trait of non-human animals or artificial systems?
	- People often note that pets have different personalities.
	- Mitchell proposes that robots could also be said to have personalities, given behavioral regularities.
- *Discussion.* $\ \text{}$ Can personality undergo significant change? Is it innate, or fixed at a certain point of development, or variable across contexts, or influenced by traumatic life experiences?