---
aliases:
tags:
  - fleeting-note
date: <% tp.file.creation_date() %>
lastmod: 2025-09-22T17:09:46-04:00
---
```
\text{ s.t. }
```

[[2025-09-15]]  

# Week 3: The Computer and the Brain
---

**Previous lecture:** [[Papadimitriou-CompBrain-WK2-20250908]]
**Reading:** [[@1958vonneumannComputer]]
**Homework response:** [[20250913-discussion-post-computer-and-brain|Discussion Post: The Computer and the Brain]]

## Review of previous lecture

**Overview**

- Motivating question: Is the brain a computer?
	- Recall Dobzhansky ([[quotations]]): “Nothing in biology makes sense except in light of evolution.”
	- “The brain is a computer, because if we treat it that way then maybe computer scientists will be able to understand it.”

**Intellectual history**

- 1944: **McCulloch–Pitts neurons**.
- 1960s: First **AI winter** arises when it is realized that the single-layer [[Perceptrons and basic learning algorithms|perceptron]], which can do linear classification, cannot do XOR.
- 1945–1980: Genesis of computational neuroscience, following [[Computational, algorithmic, and implementation level analyses of information-processing systems, after Marr (1982)]].
	- “Indispensable for computer science and neuroscience to be in productive collaboration.”
- 1981: Hubel and Wiesel experiment on cat vision establishes modern experimental paradigm for neuroscience—the tuning curve (and receptive field).
	- **Tuning curve:** graded response of the neuron.
	- **Receptive field:** the cutoff (external stimuli) of the neuron’s response.
- **Neuron doctrine:** following [[@1959lettvinWhat]], a single neuron responding to a fly; the view that individual neurons are the computational units.

**Neuroanatomy**

- The cerebral cortex has multiple layers.
- Different recording paradigms:
	- Hubel and Wiesel, classic: single neurons.

**Main results**

- **Grid and place cells:** notably, first result that is about the **association cortex**, presumably where more interesting cognition happens.
	- Each cell activates in the pattern of a “triangulation” of the external environment; taken together, covering the entire environment → suggests the combination at each site leads to a unique code.
	- #question What is the motivation for this term? In which literatures is this used?
- Open question: Can there be meaningful activity by one neuron?
	- CP: “Doubtful. \[…] It’s populations that do the work.”

## Discussion

![[Pasted image 20250922170848.png]]
![[Pasted image 20250922170917.png]]
![[Pasted image 20250922170936.png]]

**Follow-up**

- Vong et al. paper on training with multimodal data, Orhan

## Lecture: Visual neuroscience

**Evolutionary origins**

- Many different independent evolutions of the eye (at least twice, e.g., squid vs. humans); the common ancestor for humans is the *vertebrate* eye (book recommendation?).

**Neural structure of the eye**

- Light passes through the retina to hit **rod** and **cone** cells in the back of the eye (not yet neurons).
	- Light-sensitive cells have a protein that changes shape in response to photon, causing change in membrane potential: *light → current*.
- Rods and cones (light-sensitive cells) have a **graded potential**, and same for **bipolar neurons** → converted to action potential (spike) in ganglion cells → optic nerve and the brain.
	- Bipolar cells = start of computation. Paradigmatically, the **center-surround circuit**.
- Retinal ganglion cells are either **on-center** or **off-center** ([[@1984enroth-cugellFunctional]]).
	- Center-surround receptive fields → edge detectors (basically CNNs).

**The visual system**

- Dorsal pathway for spatial location and action (towards parietal lobe), ventral pathway for characteristics of objects (towards temporal lobe).
	-  Dorsal side has nothing really for color.
- Total time for path: 150 ms (“time it takes to really react to something”), 12–16 synaptic jumps to the highest “visual” areas.
	- Human reaction time is about 250 ms.
	- Image needs to be flashed to the eye for about 30 ms for the eye to realize it is there.
- All information is available in the thalamus. 
- Complete picture emerges through **saccades** (4-8 Hz).
	- Muscles that control saccades receive feedback from the thalamus (between “ladder” of visual system).
	- Jeff Hawkins: “A visual scene is more like a song than a painting.”
- One explanation for the thalamus: evolve one “step” of the visual system ladder at a time.