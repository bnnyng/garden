---
aliases:
  - model-free
  - model-based
  - value-based
  - policy gradient
  - on-policy
  - off-policy
tags:
  - permanent-note
  - topic-information-computation-statistics
publish: "true"
date: 2025-06-25T11:18:35-04:00
lastmod: 2025-08-14T10:16:55-07:00
---

$\quad$ [[§ Reinforcement Learning|Reinforcement learning]] algorithms may vary along the following axes:

| Axis of variation          | Category definitions                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Category examples                                                                                                                   |
| -------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| Model-free vs. model-based | **Model-free:** attempts to estimate reward values for specific actions directly from their associated values; analogous to **stimulus-response** associations or **operant conditioning**. <br><br>**Model-based:** uses internal representations of the environment—given or learned during training—to choose the best policy (i.e., estimating the probability distributions over states $T$ and rewards $R$ associated with each action, then solving the resulting [[Markov decision processes\|Markov decision process]]). | **Model-free:** Q-learning, REINFORCE, PPO, A2C<br><br>**Model-based:** value iteration, Monte Carlo, DYNA                          |
| Learning strategy          | **Value-based:** learn a value function, then indirectly derive a policy by using a fixed rule to map values to actions (e.g., greedy or $\varepsilon$-greedy).<br><br>**Policy gradient:** directly learn a parameterized policy (representing a distribution of actions over states) by searching in a space of policies and optimizing parameters using gradient estimates.                                                                                                                                                    | **Value-based:** Monte Carlo, temporal difference learning (Q-learning, SARSA), DQN<br><br>**Policy gradient:** REINFORCE, PPO, A2C |
| On-policy vs. off-poicy    | **On-policy:** learns the next action by using the current policy (i.e., what is currently being executed in the MDP).<br><br>**Off-policy:** learns the next action from a different policy than the agent’s own (e.g., the best state action value estimate, replays, another agent).                                                                                                                                                                                                                                           | **On-policy:** SARSA, REINFORCE, A2C, PPO<br><br>**Off-policy:** Q-learning                                                         |
| Representation             | **Tabular:** values or policies are stored in tables; applies to problems with small (finite) discrete state and action spaces.<br><br>**Function approximation:** the value function is approximated by a parametrized function; applies to large, continuous, or structured spaces.                                                                                                                                                                                                                                             | **Tabular:** basic Q-learning, SARSA, TD(0), REINFORCE<br><br>**Function approximation:** DQN, PPO                                  |

---

# References

- [[@2015suttonReinforcement]], *Reinforcement Learning*
- [[@2021caneseMultiAgent]], “Multi-Agent Reinforcement Learning: A Review of Challenges and Applications”