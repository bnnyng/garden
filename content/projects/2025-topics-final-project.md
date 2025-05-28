---
aliases: 
tags:
  - workspace
date: <% tp.file.creation_date() %>
lastmod: 2025-05-23T15:29:14-04:00
---
# Key terms

- **Behavior cloning:** a simple form of imitation learning, which learns a policy from expert demonstrations by directly learning a mapping from observations to actions using supervised learning (e.g., taking state as input, outputting a distribution over actions—classification task for discrete actions—and evaluating with cross-entropy loss). 
- **Population-based training (PBT):** in multi-agent RL, an online evolutionary algorithm that maintains a population of agents with policies parametrized by neural networks and trained with deep reinforcement learning; at the end of each iteration of agent training, the worst performing agents are replaced with copies of the best agents with mutated hyperparameters.

----
# References

**Theory**

| Cite key         | Topic | One-line takeaway |
| ---------------- | ----- | ----------------- |
| [[@2024wuGroup]] |       |                   |

**Experiment**

| Cite key                 | One-line takeaway                                                                                                                                                                                                      | Technical notes                                                                                                                                                                                                                         | Open problems                                                                                                                                                                                                                                           |
| ------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [[@2020carrollUtility]]  | Agents learning to collaborate with a model of human behavior (trained on human data using behavioral cloning) were much better at working with other humans than agents learning to collaborate with other AI agents. | Introduces `overcooked_ai` benchmark environment for cooperative human-AI task performance.                                                                                                                                             | Training a population with a greater diversity of human models.<br><br>Allow agents to adapt to human collaborator at test time, e.g., by learning multiple human models.<br><br>Using a non-stationary human policy that accounts for online learning. |
| [[@2021wuToo]]           |                                                                                                                                                                                                                        | Introduces the [[(Model) Bayesian delegation, after Wu et al. (2021)\|Bayesian delegation]] algorithm for multi-agent collaboration. <br><br>Also uses a simple gridworld version of *Overcooked*, but potentially not possible to run. | Incorporating representations that enable long-term collaborations like hierarchies, norms, and conventions.                                                                                                                                            |
| [[@2021ndousseEmergent]] | Social learning allows agents to discover more complex policies than those discovered through individual exploration, and adapt more rapidly to novel environments.                                                    | Introduces `marlgrid` environment “designed to encourage social learning”.<br><br>Uses multi-agent partially observable MDPs with a model-based “auxiliary predictive loss” for other agents’ actions.                                  | Different strategies for integrating solitary and social experience.<br><br>New task domains, e.g., manipulation.<br><br>Diverse expert strategies and goals.                                                                                           |

---
# Log

[[2025-05-22]]

- Relationship between behaviorism and rational analysis?