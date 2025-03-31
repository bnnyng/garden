---
aliases: 
tags:
  - fleeting-note
date: <% tp.file.creation_date() %>
lastmod: 2025-02-25T14:24:00-05:00
---
[[2025-02-25]]

# Week 6, Day 1: Evaluating intelligence
---

**Measuring intelligence**

- **General intelligence (g)** is assumed to be a robust psychological trait due to the fact that performance is correlated across different measures of intelligence (e.g., **IQ tests**).
	- The attempt to assign a single value to this trait using **measurement theory** is analogous to identifying **temperature** with a single value.
- **Psychometrics** is a categorically different project than most other psychological studies: rather than making a unified theory of human cognition (e.g., Chomsky’s [[Defenses for Chomsky's theory of innate language faculty|Universal Grammar]]), psychometrics is a way to measure individual differences.
- According **Cosma Shalizi**, while it is an empirical question whether there is a general trait underlying intelligence, a measurement like $g$ is a **statistical artifact**: no matter what the data is, “any set of positively correlated variables will always appear to have a dominant general insight—this is a **mathematical necessity**, not a psychological insight.”

**What does this mean for artificial intelligence?**

- There is not much conceptual consistency behind terms like “**artificial general intelligence**.”
	- Marcus points out in a recent blog post that Sam Altman recently changed his definition of AGI to include how profitable it is.
	- Is “general” intelligence distinguished from [[Domain specificity and domain generality are graded phenomena, after Laurence and Margolis|domain-general]] intelligence?
- The notion of **singularity** includes a “subsequent runaway feedback process,” where the agent’s capabilities increase exponentially; however, humans are not self-improving in that sense.
- *Discussion.* $\ \text{}$ Is **rationality** a better way to assess AI systems?

**Presentation: [[@2021anthropic]], “A Mathematical Framework for Transformer Circuits”**

- The main goal of this paper is to reverse-engineer the computations performed by complex foundation models using simpler “toy” transformer models. This general line of research is called **mechanistic interpretability.**
- LLMs **tokenize** natural language words into vectors; manipulation of these vectors suggests that they have semantic significance (e.g., adding vectors for “woman” and “king” yields a vector similar to the tokenization of “queen”).
- Each layer of the transformer adds results to the **residual stream** of a token embedding, which is the sum of outputs from the previous layer and the original embedding. The residual stream can be considered a **communication channel** for layers, as it does not appear to serve other processing purposes.
- Two-layer transformers allow for **(matrix) composition** of attention heads, i.e., **induction heads**.
- *Discussion.*
	- “This paper’s methods can be used to understand portions of general transformers.” Agree or disagree?
	- Based on the “copying” in 1- and 2-layer models, are deeper models still “stochastic parrots”?
	- Should we care about mechanistic interpretability?