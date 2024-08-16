---
aliases: 
tags:
  - workspace
publish: 
date: 2024-08-14 14:48
lastmod: 2024-08-14T15:35:33-07:00
---
# Resources

#### Automated theorem proving
- [The Theorem Prover Museum](https://theoremprover-museum.github.io/)

---
# Log

2024-08-14 

- Direction 1: “Program synthesis by sketching” – using natural language proof (sketches) to convert to formal proof language, e.g., Lean
	- Possible goal 1: If proof “success” is the same as developing understanding, determine when understanding happens and/or develop more human-like beliefs/acceptable gaps
	- Possible goal 2: (continued, sort of) encoding human-like acceptable gaps
- Direction 2: Generating natural language text from formal proofs that omit specific logical steps, then have human evaluators rate their belief in the proof’s accuracy 
	- Sub-problem: What do LLMs keep when converting words to a proof?
- DeepMind – [AI solves IMO problems at silver medal level](https://deepmind.google/discover/blog/ai-solves-imo-problems-at-silver-medal-level/)
	- Fine-tuned NLP model to automatically translate natural language problems to formal statements, then applies AlphaZero RL algorithm
	- “When presented with a problem, AlphaProof generates solution candidates and then proves or disproves them by searching over possible proof steps in Lean”
- People to talk to
	- [Mark Santolucito](https://www.marksantolucito.com/research.html) – program synthesis using “temporal stream logic” (formalism for how a program should behave over time)
	- Todd Gureckis – manually translating games from natural to domain-specific language
		- Lean/formal proof languages as DSLs
- Next steps
	- Look for relevant researchers in cognitive science, CS departments
	- Look at [“Proof Artifact Co-Training” code](https://www.catalyzex.com/paper/proof-artifact-co-training-for-theorem/code)