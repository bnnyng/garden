---
aliases:
  - "Discussion Post: Moderate Empiricism and Machine Learning II"
tags:
  - fleeting-note
  - PHIL-UN3655
date: <% tp.file.creation_date() %>
lastmod: 2025-02-09T22:27:04-05:00
---
# Reading notes

[[@2024buckner]]

- [[Domain-general modular architecture is the best hope for modeling rational cognition in AI, after Buckner]]
	- Realism about faculty psychology (why does this sound silly?)
	- Basic argument: domain-general architectures is all that is required for AI
	- How do we measure this?
- Different accounts of how models might explain mental abilities—why do these all feel sketchy
	- Neurocomputational: “artificial neural network models might identify aspects of biological neural mechanisms that, when arranged in the right way, produce certain aspects of human cognition.”
		- Aren’t all biological aspects self-similar/multiscale?
	- Generic mechanism: identifying a shared mechanism in DNNs and biological brains.
		- “a computational model (such as a deep neural network) can help explain phenomena implemented by a target system (such as the brain) if they both instantiate the same abstract mechanistic kind.”
	- Miracchi: Need a full cognitive-theoretical account of the relevant phenomenon before drawing comparisons (the one I implicitly believe in)
- Why do most of the statements in this book feel kind of vacuous.

---
# Discussion post

I’d like to shout out the game “[Creatures](https://link.springer.com/article/10.1023/A:1010042522104)” for exemplifying the DoGMA program way back in 1998. The creatures in question, called Norns, were essentially four-layer neural nets with neurons arranged in nine distinct (somewhat idiosyncratic) functional “lobes”: stimulus source, perception, noun, verb, general sense, attention, drive, decision, and a distinguished “concept” lobe, where each neuron could receive a maximum of three inputs from other lobes (sparsity forced by computational constraints of the time), and arrangements of concept neurons represented “situations.” The whole system was [quite sophisticated](https://www.alanzucconi.com/2020/07/27/the-ai-of-creatures/) and apparently sufficed for the Norns to develop emergent behaviors, such as playing catch.

In 2000, the creator of “Creatures,” Steve Grand, wrote: “Why do so many who attempt to create thinking machines expect to be able to implement just one specific aspect of intelligence and get away with it? … Many of these intelligent faculties may not even be possible without the simultaneous existence of the others. … I happen to believe that our ability to reason consciously is grounded in our ability to build mental models of the world, and that this in turn is founded upon a biological mechanism for constructing predictive models of body movements and simple sensory hypotheses…”. Clearly this was the motivating principle of his game design. Is it a consequence of capitalism/”Bitter Lesson”-esque rationale that deep learning research has only just started taking this seriously?

It’s also worth mentioning that there’s a [start-up](https://arxiv.org/abs/2411.00114) doing something similar—neural network-based game agents learning partially from intelligent humans, in this case in multiplayer Minecraft—and some of the modules they’ve chosen are memory, action awareness, goal generation, social awareness, talking and skill execution. The main interest for me is parallel operation of the modules across different timescales, as well as a “Global Workspace”-type central module that acts as both an information bottleneck and broadcaster for the other modules. 

This all points, again, to the obvious challenge of actually designing good tests for AI: we humans have the cognitive capacities we do by living in collectives (something something multiscale competency architecture). I would certainly be convinced that AI agents had achieve “rational cognition” if we threw a bunch of them together and they started developing human-like culture (or patterns thereof), but I imagine many others would find this unsettling or displeasing to imagine.