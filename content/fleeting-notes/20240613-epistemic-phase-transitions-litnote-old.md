---
tags:
  - fleeting-note
lastmod: 2024-06-13T11:09:30-06:00
---

DOI: [https://doi.org/10.1016/j.cognition.2022.105120](https://doi.org/10.1016/j.cognition.2022.105120 "Persistent link using digital object identifier")
# Summary

- model how steps in mathematical proof are combined to produce belief

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
# Notes

## Mathematical proofs

## Modeling mathematical belief-formation

### Assumptions and features

- Both deductive and abductive reasoning are used to form mathematical beliefs.
- 

### Network structure

- The basic model is a [[Graphs|directed graph]], where nodes correspond to a claim made in the proof and directed edges (i.e., directional dependencies) represent how claims are established with **deductive inference**.
### Dynamical belief-formation algorithm

- Assumptions:
	- The degree of belief associated with a single claim depends both (and only) on the claims that support it *deductively* (the **deductive pathway**), and the claims it supports deductively (the **abductive pathway**). The two pathways may have different strengths
	- The dependency is additive in log-space.
	- The model is otherwise unconstrained in the belief patterns it can form. 
	- Each node in the network has a *binary truth value*.

### Results?
- Tinkering and reuse
- Abduction and deduction

## Epistemic phase transitions and modular firewalls


## Resolving the abductive paradox

- A [[Mathematical proofs|mathematical proof]] is a unidirectional, deductive argument from axioms to conclusion. 
- [[Abduction is going from a believed conclusion to requirements for the conclusion to be true, after Peirce]]. 
	- Abduction helps evaluate and build confidence in the proof.
	- Abduction can be related to the notion of *mathematical intuition*.
- To resolve the abductive paradox, one must distinguish between two questions: how a proof establishes claims, and *how investigators establish that it has established these claims*. The second question allows us to use *non-deductive methods* to understand how logical deductions are correct.
- [[Deduction and abduction combine to produce a gestalt switch in intuition for what is necessarily true, after Aaronson]].


- Future directions
	- Use the described model to determine where in an argument the different directions of inference will produce uncertainty?
	- Tinkering?