---
aliases:
  - "Discussion Post: Development of Computational Systems"
tags:
  - fleeting-note
  - PHIL-UN2655
date: 2024-09-22 10:31
lastmod: 2024-09-22T12:55:45-04:00
---
# Sketch

[[@2013dennett]]
- What does it mean when a computer “sorta” has given capacities? Feels vague.
- Algorithms in the brain can “generally be counted on,” but maybe with some noise? Some $\epsilon$ term.
- Conditional branching eliminates the need for an observer

---
# Discussion post

The readings left me feeling well equipped to discuss computers with great conceptual precision (ready to use as “thinking tools”). It’s funny to me that in “On Computable Numbers,” Turing proved his famous universal machines exist as a *lemma* to his proof about the halting problem. For Turing, a (computing) machine is an abstract simulation of a human computer which takes as input a one-dimensional paper tape, and has the following abilities: reading and modifying symbols on the tape; moving back and forth on the tape; and either switching to a new **state** (i.e., internal configuration) or halting. Importantly, the action (decision) depends entirely on the symbol being read and the current state. A universal machine, then, is a machine which can simulate any other machine by taking its description as input on the tape; equivalently, “a single machine which can be used to compute any computable sequence” (computable sequences are entirely described by a machine that computes the sequence, which is itself entirely described by its operations). Circular machines may get stuck or halt entirely. Circle-free machines print out an infinite sequence; equivalently, the next symbol can always be produced in a discrete number of steps. The main result of Turing’s paper is that there does not exist a machine Q that can tell us whether any other machine halts (i.e., is circular or circle-free).

Turing also mentions Godel’s Incompleteness Theorem: “In the formalism of Principia Mathematica there are propositions $U$ \[about the integers] such that neither $U$ nor \[their negations] $-U$.” Incidentally, if we let the Q be “the formalism of Principia Mathematica” and the answer to whether another machine is circular/circle free be any “proposition about the integers” (I think this is suggested by the paper, since machines define computable/enumerable sequences of numbers), the Incompleteness Theorem follows from Turing’s argument. If the Incompleteness Theorem were false, then a formal system like the one Godel used (Q) could be used to prove any proposition that is possible within that formal system (if any other machine halts), which Turing showed was impossible.

I think that the Incompleteness Theorem may also be an interesting thinking tool for considering the limitations of our cognitive theories. As we ourselves are cognitive beings, is there anything that is “impossible” to prove in our own frame of observation? What kinds of self-referential loops does consciousness enable, what kinds of contradictions?