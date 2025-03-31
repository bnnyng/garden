---
aliases: 
tags:
  - permanent-note
  - topic-cognitive-science
publish: 
date: <% tp.file.creation_date() %>
lastmod: 2025-01-17T14:04:37-05:00
---
[[@2014shafto]] formalize [[Rationality in cognitive science|rational]] **pedagogical reasoning**—that is, reasoning in a setting in which one agent chooses information to transmit to another agent in order to teach a concept—using a [[Self-reference|recursive]] [[Bayesian models of cognition|Bayesian model]] that captures two problems:
- The **teacher** needs to choose *helpful* examples that serve as data for the learner;
- The **learner** needs to infer the correct concept from the data, under the assumption that the teacher is choosing helpful examples.

The teacher and learner problems form a mutually dependent *system* of equations given by:
$$
P_{\text{teacher}}(d | h) 
\propto
\left(
\frac{P_{\text{teacher}}(d|h)P(h)}{\sum_{h'} P_{\text{teacher}}(d|h')P(h')}
\right)^\alpha,
$$
where $d$ is data chosen by the teacher and $h$ is the *correct* hypothesis. 

The parameter $\alpha$ captures a “soft maximization” of the posterior probability, or the degree to which the teacher tends towards maximizing the posterior instead of choosing the most *representative* samples. As $\alpha \to 0$, the teacher chooses *uniformly* among data consistent with the hypothesis, with $\alpha = 0$ being the case of random sampling (i.e., not helpful) and $\alpha = 1$ representing selection in direct proportion to the posterior probability they give to the target hypothesis. 

Under this model, teachers compute the utility of selecting an example using **theory of mind**. [[@2022chen]] extend this model to capture *uncertainty* during adaptive and interactive pedagogical setting.