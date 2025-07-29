---
aliases:
  - Naive Utility Calculus
tags:
  - permanent-note
  - topic-cognitive-science
publish: 
date: <% tp.file.creation_date() %>
lastmod: 2025-07-16T14:31:38-04:00
---
# Overview

$\quad$ According to the **Naïve Utility Calculus** proposed by [[@2016jara-ettingerNaive]], humans implicitly assume that other agents are [[Rationality in cognitive science|rational]], meaning they act to maximize expected utilities. Rather than directly modeling a decision-maker’s behavior (e.g., as in [[(Resource-)rational analysis|resource-rational analysis]]), the Naïve Utility calculus models how people generate *inferences* and explain the behaviors of others.

$\quad$Formally, the Naïve Utility Calculus models people’s social inferences as Bayesian inference over generative models of utility-maximizing behavior. The underlying generative models can be used to *predict* future behaviors (setting costs and rewards, then deriving a [[Markov decision processes|policy]]) as well as finding the *causes* of past behaviors (using [[Probabilistic reasoning and Bayesian belief updating|Bayes' rule]] to find the costs and rewards that generate observed behavior). 

---

# Basic formalism

$\quad$ The most simple version of the formal computational theory has the following components:

- Decision-making agents have a **reward function** $R : \mathcal S \to \mathbb R^+$ and a **cost function** $C : \mathcal A \to \mathbb R^+$, where $\mathcal S$ is a set of world states and $\mathcal A$ is a set of agent actions.
- Agents have **policies** or “plans” $\pi : \mathcal S \to \mathcal A$ (here, assumed deterministic) that specify what action to take in each state in order to arrive at some goal $s_f \in \mathcal S$, beginning with an initial state $s_0$. 
- Given cost and reward functions $C, R$, respectively, agents have a **utility function** $U_{C, R} : \Pi \to \mathbb R$ defined by assigning a scalar utility to each plan $\pi \in \Pi$: $$ U_{C, R}(\pi) = \sum_{s_i = s_0}^{s_f} R(s_i) - C(\pi(s_i)). $$
- The final actions taken by the agent is selected using a **decision policy**, such a noisy [[Action selection in decision problems|Boltzmann]] policy, where the probability of selecting a plan is proportional to $$ p( \pi | C, R) \propto \exp \left ( \frac{U_{C, R}(\pi)}{\kappa}\right ), $$ where $\kappa \in (0, \infty)$ is a temperature parameter; smaller $\kappa$ leads to greater probability of high-utility or rational plans.

$\quad$ Given a set of observed behaviors, the cost and reward functions can then be estimated using [[Probabilistic reasoning and Bayesian belief updating|Bayes' rule]]:

$$
\begin{align}
p(\text{Actions} \mid C, R)
\propto
&\ p(\text{Actions} \mid C, R) \cdot p (C, R) \\
&= \left(\int_{\pi \in \Pi} p(\text{Actions} \mid \pi) p ( \pi \mid C, R) \right) \cdot p (C, R),
\end{align}
$$

where the equality indicates that the likelihood integral is computed using generative model to get the probability of the agent selecting each plan.
