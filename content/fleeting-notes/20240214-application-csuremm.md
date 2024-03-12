---
tags:
  - fleeting-note
  - career/application
lastmod: 2024-03-03T18:56:54-08:00
---
# Overview

[Program information](https://www.math.columbia.edu/programs-math/undergraduate-program/undergraduate-research/csuremm/)

>Columbia Summer Undergraduate Research Experiences in Mathematical Modeling (CSUREMM) is a comprehensive ten-week program designed for collaborative summer research experiences in mathematical modeling among undergraduate students.
>
>The program serves a dual purpose: firstly, to familiarize participants with advanced topics in mathematical modeling and simulation, as encountered in contemporary interdisciplinary research, and secondly, to facilitate the proposal and development of collaborative interdisciplinary research projects. These projects are conducted under the joint mentorship of Columbia graduate students and faculty.

---

# Application checklist

- [x] One-page CV/resume
- [x] Statement of interest (maximum 1 page)
- [x] Project proposal (maximum 2 pages)
- [x] Transcript

---

# Supplementary questions

## Short answer

> **Briefly describe your computing skills***
> _Computing skills are highly beneficial to have for the program, but are not mandatory._

I have taken Data Structures & Algorithms. I am proficient with Python (primarily used this in past research and modeling experiences), Java, and Git for version control; I have basic knowledge of R and MatLab. 

>**Briefly describe your research skills***
>_While prior research experience is not a prerequisite, if you have engaged in research projects before, please provide details about them. Include information such as the topic, advisor, dates, and your specific contributions to the projects._

Topic: Computational neuroscience
PI: Grace Lindsay
Department: NYU Center for Data Science
Dates: June 2023 - August 2023
The goal of my project was to extend Dr. Lindsay’s thesis work that uses convolutional neural networks to model visual attention. I designed and ran experiments under novel conditions—changing the convolutional kernel size/max pooling, analyzing by feature maps vs. individual units—as well as investigating whether gradient values were a valid measure of function in the first place (a basic assumption in the original work) by selectively permuting the units in a CNN layer. In practical terms, I used PyTorch to train custom CNN models and wrote hook functions to perform unit-wise analysis. A poster to summarize my work can be found here: https://www.linkedin.com/in/bonnie-yang-1198a522a/overlay/1635539607457/single-media-viewer/?profileId=ACoAADlwzGUBCZUNpsGfOtRoKv3MDJ7kATp_BBI. I was funded by NYU’s undergraduate research fellows program.

Topic: Applied linear algebra/optimization
PI: Brian Plancher
Department: Barnard Computer Science
Dates: January 2023 - May 2023
I assisted with a master’s student’s proof of the optimality of a certain matrix preconditioner. Because generating an original proof was outside the scope of my mathematical ability, I generally performed literature reviews and presented useful results, typically 1-2 papers, at weekly lab meetings. Later in the project, I verified propositions with numerical examples and ran simple simulations with dynamics equations in MatLab (e.g., seeing if this conditioning was really most efficient in a pendulum setting).

Topic: Molecular biology
PI: Matthias Quick
Department: Columbia Psychiatry
Dates: March 2022 - August 2022
I assisted with an extended investigation on the structure of the serotonin transporter protein by performing different experimental procedures in the “wet” lab. This mostly leveraged skills of organization and attention to detail, as well as disciplined lab safety practices when handling radioactive chemicals. Because I had no prior exposure to the field, I spent time independently studying organic chemistry and molecular/cellular biology, and I showed that I was quickly able to develop a functional understanding of technical topics. I was funded by Barnard’s SRI.

## Statement of interest

>_Provide a brief explanation of your motivation to participate in the program. Include details about your background, educational goals, and scientific interests. Clearly articulate what you hope to achieve by participating in CSUREMM. **Upload a one-page "Statement of Interest" (pdf).**_

- Background
	- Current major in mathematics and cognitive science
	- Appealed to me because of interdisciplinary study – I am broadly mostly interested in the CS and psychology subdivisions
	- Academic research of varying degrees
- Educational goals
	- Exploring research career
	- Interested in Ph.D. to build expertise in an area
- Scientific interests – computational cognitive science
	-  Mathematical modeling has historically revealed processes intractable from behavioral experiments alone – long history of modeling in cognitive science
	- What kind of questions, problems, and themes do I want to solve?
	- Currently sort of the newest developments in engineering human-like intelligence
	- Topics
		- Probabilistic programming / probabilistic reasoning, typically formalized as Bayesian theory of cognition
		- “Inductive problems”
		- “Core knowledge” from Spelke
		- Cultural evolution and spreading information/learning from other people (Griffiths)
		- Modeling cognitive development – super fascinating how children are able to learn!
		- Perhaps probing large language models to check for similar understanding
	- People
		- Josh Tenenbaum
- Why CSUREMM? – How will the program help me achieve goals?
	- Short term: help me learn techniques to use in a senior thesis
	- Long term: prepare or introduce me to work that I will be doing for the next few years in grad school
	- What CSUREMM offers me that’s different from other experiences
		- Structured guidance coupled with more autonomy over my own project than working with a lab, new compared to other research experiences
		- Exposure to applications of mathematical modeling in a wide variety of domains, rather than being restricted to the “established” techniques in a single field 
			- Both in interdisciplinary project (in the case that we do a different proposal) and case studies
		- Targeted development of communication – other labs I’ve just been…”attached”? What’s a better word for this? Structured program of CSUREMM teaches me how to engage with a research *community*
	- CSUREMM components
		- Interdisciplinary group project
		- Lectures in mathematical modeling
## Project proposal

>_Submit a proposal of up to two pages outlining a real-world problem you wish to address. Your write-up should encompass a brief background, your research motivation, one or two proposed research questions, and a minimum of two peer-reviewed references. Evaluation of proposals will focus on the merit of the research question and the feasibility of the proposed project, irrespective of the chosen topic area. The decision to pursue this research during the program will be made collaboratively by you and your team during the first week of the program._

[[20240214-csuremm-project-proposal]]