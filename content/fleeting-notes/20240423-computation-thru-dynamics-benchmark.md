---
tags:
  - fleeting-note
lastmod: 2024-04-23T09:53:37-07:00
---
>This git repo contains code that will allow users to perform four basic steps:
>1. Train task-trained models on a range of tasks with different complexities.
>2. Simulate synthetic neural spiking from those task-trained networks
>3. Train data-trained models on the synthetic spiking activity
>4. Compare the dynamics of the task-trained and data-trained networks with a variety of quantifications of dynamical accuracy

---
# Key terms

- Latent space = lower-dimensional space that doesn’t include all of the neurons
---
# Background and motivation

- Find out how the brain performs computations – need a framework for what underlies complex behavior
- Wants to span multiple [[Information-processing systems are understood at knowledge, algorithm, and physical implementation levels|levels of explanation]] 
	- What is being done? – Goal-directed computation
	- How is it being done? – **Neural dynamics**
	- How is it implemented in hardware? – Neurons
- Significance: Neural dynamics serve as a bridge between computational and physical levels of implementation
	- Top-down approach – assume a goal, see if there’s a similar activity between biological and artificial (i.e., RNN) systems; task-trained models
		- Fully observable, hypothesis-driven, access to ground-truth dynamics
		- Vulnerable to bad hypotheses, unclear how ___ can be conducted?
	- Bottom-up – autoencoder that reconstructs the same neural activity as output, then guess the goal; data-trained models
		- Not required to make a guess
		- How to assess accuracy, unclear how to infer computation

---
# Description of the benchmark

- The benchmark gives test cases to assess how well we’re doing
	- Task-trained models simulate neural activity (spiking), iterates down the levels of explanation; feeds back into data-trained models to infer computation, iterates up the levels
	- Compare to ground-truth neural dynamics in both steps
- Questions you can ask: task training, simulation, data training
- Code base uses PyTorch Lightning
- 3D flip flop?