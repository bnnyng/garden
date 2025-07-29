---
aliases: 
tags:
  - permanent-note
  - topic-information-computation-statistics
publish: 
date: 2025-07-21T11:40:47-04:00
lastmod: 2025-07-21T11:58:17-04:00
---
# Overview

$\quad$ From [[@2018albrechtAutonomous]]:

| Name of modeling method | What the model predicts about the modeled agent                           | Method of prediction                                                                                                | Strengths                                                                                                                                | Weaknesses                                                                                                                                                                     |
| ----------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Policy reconstruction   | Action probabilities (i.e., [[(Sequential) decision problems\|strategy]]) | Assume a specific model structure, then learn parameters based on observed actions                                  | Can learn arbitrary models (up to choice of structure).<br><br>Models often progressively generated during the interaction (?).          | Learning task can be complex.                                                                                                                                                  |
| Type-based reasoning    | Action probabilities                                                      | Assume the agent is one of several known types, then compare relative likelihood of types based on observed actions |                                                                                                                                          |                                                                                                                                                                                |
| Classification          | Class label (or real number, if regression)                               | Assume a specific model structure, then use machine learning to fit model parameters                                |                                                                                                                                          |                                                                                                                                                                                |
| Plan recognition        | Goal and (to some extent) future actions                                  |                                                                                                                     |                                                                                                                                          |                                                                                                                                                                                |
| Recursive reasoning     | Next action                                                               | Recursively simulate reasoning (“I think that you think that I think…”                                              | Accounts for higher-order beliefs of other agents.                                                                                       | Recursion is computationally expensive.<br><br>Assumes modeled agent is [[Rationality in cognitive science\|rational]] (i.e., choose optimal actions with respect to beliefs). |
| Graphical models        | Action probabilities                                                      | Graphical model that represents agent’s decision process and preferences                                            | Gives a detailed model of agent’s causal beliefs and preferences.                                                                        | Does not scale efficiently to sequential decision processes.                                                                                                                   |
| Group modeling          | Joint properties (e.g., goals, actions, plans) of a group of agents       |                                                                                                                     | Can capture correlations in action choices of a group.<br><br>Can leverage group structure to improve prediction efficiency and quality. | Highly complex due to interdependencies between individual agents in the group.                                                                                                |

**Related notes:** [[Modeling other agents]]

---
# References

- [[@2018albrechtAutonomous]], “Autonomous agents modelling other agents: A comprehensive survey and open problems”