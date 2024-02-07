---
lit-author: "[[Mitchell, Melanie]]"
aliases: 
tags:
  - literature-note
title: "Chapter | The Copycat Project: A Model of Mental Fluidity and Analogy-making"
publish: 
date: 2024-01-27 13:31
lastmod: 2024-01-28T12:54:46-08:00
---
# Summary

*By [[Hofstadter, Douglas|Douglas Hofstadter]] and [[Mitchell, Melanie|Melanie Mitchell]]* – [Document link](https://melaniemitchell.me/PapersContent/CopycatChapter.html)

Chapter 5 in *Fluid Concepts and Creative Analogies*. Resource for my [[20240116-copycat-implementation|Copycat implementation project]].

---
# Key terms


---
# Notes

## Three major components of the Copycat architecture

### Slipnet

- Roughly, the **Slipnet** is the [[Squire's taxonomy of long-term memory|long-term memory]] that stores types of “Platonic” concepts (rather than specific instances).
- Distances between concepts in the Slipnet determine how likely a slippage is.
- Each concept is represented by a **node**, which has an *a priori* **conceptual depth** to measure its abstractness.
	- *More abstract concepts are more important to the “essence” of a situation. Upshot: greater conceptual depth means the node has more influence on perception!*
	- Nodes with greater conceptual depth are less prone to slippage: “*Deep stuff doesn’t slip in good analogies.*”
- A concept is like a “probabilistic cloud” around a node.
	- *Concepts in the Slipnet are emergent, rather than explicitly defined.*
- The Slipnet is distinct from both computationalist and connectionist networks.
- Fundamental structures, or “topology,” in the Slipnet do not change.

### Workspace

- The **Workspace** is the [[Memory|short-term or working memory]] that contains instances of concepts and temporary perceptual structures for use in Copycat’s perceptual activity.
- Objects in the Workspace begin as raw data that represents the current situation, and gradually acquire **descriptions** linked by **perceptual structures** based on the Slipnet’s concepts.
- Objects with more descriptions and higher activations in the associated nodes are more important, or **salient**; this depends on both Workspace and Slipnet states.
- **Bonds** connect objects into a “coherent mental structure” by representing relationships between pairs of neighboring elements in a single letter-string.
	- Potential pairs are selected and scanned *probabilistically*.
- **Groups** are sets of objects that are bonded together by a single type.
	- Groups are higher-level objects with their own descriptions, salience, and strengths.
	- Groups allow for higher-level perceptual structures to be built.
- **Correspondences** between different end-objects build a mapping between different string frameworks.

### Coderack

- The **Coderack** is a “waiting room” from which task-performing agents are randomly selected.