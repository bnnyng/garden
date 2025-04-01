---
aliases:
  - Naive Utility Calculus
tags:
  - permanent-note
  - topic-cognitive-science
publish: 
date: <% tp.file.creation_date() %>
lastmod: 2025-03-31T13:48:07-04:00
---
[[@2016jara-ettinger]] propose the **Naive Utility Calculus**, according to which humans, starting from early infancy, assume that the actions of others are [[Rationality in cognitive science|rational]] and maximize expected utilities (i.e., rewards relative to costs). This is a computational model for **commonsense psychology**, or the general cognitive theory—that is, a *generative model*—that humans use to make social inferences.

The formal computational theory has the following components:
- **Assumptions:** Costs depend on actions, and rewards depend on states of the world; situation is deterministic and agents have perfect information.
- **Generative model:** 
	- **Estimating utility:**
		- Let $A$ be the set of actions an agent can take and $S$ be possible states in the world (e.g., position in space, agent’s possessions). A **cost function** is a mapping $C : A \to \mathcal R^+$, and a **reward function** is a mapping $R : S \to \mathcal R^+$, where $R^+$ is ❓. 
		- A **policy** $\pi: S \to A$ determines what the agent will do in each state in order to go from $s_0$ to $s_f$, the initial and final states respectively. A **utility function** $U_{C, R}: P \to \mathcal R$ assigns a utility to each policy $\pi$. In a deterministic situation, this is given by the difference between total rewards and costs: $$ U_{C, R}(\pi) = \sum_{s_i = s_0}^{s_f} R(s_i) - C(\pi(s_i)), $$ where $\pi(s_i)$ is the planned action in the intermediate state $s_i$.
	- **Plan selection:** Noisy estimates leading to failure to select the best plan is represented by a **Boltzmann policy**, where the probability of selecting a plan is proportional to $$ P(\pi | C, R) \propto \exp \left ( \frac{U_{C, R}(\pi)}{\kappa} \right ), $$ where $\kappa \in (0, \infty)$ is the noise parameter.
- **Inference:**
	- Given an agent’s actions, the unobservable cost and reward functions can be inferred using [[Conditional probability and Bayes' theorem|Bayes' rule]]: $$ P(C, R | \text{Actions}) \propto P(\text{Actions} | C, R) P(C, R), $$ where $P(C, R)$ is the prior probability based on constraints and expectations. 
	- The likelihood $P(\text{Actions} | C, R)$ is computed by $$ P(\text{Actions} | C, R) = \int_{\pi \in P} P(\text{Actions} | \pi)P(\pi | C, R), $$ where the probability of the agent selecting each plan $P(\pi | C, R)$ is computed by running the generative model.

See also: [[Markov decision processes and dynamic programming]]