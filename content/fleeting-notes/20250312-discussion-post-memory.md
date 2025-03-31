---
aliases:
  - "Discussion Post: Memory"
tags:
  - fleeting-note
  - PHIL-UN3655
date: <% tp.file.creation_date() %>
lastmod: 2025-03-12T17:19:45-04:00
---
# Reading notes

[[@2024buckner]] 4.1–4.7

- 4.1 – The trouble with quantifying human perceptual experience
	- Rejecting the evolution cop-out
	- 148 – Does implementing a change in learning rate count as innate knowledge, or just innate structure? Feels like a gray area. Moreover, what is the purpose of a critical period?
- 4.2 – Generalization and catastrophic interference
	- 152 – Why does **interleaved learning** work in DNNs? Like training muscle so it remains “strong” in a certain movement?
- 4.3 – Empiricists on the role of memory in abstraction
	- 154 – Aristotle’s “battle metaphor”
	- 155 – Ibn Sina’s faculty psychology, specifically “ventricular” theory of brain function
	- 157 – What is “affective significance” and why does “estimation” preserve it over time?
- 4.4 – ANN models of memory consolidation
	- [[@1995mcclelland]] “posits relation between short-term and long-term memory ANN modules”; avoids catastrophic interference
	- 163 – Complete retrograde amnesia with limited retrograde amnesia (stronger leading up to time of lesion) suggests a **consolidation period** for STM to LTM (see also: [[Squire's taxonomy of long-term memory]]
	- Associative learning experiments: latent inhibition, sensory preconditioning, negative patterning
- 4.5 – Deep RL
	- 170 – Social media as reward hacking, lol
- 4.6 – Deep Q-learning and episodic control
	- 178 – Do the networks also “know” explicit rules? And could this be a reason humans initially learn faster?
	- Not just highly rewarding, but impasse?
	- 179 – Another version of “thinking fast and slow”? Lol, just like keeping a dummy variable that takes `max(old_max, new_value)`
- 4.7 – Remaining questions
	- 181 – Compelling to think of it partly being “creative reconstruction”; recall Walter Ong, “Orality and Literacy”
	- 183 – What I said in class about VAEs…

---
# Discussion post

I am particularly interested in the notion of “creative remembering”, which I suggested in class, and Buckner mentions as well, could potentially be modeled by variational autoencoders. A large part of this interest is due to its personal intractability: I can never know the extent to which I have fabricated a given memory. But should it matter?

An idea—rather, an allegedly marketable product—Max proposed to me suggests “yes”: consider a model which takes as input in low-fidelity video of your daily life, and then generates an episodic reconstruction of that scene, when prompted, that is *consistent with one’s preferred memory* (this model could be tuned by the user’s feedback based on how much they liked the generated scene). A positive use case Max suggested was to externalize poignant childhood memories for which the details are fuzzy. Unfortunately, it’s much easier to think of ways that this could go terribly wrong, e.g., when someone thinks they witnessed a crime that did not occur, overwriting of relationship abuse. Would be like getting Gaslighting Premium™️. So beyond the usual examples of cognitive biases in memory (remembering past self as more similar to present self, general self-inflation), this hypothetical makes very explicit why “creative remembering” could be bad.

So why did we not evolve to replicate our experiences as faithfully as possible? That is, what could possibly have been advantageous about our ability to convince ourselves of fabricated memories? Why doesn’t it suffice to be like scrub jays recalling the precise locations of their caches?

I think an answer is suggested at the *collective*, rather than individual, scale. In *Orality and Literacy*, Walter Ong notes one characteristic of orally based thought and expression is that “oral societies live very much in a present which keeps itself in equilibrium or homeostasis by sloughing off memories which no longer have present relevance.” The example he gives is of the Tiv people of Nigeria, whose oral genealogies, at some point in the 20th century, differed from the genealogies recorded by the British 40 years earlier. It was found that the oral genealogies had been adjusted to the changed real-world social relations among the Tiv: “The integrity of the past was subordinate to the integrity of the present.” Similarly, a skilled orator might adjust their routine to suit the dynamics of an audience and the general social climate. In this way, oral memory is “alive” in a way that the written word is not, and is more readily employed to maintain social cohesion. I don’t know, maybe groups of humans who were able to cohere their memories this way (rather than always arguing over the actual fact of the matter) had a better time surviving.

I don’t know what the upshot of this speculation for deep learning as a model of cognition in its own right would be, as is usually the case for a teleological perspective (the goal being homeostasis, however that is defined for the “agent” under analysis) vs. the functional one that Buckner discusses. It does suggest that a “social influence” override for learned weights might help with human-AI alignment.
