---
aliases:
  - UCR program
  - UCR final abstract
tags:
  - workspace
  - polymetamath
publish: 
date: 2024-08-08 11:56
lastmod: 2024-08-29T13:52:21-07:00
---
*Written for the SFI Undergraduate Complexity Research program, Summer 2024.*

Mathematics is a highly social practice, yet most accounts of mathematical discovery are subjective, introspective reports of individual cognition. Further, most artifacts of mathematical practice are polished proofs and papers that offer little insight into the underlying reasoning process. Fortunately, online forums provide a rich source of data for informal discussions and collaborative activity, including collaborative problem-solving. The Polymath Project, initially based at the blog of mathematician Tim Gowers, is an open opportunity for people to work together on advanced problems and open questions in mathematics by replying to each other in blog comments.

In this project, we study collective mathematical reasoning by examining comments from the first Polymath problem, an original research effort to develop a new proof of the Hales-Jewett theorem. To quantify the content structure of each comment, we first filter for semantically significant words, leaving words associated with distinct sub-problems, strategies, or mathematical ideas. Then, we fit a probabilistic topic model to represent each comment at multiple levels of semantic granularity: a set of 30 topics that captured language unique to each stage of the problem-solving process, and a coarse-grained set of 8 topics that matched real mathematical subfields like Fourier analysis and graph theory. We look at how “topic diversity” (Jensen-Shannon divergence) of the comments changes over time.

We find that the way mathematicians navigate ideas in the first Polymath problem is best characterized as a multi-scale phenomenon. Diversity of the comments over 8 coarse-grained mathematical topics decreases over time, indicating convergence on and exploitation of a particular mathematical subfield. However, the relative diversity of the comments over 30 fined-grained topics increases as mathematicians explore over a more compact space of ideas. Relative diversity reaches its maximum toward the middle of the process, splitting the project into two distinct phases: coarse-grained exploitation with fine-grained exploration, then overall exploitation in later stages.

Overall, our work introduces computational methods for characterizing collective reasoning in highly specialized domains.