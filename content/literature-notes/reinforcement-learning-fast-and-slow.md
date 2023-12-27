---
lit-author: "[[Botvinick, Matthew]]"
aliases:
  - Reinforcement learning fast and slow
  - Botvinick et al. (2019)
tags:
  - literature-note
---
# Summary

[[2019-botvinick-reinforcement-learning]]

Episodic reinforcement learning and meta-reinforcement learning are two methods of enabling fast deep reinforcement learning. Episodic RL resolves slowness due to incremental parameter adjustment, and meta-RL resolves slowness due to weak inductive bias.

Episodic meta-RL uses an episodic memory system to reinstate patterns of activity in a recurrent neural network that implements meta-learning processes.

---
# Key terms

- **Neural network** = a learnable set of *layered* **weights** and **biases**, which are used to process inputs and produce outputs.
	- **Embedding** = a learned internal representation of an observation, which is contained in a neural network **layer.**
	- **Deep neural network** = a **neural network** with multiple **hidden layers** between input and output layers.
	- **Convolutional neural network** = a type of **deep neural network** used for processing *structured arrays* of data; CNNs are frequently used for *computer vision* and *natural-language processing*.
	- **Recurrent neural network** = a neural network that runs as an "inner loop" for each step in a sequence, passing *patterns of activation* between steps.
- **Non-parametric model** = a **machine learning** model where the number of *parameters* is not fixed, but grows as more data is provided.
- **Reinforcement learning** = a process for learning from *rewards and punishments* instead of *explicit instructions*.
	- **Sample efficiency** = the amount of data required for a **learning system** to reach a target *performance level*.
	- **Variance** = the range of patterns that can be mastered by a learning procedure.
- **Behavioral policy** = a mapping from *states* to *actions*, often implemented as a *parameterized function* for richer environments; **reinforcement learning** seeks a **behavioral policy** that will maximize long-term reward.
	- **Catastrophic interference** = when large *parameter adjustments* for **behavioral policies** cause effects of previous learning to be *overwritten*.
- **Inductive bias** = initial assumptions about a pattern to be learned, which are used in a learning procedure.
	- **Bias-variance trade-off** = when stronger **inductive biases** lead to greater **sample efficiency**, but decreased **variance**. 
- **Meta-learning** = informally called "**learning to learn**"; when one learning system adjusts the operation of a second learning system (i.e., leveraging past learning) to increase speed and efficiency of new learning by the second system. 