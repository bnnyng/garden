---
aliases:
  - "Discussion Post: Hereditary Pathways II"
tags:
  - fleeting-note
  - PHIL-UN3655
date: <% tp.file.creation_date() %>
lastmod: 2025-02-17T10:18:05-05:00
---
# Reading notes

[[@2019zador]]

- Intro: ANNs don’t match up to even animals
	- Cf. [[Persuadability as a continuum of agency, after Levin]]; ANNs have very low persuadability despite seemingly sophisticated capabilities—have to hand-engineer improvements?
	- “Reasoning is the thinnest veneer of human thought”, Hans Moravec
- Genes as constraints on morphologies that reduce uncertainty
- [[The No-Free-Lunch theorems]]—is this the difference between Turing machines and learning algorithms?
	- Equally likely for algorithm to have target where it performs worse than guessing than better
- Compensating for timescale with data—but timescale is data!
	- Have to be open to structural changes
- Good to see Zador is still writing, see [[@2000decharms]]
- I’m getting more sympathetic to the neuro perspective lol

[[@2024shuvaev]]

- Liked that they implemented both timescales
- Interesting complement—using ANNs to study what may be going on in neurobiology—but seems to not have really meaningful/applicable results in the covnerse direction
- Ecological validity—why should we think that synaptic weights are being compressed?
	- Most of the ability to make the correct weights comes “for free” with the complexity of neural cells, plus whatever directs their morphological structure
	- Specifying how to “wire up the brain”—are these numbers based on literally how the neurons are connected (analogously, their weights?)

---
# Reading notes

The Moravec quote Zador includes is interesting to consider in the context of this class: “The deliberate process we call reasoning is, I believe, the thinnest veneer of human thought.” Despite growing into an evolution chauvinist these past few weeks, I also had not considered the (obvious, in retrospect) fact that biological cognitive systems benefit from an amount of training data that is almost incomprehensibly large in both space (populations of individuals) and time (millions of years of evolution). Hence the scope of nativist arguments are limited to the lifespan of an individual organism, which feel categorically different from the disembodied, ageless AI models that we somewhat arbitrarily divide into discrete “agents”; after all, foundation models are trained on the totality of human outputs. Zoom out far enough and you will always find an empiricist tabula rasa? 

I am also not entirely convinced of the external validity of the Shuvaev et al. paper. They echo Zador (understandably, since he is a co-author) in characterizing the genome as an “information bottleneck,” as the *bits* needed to completely determine the “wiring” of the brain could not possibly be encoded into our existing genes. However, I struggle to believe that anyone *actually* thinks every weight (i.e., synaptic connection), which is presumably what this 10^(15) bits number is coming from, needs to be specified ahead of time to have a functioning brain. The mechanism implied by “compression” is that the genome encodes a few choice connections—weights to initialize the neural net—while development “fills in the blanks,” but even that to me seems to be underselling the inherent complexity of neurons, and how much might come for free once the challenge of morphological arrangement has been settled. For example, what would determine the non-random, yet individually varying connections that emerge during neurogenesis? One could say that part of the encoding is conditioned on different life experiences, but this gives us exponentially more information to record.

I agree with the framing of the genome as a way of reducing entropy—uncertainty—during development. But focusing on whether and how synaptic connectivity is encoded seems like stepping over dollars to pick up pennies. Both papers mentioned the existence of self-similar circuits throughout very functionally different areas of the brain, which is a different form of compression than what was explored in the paper. Instead of summarizing all the weights and aiming for faithful reconstruction, perhaps only local connections—ones whose development can be explained with biophysics, fluid dynamics, etc.—are encoded with high fidelity. Of course, it remains to explain how these get arranged into coarser, functionally distinct modules, though brain injury and ablation studies suggest that this is somewhat contingent rather than rule-based. 

Finally, I was curious about whether these local circuits could be a candidate for the basic computational units I mentioned in a previous discussion post. But since the Shuvaev et al. paper isn’t committed to representing any particular brain area, we may as well understand the artificial neurons to be such units. The weights generated from compression already overfit on CIFAR-10, so clearly this approach does not have the robustness we desire and a finer level of complexity is needed.

%% And it could be said that the Shuvaev et al. paper isn’t committed to representing any particular brain area, so the model may as well be interpreted as a local circuit, or perhaps each of the neurons are  %%

%% If synaptic connections have to be individually specified and expressed, then there must be proteins encoded to express them, which would require proteins to express them, and so on ad infimum.  %%


%% In fact it seems incredibly convoluted for any synaptic connections to be determined by the genome at all, since that connection would have to be expressed by the action of some protein, which itself is encoded by some piece of DNA that says to make this protein and not a protein that would give some other connection, which has to be read off by some other protein that is encoded in some other piece of DNA, and so on ad infimum.  %%

%% I am reminded of the Gaia hypothesis %%