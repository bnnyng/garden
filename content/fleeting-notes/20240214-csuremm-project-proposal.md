---
tags:
  - fleeting-note
lastmod: 2024-02-26T18:12:05-08:00
---
>_Submit a proposal of up to two pages outlining a real-world problem you wish to address. Your write-up should encompass a brief background, your research motivation, one or two proposed research questions, and a minimum of two peer-reviewed references. Evaluation of proposals will focus on the merit of the research question and the feasibility of the proposed project, irrespective of the chosen topic area. The decision to pursue this research during the program will be made collaboratively by you and your team during the first week of the program._

---
# Notes

## Mathematical modeling and program overview

- Modeling strategy examples
	- Continuous modeling problems (e.g., dynamics of a plant community when exposed to drought): cellular automata, partial differential equations, existing predator-prey equations
- Past project examples
	- Computational model for the spread of the tau protein in Alzheimer’s, improved existing model to account for neuronal death and structural connectivity parameters
	- Sentiment analysis and time series data modeling for stock price prediction
	- Crypto mining simulation
	- (Data) “Impact of increasing climate change-induced natural disasters on school enrollment/child marriage rates in developed vs. developing countries; processed global-scale data sets and performed multivariable regression analysis using the NumPy and Pandas Python libraries”
	- Optimal travel path to exoplanets based on Earth Similarity Index
	- Policy headline sentiment vs. index fund performance
	- Progression of metastatic breast cancer
	- NLP and statistical analysis to evaluate levels of gender bias amongst different organizations—tone weights using sentiment analysis

---
# Log

2024-02-26
- Most interesting modeling problems
	- Probabilistic inference
	- Core knowledge
	- Theory of mind
- Learned inference model extensions (“A theory of learning to infer”)
	- Assumption: perfect understanding of data-generating process
	- Incorporate a priori knowledge (Ajzen, Krynski & Tenenbaum for past behavioral data?)
	- Different phenomena and circumstances for better explanation?
- For my purposes, these are dead ends:
	- Morality, e.g., something to do with Moral Machine data

2024-02-23

- Possible research directions:
	- Theory of mind – richer perceptual data, like used with babies? What variations to try and model?
	- Joint physical and social reasoning
		- Using physics for both baseline and cost functions
		- Effort related to force or distance – Liu, Ullman, Tenenbaum, Spelke 2017
		- Sosa, Ullman, Tenenbaum, Gershman, & Gerstenberg 2021
- Data source: The Moral Machine Experiment!
- Papers and connections
	- [[Ullman, Tomer]], [[Tenenbaum, Josh]] – [Bayesian Models of Conceptual Development: Learning as Building Models of the World](https://pdfs.semanticscholar.org/41b4/208497ea832b59a241708c3fe4b17973175d.pdf?_gl=1*1fny988*_ga*MTMxODU2MDc1LjE3MDg0MDAyNjI.*_ga_H7P4ZT52H5*MTcwODYzOTU0Ny42LjEuMTcwODYzOTcyNS4xNS4wLjA.)
		- Concept learning, Lake et al. 2015
		- Counterfactual reasoning, Gerstenberg & Tenenbaum 2017
		- Action understanding or intuitive psychology, Baker et al. 2017, Jara-Ettinger et al. 2016
		- Minimal nativism and core knowledge, Lake et al. 2017
		- Working computational models of core knowledge, Smith et al. 2019 & 2020
	- Applied Bayesian model for theory of mind
		- Children: Jara-Ettinger, Floyd, Tenenbaum, & Schulz, 2017
		- Action vs. planning: Jara-Ettinger, Schulz, and Tenenbaum (2020)
		- Uncertainty: Baker, Jara-Ettinger, Saxe, and Tenenbaum (2017)
			- Any other similar behavioral studies to adapt? Accounting for some data with more accuracy?
		- Recent work has found initial evidence that inferences about types of minds can be expressed as Bayesian inference of a space of planning and decision-models of varying complexity (Burger & Jara-Ettinger, 2020). More research is needed in characterizing the variability in the different types of minds that we can represent, and formalizing this space to explain how people can jointly infer another agent’s type of mind as well as their mental states.
		- “An Experimental Study of Apparent Behavior” (Heider & Simmel, 1944)
- Technical resources:
	- Probabilistic Models of Cognition textbook: https://probmods.org/

2024-02-14

- Jumping off point with Wikipedia’s [computational cognitive science page](https://en.wikipedia.org/wiki/Computational_cognition), see “External Links” for labs of interest
	- [[Tenenbaum, Josh|Josh Tenenbaum]]’s [Computational Cognitive Science Lab](https://cocosci.mit.edu/) at MIT
		- Mathematical modeling tools “drawn chiefly from Bayesian statistics and probability theory, but also from geometry, graph theory, and linear algebra.”
	- Gureckis’ [Computation and Cognition Lab](https://gureckislab.org/research.html) at NYU’s CDS
		- Might actually be worth reaching out for SRI funding sponsorship
	- Griffiths’ [Computational Cognitive Science Lab](https://cocosci.princeton.edu/index.php) at Princeton
	- [Computation and Cognition Lab](https://cocolab.stanford.edu/) at Stanford
	- Also, Lake’s [Human and Machine Learning Lab](https://lake-lab.github.io/projects/) at NYU
- Looked at free energy principle – out of my depth
- Go through possible Readwise queue
- Gureckis Lab notes
	- Self-directed/active learning
	- Mental representations as symbolic programs
		- “Creativity, Compositionality, and Common Sense in Human Goal Generation”
			- Note: co-authored with Guy Davidson, [[Lake, Brenden]]
			- Computational modeling of goal generation
			- Games are represented as computer programs in domain-specific languages
		- “Question asking as program generation”
			- Note: co-authored with [[Lake, Brenden]]
		- “Generating Human-Like Goals by Synthesizing Reward-Producing Programs”
			- Computational model for generating model human-like goals represented in a “domain-specific language”