---
aliases:
  - "Discussion Post: Perception II"
tags:
  - fleeting-note
  - PHIL-UN3655
date: <% tp.file.creation_date() %>
lastmod: 2025-03-05T19:39:35-05:00
---
# Reading notes

[[@2024buckner]] 3.3–3.7

- Deep [[Convolutional neural network]]: Basic features
	- compare to vision transformers, which are apparently better?—long-term dependencies between **patches**, suggest something compositional at a higher level of cognition?
	- Each layer performs convolution, rectification (ReLU), and pooling
- Transformational abstraction
- Challenges
	- 
- CNNs
	- Inductive biases: translational invariance (mathematical), local feature extraction
	- Works better on small datasets, closer to what people do? 
- Thoughts
	- Still seems like weird priority to focus on perceiving as many things as humans can before collaboration/coordination with like agents, which even basic cells can do “rationally”

[[@2021lee]]

- CNNs seem promising for visual modeling, but that’s because CNNs were based on our neurobiological understanding of the visual system? Can we say the same for transformers that have no a priori relation to brain structures or cognitive functions?

---
# Discussion post

- Transformational abstraction? Or direct perception?
- Moment of weakness, “axioms force themselves upon us as being true”
- Image processing of visual stimuli in a useful way
- and I have been obsessed with J. Wood’s controlled-rearing studies for a minute and I hope no one ever tells PETA about this.

I think convolutional neural nets are a wonderful example of the mutualism between neuroscience and artificial intelligence, and I found Buckner’s argument for viewing CNNs as an integration of abstraction-as-subtraction and abstraction-as-composition. But I fear this largely depends on (i) the visual system being exceptionally differentiable (i.e., we can isolate neurons to their particular functions), and hence well-understood compared to “downstream” cognitive functions for which neurons display highly mixed selectivity, (ii) that early visual neurons can be described by a well-behaved mathematical transformation, and (iii) the fact that convolutional neural nets were inspired by the visual system. The design of most other non-vanilla ANNs, e.g., transformers, have no such a priori connection with the brain, so I wonder if any insights they suggest for rational cognition can be justified beyond the usual “proof-of-concept.” 

Also, some mathematicians would be quite upset by Buckner’s claim that mathematical problem-solving is “provided by our ability to learn and deploy formal proof techniques—as empiricists since Locke have emphasized all along” (137). Mathematicians generally feel that understanding the steps in a proof about some mathematical concept—which would not be anywhere near formal in the Gödel/Turing sense, and in fact may have no formal analogue—does not constitute understanding of that concept and hence does not contribute to a generalizable representation that can be applied to other instances of that concept. I think that Buckner’s take is a common misunderstanding of the *psychological* role of proof: proofs come out when you have to convince someone (maybe yourself) that some statement is true. On the other hand, the usual way of acquiring mathematical knowledge involves an element of indoctrination. This observation isn’t a challenge to DOGMA, but suggests that AI agents at the very least need to handle social influence to arrive at a model of the human cognitive processes underlying mathematical problem-solving, as opposed to superficially achieving human-like performance in formulating true statements.

At the other end of cognitive processing, I thought Wood’s paper suggested a lot of fruitful research directions for embodied AI that “collects its own training data,” externalizing Buckner’s suggestions about agents “mining their own latent space for hypotheses.” The controlled-rearing studies are fascinating and I hope no one tells PETA about them.

%% Unfortunately, few in cognitive science have anything to say on the subject of mathematical %%



%% In fact, aren’t “vision transformers” more accurate than CNNs on large datasets (hence not preferable for modeling human cognition) because, by design, they can account for global dependencies in an image? Buckner touches on this in his discussion of limited  %%

“empty space for x thing but then we get specialized for it



- We don’t abstract that much from our sense perceptions in most reasoning, as long as our representations are instruemntal for another task
	- General vibes like “justice” don’t crop up that often
- Understanding a deductive argument about the topic rather than understadning the topic