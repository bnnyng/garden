---
lit-author: 
aliases:
  - Singh et al., 2004
  - Singh et al. (2004)
tags:
  - literature-note
title: Paper | Intrinsically Motivated Reinforcement Learning
publish: "true"
date: 2023-12-29 17:41
lastmod: 2023-12-29T18:59:42-08:00
---
# Summary

>[!abstract]
>Psychologists call behavior intrinsically motivated when it is engaged in for its own sake rather than as a step toward solving a specific problem of clear practical value. But what we learn during intrinsically motivated behavior is essential for our development as competent autonomous entities able to efficiently solve a wide range of practical problems as they arise. In this paper we present initial results from a computational study of intrinsically motivated reinforcement learning aimed at allowing artificial agents to construct and extend hierarchies of reusable skills that are needed for competent autonomy.

Inspired by the role of dopamine as a neurological reward, the authors present a [[Reinforcement learning|reinforcement learning]] framework where the agent maintains “knowledge” of skills learned from using intrinsic rewards.

[Source](https://www.cs.cornell.edu/~helou/IMRL.pdf) – [[2004-intrinsically-motivated-reinforcement-learning|Highlights]]

---
# Key terms

- **Intrinsic motivation** = [[Intrinsically motivated behavior is performed for its own sake]]
- **Extrinsic motivation** = [[Extrinsically motivated behavior is performed to get a specific rewarding outcome]]
- **Option** = a closed-loop policy for taking action over a period of time (e.g., primitive actions like muscle twitching; complicated actions like picking up an object, going to lunch).
	- **Option policy** = a rule that directs the agent’s behavior for a subset of environment states.
	- **Initiation set** = all the states where the option can be initiated.
	- **Termination condition** = the specific conditions under which the option terminates.
	- **Closed-loop** = a control rule which responds to ongoing state changes.
	- **Primitive options** = the typical one-step Markov decision processes used in RL.
- **Option model** = a probabilistic model of the effects of executing an option in a single environment state.
- **Intra-option learning methods** = methods which allow the policies for multiple options to be updated simultaneously as the agent interacts with the environment.

---
# Notes

## Introduction
- Behaviors that do not have explicit rewards (e.g., exploration, play) help develop “broad competence” that is not applied to specific goals.
	- In contrast, [[§ Machine learning|machine learning]] algorithms are usually applied to specific problems.
	- “Broad competence” skills are the “building blocks” for [[Generalization]].
- The authors’ experiment is inspired by neuroscience: dopamine is used in both extrinsic and intrinsic motivational control.

## Reinforcement learning of skills
- In “standard” RL, the agent learns to control its environment by learning to increased the total amount of reward it receives from an external “critic” in the environment.
- A biological animal determines its reward from both its external and internal state; “the critic is in an animal’s head.”
- The authors use a scheme with an external and internal environment, where the internal environment has the critic which determines the primary reward.
	- Rewards coming from an external stimulus (e.g., pat on the head) are accounted for because the internal environment translates it to the primary reward.
- In practice, applying RL algorithms usually involves forming the problem that one wants the agent to solve (e.g., winning a game) and designing a reward function tailored to the problem (e.g., reward 1 on win, 0 on loss). 
	- The authors’ approach is unique because the intrinsic motivation system should extend to different problems.
- The authors approach the notion of “skills” using **options**, which consist of an option policy, an initiation set, and a termination condition.
	- #queue Read associated paper, “A framework for temporal abstraction in reinforcement learning.”
	- Options respond to ongoing state changes.
	- Hierarchies naturally emerge from options because “options can invoke other options as actions” (gives one characteristic of a [[Complex systems have nontrivial emergent and self-organizing behaviors|complex system]], namely emergent feature).
- The authors’ approach is unique because it automatically creates options for the model outside of the context of any particular problem.

## Intrinsically motivated RL
- The agent described in the paper is different from usual RL applications because it has a “knowledge base of skills that it learns using intrinsic rewards.”
- Only “primitive” skills are initially available to the agent; over time, internally represented options and their models become available as action choices.
	- #concept-question Is this by design or an emergent result?
- The agent has hardwired preferences for “salient” events in its environment, which are independent of any single task or environment.
- Intrinsic reward for salient events is proportional to the error in the prediction of the salient event according to the event’s learned option model.
	- This simulates how dopamine neurons have a larger response to novelty (“surprised”).
- The knowledge base maintains “structures” to learn that an option will lead to a salient event, as well as structures to learn to create an option model. 
	- Notice that these are structures for *learning*!

## Playroom domain: Empirical results
- Each encounter with a salient event initiates option and option model learning for that salient event.
- Throughout agent-environment interactions, all the options initiated so far are simultaneously updated using **intra-option learning**.
- In particular, the intrinsic reward is used to update the behavior action value function $Q_B$ (using a combination of Q-learning and SMDP planning).
	- The updated function causes the agent to repeatedly attempt to achieve the salient event.
	- During the agent’s attempts, learning improves both its policy for attempting to achieve the event and the option model that predicts the event.
	- As option policy and option model improve, the intrinsic reward diminishes and the agent gets “bored” with the salient event.
	- When the agent encounters the salient event in a state that it has not encountered before, it generates intrinsic reward again (“surprised”).
- Observations from results figures:
	- Salient events that are simpler to achieve occur earlier in time; the skill of achieving simpler events automatically happens earlier.
	- More complex skills are learned quickly once the required sub-skills are learned.
- “An agent having a collection of skills learned through intrinsic reward can learn a wide variety of extrinsically rewarded tasks more easily than an agent lacking these skills.”

## Discussion
- Intrinsic reward being generated by “salient events” is just one of the simplest forms of intrinsic motivation.
	- Authors plan to look to psychology, statistics, and neuroscience literature for what other forms of exploration and manipulation are “interesting.”