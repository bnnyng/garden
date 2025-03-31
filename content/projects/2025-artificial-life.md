---
aliases:
  - Project ALife
tags:
  - workspace
publish: 
date: 2025-02-04T22:58:04-05:00
lastmod: 2025-03-21T14:15:42-04:00
---
# Resources

- [Generative AI Handbook](https://genai-handbook.github.io/)

#### Code

- [[@2021ndousseEmergent]], “[Emergent Social Learning via Multi-agent Reinforcement Learning](https://github.com/kandouss/marlgrid)”


---
# Reading notes

[[@2022levin]]

- Parallel between continuity of Self across “drastic biological remodeling” and reflective (self) programming mentioned as a major transition in cognitive evolution in [[@2023barron]].
	- As of 2022: “This has not been addressed in biology, and likewise not yet in computer science, where machine learning approaches use static neural networks (there is not a formalism for altering artificial neural networks’ architecture on the fly).”

---
# Log

[[2025-03-21]]

- Directions to pursue
	- Social learning via RL
	- Cultural ratcheting
	- Agents in a higher fidelity environment
	- Agent-based neural nets (vs. swarm intelligence? How to extend beyond graph domains?)
	- More complicated subunits, e.g., active dendrites
- Timeline
	- Fix an architecture/strategy to test, get it working in Overcooked
	- Get things working in a more advanced environment (e.g., building a tower of Babel type of thing)
	- Multi-agent (entropy) → OOD collaboration with humans
	- Robots
- Generative process for agents could maximize entropy (but then mimicking evolution…)
- Questions
	- How far to go in motivating “collaboration”?
- Main lines
	- Rewards in environment vs. intrinsic? (Local vs. global rewards/controls. e.g., Global “temperature”?)
	- Evolution/modifying architectures over time/what kind of change over time? (blank as possible?)
	- Is it possible to find an environment where we already 

2025-03-16

- Will Brown: 
	- Columbia grad student, PhD advisor: Christos Papadimitriou
- Notes on RL for agents: https://www.youtube.com/watch?v=JIsgyk0Paic
- OpenAI’s levels of AI
	- Current methods: chaining together multiple calls
![[Pasted image 20250316163940.png]]

- Current agents are not very “autonomous”
	- Traditional wisdom: use better models
	- RL: thing interacts with environment with a goal
	- Path forward when at 70 percent, want to push to 90 percent
![[Pasted image 20250316164110.png]]


- RL with human feedback doesn’t seem to push models to be smarter
	- Verification in the loop seems to be the “trick,” no human bottleneck
![[Pasted image 20250316164248.png]]

- To do: look at DeepSeek paper
	- Open-source, data distilled from o1?
- GRPO training → How to extend ideas to “agentic” systems?
![[Pasted image 20250316164529.png]]

![[Pasted image 20250316165048.png]]

- Framework for doing step inside multi-step (?) environments?
![[Pasted image 20250316165235.png]]

- From Levin: a cognitive agent should be able to recognize other cognitive agents
- Using the “intentional stance”/ToM tasks?
	- Treating agents as “intentional”

[[2025-03-11]]

- Next steps
	- [ ] Read [[@2021anthropic]] to fully understand transformers
	- [ ] Implement [[@2021ndousseEmergent]]

[[2025-03-07]]

- Path 1: Social cognition, intelligent agent society (acceptable to have faculty psychology here, unrealistic physics; focus on adaptive behavior)
	- 2D, pre-made, gridworld enviornment, e.g., Craft-Ax
	- Get basic agents working in a weak physics environment, with explicitly pre-programmed abilities (e.g., Minecraft)
		- Replicating [[PIANO architecture, after Altera AL]]
	- Get agents playing Overcooked or Among Us
- Path 2: Swarm intelligence/multi-agent approach to embodiment
- Saved papers
	- [[@2021ndousseEmergent]]
	- “A Survey…”
- NEED to have **autonomy**: “An autonomous agent is a system situated within and a  part of an environment that senses that environment and  acts on it, over time, in pursuit of its own agenda and so  as to effect what it senses in the future.”  Franklin and Graesser (1997)
- Swarm intelligence?
	- Particle Swarm Optimization—somehow doesn’t require derivatives?
	- https://www.nature.com/articles/s41598-024-65547-7

```
- **Neuroevolution** — Evolving neural networks with PSO instead of traditional gradient-based training.
- **Federated Learning** — Swarm techniques optimizing ML models in decentralized data settings.
- **Hybrid Optimization** — Combining swarm intelligence with deep learning for robust AI solutions
```


[[2025-03-06]]

- Morphing body and brain for accomplishing a sophisticated task

[[2025-03-05]]

- From [[@2021lee]]: Wood’s chick-rearing environments replicated with unity and ML-Agents Toolkit: https://arxiv.org/abs/1809.02627
- DeepMind research environments
	- DeepMind lab: https://github.com/google-deepmind/lab
- [[@2021lee]] ideas: Using CNNs for a visual perceptual component that “collects its own training data,” similar to newborns “generating their own curriculum and optimizing learning”
- Evolution game: https://github.com/keiwando/evolution

[[2025-02-21]]

- Vision-language-action model used for home tasks in new [“Helix” robot](https://www.figure.ai/news/helix)
	- Uses “An open source, open weight VLM for System 2 and a simple transformer-based visuomotor policy for S1.”

![[Pasted image 20250221140827.png]]

- Architecture inspired by [[Dual process theory of reasoning]]
	- “System 2 (S2): An onboard internet-pretrained VLM operating at 7-9 Hz for scene understanding and language comprehension, enabling broad generalization across objects and contexts.”
	- “System 1 (S1): A fast reactive visuomotor policy that translates the latent semantic representations produced by S2 into precise continuous robot actions at 200 Hz.”

[[2025-02-14]]

- Proposal: design choices and possibilities
- Technical parameters
	- Fidelity?
- Conceptual parameters
	- What is the goal for the agents? 
	- Minimal description/high level of generality; not committed to a particular level of organization
	- World affordances, perceptual abilities, action capacities, faculties?
- Insects as a basic model organism

[[2025-02-11]]

- Cybernetics canon: [[@1943rosenblueth]]
- Using VR as a rich sandbox for exploring embodied agents

[[2025-02-09]]

- Inspiration from [[@2024buckner]]: empiricism and faculty psychology?
- Degree of biological plausibility that can be reasonably implemented: “Human and animal brains—the biological engines driving the only deeply rational machines of which we are currently aware—are rich symphonies of chemical interactions, exhibiting neural dynamics at multiple timescales and built using other non-neural but potentially Moderate Empiricism and Machine Learning 35  relevant components like glia and myelin”
- Saved papers: [[@2024mcmillen]], [[@2022fields]], [[@2023davies]], [[@2022watson]]