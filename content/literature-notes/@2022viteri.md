---
citekey: 2022viteri
​aliases:
  - Epistemic phase transitions in mathematical proofs
tags:
  - literature-note
title: Paper | Epistemic phase transitions in mathematical proofs
year: 2022
permalink: https://www.sciencedirect.com/science/article/pii/S0010027722001081
publish: "true"
date: 2024-06-11
lastmod: 2024-08-15T20:38:42-07:00
---
> Viteri, S., & DeDeo, S. (2022). Epistemic phase transitions in mathematical proofs. _Cognition_, _225_, 105120. [https://doi.org/10.1016/j.cognition.2022.105120](https://doi.org/10.1016/j.cognition.2022.105120)

---
# Summary

> [!Abstract]
>
> Mathematical proofs are both paradigms of certainty and some of the most explicitly-justified arguments that we have in the cultural record. Their very explicitness, however, leads to a paradox, because the probability of error grows exponentially as the argument expands. When a mathematician encounters a proof, how does she come to believe it? Here we show that, under a cognitively-plausible belief formation mechanism combining deductive and abductive reasoning, belief in mathematical arguments can undergo what we call an epistemic phase transition: a dramatic and rapidly-propagating jump from uncertainty to near-complete confidence at reasonable levels of claim-to-claim error rates. To show this, we analyze an unusual dataset of forty-eight machine-aided proofs from the formalized reasoning system Coq, including major theorems ranging from ancient to 21st Century mathematics, along with five hand-constructed cases including Euclid, Apollonius, Hernstein's Topics in Algebra, and Andrew Wiles's proof of Fermat's Last Theorem. Our results bear both on recent work in the history and philosophy of mathematics on how we understand proofs, and on a question, basic to cognitive science, of how we justify complex beliefs.
>.


---
# Key terms

- **Hume’s paradox for deduction** = the possibility of errors in a sequential deduction compounds with each step.
- **[[Epistemic phase transition]] (EPT)** = a feature of the cognitive model’s network structure where the number of distinct paths between different points increases, while the truth of any particular path between two arguments decays exponentially in force.
	- **Phase transition** = when small changes in a control parameter lead to *discontinuous shifts* in global properties.
- **Abductive paradox** = when a relative overconfidence in either deductive or abductive reasoning removes the effect of EPTs, which allow a proof to produce a nearly certain value.
	- That is, the proof becomes dependent only on belief in the conclusion.
- **[[Deduction vs. abduction|Deductive pathway]]** = the direction of inference in a mathematical proof where premises are used to establish the truth of more premises.
- **(Deductive or abductive) implication strength** = “the degree to which the truth of a claim is coupled to the truth of either a claim it *depends on* or a claim it *implies*.”

---
# Reading notes

## Modeling mathematical belief-formation

### Network structure

- The basic model is a [[Graphs|directed graph]], where nodes correspond to a claim made in the proof and directed edges (i.e., directional dependencies) represent how claims are established with **deductive inference**.
### Dynamical belief-formation algorithm

- Assumptions:
	- The degree of belief associated with a single claim depends both (and only) on the claims that support it *deductively* (the **deductive pathway**), and the claims it supports deductively (the **abductive pathway**). The two pathways may have different strengths
	- The dependency is additive in log-space.
	- The model is otherwise unconstrained in the belief patterns it can form. 
	- Each node in the network has a *binary truth value*.
## Resolving the abductive paradox

- A [[Mathematical proofs|mathematical proof]] is a unidirectional, deductive argument from axioms to conclusion. 
- [[Abduction is going from a believed conclusion to requirements for the conclusion to be true, after Peirce]]. 
	- Abduction helps evaluate and build confidence in the proof.
	- Abduction can be related to the notion of *mathematical intuition*.
- To resolve the abductive paradox, one must distinguish between two questions: how a proof establishes claims, and *how investigators establish that it has established these claims*. The second question allows us to use *non-deductive methods* to understand how logical deductions are correct.
- [[Deduction and abduction combine to produce a gestalt switch in intuition for what is necessarily true, after Aaronson]].