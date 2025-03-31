---
tags:
  - fleeting-note
lastmod: 2023-12-29T15:11:15-08:00
---
Source: https://www.youtube.com/watch?v=g6RGTiWdb14 (2020)
About [[2019-jaques-social-influence-as-intrinsic-motivation]]

## Introduction

- Social dilemma similar to coronavirus situation, tragedy of the commons
- Main takeaways
	- If each actor can imagine actions of others, might help us develop empathy and reinforce good behavior?
	- Intrinsic social influence rewards consistently lead to higher collective return
	- Influence reward can lead to emergence of communication protocols
	- Influence can be achieved by giving models an *internal* model of other agents (i.e., without needing visibility of other agents’ reward functions)
- Implications: is influence always essential to achieve learning?

## Discussion

- Why this paper?
	- Boundaries of what ML can do – beyond classification; can we model higher-level human functions?
	- Social influencing is crucial to humans today – cognitive development and society
	- Materialist – everything emerges from the structure of natural laws
- RL is exciting because it offers a framework for agents to act and interact with environments
	- RL explore/exploit state through actions, learn via rewards ([[Reinforcement learning]])
- Are conditions of the world and emergent complexity enough for human-like intelligence to develop?
	- Features of human intelligence: generalized executive ability, independent learning, output of art and music, intuition, emergent social complexity, morality, philosophy
- Game theory and multiple actors
	- Cooperation vs. non-cooperation
	- Partial information 
- Social learning = potential for learning from others
	- Needs multiple agents, learning, communication channels
- Knowledge of actions vs. reward
	- Really easy to see actions, but not motivations of goals
	- Transforms to RL: environments, actions, and reward systems. Motivations = other agents and reward functions?
- Idea of the paper
	- Explore whether giving agents intrinsic reward for HAVING a causal influence on other agents’ actions
	- Causal inference assessed with counterfactual reasoning (what if?)
	- Actions that lead to higher change are considered influenced and are rewarded
	- Reward is related to maximizing the mutual information between agents’ actions – communication between agents
	- Claim: inductive bias may drive agents to learn coordinated behavior
- Sequential social dilemma
	- Partially observable
	- Runs over time (temporally extended)
	- Multi-agents interact
	- Game-theoretic payoff with local or global reward
	- Higher short-term reward for non-cooperative behavior
- Computing causal influence of agent k on j
	- j observes k’s action but also looks at counterfactuals
		- How would j’s action change if k acted differently?
	- Sample several counterfactuals, average the resulting policy distribution of j in each case = marginal policy of j
	- Discrepancy between marginal policy of j and conditional policy of j given k’s action is a measure of causal influence of k on j
		- Degree to which j changes planned action distribution because of k’s action
		- Used KL metric for divergence
- Experiment 1: Basic influence
	- Control = A3C model
		- Multiple agents can act asynchronously
		- Can share information
	- A3C vs. basic influence reward vs. ablated model (no influence reward, but can condition policy on actions of others)
	- Measure total collected reward
	- Curriculum learning approach = gradually increase the weight of social influence reward
	- No explicit communication channel built into agents!
	- Results: agents trained with influence significantly outperform others over time
		- Curriculum learning adds to performance too
	- Noticed in example that motion is used as implicit communication – like bee waggle dance
		- Each bee is simple, collective behavior allows them to optimize resource gathering…nice connection to complexity
- Adding an explicit communication channel is theorized as what allows humans to engage in a lot of cooperative activities
	- Architecture: cheap talk communication channel
		- Each agent chooses a discrete symbol at each timestep
		- All symbols are combined into a single message paper of same length as # of agents
		- Self-interested models do not use this channel effectively
- Experiment 2: 
	- J can ignore nonuseful communication values; action policy only trained with environmental; j will only change behavior if comm messages are useful (i.e., generates higher reward)
	- Agents with comm incentive learn faster
		- For one game, influence alone was sufficient for learning
	- Metrics for learned communication behavior
		- Speaker consistency
		- Instantaneous coord/MI
		- Symbol/action IC
		- Action action IC
		- Models trained with influence reward exhibit more consistent communication and coordination
- Experiment 3: modeling other agents
	- Second set of fully-connected and LSTM layers connect to conv layer, performs counterfactual modeling
	- Each agent can “imagine” counterfactual actions and predicts effect on other agents, gives itself rewards for taking most influential actions
		- Why not the other way around?
		- Sort of like human coordination
- MARL
	- Reliance on emergent communication protocols – information communicated is proportional to common interest?
	- Transfer empowerment – maximizing MI between agent’s actions and player’s future states
	- Concepts of empowerment – agents maximize MI between their actions and their future state
	- Machine theory of mind – modeling false beliefs?
	- Social influence reward leading agents to communicate more effectively in complex environments
	- Counterfactual reasoning and potential-based reward shaping