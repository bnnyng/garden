---
title: "Book | Complexity: A Guided Tour"
lit-author: "[[Mitchell, Melanie]]"
aliases:
  - "Complexity: A Guided Tour"
tags:
  - fleeting-note
date: 2023-12-28
lastmod: 2024-08-16T15:03:44-07:00
---
# Summary

*By [[Mitchell, Melanie|Melanie Mitchell]]* – [[RAW-20240116-complexity-a-guided-tour|Highlights]]

---
# Notes

## Part 1: Background and History

### Key terms
- **Complex system** = [[Complex systems have nontrivial emergent and self-organizing behaviors]]
	- **Self-organizing** = [[Self-organized behavior arises without an internal or external controller]]
- **Dynamical system** = [[Dynamical systems change over time in some way]]
- **Mechanics** = the general study of motion; Newton’s work is **classical mechanics**
	- **Kinematics** = the study of how things move
	- **Dynamics** = the study of why things obey the laws of kinematics
- **Chaotic system** = [[Chaotic systems have sensitive dependence on initial conditions]]
- **Three-body problem** = using Newton’s laws to determine the long-term motion of three masses that exert gravitational forces on each other
- **Linear system** = [[Linear systems can be understood through their individual parts]]

### What is complexity?
- Complex systems have nontrivial emergent and self-organizing behaviors.
- Complexity science asks how these emergent and self-organizing behaviors actually happen.

## Part 3: Computation writ large

### How to make analogies

>[!quote]
>Analogy-making is the ability to perceive abstract similarity between two things in the face of superficial differences. This ability pervades almost every aspect of what we call intelligence.

> [!quote]
> “All perception of truth is the detection of an analogy.” — Henry David Thoreau

#### *Simplifying analogy*

- **Conceptual slippage** is the key to making good analogies.
- Mitchel proposes the basic problem: if $abc \to abd$, then what is the analogous change for $ijk$?
	- Most humans will say $ijl$ is the best answer; why are we convinced of this?
	- Melanie notes that there are many other plausible answers (and infinitely implausible): $ijd$, replacing last letter with $d$;  $ijk$, replace all $c$ with $d$;  $abd$, replacing the whole string.
	- $iijjkk \to iijjll$, slipping concept from last letter to last *group* of letters.
	- $kji \to lji, kjh$; the second shows slippage from successor to *predecessor*.

#### *How to do the right thing*

- The goal of Copycat is to make letter-string analogies using the same mechanisms in general human analogy-making.
	- Analogy-making is a form of clever imitation.
- All possibilities have to be available, but not equally so (see: [[Exploration-exploitation tradeoff]]).
- Copycat uses a “parallel terraced scan” scheme to explore many opportunities in parallel, allocating resources based on potential; exploration begins sparse, but then is focused on smaller set of possibilities. Thus, exploration strategy emerges from simple components.

#### *Overview of the Copycat program*

- Copycat has the following components:
	- **The Slipnet:** A network of **concepts** which has a central node surrounded by potential associations and slippages.
		- Each **concept node** has a dynamic activation value, which also spreads from the node to its neighbors and decays if not reinforced.
		- Each link has a dynamic resistance value that gives resistance to slippage; the resistance is inversely proportional to the activation of the **label node** naming the link.
	- **The Workspace:** A working area for building perceptual structures over the letters.
	- **Codelets:** Simple agents that explore possibilities for perceptual structures and attempt to build structures, competing in small teams.
	- **Temperature:** A measurement of the amount of perceptual organization in the system. Temperature reflects the degree of randomness with which codelets make decisions.