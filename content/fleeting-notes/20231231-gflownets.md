---
tags:
  - fleeting-note
lastmod: 2023-12-31T18:46:37-08:00
---
# Key terms

- **Markov chain** = “A Markov chain is a stochastic model that uses mathematics to predict the probability of a sequence of events occurring based on the most recent event.”
	- MCs are *memoryless* – predictions are conditional on current state and independent of past and future states.
	- MC model has transition matrix (probability distribution of state’s transitions; sum of rows has probability 1). #concept-question A directed, connected graph can be converted to a transition matrix?
		- More predictions = raising to powers
	- Initial state vector = probability distribution of starting at each $N$ possible states.

---
# References

Tutorial: https://milayb.notion.site/The-GFlowNet-Tutorial-95434ef0e2d94c24aab90e69b30be9b3
Paper summary: https://folinoid.com/w/gflownet/
TDS and building a model: https://towardsdatascience.com/the-what-why-and-how-of-generative-flow-networks-4fb3cd309af0

---
https://www.youtube.com/watch?v=M49TMqK5uCE

- Active learning = model asks an “oracle”/real world for the most salient training examples ot keep learning
	- Want to learn a function that approximates real world
	- Take into account how certain the learning system is – entropy, uncertainty
	- Need to invent queries for the “oracle”
- Machine teaching = human selects most salient data
- ML is a joint distribution between signals and labels; most is “nothingness” that require fewer examples to learn
	- Markov Chain Monte Carlo = sampling method for unnormalized distributions; posterior distribution in Bayesian inference; can draw samples even when we can only calculate density
		- Random samples generated sequentially
		- Exponential time
- GFlowNets aimed to generate most salient data
	- Deterministic, episodic environment = reinforcement learning
	- Graph with one source; find the trajectories
	- Interacting loop between generative model and real world
- Galton board/bean machine – if using gates, can make any distribution