---
aliases:
  - MARL
  - multiagent reinforcement learning
tags:
  - permanent-note
  - topic-information-computation-statistics
publish:
date: 2025-04-14T11:51:05-04:00
lastmod: 2025-09-11T11:52:18-04:00
---
# Overview

$\quad$**Multiagent reinforcement learning** is a [[§ Reinforcement Learning|reinforcement learning]] framework where independent agents pursue rewards in the same environment. MARL is formalized in [[Stochastic games|stochastic games]], where the typical action space of an MDP is replace by a **joint action space**, the product of individual agent action spaces.

$\quad$ The key challenge of MARL (e.g., developing efficient MARL algorithms) is called **non-stationarity of the environment** or the **moving target problem**: since learning is simultaneous, changes in the policy of one agent may affect the rewards received by, and hence the optimal policy of, other agents. Moreover, since multiple agents influence the environment, the [[The Markov property|Markov property]] no longer holds from the perspective of individuals.

$\quad$ There are two primary types of algorithms used for multi-agent learning:

- **Independent learning:** the agent “ignores” the existence of other agents, treating interactions 

---

# Notes

[[@2021ndousseEmergent]]

- **Standard MARL agents act independently and have no direct incentive to learn from or teach each other:** “Decentralized training and decentralized execution, with no shared parameters or state.”

[[@2025barfussCollective]]

- **MARL can be viewed as a subtype of agent-based modeling:** “Multiagent reinforcement learning (MARL) can be viewed as a type of agent-based modeling in which agent behavior does not have to be fixed in advance with plausible heuristics (17). Instead, the agents themselves learn how to behave.”

---

# References

#### General references

- [[@2021caneseMultiAgent]], “Multi-agent reinforcement learning: a review of challenges and applications”

#### Literature notes

| Cite Key | One-Line takeaway | Additional Notes |
| -------- | ----------------- | ---------------- |
|          |                   |                  |