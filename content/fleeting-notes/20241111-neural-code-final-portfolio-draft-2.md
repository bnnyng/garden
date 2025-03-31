---
aliases: []
tags:
  - fleeting-note
  - NSBV-BC3386
date: 2024-11-11 18:06
lastmod: 2024-12-03T10:57:31-05:00
---
# Sketch

- Central claim: representational geometry of neurons should be understood in terms of available resources
	- Goal: ground the idea of “abstract and disentangled representational geometries” in something with real-world referents (so what); define a new agenda/direction for this kind of research
	- Where do latent variables come from?
	- We should care about embodiment over abstraction; alternatively, abstraction recruits evolved systems for to do different things (thus abstraction depends on the neurophysiological resources)
- Connecting with ideas of redundancies from coding efficiency, information theory
- Other main point: pre-processing and inductive biases. Geometric analyses need to be careful about what inductive biases are being assumed.
	- Go into detail about why biases matter…
	- Biases as physical resources (in the sense of degrees of freedom)
	- *Specialization supports adaptive behavior*, from [[@2019hirokawa]]; adaptive behavior in the context of what organisms naturally experience. (Sparse codes re: [[@2000decharms]]).
- Does this have anything to do with the method of hypothesis/problem of indiscriminate confirmation
	- “Two different theories can successfully predict observations”
	- Alternative: deductively infer computational models from some kind of assumption (e.g., resource-rationality)

[[@2024courellis]]
- Representations replicable in ANN for tasks shared by ANNs, what about representations for embodied behavior?
	- Conflict: maybe embodiment is not necessary for most abstract tasks? — or maybe it is!

[[@2019hirokawa]]
- The hypothesized “decision variables” appear to be pre-processed! – what are the upshots?
	- Can “beg the question” in either direction during analysis by what particular features are being used; the real brain depends on the sensory inputs! Until we get those right, what can representational geometries tell us?
- Task involving perceptual/value-guided decision making, reward processing might be more “natural”

[[@2021kriegeskorte]]

- Proposes representational geometry as a property of a code (new code), along with tuning. Both capture different information about stimuli (different info can be deduced from each)


---

# Outline

1. Introduction
	1. What is a neural representation? What does it mean for an individual neuron to represent something? (Probably useful to look at Kreig 2021 paper, [[@2000decharms]]).
2. Motivation: what is an inductive bias, why does it matter
	1. What is an inductive bias? The world is redundant and inductive biases capture redundancies
	2. Examples: neuron-level tuning, sensory structures/physiology, data pre-processing/domain-specific language
	3. Inductive biases are important to consider: see the example of a domain-specific language
	4. Upshot: inductive biases are efficient (resource-rational) with respect to the environment that the organism adapted to (species-scale)
3. Central claim: Ecologically-relevant generalization processes (i.e., individual-scale adaptations) are specialized in the brain.
4. Implications of the framework
	1. Organisms only need to be able to generalize within an environment; since both stimulus data and space of possible activities are highly regular, single neurons can encode apparently higher-level processes (or more latent variables) if they are things that the organism encounters all the time
		1. [[@2019hirokawa]] specifically “pre-process” the task environment into a lower-dimensional space of canonical decision variables
	2. What about observed abstraction?
		1. Close analysis of problems with current research: inductive biases become confirmation biases?
		2. Seemingly disjoint findings between e.g., [[@2019hirokawa]] and [[@2024courellis]]; potentially explained by different assumptions being made in the pre-processing steps
			1. Implicitly making a formal model of the environment while interpreting results, compared to taking it as an axiom? See: [[(Resource-)rational analysis]]
5. Future directions: Use this assumption to deductively infer computational models
	1. Methods of environmental neuroscience would be useful
	2. Possible experiments and applications