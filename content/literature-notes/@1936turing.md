---
citekey: "[@1936turing]"
aliases:
  - On Computable Numbers
tags:
  - literature-note
title: Paper | On Computable Numbers
year: 1936
permalink: http://doi.wiley.com/10.1112/plms/s2-42.1.230
publish: 
date: 2024-09-10
lastmod: 2024-09-22T11:47:36-04:00
---
> Turing, A. M. (1936). On Computable Numbers, with an Application to the Entscheidungsproblem. _Proceedings of the London Mathematical Society_, _s2-42_(1), 230–265. [https://doi.org/10.1112/plms/s2-42.1.230](https://doi.org/10.1112/plms/s2-42.1.230)

---
# Summary

In this paper, Turing first defines abstract “computing machines” and shows the existence of **universal machines** that can be programmed to simulate any other machine. 


---
# Key terms

- **Computing machine** = an abstract simulation of a human computer which takes as input a one-dimensional paper tape, and has the following abilities: reading and modifying symbols on the tape; moving back and forth on the tape; and either switching to a new **state** (i.e., internal configuration) or halting. T*he action (decision) depends entirely on the symbol being read and the current state.*
- **Universal machine** = a machine which can simulate any other machine by taking its description as input on the tape; equivalently, “a single machine which can be used to compute any computable sequence.”
- **Circular** = a machine that cannot produce any more symbols of “the first kind” (i.e., 0s and 1s) or halts entirely.
- **Circle-free** = a machine that never halts, printing out an infinite sequence; the next symbol can always be produced in a discrete number of steps.
- **Computable sequence $\gamma$** = a sequence defined by a machine which computes $\gamma$, which can be determined (i.e., described completely) by its operations.
- **Standard description (SD)** = an expression that completely describes the operations of a machine; variables can be substituted for integers to create a **description number (DN)**. “*The DN determine the SD and the structure of the machine uniquely.*”
- **Satisfactory number** = a number that is the **description number** of a **circle-free** machine.

---
# Notation

- $\mathcal M(n)$ = the machine with description number $n$.

---

# Reading notes

## Enumeration of computable sequences

- **Computable $\iff$ enumerable:** “To each computable sequence there corresponds at least one description number, while to no description number does there correspond more than one computable sequence.”

## Application of the diagonal process

>The problem of enumerating computable sequences is equivalent to the problem of finding out whether a given number is the DN of a circle-free machine, and we have no general process for doing this in a finite number of steps.

- Sketch of proof that there is no solution to the halting problem:
	- Suppose, towards a contradiction,

Consider the sequence $\beta$ whose $n$th value is equal to the $n$th value of $\alpha_n$, where $\alpha_n$ is the $n$th computable sequence. That is, we are moving diagonally over the list of computable sequences and their terms.

In particular, a machine $\mathcal Q$ that can tell us whether $\mathcal M$ halts for any other machine $\mathcal M$. 