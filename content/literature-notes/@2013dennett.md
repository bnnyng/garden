---
citekey: "[@2013dennett]"
aliases:
  - An Interlude About Computers
  - seven secrets of computer power
tags:
  - literature-note
title: Chapter | An Interlude About Computers
year: 2013
permalink: 
publish: "true"
date: 2024-09-10
lastmod: 2024-09-26T12:40:42-04:00
---
> Dennett, D. C. (2013). _Intuition pumps and other tools for thinking_ (1. ed). Norton.

---

# Summary

In this book section, Dennett explains basic concepts of computing machines to prepare for their use as *thinking tools*: in order to compare brains to computers in general, we need to understand what properties computers in general have.

---

# Key terms

- **Register machine** = an idealized computer introduced by philosopher Hao Wang which consists of **registers**, or memory locations with unique addresses, and a **processing unit** that has three abilities: *end* the program, *increment* the contents of a register, and *decrement or branch* a register depending on if the contents are empty.
- **Universal Turing machine** = a program that can “read” the unique identifier of second program and execute it (main page: [[Computability and Turing machines]]).
- **Software** = a systematic list of instructions create an imaginary machine, which may or may not imitate physical hardware (i.e., a **real machine**).
- **Virtual machine** = software that “turns a general-purpose computer into a special-purpose machine that could have been designed and wired up as hardware.”
- **Algorithm** = a “formal process that can be counted on—logically—to yield a certain sort of result whenever it is ‘run’ or instantiated.”
- **Toy problem** = a simple example which is studied in detailed to get an accurate grasp on concepts that apply to larger, “real-world” problems.


---

# Reading notes

## The seven secrets of computer power revealed

>The only satisfactory way of demonstrating that your brain isn’t—couldn’t be—a computer would be to show either (1) that some of its “moving parts” engage in sorts of information-handling activities that no computers can engage in, or (2) that the simple activities its parts do engage in cannot be composed, aggregated, orchestrated, computer-fashion, into the mental feats we know and love.

1. **Competence without comprehension:** “Something—e.g., a register machine—can do perfect arithmetic without having to comprehend what it is doing.”
2. “What a number in a register stands for depends on the program that we have composed.”
	- In [[@2017mccarthy|The Kekulé Problem]]: “The simple understanding that one thing can be another thing is the root of all things of our doing.”
3. “Since a number in a register can stand for anything, this means that the register machine can, in principle, be designed to “notice” anything, to “discriminate” any pattern or feature that can be associated with a number—or a number of numbers.”
	- **Conditional branching is a [[Cognitive signposts|signpost]] in program execution that enables self-reference and self-”reflection”:** “Thanks to the basic “sensory” power embodied in Deb—its capacity to “notice” a zero when it tries to decrement a register—we can turn the register machine’s “eyes” in on itself, so it can examine its own registers, moving contents around and switching operations depending on what it finds where.
4. **Computers *sorta* read:** “Since a number can stand for anything, a number can stand for an instruction or an address.”
5. “All possible programs can be given a unique number as a name, which can then be treated as a list of instructions to be executed by a Universal machine” (see [[@1936turing]], obviously).
6. “All the improvements in computers since Turing invented his imaginary paper-tape machine are simply ways of making them faster.”
7. “There are no more secrets!”

## Virtual machines

- **Virtual machines are an *existence* proof:** “We do now have an important proof of concept: we know at least one way to make sense of the high-level competences of a machine with trillions of moving parts—without invoking any wonder tissue.”
	- Dennett has also called AI an “existence proof for intelligence.”

## Algorithms

- **Three key features of algorithms:**
	- **Substrate neutrality:** “The power of the procedure is due to its *logical* structure, not the causal power of the materials used in the instantiation, just so long as those causal powers permit the prescribed steps to be followed exactly.”
		- #concept-question  Do algorithms have any inherent causal power without a physical substrate? (Implications for whether or not math is real!)
	- **Underlying mindlessness:** “Each constituent step, and the transition between steps, is utterly simple, … requiring no wise decisions or delicate judgements or intuitions on the part of the recipe-reader.”
	- **Guaranteed results:** “Whatever it is that an algorithm does, it always does it, if it is executed without misstep. An algorithm is a foolproof recipe.”

## Automating the elevator

- “…Pseudocode, a sort of mongrel language that is halfway between everyday human language and the more demanding system of source code.”
	- #open-question  Mathematical proofs as a pseudocode between human thinking and logical deduction (outside us?).

## Summary

- **Turing’s machines eliminated the need for an observer to understand signals during computation:** “Turing saw that in one sense this was inescapable: intelligent processes would always require choosing one course or another on the basis of the discrimination of some difference in the signal. But he could reduce this understanding to the barest minimum: conditional branching.”