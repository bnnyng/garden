---
aliases:
  - CoDec Lab
tags:
  - workspace
publish: 
date: 2024-08-29 17:56
lastmod: 2025-07-28T14:20:11-04:00
---

---

# Log

- [[20250321-codec-log-archive]]
- [[2025-codec-lab-core-meeting]]

## July

#### Reading notes

| Date                    | Cite key                                                                                                         | One-line takeaway                            | Discussion                                                        |
| ----------------------- | ---------------------------------------------------------------------------------------------------------------- | -------------------------------------------- | ----------------------------------------------------------------- |
| [[2025-07-10]]          | [[@2003chalkiadakisCoordination]], “Coordination in multiagent reinforcement learning: a Bayesian approach”      |                                              | 💬 Maya’s journal club paper.                                     |
| [[2025-07-21]]          | [[@2018albrechtAutonomous]], “Autonomous agents modeling other agents: a comprehensive survey and open problems” | Gives a taxonomy of models for other agents. | 💬 Updated survey for Maya’s journal club paper.                  |
| NR                      | [[@2025kleiman-weinerEvolving]], “Evolving general cooperation with a Bayesian theory of mind”                   |                                              | 💬 Recommendation from Mark, potential MARL journal club paper.   |
| NR                      | [[@2025kosterTabula]], “Tabula rasa agents display emergent in-group behavior”                                   |                                              | 💬 Recommendation from Mark, potential MARL journal club paper.   |
| [[2025-07-16]] (reread) | [[@2018freyCognitive]], “Cognitive mechanisms for human flocking dynamics”                                       |                                              |                                                                   |
| NR                      | [[@2013freyCollective]], “Collective complex dynamics in human higher-level reasoning”                           |                                              | 💬 Frey’s thesis, recommended Chapters 5 and 7 for modeling work. |
| [[2025-07-21]] (reread) | [[@2016hoFeaturebased]], “Feature-based joint planning and norm learning in collaborative games”                 |                                              | 💬 Behavioral data from coordination game available.              |

#### Daily notes


[[2025-07-26]]

- [[20250726-mod-game-plots-level-k-player]]
- [[20250726-mod-game-plots-level-k-learner-greedy-base-policy]]

**Mod game thoughts**

- Current fictitious play learner might not be great base policy since doesn’t know the rules of the game → need to update with base greedy policy instead of Q learner?

**Next steps for Mod game**

- [x] Show behavior convergence with priors: “For example, given two players who adapt their depth of iterated  reasoning toward each other over multiple rounds, with one initially expressing a depth of 1  and the other a depth of 5, a few rounds of experience will find them both expressing depths  of 3.”
- [x] Questions for Seth Frey:
	- [x] How do you envision cognitive hierarchy working for multiple people?
	- [x] Why was each one step a level? Why wasn’t level 0 the same as taking two steps?
- [x] Add to decision parameters

[[2025-07-24]]

**Bayesian Reciprocator**

* Adapting for other games? How do people reason about common knowledge, etc?
* Trying a “base” cognitive hierarchy learner, where level 1 is trying to learn what the opponent is doing
* “Almost too Bayesian”

**Podcast notes**
- Notice the lived experiences of participants when studying altruism, etc!

[[2025-07-23]]

**Runway game**

- How was “rate” computed, always seen as a move “lower”?
	- Want to maintain history for optimal move? Greedy player policy is to always move to one above the previous player?

**Meeting with Mark and Maya**

- Behavioral data
	- Start with single person (play against different models?)
	- Eventually plug in other players (formally just a chat room)
- For multiplayer stuff: look at overcooked interactive repo
- Connecting backend Python to javascript frontend
	- Sends all the code to the client’s computer as a package
	- https://pyodide.org/en/stable/
- Steps
	- Start building gridworld in Smile, build agent interface and a Q-learner using that interface
	- IRB wants the working task 
- Mod game
	- Try fictitious play learner as base policy

**SMILE tutorial**

- Key folders: builtins, uikit, user (you work in here)
- Uses `.vue` framework with components
	- Declarative (templates) vs. imperative (e.g., traditional JS)
- Integrating Python code: call to an AJAX server elsewhere (annoying)
	- About 1 second delay 
- Write Python code and translate it w/ LLM, do some quality checks
- Still not great for joint action motion tasks – need WebSockets


[[2025-07-22]]

**Bayesian learner code expansion**
- Maintaining fictitious play beliefs?

[[2025-07-21]]

- [[20250721-lineworld-plots-level-k-belief-learner]]
- [[20250721-codec-marl-journal-club-notes]]

**Level $k$ belief state code (extensions and improvements)**

- [x] Write a function to keep track of belief state distributions?
- [ ] Also learn the best maximum level

**Debugging**

- [ ] Figure out why optimal “response” policy is different from basic `LevelKPlayer`

**Runway game thoughts**

- Unsure how to implement a continuous action space for “Runway game”
- What would this tell us? Could a simple bunch of cognitive hierarchy players “flock”?
- Replicator dynamics on actions and “rules” (what jumps to make—incidentally the as the action space)

[[2025-07-18]]

- [[20250718-lineworld-plots-fixed-greedy-players]]
- [[20250718-lineworld-plots-fictitious-play-learner]]

**Project direction ideas**

- Cognitive hierarchy modeling of [[@2018freyCognitive]]: use “belief states” a la [[@2003chalkiadakisCoordination]] over cognitive hierarchies, assuming optimal models

**Literature review next steps**

- [ ] Chapters 5 and 7 of Frey’s thesis: https://ucdavis.app.box.com/s/pcqa75gebpltuw5g86roev7zoed31v1v
- [ ] Review [[@2016hoFeaturebased]]
- [ ] Look over survey [[@2018albrechtAutonomous]]

**Other next steps**

- [ ] Chain of fictitious play learners, starting with random opponent (sort of like a game of telephone)
	- [ ] Make a wrapper for the learner policy

[[2025-07-17]]

**Meeting with Mark and Maya**

- Poster
- Use `flippy` (previously `gorgo`), good for inference about policy parameters?
	- Python reimplementation of WebPPL—similar syntax with `@infer` decorators

**Next steps**

- [x] Contact [[@2018freyCognitive]] for paper data
- [ ] Consider experiments for Line/GridWorld
- [ ] Look at agent modeling in WebPPL, notebooks from Maya and Mark
- [ ] Look at norm learning data from Mark

[[2025-07-15]]

- [[20250715-lineworld-plots-joint-action-learner-comparison]]
- [[20250715-lineworld-plots-joint-action-learner-proximity-distance-penalties]]
- [[20250715-lineworld-plots-joint-action-learner-quantum-chicken]]

**Learner policy general**

- Note: want to store and action list so that can sample prior to any learning

**Next time:**

- [x] Make plots for “quantum chicken” game: chicken on either side of the board, egg in the center, with and without optional egg pick-up

[[2025-07-10]]

**General code improvements**

- [x] Build in way to change player positions in initial state from outside of the game?

**Next steps**

- [x] Replicate level $k$ plots with both methods: learn new policy for each initial state and learn a single policy with mixed initial states

[[2025-07-09]]

**Meeting with Mark and Maya**

- Next steps
	- [x] Implement joint action learner (one player controlling both agents)
	- [ ] Reproduce `fixed_opponent` MDP error with EggHunt, send to Mark

**Journal club ideas**

M. Kleiman-Weiner, A. Vientós, D. G. Rand, J. B. Tenenbaum, Evolving general cooperation with a Bayesian theory of mind. _Proc. Natl. Acad. Sci. U.S.A._ **122**, e2400993122 (2024).

R. Köster, E. A. Duéñez-Guzmán, W. A. Cunningham, J. Z. Leibo, Tabula rasa agents display emergent in-group behavior. _Proc. Natl. Acad. Sci. U.S.A._ **122**, e2319947122 (2023).

**Next time**

- [ ] Fix kernel problems when reproducing MDP error
- [x] Fix my learner code (revert to old GitHub version)

2025-07-08

**MARL reading notes**

- [[@1998clausDynamics]]
	- Single state games, distributed bandits, game theory (reduced profile, strategy)

[[2025-07-07]]

- [[20250704-lineworld-plots-proximity-penalty]]
- [[20250704-lineworld-plots-environment-penalty]]
- [[20250707-lineworld-plots-distance-penalty]]

**Game variations to try**

- Roles
	- [ ] Require players to approach from opposite sides of the chicken
	- [ ] Require players to land on chicken simultaneously
	- [x] Require players to catch chicken by being in separate locations
- Actions
	- [ ] Try different level 0 behaviors
	- [x] Optional egg pickup
- Environment costs
	- [x] Cost of being too far in distance from one another

**General code improvements**

- [ ] Add option to examine action space
- [ ] (Someday) Unify dictionary modification in code

**$Q$-learning implementation**
- [ ] Show final optimal policy

**Questions**

- [ ] How does getting `OptimalPolicy` for the `LevelKPlayer` wrapper differ from learning? Fundamental question: the difference between planning and learning?

**Next steps**

- [ ] Fix learner value function
- [ ] Compare learner policy with Level K against both fixed opponent and random opponent
- [x] Implement joint learner policy, once independent learner is working against a non-fixed opponent

## June

#### Reading notes

| Date                | Cite key                                                                                         | One-line takeaway                                                                                                                                                                                                                    | Technical notes | Discussion                                                                                                                                                                                                                                                                                        |
| ------------------- | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2025-06-03          | [[@2023hoRational]], “Rational simplification and rigidity in human planning”                    | Conceptual inflexibility (**functional fixedness**) during planning arises due to two cognitive costs: the effort required to represent details of a problem and the effort required to switch to a new representation of a problem. |                 |                                                                                                                                                                                                                                                                                                   |
| 2025-06-03          | [[@2016hoFeaturebased]], “Feature-based joint planning and norm learning in collaborative games” | Norm learning can be modeled as making inferences about *joint* reward function biases that all agents follow and expect others to follow.                                                                                           |                 | What other factors would enable people to flexibly adopt different roles? How do *fixed* norms relate to this?                                                                                                                                                                                    |
| 2025-06-03          | [[@2024goldstoneEmergence]], “The emergence of specialized roles within groups”                  | Group specialization emerges primarily due to communication and feedback, but also intrinsic repulsion to the roles of others, multi-level planning, and understanding the minds of others.                                          |                 | How to study feedback, repulsion, and ToM in a rational framework?                                                                                                                                                                                                                                |
| 2025-06-03 (reread) | [[@2024wuGroup]], “Group coordination catalyzes individual and social intelligence”'             | Individual capacities for **theory-of-mind** and **compositional representations** enable group-level capacities for complementarity and recombination.                                                                              |                 | **Complementarity:** the ability of an interacting group to flexibly adopt specialized roles while working toward a joint goal<br><br>What level of these empirical studies be considered at—algorithmic or computational?<br><br>Want to depart from very high-level, game-theoretic approaches. |
| 2025-06-03 (reread) | [[@2024zhaoRational]], “A rational model of innovation by recombination”                         |                                                                                                                                                                                                                                      |                 |                                                                                                                                                                                                                                                                                                   |
| 2025-06-10          | [[@1996dunbarHow]], “How scientists really reason”                                               |                                                                                                                                                                                                                                      |                 | Related to [[@2023hoRational]]: how might conceptual rigidity be augmented by social influence?<br><br>To what extent do analogical mappings of relations (regional analogies) depend on detail of representation in a target domain?                                                             |

#### Daily notes

[[2025-06-30]]

**Meeting with Mark**

- Next steps
	- [ ] Level 0 possibilities: randomize of sub-action space
	- [x] 1 - Focus on changing reward structure, configurations that lead to high cost
		- E.g., Given player 1 in certain position, player 2 loses points if in a range
	- [ ] 2 - Incorporate Q-learning (see older paper from Mark) both independent and joint — null model of learning
	- [ ] Prosocial utility?

[[2025-06-26]]

- Someday fix: `OpponentModelMDP 270-280`, can either add chicken flag explicitly or set checks inside of the cooperation function; currently only returns information about next state

[[2025-06-25]]

**Successor representation**

- [ ] Why does the form for stochastic differ from form for value function w/ the sum?
- [ ] Clarify the different notations for reward $R(s, a, s’)$ and $R(s, a)$, how they affect the Bellman equations and SR. Maybe make a table?

**Next steps**

- [x] Fix logic for getting winning states/chicken caught
- [ ] Get policy actions?
- [ ] Figure out why chicken caught flag does not get set to true in directly initializing

[[2025-06-24]]

**Meeting with Mark and Maya**

- Next steps
	- [ ] Fix/optimize DP policy evaluation
	- [x] Implement “cooperation probability” for each state (successor representation)
	- [ ] Play around with different actions and reward
		- [ ] Cost for certain configuration
		- [ ] Require that both players land on the chicken at the same time
		- [x] Move multiple squares at once
		- [ ] Decide whether or not to pick up egg

**Lab meeting**

- Maya: “dimensions” task using Bayes instead of RL
	- “Advising to attend” – which features to pay attention to (as opposed to ground truth)
- Sounak
	- IRL focuses on reward, rather than learning policy—want to infer heuristics
		- Teacher knows optimal heuristics
	- GPUDrive
	- Pseudosynthetic data – find subsets of Waymo dataset fitting different heuristics
		- Predefined?
	- Identifying shift from computation to heuristics during expertise
- Jing: self-efficacy/decision noise
	- Two parameters (inv) temp for action now & future

[[2025-06-19]]

**LineWorld**
- Progress made
	- Augmented previous heat maps to show action values (need to debug some edge values?)
	- Finished implementing sampling method 
- Next steps
	- [ ] Trying different base policies (need to adjust plotting function!)
	- [ ] Trying different chicken and egg rewards

[[2025-06-17]]

- Model of analogy-making with two domains, original and target, adjust how much each person knows about each domain?
	- Innovate in the target domain by recombination

[[2025-06-16]]

**Progress made**

- Fixed action values with Mark
- Implemented random opponent

**Questions**

- Discussing math
	- [ ] Go through pipeline of when joint action values/rewards are used, how those are dissociated? e.g., “Critically, both agents have a value-function on every joint-state but can only change their own state.” (p. 4)
	- [ ] Go through `tables()` function (reference RL text on tabular methods?)
- How to implement action values for random agent?

[[2025-06-14]]

- State value: for given policy, look only at state that matches the initial state? 
- What’s supposed to happen when both players start on the same square but there is an egg — just going to assume that the first player moves first?

**Questions**

- [ ] What does it mean when there is a given state in the state space that is not the same initial state—reachable, but shouldn’t be considered while plotting?
- [ ] Why isn’t there a segment of 0 reward for when p2 starts on the egg?

**To do**

- [ ] Code doesn’t work when p2 starts on an egg

[[2025-06-12]]

- Next time: 
	- Figure out what Q/action values represent, figure out why they are so large
	- Compare when player starts immediately on an egg vs. beside

[[2025-06-04]]

**Meeting with Mark & Maya**

`stochasticgame.py`

- Abstract base class for a stochastic game (interface)
	- Agent names = canonical ordering (e.g., for indexing, matrix representations)
	- `player_actions()`: given state, return dict of agents with available actions
	- `initial_states()`: usually passed in instead
	- `step()`: game “dynamics”, determined by state and action; returns next state and joint reward, and whether game is done. Assumed deterministic
		- Returns both reward and transition
		- $S \times A \to \Delta(\mathbb R \times S \times \{ 0, 1 \})$
	- `step_dist()`: full distribution over possible steps
		- e.g., flagged deterministic in `egghunt.py` line `190`

`planning.py`

- An MDP is a single agent decision problem
	- Sutton and Barto (2016) – fully observable single-agent decision problem
	- Taxonomy:
		- Single vs multiagent
		- Multiagent + FO = stochastic game
		- Simple (bandit) vs. sequential decision problem 
- Stochastic games: instead of R, T, you have $R: S\times \prod_i A_i \to \mathbb R$ and $T : S \times \prod \times S \to [0, 1]$
	- Terminal state: regardless of action, you receive 0 afterwards forever = `done` in the code
- Once you have an MDP 
- Level 0 policy: could act randomly or stay in the same space
- Parameters:
	- Levels of reasoning
	- Fairness coefficients?/inequity aversion
	- Different types of level 0

`planning.py`

- State value (optimal value of each state) vs. action value (Q_sa)
- `policy_matrix()`: noised optimal policy matrix
- Next time: `lineworld.py` class

[[2025-06-03]]

**Project parameters**

- **Complementarity:** the ability of an interacting group to flexibly adopt specialized roles while working towards a joint goal.
- Focusing on the “Completing the First Feedback Loop” section from [[@2024wuGroup]]
	- “It is less clear how these mechanisms explain the way that groups self-organize into complementary roles over shorter (non-evolutionary) time scales. Reciprocity requires actions to match, while complementarity actually often requires actions to differ in coordinated ways (Fiske, 2000). Distinct profiles of beliefs and knowledge must be distributed throughout the population.”
		- Is there a useful formalism for this?
	- Manipulating stability of interaction partners
- [[@2024goldstoneEmergence]]
	- Need a specific kind of division-of-labor problem that requires role specialization—not all divisions of labor require different roles.
		- Same action in diff spaces vs. diff actions on same space.
- Rational approach to understanding group role specialization

**General questions**

- [ ] How does [[@2021wuToo]]’s use of Overcooked/general approach compare?
- [ ] When we talk about a “joint goal” in the ordinary sense, what different ways can this be formalized? E.g., in the MDP framework, is this necessarily joint rewards or action space?
- [ ] Reminder of the key difference between [[@2004camererCognitive]] and [[@2008yoshidaGame]]?

**Code questions**

- [ ] What is `EscapingChicken`—first-order policy?
- [ ] Hunters cannot be on the same location in the grid?

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