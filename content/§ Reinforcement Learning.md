---
aliases:
  - reinforcement learning
  - model-free
  - model-based
tags:
  - permanent-note
  - topic-information-computation-statistics
date: 2023-12-24
lastmod: 2025-05-21T15:40:21-04:00
publish: "true"
---
# Overview

$\quad$**Reinforcement learning (RL**) is the method of learning from rewards and punishments rather than explicit instructions. Specifically, the agent must learn a **behavioral policy**, or mapping from states to actions, which maximizes cumulative long-term reward. The agent then explores or exploits the state using actions and learns from the resulting rewards. 

$\quad$Reinforcement learning can be divided into **model-free**, attempts to estimate reward values of particular actions directly based on stimulus-response associations (i.e., a value associated with each action), and **model-based**, which leverages internal representations of the task structure to build representations of plans and their expected outcomes to choose between policies.

$\quad$There are two general approaches to reinforcement learning algorithms: **value-based methods**, like Monte Carlo and [[Temporal difference learning|temporal difference learning]], attempt to learn a value function and then derive a policy, while **policy-gradient methods** directly learn and optimize the parameters of a policy function.

---
# Topics

#### Formalism

- [[Bandits, exploration, and exploitation]]
- [[Markov decision processes and dynamic programming]]
- [[Temporal difference learning]] 

#### Variations

- [[Multi-agent reinforcement learning]]
- [[Intrinsically motivated reinforcement learning]]

#### Miscellaneous

- [[Algorithms for simple vs. complex decision problems]] 

---
# Key terms

- **Reward prediction error:** an “index of surprise” that reflects the difference in value between a received reward and a predicted reward at each moment in time; important for *temporal* RL algorithms.
- **Episodic reinforcement learning:** a learning approach which keeps an explicit record of past events, and uses this record directly as a point of reference in making new decisions (see: [[Squire's taxonomy of long-term memory|episodic memory]]).
- **Meta-reinforcement learning:** when one learning system progressively adjusts the operation of a second learning system, improving the latter’s speed and efficiency (see: [[Meta-learning is the process of learning to learn|meta-learning]]).

---
# Notes

- Interestingly, reinforcement learning is one of the only domains in cognitive science where all [[Classical levels of cognitive theory|levels of explanation]] are understood.
	- Computational/knowledge – maximizing reward.
	- Algorithmic – temporal difference learning for a value function.
	- Implementational/physical – dopamine neurons encode error signals needed for updating association values.
- Main algorithms
	- Value-based prediction: Monte Carlo and TD Learning
	- Value-based control: Monte Carlo control, Sarsa, Q-learning
	- N-step bootstrap and elgibility traces
	- Function approximation: deep Q-networks
	- Policy gradient methods: REINFORCE, Actor-Critic