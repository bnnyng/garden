---
aliases:
tags:
  - fleeting-note
  - COMS-E6998
date: <% tp.file.creation_date() %>
lastmod: 2025-09-17T18:30:25-04:00
---
```
\text{ s.t. }
```

[[2025-09-08]]
# Week 2: Introduction to Neuroscience
---

## Course overview

**Computers vs. the brain**

- Brain consumes 16 watts, c.f. 100–10,000,000 watts in brains.

>[!quote] Theodosius Dobzhansky
>Nothing in biology makes sense except in light of evolution.

- (Recall [[@2022levinTechnological]]: “Nothing in biology makes sense except in light of teleonomy”. CP says: Teleonomy only makes sense in light of evolution.)
- Talking points: Culture as a “software” for the brain.
	- Book recommendation: *Educability*; advantage of human species is ability to learn new things and apply them.
- 1958 NYT article: “Electric ‘brain’ teaches itself”; UNIVAC.
	- When CP was growing up, computers were called “electronic brains.”

## History of neuroscience

**Intellectual history**

- Von Neumann’s *The Computer and the Brain*
	- “The brain has much less logical depth than expected.”
	- First mention of brains and computers in the same sentence; also the term “singularity.”
- **Cephalocentric–cardiocentric debate (500 BC – 1000 AD)**
	- Aristotle’s **cardiocentric** theory: “the seat of knowledge is the heart.” 
	- Alcmaeon: first neuroscientist, dissected the optic nerve. Followed by Hippocrates, Galen, Ibn Sinai.
		- Galen settled the source using the “neuroscientific method par excellence: pathologies”
		- Alcmaeon was a Pythagorean; Theano was wife or daughter of Alcmaeon, and possibly wife/student of Pythagoreas
		- **Isonomy:** theory of health concerning opposing life forces 
- **18th and 19th centuries**
	- L. Galvani (1760): electric impulse causes frog legs to kick
	- Broca & Wernicke (1870s): two different kinds of patients with speech pathologies
	- Golgi (1872): stained 5 percent of neurons and saw “beautiful pictures” somehow?
	- Ramon y Cajal: saw Golgi’s pictures and created a theory of the brain
	- CP: “Always a good omen when a scientific field starts with a piece of art”
- **Neuron doctrine vs. reticulism (1880–1900)**
	- **Neuron doctrine:** the brain consists of billions of neurons, which are doing the work of holding knowledge.
		- v.s. Golgi’s view: the brain is a *whole*; the totality of the network is the most important
	- (1906) Fought after receiving the Nobel Prize
	- Ramon y Cajal was “right”: “A lot of doctors were ready to study the neuron, but they were not ready to study the networks.”
- **The view from Karolinska (1906–)**
	- 12 Nobels in medicine have been given to results in neuroscience

**Neuroscience Nobels**

- 1906: The neuron
- 1932: The synapse
- 1936: Neurotransmitters
- 1963: The spike (Eccles, Hodgkin, Huxley)
- 1967: The eye
- 1970: Synaptic vesicles
- 1981: Vision (Sperry, Hubel, Wiesel)
- 1991: Ion channels
- 2000: Plasticity (i.e., how neural connections change with experience; “how brains learn”) 
- 2006: Olfaction (Axel)
- 2014: Grid cells
- 2021: Temperature and touch

## Neuroscience crash course

**The neuron (Ramon y Cajal and Golgi)**

- Components of a neuron: soma, dendrite, axon, cone, myelin (protect the axon and improve electrical conductance), boutons and spines, membrane and its potential
- How many types of neurons are there? Thousands—still undecided!
	- Ongoing work in the Allen Institute
- 60 percent of neurons are in the cerebellum

**The synapse (Sherrington)**

- Components of the synapse: bouton, spine, cleft, synaptic weight
	- Neurotransmitters are contained in the synaptic vesicles
	- Upshot: communication is both chemical and electrical?
	- Plasticity = change in **synaptic strength**
		- *QUESTION.* $\quad$ To what extent is synaptic strength a construct?

**Neurotransmitters (Dale and Loewi)**

- “The main result of a neuron firing is the release of neurotransmitters”
	- Neuron is an “electrical engine”, some affect the postsynaptic membrane potential
	- Others more complex (dopamine, serotonin, etc.)…

**Synaptic vesicles**

- Neurotransmitters recycle themselves!

**Ion channels**

- Holes in the membrane which release and/or accept chemical ions in the cell
- Some are **voltage-gated** (behavior depends on the internal polarity) and others are **ligand gated** (controlled by other neurotransmitters)
- Two key neurotransmitter: Glu is excitatory, GABA is inhibitory
- Concentration of ions define the membrane potential of the neuron

**Spiking**

- Measured in voltage (mV)
- Stimulus → (failed initiations) → neuron undergoes **depolarization** → action potential → repolarization → **refractory period** (impossible for neuron to fire) → resting state
	- Working neurons operate at 20 ms/50 hertz?
- Potassium is the “currency”
- Meanwhile in mathematics/CS, MuCulloch–Pitts neurons (1944); beginning of “computer-brain culture”

## Computational neuroscience

**Marr and the genesis of CN**
- CP a colleague of Marr
- Brain system needs to be studied in three steps: specs, algorithms, hardware
- “Perhaps the most advanced lab of compneuro is run by Abbott and Miller at ZI”

**Vision (Sperry, Hubel and Wiesel)**

- Genesis of the experimental paradigm and “the quest for the neural circuit” (i.e., purpose of experiments)
- The paradigm: tuning curves and receptive fields (see also: [[20240910-reflection-essay-tuning-curves-receptive-fields]])
	- **Tuning curve:** a chart that is characteristic of a neuron; “how the firing rate of a neuron varies with one particular aspect of stimuli” (see: [[@2015brettePhilosophy]])

**Plasticity (Kandel, at CU)**

- Aplysia (sea slugs) are the model organism

**Olfaction (Axel and Buck)**

- How does olfaction work? Each gene “specializes in a particular smell” (i.e., interacts with a specific compound) in the epitherium → olfactory bulb → piliform cortex “understands the smell, and another projection goes to the hippocampus (memory)
	- Unlike other senses (?), smell is genetically specialized
	- Open question: how does a cell choose which molecule to specialize in?

**Place cells and grid cells (O’Keefe and Mosers)**

- **Place cell:** neuron that is activated when you are physically located in a particular place.
	- “If there was only one cell, it’s like there is no cell. One cell can do nothing.”
	- “Tuning curve” looks like a 2D heatmap of activations
- **Grid cells:** a neuron that spikes whenever an animal is located at any node of a triangular grid.
	- Humans have 3D grid cells.
		- *QUESTION.* $\quad$ Fidelity of z axis? Doesn’t vary as much with experience.
	- Tessellation scales to available space
	- CP’s theory of “why”? (e.g., why a hexagon/triangle)
	- Upshots: rats can create abstractions; first Nobel for something not about cellular or sensory neuroscience—a distinction between *sensory* areas and *associations*.

**Temperature and touch receptors (Julius and Patapoutian)**

- Molecular mechanisms of cells

## Parts of the brain

**Cortex**

- 1.5 mm thick, like a napkin, but 2500 cm$^2$
- 6 layers by convention, but could be 3 or 10?
	- Neurons at each layer signal to different areas of the brain, e.g., layer 1 neurons signal to other layers of the cortex


## Measuring the brain

- EEG: 1cm, 10 ms time resolution
- fMRI: 1mm area, 1s time resolution (slow), + ML for parsing fMRI data
- ECoG: highly invasive, surgery required. ~100 $\mu$m, ~10 ms