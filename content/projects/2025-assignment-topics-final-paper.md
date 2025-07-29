---
aliases: 
tags:
  - workspace
date: <% tp.file.creation_date() %>
lastmod: 2025-06-25T13:04:08-04:00
---
# Overview

- [x] **Proposal (300 words):** Submit a proposal for your Final Assignment.  Your proposal should make clear what question you will be asking, and how you plan to go about answering your question. See Final Assignment for expectations.
- [ ] **Intro and outline (1000 words):** Submit a complete introduction section as well as a complete outline for the Final Assignment.  Your outline should specify clearly the claim you wish to argue for, as well as what your preliminary argument for that claim will be.
- [ ] **Rough draft (2000 words):** Building on the intro and outline previously submitted, submit a draft of the Final Assignment. This draft need not be a complete paper, but it cannot consist solely of a background section; you must begin to make your actual argument in this draft, even if it is not complete. You are encouraged to focus mainly on developing your argument for this draft.
- [ ] **Final assignment (4000 words):** Write a philosophy paper on any issue covered in this course. The only requirement is that you make a claim relevant to an issue discussed in class and provide reasons or evidence to support your claim. One way to approach this is to choose a conceptual debate from the course, identify an empirical study or model related to it, and discuss how it bears on the debate. Do you agree with the conclusions of the author(s)? What theory and method does their approach employ? Most importantly, does it strengthen a position in the debate you have chosen? If so, which one, and why?

----
# References

**Theory**

| Cite key         | Topic | One-line takeaway |
| ---------------- | ----- | ----------------- |
| [[@2024wuGroup]] |       |                   |

**Experiment**

| Cite key                 | One-line takeaway                                                                                                                                                                                                      | Technical notes                                                                                                                                                                                                                         | Open problems                                                                                                                                                                                                                                           |
| ------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [[@2020carrollUtility]]  | Agents learning to collaborate with a model of human behavior (trained on human data using behavioral cloning) were much better at working with other humans than agents learning to collaborate with other AI agents. | Introduces `overcooked_ai` benchmark environment for cooperative human-AI task performance.                                                                                                                                             | Training a population with a greater diversity of human models.<br><br>Allow agents to adapt to human collaborator at test time, e.g., by learning multiple human models.<br><br>Using a non-stationary human policy that accounts for online learning. |
| [[@2021wuToo]]           |                                                                                                                                                                                                                        | Introduces the [[(Model) Bayesian delegation, after Wu et al. (2021)\|Bayesian delegation]] algorithm for multi-agent collaboration. <br><br>Also uses a simple gridworld version of *Overcooked*, but potentially not possible to run. | Incorporating representations that enable long-term collaborations like hierarchies, norms, and conventions.                                                                                                                                            |
| [[@2021ndousseEmergent]] | Social learning allows agents to discover more complex policies than those discovered through individual exploration, and adapt more rapidly to novel environments.                                                    | Introduces `marlgrid` environment “designed to encourage social learning”.<br><br>Uses multi-agent partially observable MDPs with a model-based “auxiliary predictive loss” for other agents’ actions.                                  | Different strategies for integrating solitary and social experience.<br><br>New task domains, e.g., manipulation.<br><br>Diverse expert strategies and goals.                                                                                           |

---
# Log

[[2025-06-25]]

- [[@2024griffithsBayesian]], 210 for history of RL

[[2025-06-23]]

- For AI angle, refresh on [[2025-artificial-life]], OpenAI’s “stages of artificial intelligence”?

[[2025-06-19]]

- Further reading
	- Niv, “Reinforcement learning in the brain”: https://psycnet.apa.org/record/2009-07078-003
	- Classic “Neural substrate of prediction and reward”: https://pubmed.ncbi.nlm.nih.gov/9054347/

[[2025-06-11]]

- New references
	- [[@2024abelThree]]
	- [[@1944neumannTheory]]
	- [[@2020harutyunyanWhat]]
	- [[@2023bowlingSettling]]
- [[Goals and purposes are completely described by maximizing expected cumulative reward, after Sutton (2004)]]
	- Potential issue with RL?

[[2025-06-09]]

- Clarify what reinforcement learning brings to study of cognition—what does RL bring to studies of the mind?
- A fear that technology influences the metaphor

**Reading list**

- [ ] [[@2012bowersBayesian]]
- [ ] [[@2011jonesBayesian]]
- [ ] [[@1990kitcherTrue]]
- [ ] [[@1974griceMethod]]

**Questions**

- What does being normative vs. descriptive have anything to do with this?
- Again, relation to behaviorism?
- Bayesianism vs. Dennett’s intentional stance?

[[2025-05-22]]

- Relationship between behaviorism and rational analysis?