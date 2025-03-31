---
aliases:
  - Neural Code final portfolio
tags:
  - NSBV-BC3386
  - fleeting-note
publish: 
date: 2024-10-20 10:36
lastmod: 2025-02-04T22:58:56-05:00
---
# Overview

- [[20241009-neural-code-final-portfolio-proposal|Neural Code Final Portfolio - Proposal]] – 3 hours
- [[20241027-neural-code-final-portfolio-draft-1|Neural Code Final Portfolio - Component 1 Draft 1]] – 6 hours
- [[20241111-neural-code-final-portfolio-draft-2|Neural Code Final Portfolio - Component 1 Draft 2]]


---
# October 21 – Proposal

- Dopamine is more than just reward prediction
	- “Traditional” theories from [[@2016schultz]]
	- Dopamine matches the firing rate of policy learning RL [[@2023coddington]]
	- Dopamine is used internally to promote behaviors, similar to if evoked externally by reward [[@2023markowitz]]
		- Relationship to [[Intrinsically motivated reinforcement learning|intrinsically motivated reinforcement learning]]?
- Relationship between hippocampal place/grid cells and RL?
	- Hippocampus is a predictive map related to RL ([[@2017stachenfeld]], [[@2020geerts]])
- More general theme – complicating the [[The neuron doctrine and beyond|neuron doctrine]] picture, see [[@2005bullock]]
	- In talking about “dopamine”, often referring to dopamine neurons coupled with dopamine system – left implicit/unclear! 
		- How much can we really say about what individual neurons are doing? What does this mean for neuroscience in general?


>[!question]
>- Is temporal association of phasic dopamine response nonetheless a purely **rate-based code**? Since timing of spikes doesn’t reflect additional information about the salient stimulus 

---


---
# Log

2024-11-18

- Coding projects on Hebbian learning:
	- https://cs.colby.edu/courses/S23/cs443/projects/p1hebb/p1_hebb.html
	- https://www.kaggle.com/code/swahajraza/brain-inspired-learning-a-deep-dive-into-hebbnet
	- https://github.com/Siddhipatade/Hebbian-rule

[[2024-10-27]]

- Inductive biases
	- Mouse data (spiking rates available?): https://pmc.ncbi.nlm.nih.gov/articles/PMC9839349/#s4
- Connections to “rational analysis” – environmental constraints
	- What [[Levels of granularity in computational systems]]?
- Relationship between tuning and geometry in [[@2021kriegeskorte]]
	- “A working hypothesis is that detailed representational geometries arise from a genetically determined blueprint through learning, and that they come to represent the statistical regularities of the environment, which might be learned even without supervision or reinforcement, and ultimately the behavioral demands and the reward structure of the environment.”
		- Relationship to [[Intrinsically motivated behavior is performed for its own sake|intrinsic motivation]] and [[@2023markowitz]]?
- Coding project: using different inductive biases to output what kind of geometries are learned
	- Cat/frog eye class → representational geometry
	- Stimulus feature set
	- Make a plot of the data in three dimensions
	- Neural networks—make a toy NN that predicts cat eye data, for example, see what activation values in response to certain combinations of features
	- Natural structure vs. unstructured
	- Model of mouse visual cortex: https://cbmm.mit.edu/video/computational-models-mouse-visual-cortex-and-tutorial-allen-institute-data-observatory
	- Encode a stable prior for cardinal orientations, see what’s up with activation: https://pubmed.ncbi.nlm.nih.gov/20005889/
	- Inducing biases in a neural network based on activation to see what happens to classification—perturbing particular responses?
- Manifold hypothesis
	- https://repository.lib.fsu.edu/islandora/object/fsu:406789/datastream/PDF/view
	- Neural networks work by changing topology of a dataset from complicated to simple: https://jmlr.org/papers/v21/20-345.html
		- Shallow networks change geometry, deeper networks change topology
- Role of expertise as an inductive bias: https://direct.mit.edu/jocn/article/33/12/2461/107382/How-Visual-Expertise-Changes-Representational
- Suggestions for future directions
- Component 2 – a mathematical derivation or model?

[[2024-10-20]]

- Broad topic idea – connecting RL and hippocampal place cells, Component 2 being an experiment with [[@2024george|RatInABox]]