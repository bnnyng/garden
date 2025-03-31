---
aliases: []
tags:
  - fleeting-note
date: 2024-11-23 00:59
lastmod: 2024-12-27T10:19:30-08:00
---
# Overview

- [[ucr-final-abstract|UCR final abstract]]
- Additional examples:
	- Marina’s paper from 2023 CogSci proceedings: https://escholarship.org/uc/item/49w48008

---
# Prompt

- [ ] Demonstrate “thinking like a scientist” – describe future directions
- [ ] Write for people broadly trained in sciences, not necessarily domain experts
- [ ] Short opening paragraph with “broader picture”
- [ ] Methods – describe specific contributions to work and skills acquired

>The ideal essay is one written by the nominee reporting on a research project she or he has completed. The essay should be written as if it were an article to be published in a scientific periodical and read by a professional audience. Methodology that is well documented in the literature should be referenced and not described in detail in the essay. 
>
>The first page should be devoted to describing the project and its essential methodology, and the second page should be devoted to the results, including the data collected, and to an analysis of the results, including the data and the significance of the findings. If the research project is underway but not completed, the first page of the essay should be similar to that for a completed project. The second page should discuss the work that has been completed, followed by what data have been collected and what will be collected. The final part should discuss how these data will be analyzed.

---
# Outline

1. Introduction
	1. “Bigger picture” opening paragraph
		1. More generally, shows successful large-scale collaboration between researchers
	2. Mathematics is good for studying collaboration
		1. Significant contributions come from previously proved “atomic” results, so all it takes is for someone to see the bigger picture
		2. In this way, major discoveries are inevitable
		3. Qualities of “good mathematics,” after Tao
	3. Qualitative and quantitative summaries exist, but we take a closer look at the cognitive science dynamics—look at both semantic and cognitive content
		1. Define both cognitive and semantic “topics”
2. Methods
	1. Web scraping of comments
	2. Topic modeling and analyses
	3. ChatGPT correlations pipeline—interrater agreement, etc.
3. Results
4. “Discussion”
	1. Conclusion
		1. Mathematics is good for studying collaboration
	2. Future directions

---

# Campus pre-application

Mathematics is a highly social practice, yet most accounts of mathematical discovery are subjective, introspective reports of individual cognition. Further, most artifacts of mathematical practice are polished proofs and papers that offer little insight into the underlying reasoning process. Fortunately, online forums provide a rich source of data for informal discussions and collaborative activity, including collaborative problem-solving. The Polymath Project, initially based at the blog of mathematician Tim Gowers, is an open opportunity for people to work together on advanced problems and open questions in mathematics by replying to each other in blog comments.

In this project, I study collective mathematical reasoning by examining comments from the 20 Polymath problems—16 involving original research, and 4 “mini” 

the first Polymath problem, an original research effort to develop a new proof of the Hales-Jewett theorem. To quantify the content structure of each comment, we first filter for semantically significant words, leaving words associated with distinct sub-problems, strategies, or mathematical ideas. Then, we fit a probabilistic topic model to represent each comment at multiple levels of semantic granularity: a set of 30 topics that captured language unique to each stage of the problem-solving process, and a coarse-grained set of 8 topics that matched real mathematical subfields like Fourier analysis and graph theory. We look at how “topic diversity” (Jensen-Shannon divergence) of the comments changes over time.