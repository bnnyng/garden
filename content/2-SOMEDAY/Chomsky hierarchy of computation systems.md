---
aliases:
  - Chomsky hierarchy
  - finite-state machine
tags:
  - permanent-note
  - topic-physics-complexity
publish: 
date: 2024-09-26 12:29
lastmod: 2025-05-29T14:36:55-04:00
---
# Overview 

$\quad$ Chomsky’s hierarchy characterizes different complexities of formal grammars via the computational power required to use them. A system is said to be at least as powerful as another if it can *simulate* the latter—that is, solve all the problems in the latter’s scope.

![[Pasted image 20240926123016.png|400]]



**Related notes:**

- [[Turing machines, completeness, and equivalence]]
- [[Effectively calculable, recursive, and computable are equivalent descriptions of functions]]

---

# Properties of computation systems



| Computation system   | Basic architecture                                                                                                           | Available memory                                                   | Acceptable inputs                  | Examples of systems with equivalent computational scope |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | ---------------------------------- | ------------------------------------------------------- |
| Look-up table        | Table with two columns, input and output                                                                                     | None                                                               | Finite, predetermined input set    |                                                         |
| Finite state machine | A set of predetermined states, with (deterministic?) rules that specify the next state given a symbolic input                |                                                                    | Infinitely large, fed sequentially |                                                         |
| Turing machine       | A tape head containing a finite state machine, which has access to a single square of the memory tape at each moment of time | Unbounded—memory *usage* can grow as a function of the input size. |                                    |                                                         |

- **Finite state machines > look-up tables** since the size of the input is not bounded by the descriptor.
- **Turing machines > finite state machines** since the number of states is not bounded by the descriptor—unbounded memory is precisely the property needed for **Turing-equivalence**.

![[Pasted image 20250529142900.png|400]]

---
# Relation to human cognition

$\quad$According to Chomsky, our in-principle ability to detect arbitrarily long distance dependencies shows that we are more computationally powerful than a **finite-state machine**, which can only keep track of finitely many inputs; thus, humans are *not* finite-state machines. 

$\quad$Interestingly, this classical debate in computationalist theory is relevant for evaluating the “cognitive” capacities of [[Computationalist, connectionist, and rational research traditions in cognitive science|connectionist]] models, like [[Multilayer perceptrons|feedforward neural networks]], today: it follows from Chomsky’s argument that connectionist models will never achieve human-like cognition.

---

# References

- [Akhlaghpour (2020)](https://lifeiscomputation.com/can-a-finite-physical-device-be-turing-equivalent/), “Can a finite physical device be Turing-equivalent?
- [[@2022akhlaghpourRNABased]], 