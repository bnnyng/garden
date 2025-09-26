---
aliases:
  - reinforcement learning
tags:
  - permanent-note
  - topic-information-computation-statistics
  - moc
date: 2023-12-24
lastmod: 2025-08-14T11:18:04-07:00
publish: 
---
# Overview

$\quad$**Reinforcement learning (RL**) is the method of learning from rewards and punishments rather than explicit instructions. Specifically, the agent must learn a **behavioral policy** $\pi$, or mapping from states to actions, which maximizes cumulative long-term reward without knowing how their actions will modify states or what costs and rewards might result. A **nonstationary** environment is one in which the true values of actions change over time.

![[Pasted image 20250605110303.png|400]]

$\quad$ Subtypes of reinforcement learning include:

- **[[Multiagent reinforcement learning]]:** an RL problem where several agents are learning to solve a task at the same time, while interacting with the same environment.
- **[[Deep reinforcement learning]]:** the method of using [[§ Deep Learning|deep neural networks]] to approximate the optimal policy and/or value function. 
- **Inverse reinforcement learning:** the problem of inferring the reward function that another agent is optimizing, based on observations of its behavior (i.e., trajectories); can be understood as learning *why* another agent acts instead of learning *how* to act, as in standard RL.
- **Episodic reinforcement learning:** a task structure where the agent interacts with the environment in “episodes” of finite sequences of steps, and the environment resets after each sequence terminates (see also: [[Deep reinforcement learning|episodic control]]).
- **[[Bayesian reinforcement learning]]:**
- **[[Goal-conditioned reinforcement learning]]:**

---

# Topics

#### Background: Decision and game theory

- [[(Sequential) decision problems]]
- [[Action selection in decision problems]]
- [[§ Game Theory]]

#### Tabular solution methods

- [[Bandit problems]]
- [[The Markov property]]
- [[Markov decision processes]]
	- [[Stochastic games]]
- [[Policy prediction and control]]
- [[Temporal difference learning]] 

---

# Notes

- Interestingly, reinforcement learning is one of the only domains in cognitive science where all [[Computational, algorithmic, and implementation level analyses of information-processing systems, after Marr (1982)|levels of explanation]] are understood.
	- Computational/knowledge – maximizing reward.
	- Algorithmic – temporal difference learning for a value function.
	- Implementational/physical – dopamine neurons encode error signals needed for updating association values.
- Main algorithms
	- Value-based prediction: Monte Carlo and TD Learning
	- Value-based control: Monte Carlo control, Sarsa, Q-learning
	- N-step bootstrap and elgibility traces
	- Function approximation: deep Q-networks
	- Policy gradient methods: REINFORCE, Actor-Critic
- Axes of variation
	- Discrete vs. continuous actions
	- Tabular vs. function approximation
	- Exploration strategy (e.g., random or $\varepsilon$-greedy vs. uncertainty vs. intrinsic motivation)
	- Learning paradigm: online vs. offline
	- Credit assignment: TD, Monte Carlo, eligibility traces
	- Single vs. multi-agent
	- Goal-conditioned vs. hierarchical
- Note on inverse reinformenet lreaning
- **Episodic reinforcement learning:** a learning approach which keeps an explicit record of past events, and uses this record directly as a point of reference in making new decisions (see: [[Squire's taxonomy of long-term memory|episodic memory]]).
- **Meta-reinforcement learning:** when one learning system progressively adjusts the operation of a second learning system, improving the latter’s speed and efficiency (see: [[Meta-learning is the process of learning to learn|meta-learning]]).
- **Reward prediction error:** an “index of surprise” that reflects the difference in value between a received reward and a predicted reward at each moment in time; important for *temporal* RL algorithms.

