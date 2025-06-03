---
aliases:
  - CoDec Lab
tags:
  - workspace
publish: 
date: 2024-08-29 17:56
lastmod: 2025-06-03T11:16:45-04:00
---

---

# Log

- [[20250321-codec-log-archive]]

## June

#### Reading notes

| Date       | Cite key                                                                                         | One-line takeaway                                                                                                                  | Technical notes | Discussion                                                                |
| ---------- | ------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------- | --------------- | ------------------------------------------------------------------------- |
| 2025-06-03 | [[@2023hoRational]], “Rational simplification and rigidity in human planning”                    |                                                                                                                                    |                 |                                                                           |
| 2025-06-03 | [[@2016hoFeaturebased]], “Feature-based joint planning and norm learning in collaborative games” | Models norm learning as making inferences about *joint* reward function biases that all agents follow and expect others to follow. |                 | What other factors would enable people to flexibly adopt different roles? |

#### Daily notes

[[2025-06-03]]

**Project parameters**

- **Complementarity:** the ability of an interacting group to flexibly adopt specialized roles while working towards a joint goal.
- Focusing on the “Completing the First Feedback Loop” section from [[@2024wuGroup]]
	- “It is less clear how these mechanisms explain the way that groups self-organize into complementary roles over shorter (non-evolutionary) time scales. Reciprocity requires actions to match, while complementarity actually often requires actions to differ in coordinated ways (Fiske, 2000). Distinct profiles of beliefs and knowledge must be distributed throughout the population.”
		- Is there a useful formalism for this?

## May

#### Reading notes

| Date       | Cite key                                                                                    | One-line takeaway | Technical notes | Discussion points                                                                                                                                                                               |
| ---------- | ------------------------------------------------------------------------------------------- | ----------------- | --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2025-05-27 | [[@2008yoshidaGame]], “Game Theory of Mind”                                                 |                   |                 | An alternative to TOM-dependent optimization is **prosocial utility**, in which players do not make inferences about each other—equivalent equilibrium behavior in altruistically-valued games! |
| 2025-05-27 | [[@2002camererSophisticated]]                                                               |                   |                 |                                                                                                                                                                                                 |
| 2025-05-27 | [[@2004camererCognitive]]                                                                   |                   |                 |                                                                                                                                                                                                 |
| 2025-05-27 | [[@2006traulsenCoevolutionary]], “Coevolutionary dynamics in large, but finite populations” |                   |                 |                                                                                                                                                                                                 |
| 2025-05-30 | [[@2023hoRational]], “Rational simplification and rigidity in human planning”               |                   |                 |                                                                                                                                                                                                 |

#### Daily notes

[[2025-06-03]]



[[2025-05-30]]

**New terms**

- **Centralized stochastic games:** players jointly control a single Markov chain with common state and combined actions influencing the transition probability.

**Code notes**


**Code edits**

[[2025-05-29]]

- Tom Griffiths tea: doesn’t care about other stuff. “You gamble your career on the level of analysis to care about.”
	- Really not seeing these as complementary?

[[2025-05-27]]

**General questions**

- [ ] How are Bellman equations used—direct computation or “stops changing”? “The optimal value is a solution to the Bellman equation”?

**Reading questions**

- [ ] Don’t think I fully understand the difference between the papers’ models: “Note that ‘steps of strategic thinking’ are not the same as the levels of sophistication in this paper. The sophistication addressed here pertains to the recursive representation of an opponent’s goals, and can be applied to any iterated extensive form game.”
- [ ] Putting these behavioral economic/game theory models in context of current work in RL, MDPs, etc.?
- [ ] What do they mean by “pro-social” here?
- [ ] **Review: How does this relate to the proposed research in computational psych?**
- [ ] Definition of prosocial here, just inequity aversion?

**Project-specific thoughts**

- [ ] Interested in strategic teaching or learning from experts?
- [ ] Small group coordination, e.g., [[@2024wuGroup]], innovation by recombination, skills and complementarity (flexibly adapting specialized goals or subgoals)
- [ ] More related to evolutionary game theory (what is this?)
- [ ] Is there any work that connects Bayes/individual cognition to group-level dynamics/collective intelligence (a la Rob Goldstone)?

**Other notes**

- Further readings for cognitive game theory
	- Strategic teaching: Camerer CF, Ho TH, Chong JK (2002) Sophisticated experience-weighted attraction learning and strategic teaching in repeated games. J Econ Theory 104: 137–188.

>[!example] Notation
>- $s_t \in S$: the state of an agent at time or trial $t$.
>- $n$: the total number of admissible states $|S|$.
>- $v$: the value of the state defined recursively as $$ v = \ell + \ell P + \ell P^2 + \cdots \to v = \ell + v P(v), $$ where $\ell$ is the utility or payoff. If $n = |S|$, we have row vectors for values over states and payoff in the current state $v, \ell \in \mathbb R^{1 \times n}$, respectively.
>- $P(v)$: a matrix representing the agent’s policy; under Markov assumptions, the probability of going from state $i$ to $j$ is $P(v)_{ji} = p(s_{t+1} = j | s_t = i, v)$.
>- $P(0)$: the uncontrolled transition probability matrix, or the “autonomous” transitions that would occur if $v(i) = 0$ for all $i$.
>- $T$: total number of states in the trajectory.

**Meeting with Mark and Maya**

- Affordances (people have different affordances for the same item?) 
	- GW with two agents, paying attn to diff affordances (limits?); if you need to coordinate, how to distribute?
	- When to coordinate? Meeting somewhere, drawing pictures like r/place, basic overcooked, full restaurant coordination
	- Simulating a restaurant
- Construals paper 
- Egg hunt model implementation of Yoshida paper

**Next time**
- [ ] Fork egg hunt repo and play around
- [ ] Extra papers sent by Mark


2025-05-23

**Drop everything and read shortlist**

- Bayesian reading list/syllabus from Brendan

[[2025-05-21]]

- Key words from RL homeworks
	- **Non-stationary problem:** e.g., bandit environment where reward distribution changes over time.
 
[[2025-05-15]]

**Topics for meeting with Mark and Maya**

- [ ] Discuss summer research, interested in the Overcooked AI kind of experiment

[[2025-05-02]]

- Next time:
	- [x] Try with and without GPU (`jax-metal`) and compare time, both with state GP and Maya’s learner model

## April



[[2025-04-25]]

- Next time:
	- [ ] Numbers about batching on the GPU (e.g., training a GP on a lot of points, requiring matrix inversion)

[[2025-04-18]]

- Meeting: Testing loss
	- $(y - y^*)^2$ is variance + expected y^2 - 2….
	- Selecting x points using uniform distribution over domain
	- Have target fn
	- Learner hyperparams: lengthscale, sigma
	- SVGD to adjust learner hyperparams for multiple sets of hyperparams
- Next time: 
	- [ ] Vectorize GP state
	- [ ] Change target function to closed form
	- [ ] Look into rest of model (code on GitHub)

## March

[[2025-03-28]]

- Model comparison notebook
	- `jsp.stats.multivariate_normal.logpdf`: likelihood of outputs (y) given mean and kernel
	- `jsp.stats.multivariate_normal` vs. `random.multivariate_normal`
- Implementing GP in jax
	- Implement normal distribution, then parallelize (vmap?) to make it multivariate
- Optionally, model comparison?
	- Teacher vs. basic heuristic (what behavior does it generate under some circumstance?)

[[2025-03-21]]

- Questions about JAX `vmap` tutorial
	- Clarification: `x1, x2` are arrays of $d$ dimensional points, but can be of different lengths? 
	- Why is the output shape like that if each RBF kernel function should output a scalar (from $d$ dimensional point inputs)?
	- Why does it end up being a `mxn` matrix?
		- Know that $K_*$ is supposed to be $n \times d$, where $n$ is number of points and $d$ is dimensions