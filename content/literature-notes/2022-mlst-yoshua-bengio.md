---
lit-author: "[[Bengio, Yoshua]]"
aliases: 
tags:
  - literature-note
title: "Podcast | Prof. Yoshua Bengio: GFlowNets, Consciousness, & Causality"
publish: "true"
date: 2024-01-01 22:18
lastmod: 2024-01-02T12:59:04-08:00
---
*Machine Learning Street Talk Podcast* – [Source](https://youtu.be/M49TMqK5uCE?si=SMqf6RrFbe2VJynW)  

# Takeaways

- Abstract causal dependencies are preserved across changes in distribution.
- Our brain is a machine that discovers new abstractions, using discrete concepts to get better generalization.
- [[GFlowNets]] are an active learning framework where, unlike typical RL where the goal is to maximize expected reward of an action, the learning algorithm tries to learn the underlying structure of the reward function.
- #queue The usage matches Michael Graziano’s theory of consciousness: one network is a “world model” (possibly Bayesian, modeling uncertainty), while a second, higher-level network controls the search policy to drive further exploration. The two levels are a way to implement [[Dual process theory of reasoning]].

---
# Key terms

- **Active learning** = a type of supervised [[§ Machine learning|machine learning]] where the “learner” model queries an information source (generally a world model) for the most salient examples to continue learning.
- **Machine teaching** = a type of supervised learning where the human user interactively selects the most salient data (i.e., maximizing information gain with respect to training samples) to train the model.
- **Markov Chain Monte Carlo (MCMC)** = a class of algorithms for sampling from a continuous distribution; beginning with a plausible initial guess, a chain of samples is produced by adding random perturbations in the neighborhood, and each new proposal is either rejected or accepted.
- **Flow network** = a directed graph with sources, sinks, and intermediate nodes; sinks are the root nodes, and correspond with the terminal states.

---
# Notes

## Introduction

- MCMC is exponentially expensive in high dimensions and in distributions with many modes.
- Like [[Reinforcement learning|reinforcement learning]], GFlowNets need a reward function and a deterministic episodic environment.
	- The GFlowNet objective is to sample approximately in proportion to the given reward function.
	- GFlowNets use “imagined” experiments to train to generate queries for the real world.
- GFlowNets do not focus on a small number of high-reward paths like in classic [[Reinforcement learning|reinforcement learning]]; instead, sample randomly from a “broad spectrum” of paths in proportion to their reward—maintains sampling diversity, balances [[Exploration-exploitation tradeoff]].
	- Diversity is useful for practical applications, like drug discovery; avoid local minima.

## Interview

- GFlowNets are a “kind of framework for generic learnable inference for probabilistic machine learning”; “the swiss army knife of probabilistic modeling.”
- Entropy is “keeping your options open.”
- Fristen’s [[Free energy principle]]: maximizing expected reward in classical RL is wrong, we should instead perform inference over future paths and balanced expected reward with relative entropy.
	- GFlowNet “machinery” can be used to estimate entropy of an action distribution, distribution over Bayesian parameters, etc. 
	- #concept-question Formal definitions?
- [[Evolutionary algorithm|Evolutionary algorithms]] also have the advantage of not getting stuck in local minima.
- Considering infant development, search needs to have a “big bonus” on diversity.
- “Objective to optimize is not tractable, but we can sample these trajectories…like sampling *thoughts*”.
	- Bengio compares flow to thought process, which has a chain of explanation that doesn’t represent *all* explanations.
- Model of reward distribution should capture uncertainty somehow.
- Classical RL is maximizing expected value; GFN is acquiring as much knowledge as possible about underlying reward function. 
- Hierarchical: GFN to model uncertainty in the reward received from the real world (i.e., Bayesian model); another GFN to control the search policy and how much uncertainty reduction from performing an action.
	- “You need to have a part of your model that is aware of the fact that there are whole areas or aspects of the world that you don’t know about, so you can drive its exploration.”
	- That is, need a model of your own uncertainty as well as active learning policy.
	- #concept-question Could be considered a form of [[Metacognition]]? Or in complexity terms, hierarchy of the complex system.
	- Related: [[Cognitive hierarchy]]
- “If there is a structure, there is a free lunch.” (i.e., this is universally the best-performing algorithm?)
	- The “possible free lunch” is that you can learn abstract structure on data x (as opposed to discriminative model which just learns the probability of y given x), getting powerful predictive encoding.
- Classical machine learning: given a candidate place, how much reward is expected vs. GFN: given some places where the reward is high, learn the “inverse function.”
- Active learning framework: “I’m not trying to win (the chess game), I’m just trying to gather information so I’ll learn more in the future.”
- Practical use cases: AI dialogue systems where the user is trying to get information; GFNs can represent “complex distributions over compositional objects,” model own uncertainty about what user needs and where to find the information.
- Same methodology as scientific discovery: plan experiments to reduce uncertainty of theories about some part of the world; want to ask as few questions of “nature” as possible to understand fundamental connections.
- GFNs are ideal for implementing “System 2 inductive biases.”
	- Example: inclination to think causally?; graphs implicitly represent syntactic parsing of a sentence.
	- Most importantly for Bengio, GFNs help with causal discovery—underlying causal structure of the world, including uncertainty about it.
- The point of abstraction is to be able to [[Generalization|generalize]] to new settings OOD.
- **Abstract causal dependencies are preserved across changes in distribution.**
- Bengio wants to build machines that can discover their own abstract semantic categories—unsupervised learning, “build a compact understanding of lots of things that generalize across many settings.”
	- #concept-question System 1 thinking relies on stimulus-specific biases, but System 2 thinking also uses inductive biases—what’s the difference? System 2 biases help select the correct System 1 biases, as in a higher level of cognition? Feels contradictory that such biases are also [[Squire's taxonomy of long-term memory|non-declarative]].
	- “Our brain is a machine that discovers new abstractions.”
	- “Discrete concepts emerge as a way to get better generalization.”
- Bengio isn’t interested in what consciousness is, philosophically, but what in the brain gives rise to the *feeling* of consciousness.
	- #queue Michael Graziano’s theory: the brain has a world model and an attention mechanism that focuses on a small part of it at a time; we need a second world model (“abstract control machinery”) to control the attention, separate from the “real knowledge.”
- #queue Randal Bellistriero: [[Multilayer perceptron|MLPs]] as a decomposition method, piecewise linear “cells” in the ambient space that are activated by specific input examples.
	- Bengio thinks it’s a possible solution to have discrete abstract logic controlling simpler pieces.