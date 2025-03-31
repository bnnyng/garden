---
aliases:
  - "Discussion Post: The Top-Down Approach"
tags:
  - fleeting-note
  - PHIL-UN2655
date: 2024-10-23 20:02
lastmod: 2024-10-28T17:04:03-04:00
---
# Discussion post

I remember reading [[@2017jonas]] for the first time two summers ago and thinking what a bleak picture it was for the methods of neuroscience. This time, because of our recent emphasis on the [[The neuron doctrine and beyond|neuron doctrine]], I immediately noticed the strong assumptions being made about the similarities between brain and microprocessor: “The brain consists of a large number of modules that can eagerly switch their input and output properties. … A small number of relevant connections can produce drivers that are more important than those of the bulk of the activity.” To this last assumption, there has been a theoretical shift from neurons as functional units to neuron *ensembles*. In a seminar class today, I had a guest lecture on representational geometry in the brain from Stefano Fusi (Center for Theoretical Neuroscience). Apparently firing rates in populations of cortical neurons often have maximal dimensionality with respect to the feature space (that is, each neuron is…represented…by a vector, and the vectors span a subspace that is one less than the number of features in the environment). This implies that cortical neurons “multitask,” since highly selective neurons would only have nonzero firing rates in a few feature dimensions. Abstract representations (e.g., categories, concepts) are geometries of points that are *linearly separable*, either in the high-dimensional feature space or a lower-dimensional latent space [[@2020bernardi]]. So basically, as we already know, multilayer perceptrons are the new transistor for computational neuroscience; this approach also clearly builds off of information geometry in machine learning, which reminds me of the discussion in class about whether all progress in neuroscience is technological progress. 

I am still unsure whether information about the nice geometric properties of neuron firing rates is something I would want from a neural science. I could see it as metric for which tasks organisms are adapted to and which they are not (with humans presumably being better at doing evolutionarily unexpected things than most other animals due to the dimensional range of each neuron), since I strongly believe that natural information has a lot of underlying structure (this feels almost guaranteed by laws of physics), and that sensory systems evolve to "preprocess" stimuli by exploiting that structure, sort of like how clever dimensionality reduction techniques enable simpler machine learning algorithms to perform well on complicated data. This relates to a note I wanted to make on [[@1982marr]]’s example of binary vs. base-10 numeral systems, and their different uses and limitations: I think certain representations arise more naturally than others from physical data, which isn’t the case for things like numbers, which are already abstractions. That is, representations of external things are not as interchangeable as the binary/base-10 in the number example (for example, what could we possibly use in place of the concept of number?). Perhaps this is a case for the bottom-up approach?

I was also trying to think of what might be used instead of a microprocessor to overcome the assumptions of [[@2017jonas]]—certainly not a deep neural network. No matter what analogous system, computational or not, we test our neuroscientific methods on, the validity of results would depend entirely on the validity of that system as a metaphor for the brain, and that is very near the central theoretical question in cognitive science. So, although the paper was fun, I must conclude that its basic design cannot lead to satisfying results.


---
# Lecture notes

- Top-down vs. bottom-up
	- Bottom-up = physiological data to information about cognitive processes (neuroscience)
	- Top-down = behavioral data to cognitive processes
	- Why not do both? (squeeze lemma)
- How multiply realized brain functions are is a *metaphysical* problem, re. [[@2022cao]]
	- Epistemological question: which is more effective
	- How do these different questions affect each other?
- Individual differences? [[@2016fusi]] – representational geometries are preserved across individuals
- Final paper topic: How does metaphysics (line between hardware and software/multiple realizability) change the epistemology (top down vs bottom up)?
	- I want minimal hardware? Abstract as soon as possible?
- [[@2017jonas]] – Could imagine a converse investigation of a top-down approach: make a toy brain with certain properties, prime people with theories, see if they arrive at the “truth”?
- Two roads diverge: epistemology (how theory informs scientific practice) and metaphysics (mathematical descriptions of cognition)
- [[@1982marr]] levels
	- Why three levels? compare with [[Levels of granularity in computational systems]]
	- Examples and their problems: Bird flight has no representational system
- Format of representation affords various algorithms that you can’t do otherwise ([[Domain-specific language]], my new favorite analogy for things)
	- Top-down: the kind of [[Coarse-graining]] you do depends on what you’re trying to do!
- Top-down approach
- Different levels give rise to different dysfunctions?
	- Same for different algorithms; distinguishing between realizations (or theories of them) by investigating failure modes – my favorite part of the theory
	- Software vs. hardware problems?