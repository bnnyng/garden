---
aliases: 
tags:
  - fleeting-note
date: <% tp.file.creation_date() %>
lastmod: 2025-04-20T16:53:46-04:00
---
[[2025-04-17]]
# Week 13, Day 2: Multimodal data
---

- LLMs get several orders of magnitude more linguistic data than humans do: training size is <100 million for a 13-year-old vs. 1.4 trillion for the Chinchilla model (2022).
	- What explains this “naive” observation of difference?

**Multimodal developmental data**

- The **SAYCam-S** contains video data from three children, capturing about 2 hours per week.
- The goal of multimodal learning is designing a model that associates words and images without explicit labels or supervised learning using “developmentally plausible” training data.
	- *Discussion.* $\quad$ Does this the same as learning a concept, or some sort of more simplistic associative learning? (And can concept learning emerge from associative learning without engineering more mechanisms? See [[@2019heyesCognitive]] on domain-general functions.)
- The **Child’s View for Contrastive Learning** model pairs video frames that co-occur with uttered words and projected images and words to the same embedding spaces.
	- Paper: https://doi.org/10.1126/science.adi1374
	- This implies that **ecologically realistic** data helps train models; you can have **domain-general learning mechanisms** that successfully learn tasks without innate knowledge.
	- *Discussion.* $\quad$ How much of this success is due to **active/social learning** vs. **multimodal data**?
- Caveats:
	- CVCL learns from still images and doesn’t access temporal dynamics (e.g., for verb learning).
	- The model learns passively instead of actively exploring the environment.
	- CVCL learns from transcribed text, while human children learns from continuous speech signals which requires more challenging processing like verb segmentation.
	- Human children learn more than word-referent mapping; recall that Chomsky’s argument for Universal Grammar is about syntax.
- Note that overcoming the first two “limitations” will likely improve model performance, while overcoming the last two will likely add more challenges to the model task.