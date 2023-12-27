---
tags:
  - fleeting-note
---
# NeurIPS 2020 - Where Neuroscience Meets AI
---

## References
- Knowledge acquisition in cognitive science
	- [“A critique of pure learning and what artificial neural networks can learn from animal brains”](https://www.nature.com/articles/s41467-019-11786-6)
	- [How learning can guide evolution](https://www.cs.toronto.edu/~hinton/absps/evolution.htm#:~:text=Learning%20alters%20the%20shape%20of,sets%20of%20co%2Dadapted%20alleles.)
	- [Meta-learning and the Baldwin effect](https://arxiv.org/abs/1806.07917)
- [“A hypothesis for basal ganglia-dependent reinforcement learning in the songbird”](https://pubmed.ncbi.nlm.nih.gov/22015923/) – evidence for RL implementation in the brain
- [“Theories of Error Back-Propagation in the Brain”](https://pubmed.ncbi.nlm.nih.gov/30704969/) – review article
- Intersections between AI and ML
	- [“Context-dependent computation by recurrent dynamics in prefrontal cortex”](https://www.nature.com/articles/nature12742) ⭐
	- [“Reward-based training of recurrent neural networks for cognitive and value-based tasks”](https://elifesciences.org/articles/21492)
	- [“Task representations in neural networks trained to perform many cognitive tasks”](https://www.nature.com/articles/s41593-018-0310-2)
	- [“Integrated accounts of behavioral and neuroimaging data using flexible recurrent neural network models”](https://proceedings.neurips.cc/paper/2018/hash/819e3d6c1381eac87c17617e5165f38c-Abstract.html) – machine learning for neuroscience data?
	- [“Prefrontal cortex as a meta-reinforcement learning system”](https://www.nature.com/articles/s41593-018-0147-8) ⭐
	- [“A distributional code for value in dopamine-based reinforcement learning”](https://pubmed.ncbi.nlm.nih.gov/31942076/) ⭐
- Biological realism in DNNs
	- [“Backpropagation and the brain”](https://pubmed.ncbi.nlm.nih.gov/32303713/) ⭐
	- [“Biologically plausible learning in recurrent neural networks reproduces neural dynamics observed during cognitive tasks”](https://elifesciences.org/articles/20899) – reward-modulated Hebbian variant of node perturbation, no backprop required for learning
	- [“Deep neuroethology of a virtual rodent”](https://arxiv.org/abs/1911.09451) ⭐ – cool examples of connecting neuroscience fields (e.g., motor) to AI

---
## Why does neuroscience matter for AI?

- Similarities between biological and artificial neurons
	- Exist in networks with other neurons
	- Assumed to change strength of activity in response to incoming signals
- Different levels of abstraction in visual processing inspired convolutional neural networks
- Challenges of applying ideas from neuroscience/biology to AI
	- Different goals
		- Neuroscience – agent is fully formed; goal is to infer existing behavior patterns and match them to neural signatures. *Neuroscience is interested in the **prior**, what the animal is already tuned to do!*
		- AI – priors depend on the engineering (architecture, learning rule, objective function); task/environmental demands are the most important constraint, determinant of how priors are formed
	- Range of each field
		- Neuroscience – psychology (1800s) to neuroscience (1900s); cognitive science, including systems, development, computation, reinforcement learning, cognitive neuro. Different time and spatial levels (middle is most relevant for AI, i.e., behavior). Tools (electrophysiology, brain lesions), then create a computational model to investigate causal mechanism.

![[Pasted image 20231117134617.png|center]]

---
## Cognitive neuroscience

### What is cognitive neuroscience?
- Cognitive revolution led to new fields – AI and cognitive psychology
	- Brain as information processing system allows one to abstract away from physical substrate; takes from information theory! ([[Cognitive science treats the brain as an information-processing system]])

### Innateness
- Aristotle vs. Plato
	- Aristotle – all knowledge is learned; mind is a blank slate (tabula rasa)
	- Plato – all knowledge is innate; learning is recovering memory
- Chomsky – highly specialized learning is responsible for learning language, “the language instinct”
- Truly innate knowledge in animals
	- Wallace et al. – rat hides when seeing a shadow threat from a “hawk”, without exposure to real hawks
- *Knowledge can come from highly general learning, highly specialized learning, and truly innate.*

### What have we learned?
- Vision
	- “Dorsal stream” – possible module for visually-guided action
	- “Ventral stream” – possible module for visual object recognition
		- Neuron spiking data
- Episodic memory
	- Episodic memory might be a distinct module, depending on the hippocampus; distinct module from other types of memory!
- Planning – integrates many cognitive modules
	- Modern multi-step tasks used in experiments to isolate roles for different brain regions
	- Role of prospective representations – different brain activity for planning in body vs. outside scenes
### What’s next: computational cognitive neuroscience
 - “A path to AGI in its own right” – a software model for cognition; results in human-like AI if successful
	 - Classic example: model of ventral visual stream vs. CNN
	 - Hippocampus and episodic memory vs. differentiable neural dictionary

---
## Learning circuits and mechanistic neuroscience

- **Circuit neuroscience** = anatomy and connectivity in *individual neurons*
	- Are there *circuit-level* examples of ML algorithms being implemented in the brain?

### Reinforcement learning in the brain

- Example: Reinforcement learning implemented at the circuit-level
	- [“A hypothesis for basal ganglia-dependent reinforcement learning in the songbird”](https://pubmed.ncbi.nlm.nih.gov/22015923/)
	- Songbirds learn to copy “tutor” song to learn songs, getting better over time
	- Template of tutor song is stored in brain, RL algorithm comparing stored song with current song (i.e., how close in pitch) to update current song
		- HVC neurons encode time, forming connections to different neurons in striatum
		- Striatum tries to learn which connections need to be strong to have the correct song
		- Reward signaled by dopamine, indicating match with tutor song
		- HVC-striatum connections updated based on dopamine rule
		- LMAN area adds “perturbations” like a bandit-style algorithm
	- Supported by synapse-level reconstructions!
	- Not the same as ML target games
		- Many distinct rewards (i.e., reinforcement signals), like subtasks, localized in different areas of the brain (“spatially segregated”); opposed to “monolithic reward”

### Backpropagation
- Can circuit-level neuroanatomy relate to backpropagation?
- Learning based on neuron-specific, high-dimensional feedback, such as in gradient-based learning, requires neurons to be able to store feedback info
	- Neurons have multiple dendritic compartments to store both “activation” and “error” electrical signals!
- If true, could explain why neuron anatomy is so complicated
- Other models – [“Theories of Error Back-Propagation in the Brain”](https://pubmed.ncbi.nlm.nih.gov/30704969/)
	- Temporal-error
	- Explicit-error
- Can such ideas be validated?
	- Brain computer interface experiment (experimental design) + calcium imaging can reveal “credit assignment mechanisms” in animals
- Other interpretations of cortical circuits
	- Graphical models
	- Energy-based models

### Other implementations

- Content-addressable memory: Hippocampus looks like a Hopfield network
	- Neurons jump between different “basis of attraction,” as would expect with a pattern-completion system
- The role of symbolic processing: Related to Turing machines
	- [“A model for structured information representation in neural networks”](https://arxiv.org/abs/1611.03698)


---
## Recent advancements at the intersection

### AI work that incorporates neuroscience

- Deep convolutional neural network can be used as model of visual perception
	- Hierarchical process in the brain 
	- Outcome from IT matched by top hidden layer
- Recurrent neural networks are models for perceptual-based decision-making
	- Dot task with monkeys
	- [“Context-dependent computation by recurrent dynamics in prefrontal cortex”](https://www.nature.com/articles/nature12742)
	- Same analysis applied to brain and RNN dynamics yielded similar results
- [[Recurrent neural network]] as models for value-based decision-making
	- [“Reward-based training of recurrent neural networks for cognitive and value-based tasks”](https://elifesciences.org/articles/21492)
	- Economic choice task – participant has an internal preference for one of two choices
	- Similar to results in frontal cortex of monkeys
- DNNs as models for 20 simultaneous tasks
	- Different clusters of units are important for different tasks
	- [“Task representations in neural networks trained to perform many cognitive tasks”](https://www.nature.com/articles/s41593-018-0310-2)
- DNNs as models for human behavior
	- [“Integrated accounts of behavioral and neuroimaging data using flexible recurrent neural network models”](https://proceedings.neurips.cc/paper/2018/hash/819e3d6c1381eac87c17617e5165f38c-Abstract.html)
- Deep meta-RL
	- [“Prefrontal cortex as a meta-reinforcement learning system”](https://www.nature.com/articles/s41593-018-0147-8) 
	- Uses LSTMs to meta-learn a reinforcement learning algorithm
	- Specifically, by training on related tasks, system learns an emergent, second algorithm that enables quick adaptation to new tasks
	- Related to basal ganglia and prefrontal cortex network in the brain – hidden states match neural dynamics in animals
### Neuroscience research inspired by AI
- Distributional reinforcement learning
	- [“A distributional code for value in dopamine-based reinforcement learning”](https://pubmed.ncbi.nlm.nih.gov/31942076/)

### Biological realism in deep neural networks

| Deep neural networks             | Biological neural networks             |
| -------------------------------- | -------------------------------------- |
| Discrete time                    | Continuous time                        |
| Continuous activations           | Spiking, stochastic/noisy              |
| “Supervised”, global loss signal | Associative (Hebbian) / local learning |
| Backpropagation                  | No evidence for backprop                                       |

- Weight mirror network shows similar performance to ResNet, evidence that we might not need backprop as a mechanism
- Why biological realism at all?
	- Get out of “local optimums” of methods
	- Improve abilities that biological NNs excel at
		- Solve problems under uncertainty
		- Finite computation
		- Decomposable situations
		- Structured environments
	- Solve more real-world problems
	- Get additional insights into what biological problems are out there
- Artificial models of embodied motor control

---
## Notes

- Neuro-symbolic AI?
- Reinforcement learning in mammals is much more complicated than “simple” algorithms suggest
- Brain is not an end-to-end system, but implements many algorithms with many cost functions