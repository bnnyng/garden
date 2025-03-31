---
aliases: []
tags:
  - fleeting-note
  - PHIL-UN3655
date: <% tp.file.creation_date() %>
lastmod: 2025-02-05T10:51:13-05:00
---
# Reading notes

[[@2018marcus]]

[[@2020marcus]]

- Central arguments
	- Cognitive models are needed for robust AI
	- Intelligence needs to be about enduring, abstract knowledge
- Four-step program: hybrid neuro-symbolic architectures → innate cognitive frameworks → abstract reasoning strategies → representation and induction of cognitive models
	- Initial primitives → learn about combining them, given the primitives

---

# Discussion post

%% Marcus’s points about the limitations of data-driven learning, and his proposed solution beginning with engineering conceptual primitives in hybrid, neuro-symbolic architectures, parallels the bottom-up vs. top-down approaches to studying cognitive processes.  %%

Marcus is particularly concerned with the robustness of AI, which he defines rather generally as “intelligence that…can be counted on to apply what it knows to a wide range of problems…in the way that we would expect of an ordinary adult.” This struck me as quite a specific requirement, essentially aiming to develop artificial agents that could replace human decision-making. There is a broader definition of robustness that I find more interesting and fruitful for the study of cognition more generally: a robust system shows the same kind of global (emergent?) behavior despite slight differences in exact implementation; see Stuart Kaufmann’s work showing that autocatalytic networks have relatively consistent properties, despite emerging from arbitrary combinations of simulated enzymes. This notion of robustness underlies Kaufmann’s theories about the origins of life, and at risk of promoting dualism, I think the property of intelligence is most accurately characterized in a similar way. That is, first-order attempts to engineer human-like cognitive capacities will always be brittle: neither data-driven learning, nor Marcus’s proposed solution of baking conceptual primitives into hybrid, neuro-symbolic architectures, come anywhere near the complexity originally required to come to what we take for granted as “ordinary.”

The upshot of this discussion is that the best cognitive science can offer to AI engineering is a slightly closer approximation to Marcus’s goals. For models that we want to deploy at scale, this is probably good enough. 

Tangential to the whole complex systems thing, I wonder if anyone has looked into somehow integrating higher-fidelity feedback (vs. some loss function) together with causal simulations during model training? Feels like the sort of feedback loops that some system forms with its environment is the main exercise of robustness. Return to cybernetics…