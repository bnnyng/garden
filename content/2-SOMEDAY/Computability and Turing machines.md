---
aliases:
  - Turing Machine
  - Hilbert's Entscheidungsproblem
  - Church-Turing thesis
tags:
  - permanent-note
  - topic-physics-complexity
  - wip
publish: "true"
date: 2024-09-26 11:53
lastmod: 2024-10-01T11:57:38-04:00
---
# Overview

Turing machines are computational systems that are simple enough to enable proofs that hold for formal systems more generally. They exemplify an approach to computation that involves algorithms 

The Church-Turing thesis is the *empirical claim* that to prove whether or not an algorithm exists for a given procedure, it suffices to prove whether or not a Turing machine exists to perform the same procedure. The thesis is empirical because it cannot be formally proven, only falsified; “every computational system *so far* seems computationally equivalent to Turing Machines.”

>[!abstract] Church-Turing thesis
>Every “effectively calculable” function (e.g., function for which there exists an algorithm to compute) is computable by a Turing Machine. That is, if an algorithm exists, then there exists a Turing Machine that can perform that algorithm.

Turing machines minimize [[§ Intelligence]] during computation, so that explanations of computational ability don’t have to appeal to some other substrate (e.g., appeal to [[Degrees of emergence|strong emergence]]). [[Recognition and discernment is the only trace of intelligence in a Turing machine, after Dennett]].

Related: [[Computability and grammars]]

---
# Turing machine model

A Turing machine has three components:
1. Infinite tape;
2. Read/write “head”;
3. A control unit, which is a set of instructions.

---
# Hilbert's Entscheidungsproblem

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