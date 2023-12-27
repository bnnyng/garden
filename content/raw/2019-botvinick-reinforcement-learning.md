---
ref-title: Reinforcement learning fast and slow
ref-author: Matthew Botvinick, et al.
ref-publish-date: "2019"
ref-type: Paper
ref-read-date: 2022-12-03
aliases: 
tags:
  - raw
---
# Related works

- [“Been There, Done That: Meta-Learning with Episodic Recall”](https://arxiv.org/abs/1805.09692) – episodic meta-RL
- [“Prefrontal cortex as a meta-reinforcement learning system”](https://www.nature.com/articles/s41593-018-0147-8) – proposes that meta-RL can model learning in biological brains
- “Core knowledge” – developmental psychology paper that theorizes about “built in” inductive biases
- [“Evolving intrinsic motivations for altruistic behavior”](https://arxiv.org/abs/1811.05931) – evolutionary algorithms inspired by natural selection

---

# Highlights

## Deep reinforcement learning

> In simple settings, the **behavioral policy** can be represented as a **look-up table**, listing the appropriate action for any state. In richer environments, however, this kind of simple listing is infeasible, and the policy must instead be encoded implicitly as a **parameterized function**.

> Pioneering work in the 1990s showed how this function could be approximated using a **multilayer (or deep) neural network**, allowing **gradient-descent learning** to discover rich, nonlinear mappings from perceptual inputs to actions.

> In many cases, the later advances have involved integrating deep RL with architectural and algorithmic complements, such as **tree search** or slot-based, episodic-like memory.

> The \[Atari-playing **CNN**] architecture comprises multiple modules, including a neural network that leverages an **episodic-like memory** to predict upcoming events, which 'speaks’ to a **reinforcement-learning** module that selects actions based on the predictor module's current state.

## Fast learning through episodic memory

> Naively increasing the learning rate governing **gradient descent optimization** leads to the problem of **catastrophic interference**. However, recent research shows that there is another way to accomplish the same goal, which is to keep an explicit record of past events, and use this record directly as a point of reference in making new decisions.

> Episodic RL parallels ‘**non-parametric**’ approaches in machine learning and resembles **‘instance-’ or ‘exemplar-based’** theories of learning in psychology.

> When a new situation is encountered and a decision must be made concerning what action to take, the procedure is to compare an internal representation of the current situation with stored representations of past situations. The action chosen is then the one associated with the highest value, based on the outcomes of the past situations that are most similar to the present.

> **Slow incremental learning** of the connection weights allows the system to form useful internal representations or **embeddings** of each new observation.

## Accelerating deep RL by learning to learn

> **Meta-learning** occurs when one learning system progressively adjusts the operation of a second learning system, such that the latter operates with increasing speed and efficiency. 

> **Meta-learning** is often described in terms of two ‘loops’ of learning, an ‘outer loop’ that uses its experiences over many task contexts to gradually adjust parameters that govern the operation of an ‘inner loop’, so that the inner loop can adjust rapidly to new tasks. 

> **Meta-RL** refers to the case where both the inner and outer loop implement **RL algorithms,** learning from reward outcomes and *optimizing* toward behaviors that yield maximal reward.

## Implications for neuroscience and psychology

>Indeed, Wang and colleagues [49] have proposed a very direct mapping from the elements of meta-RL to neural structures and functions. Specifically, they propose that slow, dopamine-driven synaptic change may serve to tune the activity dynamics of prefrontal circuits, in such a way that the latter come to implement an independent set of learning procedures.

>Indeed, the reinstatement mechanism involved in episodic meta-RL was directly inspired by neuroscience data indicating that episodic memory circuits can serve to reinstate patterns of activation in cerebral cortex, including areas supporting working memory (see [40]). Ritter and colleagues [39] (S. Ritter, PhD Thesis, Princeton University, 2019) show how such a function could itself be configured through RL, giving rise to a system that can strategically reinstate information about tasks encountered earlier (see also [50, 51, 52]).

## Implications of fast and slow RL

> **Episodic RL** inherently depends on judgments concerning resemblances between situations or states. **Slow learning** shapes the way that states are *internally represented* and thus puts in place a set of **inductive biases** concerning which states are most closely related.

> **Episodic RL** inherently assumes a kind of *smoothness principle*: similar states will generally call for similar actions. Rather than being learned, this **inductive bias** is wired into the structure of the learning system that defines episodic RL.

> **Biological evolution** shapes **architecture and algorithm**, which **embed** inductive biases; these then shape lifetime learning, which itself develops further inductive biases based on experience. Within this picture, evolution appears as the ‘slowest’ learning process in a cascade, with each layer supporting a next, ‘faster’ level by serving inductive biases to that next level.

## Future directions

**Scaling to richer environments**
> Can AI methods for sample-efficient deep RL scale to the kinds of rich task environments humans cope with? In particular, can these methods engender rich abstractions of the kind that underlie human intelligence? What kind of training environments might be necessary for this? 

**Neural implementation of human learning**
> Does flexible, sample-efficient human learning arise from mechanisms related to those currently being explored in AI? If so, what is their neural implementation? Does something like gradient descent learning, so important for current AI techniques, occur in the brain, or is the same role played by some different mechanism?

**Acquisition of human inductive biases**
> What inductive biases are most important for learning in the environment that human learners inhabit? To what extent were these acquired through evolution and genetically or developmentally specified, and to what extent are they acquired through learning? 

**Goal development**
> One thing that makes human learners so efficient is that we are active, strategic information-seekers. What are the principles that structure and motivate human exploration and how can we replicate those in AI systems?
