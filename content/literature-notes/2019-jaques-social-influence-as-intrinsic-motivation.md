---
lit-author: 
aliases:
  - Social Influence as Intrinsic Motivation for Multi-Agent Deep Reinforcement Learning
  - Jaques et al. (2019)
  - Jaques et al., 2019
tags:
  - literature-note
title: Paper | Social Influence as Intrinsic Motivation for Multi-Agent Deep Reinforcement Learning
publish: "true"
date: 2023-12-28 18:40
lastmod: 2024-05-26T15:57:43-07:00
---

[Source](https://arxiv.org/abs/1810.08647) – [[RAW-20231228-jaques-et-al-social-influence-as-intrinsic-motivation|Highlights]]
# Takeaways

- Intrinsic social influence reward consistently leads to higher collective return in SSD games.
- Influence rewards can lead to the emergence of both explicit and implicit communication protocols.
- Influence can be computed by augmenting agents with an internal model of other agents (i.e., without knowing the other agents’ reward functions).
- The authors suggest that influence is essential to achieving any form of learning.

---
# Key terms

- **Sequential social dilemma (SSD)** = a multi-agent game which gives a higher reward in the short term for defecting, non-cooperative behavior; operationalizes “the tragedy of the commons.”
- **Counterfactual action** = an action that was not taken. 
- **Marginal policy** = the policy of an agent $j$ if $j$ did not consider the actions (i.e., did not make **counterfactual** observations) of a specific agent $k$; used in computing **causal influence** of $k$ on $j$.

---
# Notes

## Introduction
- [[Intrinsically motivated reinforcement learning|Intrinsic motivation for reinforcement learning]] allows agents to learn skills that are useful across a variety of tasks and environments, sometimes without an environmental reward ([[2004-singh-intrinsically-motivated-reinforcement-learning|Singh et al., 2004]]).
- The authors explore the role of intrinsic *social* motivation by giving agents (in a MARL setting) an intrinsic reward for having a causal influence on other agents’ actions.

## Sequential social dilemmas
- Sequential social dilemmas are *partially* observable, temporally (runs over time) and spatially extended, involve multi-agent interactions, and have a game-theoretic payoff with local or global rewards.

## Basic social influence
- Social influence intrinsic motivation models an agent’s immediate reward as a sum of extrinsic/environmental reward and causal influence reward.
- Causal influence of agent $k$ on agent $j$ (assuming $j$ can condition its policy on $k$’s action at a particular time) is computed as follows:
	- The action of $j$ is replaced by a counterfactual action, resulting in a new distribution over $j$’s next action.
	- The **marginal policy** of $j$ (i.e., $j$’s policy if uninfluenced by $k$) is computed by sampling several counterfactual actions and averaging the resulting policy distribution of $j$ for each action.
	- The causal influence of $k$ on $j$ is given by the discrepancy between the uninfluenced, *marginal policy* of $j$, and the *conditional policy* of $j$ given $k$’s action.
- The influence reward incentivizes agents to maximize the mutual information between their actions.

### Experiment I: Basic influence
- Three models were used: A3C for control; basic influence reward; and an “ablated model” where agents could condition their policy on the actions of others but did not receive an influence reward.
- Result: agents trained with basic influence significantly outperformed others over time.
- Studying an example showed that influencer agents learned to use their motion as a signal (implicit communication) to other agents.
	- The authors draw a comparison to bees’ “waggle dance”; each bee is simple, but implicit communication allows them to develop collective behavior that optimizes resource gathering (interesting connection to emergence in a [[Complex systems have nontrivial emergent and self-organizing behaviors|complex system]]!).

## Influential communication
- The next experiments used an explicit communication channel: an architecture known called a **cheap talk communication channel**.
	- At each timestep, each agent chooses a discrete symbol.
	- All symbols are combined into a single message vector (has the same length as the number of agents).
	- Purely self-interested models do not use this channel effectively.
- Rewarding information through a communication channel prevents communication from being used in an uncooperative way.
	- An agent’s action policy is only trained with environmental reward, so agents can ignore information that is not useful (i.e., does not generate higher reward).

### Experiment II: Influential communication

- In the ablated model, the communication policy is trained only with environmental reward.
- Agents trained with the social influence reward (i.e., incentivized to communicate) learn faster and achieve significantly higher collective reward.
- The authors use additional metrics for learned communication behavior to present results:
	- Speaker consistency (consistency between a speaker’s symbol and action);
	- Symbol/action instantaneous coordination (MI between speaker’s symbol and listener’s next action);
	- Action/action IC (MI between speaker’s action and listener’s next action)
- Speaker consistencies showed influence agents have more unambiguous communication than baseline.
- IC metrics showed baseline agents do not coordinate action with communication.
- Agents that were most influenced achieved higher individual environmental reward; suggests useful information was transmitted.
	- However, this result assumes repeated interactions so that there is no benefit from lying; not guaranteed for one-shot interactions.
## Modeling other agents
- A model of other agents (MOA) is added and trained to predict all other agents’ next actions and “the agent’s egocentric view of the state,” using observed action trajectories and CE loss.
- A trained MOA computes social influence reward using counterfactual modeling; reward is given based on which actions it determines to be most *influential.*
	- #concept-question *Why take perspective of influence on others instead of how self is influenced?*
	- “This resembles how humans reason about their effect on others.”

## Conclusion
- All experiments showed that the authors’ intrinsic social influence reward leads to higher collective return.
	- In some cases, influence is actually required to achieve any form of learning!
- Agents can use counterfactuals to develop “[[Empathy|empathy]]” by simulating how their actions will affect another agent’s value function.
- We can view multi-agent networks as a single system and use influence to incentivize different parts of the network to use information from each other.

>[!question] #open-question What determines the “individual”? In the notion of complexity, for example, body is a complex system and also society is a complex system. However, different characteristics. Is there an analogy in RL hierarchies, or is it more self-similar? Could this somehow motivate more diverse hierarchies?