---
aliases:
  - Hilbert's Entscheidungsproblem
  - Church-Turing thesis
  - Turing machine
  - Turing complete
tags:
  - permanent-note
  - topic-physics-complexity
publish: "true"
date: 2024-09-26 11:53
lastmod: 2025-02-28T00:39:13-05:00
---
# Overview

**Turing machines** are computational systems that give a mathematical precisification of “**human effectively computable**” formulas—an intuitive notion—that are expressed in [[Effectively calculable, recursive, and computable are equivalent descriptions of functions|formal systems]]. A Turing machine has three components: an [[Infinity|infinite]] tape, a read/write “head,” and a control unit with a set of instructions.

[[The Church-Turing thesis]] is the (falsifiable) claim that computability proofs for any formal system can be proven using Turing machines: “If an algorithm exists, then there exists a Turing machine to perform that algorithm.”

A general set of data-manipulation rules is called **Turing complete** if it can be used to simulate any Turing machine.

**Related notes:** 
- [[Chomsky hierarchy of computation systems]]
- [[Undecidability and incompleteness theorems]]
- [[Effectively calculable, recursive, and computable are equivalent descriptions of functions]]

---
# Relation to cognition and intelligence

Turing machines minimize [[§ Intelligence]] during computation, so that explanations of computational ability don’t have to appeal to some other substrate (e.g., appeal to [[Degrees of emergence|strong emergence]]). [[Recognition and discernment is the only trace of intelligence in a Turing machine, after Dennett]].

---
# Relation to formal limitations

>[!example] Definition: Hilbert’s Entscheidungsproblem
> Is there an algorithm that can decide whether any given statement (e.g., a mathematical statement) in a *sufficiently rich* formal system is true or false?


---

# Notes



- Dennett: “competence without comprehension”

A Turing machine has three components: the infinite tape, a “read/write head,” and a control unit, which is a set of *instructions*. 

- Style of computation that involves algorithms over explicit symbols (Luke still thinks this is basis of intelligence)
- A finite state machine that has read/write memory
- Things that don’t allow the Turing Machine to compute anything new (add computational power)
	- Probabilistic Chomsky hierarchy? – non-deterministic state changes
- Von Neumann combines I/O and program