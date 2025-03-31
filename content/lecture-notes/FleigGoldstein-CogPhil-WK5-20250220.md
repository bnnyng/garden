---
aliases: 
tags:
  - fleeting-note
date: <% tp.file.creation_date() %>
lastmod: 2025-02-20T19:21:22-05:00
---
[[2025-02-20]]
# Week 5, Day 2: How much nature vs. nature should we have?
---

- *Discussion.* $\ \text{}$ Would you prefer humans be more or less of a blank slate?
	- **Compatibilism** with respect to free will is the view that free will is compatible with **determinism**, including biological determinism.
	- Considerations: nature can be universal (e.g., [[Defenses for Chomsky's theory of innate language faculty|Universal Grammar]]) but also variable (e.g., gender differences).
	- *Example.* $\ \text{}$ Are humans fundamentally monogamous or not? The answer has implications for human evolutionary history. Conversely, facts about evolutionary history might increase confidence in one direction or the other. Actual evidence: every possible social arrangement has been exhibited by humans.

**Presentation: How LLMs store and process information**

- What is a neural net?
	- Neural nets roughly consist of **neurons**, which are nodes that receive inputs and send outputs. Deep neural nets have multiple layers of neurons called **hidden layers**.
- How does a neuron “learn”?
	- Using a **cost function** such as **mean-squared error**, which is the average of *squares* of differences between true data and output predictions: $\sum(\hat y - y)^2$.
	- **Back propagation** of the error—essentially the chain rule—is used to update weights. **Gradient descent** optimizes for the minimum error.
- How do GPTs work?
	- Concepts are stored in **embedding spaces**, then processed by a regular **multilayer perceptron** to produce a final output.
- *Discussion.* $\ \text{}$ Could a language model invent a completely new language?
	- Consider an argument from Chomsky-ites: there appear to be constraints on possible human languages, but neural networks appear to learn everything.