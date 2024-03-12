---
aliases:
  - 2024 CSUREMM application
tags:
  - fruit
publish: 
date: 2024-03-03 18:47
lastmod: 2024-03-04T16:09:23-08:00
---
Essay responses for the [2024 Columbia Summer Undergraduate Research Experience in Mathematical Modeling](https://www.math.columbia.edu/programs-math/undergraduate-program/undergraduate-research/csuremm/).

Associated notes:
- [[20240214-application-csuremm]]
- [[20240214-csuremm-project-proposal]]

References:
- [[2020-dasgupta-et-al-a-theory-of-learning-to-infer]]
- [[2020-bayesian-models-of-conceptual-development]]

----

# Statement of interest

>*Provide a brief explanation of your motivation to participate in the program. Include details about your background, educational goals, and scientific interests. Clearly articulate what you hope to achieve by participating in CSUREMM.*

I am a rising junior at Barnard studying mathematics and cognitive science. I was eager to
study the latter even before college, but I only developed a fascination with the former after
impulsively taking a math class in my sophomore fall. Since then, I have been interested in
applying computational methods to existing rich behavioral data to better explain human and
human-like intelligence.

Outside of academics, I have been an assistant in labs in a range of fields—molecular
biology, applied linear algebra, and computational neuroscience. Each of these leveraged different
skills—physical dexterity, theory-based literature review, and creative programming,
respectively—but more importantly, gave me experience in research processes and culture as a
whole. Most recently, in winter 2024, I participated in CUMMW and the Mathematical Contest in
Modeling, which gave me exposure to the of real-world problems and tight collaboration that
enables me to be a successful participant in CSUREMM. I currently plan to obtain a Ph.D. in
cognitive science or a related field, and I am exploring the idea of a long-term research career.
My scientific interests lie in computational cognitive science, which typically involves using
mathematical modeling and computer simulation to study human learning and reasoning. I want
to investigate what allows humans to outperform other animals and artificial agents on these
processes, a problem of making causal accounts that cannot be extracted from traditional
behavioral experiments, but can be from models. It is generally accepted that humans reason
probabilistically, which can be modeled in a straightforward way using Bayes’ rule. The
remaining questions that particularly interest me—how systematic reasoning errors arise, how to
explain humans’ unparalleled ability to develop cognition in childhood—requires coupling
rigorous behavioral studies with innovative modeling techniques. One example of the bridge
between cognitive theory and modeling that I am inspired by is Ullman & Tenenbaum (2020),
which begins with the claim that building mental representations is the same as inference in a
hierarchical probabilistic program, then shows that generative programs are a plausible
explanation for intuitive physics knowledge in humans by comparing model performance to infant
studies  \[1].

By participating in CSUREMM, I hope to make tangible progress on my career goals and
benefit from the targeted training that I lacked in my other research experiences. In the short term,
the program will teach me practical modeling strategies that I will apply in my cognitive science
senior thesis in the 2025-2026 school year. Looking further ahead, the experience, and
specifically the interdisciplinary modeling project, will prepare me for the style of work I plan to
do in graduate school; a significant difference between CSUREMM and my past experiences is
the autonomy I will have over my research project, as opposed to merely carrying out others’
experiments. Further, CSUREMM will give me valuable exposure to modeling applications in a
wide variety of disciplines through both case studies and the research project itself (particularly if
my team does not end up doing my particular proposal). Given the many definitions and forms of
mathematical modeling, I am excited to explore outside of the “established” techniques of my
field.
1


---
# Project proposal

>_Submit a proposal of up to two pages outlining a real-world problem you wish to address. Your write-up should encompass a brief background, your research motivation, one or two proposed research questions, and a minimum of two peer-reviewed references. Evaluation of proposals will focus on the merit of the research question and the feasibility of the proposed project, irrespective of the chosen topic area. The decision to pursue this research during the program will be made collaboratively by you and your team during the first week of the program._

Problems of induction involve understanding the underlying process for
generating some observed data in the world, then using that knowledge to
make predictions on new observations. In the field of cognitive science,
Bayesian theories of cognition hold that people perform inductive
reasoning *probabilistically*. Specifically, the brain is an inference
system that takes input data and returns the probability of a hypothesis
or hypothesis subset, a process called *querying*. When given some new
data $d$, people change their belief in a hypothesis $h$ about the
data-generating process in accordance with Bayes' rule
$$\label{eq-bayes-rule}
    P(h|d) = \frac{P(d|h)P(h)}{P(d)} = \frac{P(d|h)P(h)}{\sum_{h' \in \mathcal H}P(d|h')P(h')},$$
where $h'$ represents the possible alternative hypotheses in the
hypothesis space $\mathcal H$. The *prior probability* $P(h)$ gives the
degree of belief that $h$ is the data-generating process before seeing
any data $d$, while the *posterior probability* $P(h|d)$ gives the
belief in $h$ given that $d$ is observed. The connection from prior to
posterior is weighted by the *likelihood* $P(d|h)$, the probability of
observing $d$ if $h$ is the true process, and the *marginal likelihood*
$P(d)$ is the probability of observing $d$ over all possible hypotheses.
(Additional basic details about Bayesian inference, such as parameter
estimation and model selection, are given in
[@Griffiths2008BayesianMO].)

One challenge to the framework is that, in reality, people
systematically deviate from the optimal computation of Equation
[\[eq-bayes-rule\]](#eq-bayes-rule){reference-type="ref"
reference="eq-bayes-rule"} by *underreacting* to the prior and/or the
likelihood [@Dasgupta2019ATO]. Understanding these errors is not only
fundamental to the goal of cognitive science---explaining human
cognition at knowledge, algorithmic, and physical levels---but also
extremely relevant to the machine learning and artificial intelligence
industries. Indeed, an accurate Bayesian account would be a paradigm
shift in engineering human-like intelligence, compared with the
stagnating connectionist methods used in industry.

A promising class of explanations for reasoning errors are rational
process models, where people make domain-general approximations to
reduce computational costs. Rational process models are mathematically
implemented using *approximate inference algorithms*, which avoid the
costly computation of the marginal likelihood when estimating the
posterior [@Dasgupta2019ATO]. The most common strategies in the
literature are *hypothesis sampling* using Markov chain Monte Carlo
(MCMC), and *variational inference*, which directly optimizes for the
parameters that will yield a distribution as close as possible to the
true posterior [@Salimans2014MarkovCM]. However, classical approximate
inference algorithms do not "learn," and thus do not account for the
context-specificity of people's underreactions.

The focus of my research will be to extend a theory proposed in
[@Dasgupta2019ATO] called *learning to infer*: instead of performing
domain-general variational inference, the brain makes approximations
using a pattern recognition model that maps queries to posterior
distributions. Unlike classical memory-less algorithms, this pattern
recognition model shares parameters across queries, enabling the model
to *generalize* from past experiences and develop "biases" by exploiting
patterns in the posterior. The authors of [@Dasgupta2019ATO] implemented
their theory as the *learned inference model* (LIM), which uses a small
feedforward neural network as the function approximator, and an
objective function that minimizes the expected KL divergence between
approximate and true posteriors under a given query distribution (see
Appendix A for exact computations). Experimental findings confirm that
the LIM accurately captures empirical results for both types of
underreaction, as well as for other cognitive phenomena like memory
effects and belief biases. Thus, learning to infer is an exciting
potential explanation for systematic cognitive errors.

I propose to extend the LIM model for systematic cognitive errors by
incorporating hypothesis sampling. As mentioned earlier, sampling from
the hypothesis space is also a plausible explanation for how the brain
makes approximate inferences (see [@Sanborn2016BayesianBW] for an
evaluation of the model on empirical studies). Instead of using
variations in past experience, hypothesis sampling generates inferences
from a Monte Carlo algorithm based on the current query
[@Dasgupta2019ATO]. From a cognitive science perspective, the success of
hypothesis sampling suggests that the brain does not calculate
probabilities at all, essentially the opposite of learning to infer
[@Sanborn2016BayesianBW]. However, recent work in machine learning has
shown the possibility of combining these theories by modifying the
variational objective function to minimize the divergence from a
lower-dimensional *auxiliary space*, then incorporating the
lower-dimensional posterior in MCMC sampling [@Habib2018AuxiliaryVM].
Intuitively, this makes for more efficient approximation by considering
the subset of hypotheses that have highest probability.

Based on the fundamental assumption in [@Dasgupta2019ATO] that the brain
experiences a trade-off between accuracy and computational cost, I would
like to investigate whether a similar procedure produces systematic
cognitive errors. Specifically, I will modify the LIM model so that the
variational approximation initializes a MCMC sampler, which can be done
using Python's `CmdStanPy` package, then run the same experiments as
those performed with the original model to determine its explanatory
power. This set-up has theoretical importance in cognitive science
because it models situations where people are particularly sensitive to
initial conditions, such as when given explicit instructions or having
strong *a priori* beliefs.

In summary, my project aims to combine two contradictory theories of
error in rational processing: context-specific variational inference and
hypothesis sampling. Both theories can predict when people deviate from
Bayesian optimal reasoning by underreacting to either prior beliefs or
new evidence. My methods are inspired by machine learning procedures
that use the variational approximation as a proposal distribution for
stochastic MCMC sampling, which have a straightforward interpretation in
cognitive science: the brain selects hypotheses it believes in most
strongly. Using an existing variational inference model, the LIM, as my
starting point, I propose to use the LIM's approximation of the
hypothesis to initialize a chain for MCMC. This extension applies past
experiments to new, more realistic situations where people have
particularly strong beliefs. More generally, this project could help
advance understanding of human-like intelligence, a topic of intense
interest to academic and industry practitioners alike.
