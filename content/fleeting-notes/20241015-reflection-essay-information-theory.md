---
aliases:
  - "Reflection Essay: Information Theory in the Brain"
tags:
  - fleeting-note
  - NSBV-BC3386
date: 2024-10-15 23:43
lastmod: 2024-10-16T17:46:17-04:00
---
# Reading notes

- Agree with Lindsay that it should remain a metaphor—the things we care about involve semantics
- Big issue in cognitive science: how do we ground symbols in reality? How do representations get meaning?
- MAIN POINTS
	- Info theory as metaphor
	- Redundancy

[[@2021lindsay]]

- Size of an action potential doesn’t carry any *information*
- “A code has is defined by its set of symbols and how frequently each is used”—I’ve been too afraid to ask, but what exactly is a neural code? I assumed it meant this sort of physical representation of information
- Entropy = average information rate—when we talk about “information,” are we talking about a property of a code or the particular encoding? Unclear in context of past discussions
- 2,900 bits per second
	- Why doesn’t the brain optimize w.r.t. assumptions? I.e., can use “reasons” to convey information, needs less information if there’s a world model (think of DeDeo & Bergey paper.)
- Biggest debate: How to define a symbol. “Which aspects of neural activity are carrying information and which are essential? What, essentially, is the neural code?”
	- To what degree is it arbitrary, or how determined by physical constraints?
- ⭐ How is meaning given to information at all? A general theory of information must be agnostic to semantics. Then only the “grandmother neuron” idea makes sense—semantics encoded in the physical nature, matched filtering. But this doesn’t match data
- “Efficient brains reduce their redundancy as much as possible”—BOTH symbol-information mappings and what information is even mapped?
	- Redundancy = distance between highest possible entropy values symbols could have, and the entropy they actually have
- Computation = information-processing machine

[[@2000reinagel]]

- Mutual information = how much they have in common
- Information content can be *quantified* by number of bits that could represent messages
- “Sensory neural codes seem to be specifically adapted for the statistics of their natural stimuli”

[[@2006koch]]

[[@2012barlow]]
- Efficient coding hypothesis
- Reduction of redundancy

[[@2022kelty-stephen|In Search for an Alternative to the Computer Metaphor of the Mind and Brain]]
- “The semantic aspects of a language are irrelevant for reproducing it”
- “The fundamental problem of communication is that of reproducing at one point either exactly or approximately a message selected at another point. Frequently the messages have meaning; that is, they refer to or are correlated according to some system with certain physical or conceptual entities. These semantic aspects of communication are irrelevant to the engineering problem.”
- Living systems *reproduce redundancies*

---
# Reflection essay

I have been skeptical of the use of the term “information” in the context of neural or cognitive processes, and I agree with [[@2021lindsay]] that Shannon information is best used as a metaphor for neural activity, rather than a mechanistic description. As [[@1948shannon]] himself noted, a general theory of information must be agnostic to meaning: “The fundamental problem of communication is that of reproducing at one point either exactly or approximately a message selected at another point. Frequently the messages have meaning; that is, they refer to or are correlated according to some system with certain physical or conceptual entities. These semantic aspects of communication are irrelevant to the engineering problem.” However, the semantic content of neural or cognitive representations is precisely what we’re interested in when studying the brain; otherwise, neuroscience would have been completed after the invention of functional imaging. I’m still wrapping my head around how the problem of information representation via the neural code is distinct from the problem of representation in cognitive science, or how complex agents assign meaning to arbitrary symbols. The latter problem is only a problem because the computational paradigm (i.e., thinking is information processing—notice how unequivocally [[@2021lindsay]] states this!) requires that mental algorithms be substrate-neutral and multiply realized, leaving a gap between the thinking mind and the brain that actually interacts with the world. I think that there is a loophole in the context of neural representations that allows us to only talk about information in terms of probabilistic action potentials: meaning is only a byproduct of mentalizing, and neurons do not mentalize. Thus, it suffices for information to be encoded *functionally*: the “grandmother neuron” is one example of this, sensory matched filters another. 

It is astonishing to me that the guinea pig optic nerve transmits a total of 875,000 bits per second [[@2006koch]], and particularly interesting to compare to the fact that casual human conversations transmit about 13 bits per second [[@2024bergey]]. This seems like another example of information theory’s limited utility; the numbers of interesting, but our understanding of visual vs. linguistic information are categorically different (in particular, we are still able to have meaningful conversations even with this pitiful transmission rate because much of the informational load is carried by unconscious, shared axioms of how we interact with other people [[@1975grice]]).

Finally, I am curious about the idea of redundancy. The principle behind [[@2012barlow]]’s efficient coding hypothesis is the reduction of redundancy. In formal, information-theoretic terms, redundancy is the difference between the highest possible entropy of a code and its actual entropy [[@2021lindsay]]. (This is something I have been confused by at other times during this class: when we talk about information in some context, are we talking about a property of the broader neural code or the particular encoding?) The brain can reduce redundancy both at initial reception of stimuli (e.g., being physically unable to transmit information about some stimulus) and ongoing processing (e.g., habituation). However, it seems to me that redundancies in reality are generally more useful for survival than not; one could even view evolutionary adaptation as selection for the most optimal couplings of environmental and physical redundancies. For example, [[@2018kolchinsky]] ground the notion of semantic information in system-environment dynamics by defining meaning as an emergent property of mutual information (back to Shannon!) that is “causally necessary for a system to maintain its own existence.” I think considering the ways in which neural processes echo redundancies of the environment would be as instructive as considering how redundancies are filtered out. 

All in all, the topic of information theory points to a question I should have asked much earlier: what do we mean, in this class, when we talk about the neural code?

---

# Seminar notes

- “All or nothing” activity makes it tempting to draw comparison to other binary information codes
- Why do we look at absolute information vs. “relative” information
- Rate of decay? Things become entirely probable once the message is transmitted, but things stay activated while things stay in the range (what is the likelihood relative to)
- Natural images can be decomposed into Gabor filters