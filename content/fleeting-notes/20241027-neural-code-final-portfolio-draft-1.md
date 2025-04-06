---
aliases: []
tags:
  - fleeting-note
  - NSBV-BC3386
date: 2024-10-27 13:28
lastmod: 2024-12-03T10:57:28-05:00
---
# Errata

- Suggestions for future directions which are not possible
	- Types of biases: control vs. expertise, teaching people to become experts (geebles study)
	- Biases for abstract concepts vs. perceptual features (e.g., on ARC)
	- How to test whether this theory is true?
		- Dimensionality-reduce neurons to see what features in the environment get generalized, qualitative analysis with what we know is true about different visual systems
	- A formal mathematical model would be cool. Quantify how well the neural representations match latent structure in data.
- Titles?
	- Towards an ecological theory of neural representational geometry
- What is the role of efficiency/redundancy?

---
# Outline

1. Introduction
	1. Overview of representational geometry
		1. Population code rather than individual neurons (ensemble vs. the neuron doctrine)
		2. Abstract away from individual responses
	2. Reference to environmental neuroscience?
2. Inductive biases in neural representations
3. The manifold hypothesis and natural structure in data, and what DNNs have told us
4. Why inductive biases? Resource-rational analysis perspective
	1. Sensory matched filters 
		1. DSL metaphor
		2. contrast something with metabolic constraints, capable of limited representations, vs. humans with high-level brain function
	2. Resolves conflicts 
5. Evidence for inductive biases
	1. See KG paper relating neural representations and tuning curves, see if there is anything there for sparse codes/representations?
6. Future directions

## Motivation

#### Manifolds in the world

#### Inductive biases in the brain

#### Domain-specific languages

- DSLs are a form of inductive bias
	- “Designed” by a programmer or evolution
- Why should we care?
	- Representations are DSLs; same story, different field
	- For example, vision is not meant to be a replica of the world; there is a “pattern language” that is useful
	- Follows from this metaphor that the mode of representation constrains what kind of operations can be done on it (see [[@1982marr]])
- In the pattern language of “movement or non-movement”. Our DSL can account for many more things, probably
## (Evidence?)

- Argument: Dimensionality is resource-rational (both wrt. to internal and external environments), cognitive/abstractive capacity is a downstream effect [[@2020liederResource]]
	- Degrees of freedom, e.g., brain lesion patients having relatively normal behavioral outcomes (see [[@2022kelty-stephen|Kelty-Stephen et al., 2022]])
- General framework: natural structure of data → physical adaptation/sensory matching/perceptual pre-processing → lower-dimensional representations
	- Sensory filters create the DSL by a physical process
	- DSL constrains what dimensionality of representations are possible by determining how many neurons are needed for each transformation
- Role of metabolic efficiency
	- Representations are closer to the origin [[@2021kriegeskorte]]
- What this framework clarifies—theoretical strength
	- Why there are different outcomes between [[@2019hirokawa]] and [[@2024courellis]], for example
		- Problem: Self-referential—assumes that single-cell encodings due to more natural tasks, but natural task is an assumption that might be clarified by the fact that representations are low-dimensional
	- Why there might be redundancies (in raw activation as well as not spanning the whole space of features)