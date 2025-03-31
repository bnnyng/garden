---
aliases: 
tags:
  - fleeting-note
date: <% tp.file.creation_date() %>
lastmod: 2025-03-29T08:30:16-04:00
---
[[2025-03-06]]
# Week 7, Day 2: Transformational Abstraction
---


**Review: Philosophical theories of abstraction**

| Name of theory                | How abstract concepts are formed                                                                                                           | Problems                                                                                                                                                                |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Abstraction-as-subtraction    | Subtracting away details from particular instances of objects in the category (cf. [[Coarse-graining\|coarse-graining]]).                  | Seems to already require the knowledge of the concept to know details; particular instances may have exceptional details while still fitting under the general concept. |
| Abstraction-as-composition    | Built by combining basic ideas.                                                                                                            | Not empiricist, since requires more basic concepts.                                                                                                                     |
| Abstraction-as-representation | Using particular instances to stand in for a category (**exemplar** model vs. **prototype** or averaged model).                            | Not really abstraction?                                                                                                                                                 |
| Abstraction-as-invariance     | Identifying properties that remain unchanged across various transformations (see recent paper: https://doi.org/10.1177/09567976241309615). |                                                                                                                                                                         |
- *Discussion.* $\ \text{}$ How much of human learning of abstract concepts is **supervised**? School is a paradigmatic example of supervised learning.
- *Discussion.* $\ \text{}$ Does an animal performing perceptual discrimination (e.g., recognizing if another animal is a threat, mistakenly assuming humans are conspecifics of their own species) require concepts?

**Transformational abstraction**

- Buckner argues that while these four kinds of abstraction are traditionally thought of as competing philosophical theories, they may actually be complementary parts of concept acquisition.
	- *Question.* $\ \text{}$ Do transformers count as cognitively inspired?
- Buckner argues that what deep [[Convolutional neural network|convolutional neural networks]] do is **transformational abstraction**. This gives an answer to *how* DCNNs learn.
	- Unfortunately, this definition is a bit self-referential: “What is transformational abstraction? It is what DCNNs do. What do DCNNs do? Transformational abstraction.”
- Transformational abstraction is characterized as a *sandwich* of abstraction-as-subtraction and abstraction-as-composition.  But is this all it is?

**Presentation: [[@2021lee]], “Controlled-rearing studies of newborn chicks and deep learning models”**

- Newborn chicks are capable of **one-shot learning** to develop view-invariant recognition, while CNNs are thought to be relatively data-hungry.
- Experimental design:
	- In a 2013 study, chicks are placed in a **controlled-rearing** chamber where they only view one object from a single viewpoint range for the first week of life (**training phase**). In the second week (**testing phase**), chicks were tested for recognition of the object in a **forced choice task**, with success operationalized as spending more time with the familiar object. Chicks were generally successful, including when the object was shown from novel viewpoints.
	- The current study replicates the experiment with minimally trained CNNs (trained and randomly initialized CNNs used as control). The training conditions were, in (# training viewpoints)/(# testing viewpoints): 10/2, 2/10, and 1/11.