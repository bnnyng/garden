---
aliases:
  - "Discussion Post: Large Language Models"
tags:
  - fleeting-note
  - PHIL-UN2655
date: 2024-11-10 12:34
lastmod: 2024-11-12T12:48:56-05:00
---
# Notes

[[@2024milliere]]

- Blockhead as “null hypothesis” – what kind of analysis is this, deductive?
- Word2Vec, linguistic units (Doc2Vec)?
	- “Not capable of capturing polysemy and homonomy”
	- Tokenization in the opposite direction of what I’d expect
	- With this fundamental issue, don’t see how LLMs could do the other things unless the way they get meaning is overcome
		- Maybe LLMs could extract meaning in an entirely different way than humans do, but because humans are the ones who made language and the rules of its use, seems unlikely
	- A problem even if you think syntax leads to semantics!
- Transmission of cultural knowledge, “cultural ratcheting”

---
# Discussion post

One barrier between LLMs and human-esque mentalizing I hadn’t considered was the basic “functional” units of language. This line of thought is clearly primed by our extensive discussion of the neuron doctrine and functional units of the brain. In particular, this limitation of word-embedding models reminded me of newer analyses using neural *ensembles* as basic units: “Being designed to represent language at the level of individual words, they are not well-suited to model complex linguistic expression, such as phrases, sentences, and paragraphs.” It seems to me the basic semantic units of language are word ensembles, but not quite in the Chomskyan compositional semantics way. Anecdotally, people sometimes remark that I use words in improbable contexts or assemble them in improbable orders (next-token prediction fears me), but they generally grasp my intended meaning (why?). And tokenization for Transformers is even worse! Not are the semantic units more fine-grained, tokenization seems especially problematic if you *do* assume compositional semantics since words are broken into “common sub-word units, which need not carve them at their morphologically meaningful joints.” 

I think this misalignment between LLM and human inductive biases towards basic linguistic units is a fundamental constraint on the ability of LLMs to do more complex things with language, like developing semantic competence, intention, and cultural knowledge transmission. It is plausible that LLMs could represent meaning in an entirely different way than humans and still come to exhibit some semantic competence, but I do not think LLMs would be partaking in human culture and linguistic communities in that case—I don’t have a well-formed reason why, but something about how language emerged from the human predisposition to having complex social relationships and a high degree of trust (lying is much easier with language than without!), so that causal history allows us to understand the reasons behind its implementation at any given time. I could see LLMs forming their own bastard culture with language, though, via their semantic “glitches” (is this what they mean by the language game?). Sort of like how you could probably let AlphaProof run loose with the deductive operations in Lean to create mathematical objects that have a derivative meaning not corresponding to any human idea. (See also: [[@2024dedeo]].)

---
# Lecture notes

- Touched on:
	- [[Chomsky hierarchy of computation systems]]
- Classic failures of connectionist models are specifically issues of systematicity and productivity
- Note: Biological plausibility of backpropagation in the brain
	- Anathema to neuron doctrine—probably can’t send error signals through the same connections
	- Connect to top-down visual processing from [[PSYC-UN2435|Social Neuroscience]]
- Does backpropagation happen in the brain?
	- Personal sticking point: existence of labeled training data; could only be the case with explicit language
	- Language is a handle, but you need a lot of intuition and other functionality to actually learn and get knowledge
		- Related: [[Life experience is incompressible]], [[Deduction and abduction combine to produce a gestalt switch in intuition for what is necessarily true, after Aaronson]], [[Meno's paradox]]
- 