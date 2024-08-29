---
aliases:
  - reinforcement learning
  - model-free
  - model-based
tags:
  - permanent-note
  - topic-cognitive-science
date: 2023-12-24
lastmod: 2024-08-27T12:14:02-07:00
publish: "true"
---
**Reinforcement learning (RL**) is the method of learning from rewards and punishments, rather than explicit instructions. Specifically, the agent must learn a **behavioral policy**, or mapping from states to actions, which maximizes cumulative long-term reward. The agent then explores or exploits the state using actions and learns from the resulting rewards. 

Reinforcement learning can be divided into **model-free**, which is based on direct stimulus-response associations (i.e., a value associated with each action), and **model-based**, which leverages internal representations of the task structure.

>[!question] #concept-question 
>How is model-based learning different from representation learning?

---
# Topics

- [[Intrinsically motivated reinforcement learning]]

---
# Key terms

- **Reward prediction error** = an “index of surprise” that reflects the difference in value between a received reward and a predicted reward at each moment in time; important for *temporal* RL algorithms.
- **Episodic reinforcement learning** = a learning approach which keeps an explicit record of past events, and uses this record directly as a point of reference in making new decisions (see: [[Episodic memory stores knowledge of the world as an autobiographical representation|episodic memory]]).
- **Meta-reinforcement learning** = when one learning system progressively adjusts the operation of a second learning system, improving the latter’s speed and efficiency (see: [[Meta-learning is the process of learning to learn|meta-learning]])

---
# Notes

- Interestingly, reinforcement learning is one of the only domains in cognitive science where all [[Information-processing systems are understood at knowledge, algorithm, and physical implementation levels|levels of explanation]] are understood.
	- Computational/knowledge – maximizing reward.
	- Algorithmic – temporal difference learning for a value function.
	- Implementational/physical – dopamine neurons encode error signals needed for updating association values.