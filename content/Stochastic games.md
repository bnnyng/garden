---
aliases:
  - stochastic game
  - Markov game
  - normal-form game
tags:
  - permanent-note
  - topic-information-computation-statistics
publish: 
date: 2025-06-19T10:16:39-04:00
lastmod: 2025-07-21T11:37:02-04:00
---
# Overview and definition

$\quad$ **Stochastic games** or **Markov games** extend [[Markov decision processes|Markov decision processes]] to include multiple agents. 

>[!definition] Stochastic game
>A **stochastic game** $(I, \mathcal S, \mathcal A^I, T, R^I)$ has the following data:
>- A index set $I = \{ 1, \ldots, n \}$ of agents in the environment;
>- A set of states $\mathcal S$;
>- A **joint action space** $\mathcal A^I := \prod_{i \in I} \mathcal A^i$, where $\mathcal A^i$ is the action space of the $i$th agent for all $i \in I$;
>- A transition function $T : \mathcal S \times \mathcal A^I \to \Delta(\mathcal S)$ that sends each state-joint action pair $(s, j) \in \mathcal S \times \mathcal A^I$ to the *probability* $T(s’|s,j)$ of transitioning to a state $s’ \in \mathcal S$;
>- A set of reward functions $R^I = \{ R^i \}_{i \in I}$, where $R^i : \mathcal S \times \mathcal A^i \times \mathcal S \to \mathbb R$ is the reward function for the $i$th agent for all $i \in I$.

$\quad$ Because different agents have different reward functions, there is no analogue of a single “optimal policy” for stochastic games ([[@2016hoFeaturebased]]).

TBD: different forms of equilibria

---
# Variations

#### Normal-form games

![[Pasted image 20250709153631.png]]


PO MAMDP

![[Pasted image 20250623111547.png]]

A Survey and Critique of Multiagent Deep Reinforcement LearningI

![[Pasted image 20250624184704.png]]