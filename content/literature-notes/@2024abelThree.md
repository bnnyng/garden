---
citekey: 2024abelThree
aliases:
  - 
tags:
  - literature-note
title: preprint | Three Dogmas of Reinforcement Learning
year: 2024
permalink: http://arxiv.org/abs/2407.10583
publish: 
date: 2025-06-11
lastmod: 2025-06-11T14:31:26-04:00
---
> Abel, D., Ho, M. K., & Harutyunyan, A. (2024). _Three Dogmas of Reinforcement Learning_ (No. arXiv:2407.10583). arXiv. [https://doi.org/10.48550/arXiv.2407.10583](https://doi.org/10.48550/arXiv.2407.10583)

---

# Summary

> [!Abstract]
>
> Modern reinforcement learning has been conditioned by at least three dogmas. The first is the environment spotlight, which refers to our tendency to focus on modeling environments rather than agents. The second is our treatment of learning as finding the solution to a task, rather than adaptation. The third is the reward hypothesis, which states that all goals and purposes can be well thought of as maximization of a reward signal. These three dogmas shape much of what we think of as the science of reinforcement learning. While each of the dogmas have played an important role in developing the field, it is time we bring them to the surface and reflect on whether they belong as basic ingredients of our scientific paradigm. In order to realize the potential of reinforcement learning as a canonical frame for researching intelligent agents, we suggest that it is time we shed dogmas one and two entirely, and embrace a nuanced approach to the third.
>.


---

# Atomic notes

---

# Key terms

---

# Reading notes

| Dogma                                                                                                                 | Proposed solution                                                                                                                                                                                                              |
| --------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **The environment spotlight:** Focus on environments and environment-centric concepts, rather than [[Agent\|agents]]. | Define, model, and analyze agents as well, e.g., by building towards a canonical mathematical model of agents.                                                                                                                 |
| **Learning as finding a solution:** Focus on designing agents that find a solution, then stop learning.               | Treat learning as **adaptation**: “Trying to maximize a quantity does not mean that quantity is ever maximized” ([[@2015suttonReinforcement]]).                                                                                |
| **The reward hypothesis:** All goals can be thought in terms of reward maximization.                                  | Examine the limitations of scalar rewards—what restrictions are being placed on viable goals and purposes? What is being given up when we write down a reward function?—and explore other ways of describing an agent’s goals. |

---
# Further reading

- [[@2023bowlingSettling]]: Characterizes the implicit conditions required for the [[Goals and purposes are completely described by maximizing expected cumulative reward, after Sutton (2004)|reward hypothesis]] to be true. 