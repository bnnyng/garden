---
aliases: 
tags:
  - fleeting-note
date: <% tp.file.creation_date() %>
lastmod: 2025-05-01T22:45:15-04:00
---
[[2025-05-01]]
# Week 15, Day 2: Review continued
---

**Presentation: WildLMa – Long Horizon Loco-Manipulation in the Wild**

- The model has three general structures:
	- **VR teleoperation:** to enable imitation learning, “expert” demonstrations made using robots that have human controllers.
		- A low-level model that transforms physical information to action commands.
	- **WildLMa-Skill:** a general imitation learning system based on **action chunking transformers** that group together a chunk of actions, typically associated with single movement task.
		- The paper extends ACTs with **CLIP**, a model that embeds text and images in the same space.
	- **Wild-LMa-Planner:** an LLM planner.

**General discussion**

- Brendan: We will see diminishing returns from large language models and DL models in general.
- The **frame problem** for classical AI: how do we select action and predict the relevant consequences?
	- 💭 Similar to the issue of causation in philosophy of science—you would need to know the entire state of the world to give a cause—resolved using counterfactuals.

**Deep learning and embodiment**

- DL has been introduced to robotics via hybrid models; not clear how to eliminate the classical symbolic part.
- One strategy for incorporating embodiment is using simpler **virtual environments**.

**Biocomputing and organoid intelligence**

- Iterative feedback cycle between AI designing biological structures, which can then perform tasks (e.g., compute), then improve using an evolutionary process.
- Researchers: Michael Levin, Kriegman.

**Development**

- **Lamarckism** in evolution is the idea that behaviors acquired during life can be passed onto offspring—viewed as totally wrong during **modern synthesis** in 20th century biology.
	- But this is precisely the idea of modern day **epigenetics**.
	- In a slogan: “nurture can become nature.”