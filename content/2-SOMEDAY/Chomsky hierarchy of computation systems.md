---
aliases:
  - Chomsky hierarchy
  - finite-state machine
tags:
  - permanent-note
  - topic-physics-complexity
publish: 
date: 2024-09-26 12:29
lastmod: 2025-02-27T13:48:51-05:00
---
>[!example] Definition: 
>- **Linear bounded automata:** A [[Turing machines|Turing machine]] with a finite tape length.

Chomsky’s hierarchy characterizes different complexities of grammar via the computational power required to use them.

![[Pasted image 20240926123016.png|400]]

According to Chomsky, our in-principle ability to detect arbitrarily long distance dependencies shows that we are more computationally powerful than a **finite-state machine**, which can only keep track of finitely many inputs; thus, humans are *not* finite-state machines.

Interestingly, this classical debate in computationalist theory is relevant for evaluating the “cognitive” capacities of [[Computationalist and connectionist approaches to cognition|connectionist]] models, like [[Multilayer perceptrons|feedforward neural networks]], today: it follows from Chomsky’s argument that connectionist models will never achieve human-like cognition.

---
# Properties of computation systems

| Computation system | Basic architecture                       | Available memory | Acceptable inputs               |
| ------------------ | ---------------------------------------- | ---------------- | ------------------------------- |
| Look-up table      | Table with two columns, input and output | None             | Finite, predetermined input set |
|                    |                                          |                  |                                 |


---
# Notes

https://lifeiscomputation.com/can-a-finite-physical-device-be-turing-equivalent/
- Three computation systems: look-up tables, finite state machines, Turing machines
- 