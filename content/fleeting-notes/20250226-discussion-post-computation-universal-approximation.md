---
aliases:
  - "Discussion Post: Computational Power and Universal Approximation Theorems"
tags:
  - fleeting-note
  - PHIL-UN3655
date: <% tp.file.creation_date() %>
lastmod: 2025-02-26T21:53:06-05:00
---
# Reading notes

[[@2022akhlaghpour]]

- “Continuous functions over a compact domain are general enough to include any function we are practically interested in an can effectively compute.”
	- Compare to modeling learning in a discrete vs. continuous setting
	- I.e., not an open interval, or infinitely-wide domain. Would this be an issue?
- The idea behind the universal approximation theorem can be broken down into two parts (as nicely explained [here](https://medium.com/analytics-vidhya/you-dont-understand-neural-networks-until-you-understand-the-universal-approximation-theorem-85b3e7677126) and [here](http://neuralnetworksanddeeplearning.com/chap4.html)):
	- Look-up tables can be used to approximate any compact continuous function to an arbitrary degree of accuracy.
	- Feed-forward neural nets can be used to appoximate any look-up table to an arbitrary degree of accuracy.

![[Pasted image 20250226210500.png]]

[[@2024akhlaghpour]]

- Properties of transformers
	- CANNOT be simulated by a finite-state machine, since can process *sequences of arbitrary length*
	- Attention layer cannot be modeled with fixed number of neurons and connections—WHY?
	- Outputs a probability vector with token chosen from vector
	- takes as input a arbitrary length sequence of tokens from a  predefined vocabulary, generates one token at each step that gets appended to the sequence, uses attention layers with softmax such that the loss function is dierentiable with respect to its parameters, and contains a xed set of parameters with values that are unchanging during inference time. T

- Properties of Turing completeness
	- “one handy question to ask is: can the system run non-trivially non-halting patterns? Or can it go into enter a never ending path of computation that isn’t a obviously never ending and doesn’t repeat states? If it can’t then it’s not Turing-complete.”
	- One useful rule of thumb when evaluating the Turing-completeness of a mathematical system is to ask: can I describe that system by a nite length string? Does that string have a fixed length? If the answer to both questions is “yes”, then it can be simulated by a nite state machine and hence is not Turing-complete. If, on the other hand, the length of the description of the string can grow during computation, then it might have a chance of being Turing-complete.
- Requirements for Turing completeness
	- “To show that a model is as powerful as Turing machines, one must show that for every  Turing machine, there exists a conguration of that model that simulates that specific Turing machine. This can only work if the mechanics of the model are independent of memory resource constraints.”
	- Not an infinite tape, but an EXTENDABLE finite tape: Minsky: “instead of infinite tape, we need only an inexhaustible tape factory”
- In between: Linearly bounded automaton
- RNNs with arbitrary precision are Turing complete?
- Perez et al 2019
	- Simulate a Turing machine by storing each event as separate token in the sequence; history
	- Hard-max to figure out where the tape head is and what symbol is written—information from sequence of tokens
	- Using rational functions only
	- Upshot: loses the essence of a transformer, and not really a deep learning model—parameters could not be discovered through gradients
- Bhattamishra et al. 2020
	- No fixed vocabulary of “tokens”
- **Structurally unstable model:** parameters could not be discovered through gradient-descent based learning; specifically, no small neighborhood in parameter space where “model behavior resembles intended dynamics”

---
# Discussion post

- Stone–Weierstrass theorem
- Compare to human cogsci behavioral task paradigms—also in discrete settings, vs. continuous and open-ended (i.e., unbounded)

I am interested to see how this week’s readings are incorporated into the topic of this class. The Stone–Weierstrass theorem is a basic result taught in undergraduate *real* analysis, and like every nice result in real analysis, it depends on a compact domain. Compactness is key here because even though the reals are complete and whatnot, the property of being compact guarantees that the space has a nice *finite*—and hence countable—description in terms of open sets. This allows our approximation to be uniform, meaning that it’s behaving as desired everywhere—otherwise there would always be points we couldn’t check. It’s easy to see why, Akhlaghpour points out, this apparently very nice property isn’t that impressive. Conversely, a key distinction of real-world task domains is that they are open-ended (in addition to infrequently being represented on the real line).

I am really wracking my brain for something to say here about cognitive science. I guess vaguely related is Godel’s Disjunction, a thesis that came out of his incompleteness theorems: either there are absolutely undecidable arithmetic propositions, or humans are not Turing machines. That is, if we are Turing machines, then there will always be mathematical knowledge we cannot comprehend (I kind of don’t understand why Godel, a realist, would posit this disjunction that depends so entirely on a formalist picture of mathematics. Whatever). Of course, this doesn’t really live up to the demands of a well-operationalized cognitive theory, because there’s a trivial sense in which we outperform Turing machines: we can intuit the natural numbers, or at least we think we can… So I would also like some more clarification on the *cognitive science* motivation behind making neural models that are Turing complete, as it is unclear to me how useful Turing machines or computation in general is as a framework for human thought.