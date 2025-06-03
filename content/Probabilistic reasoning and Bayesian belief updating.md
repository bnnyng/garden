---
aliases:
  - probabilistic reasoning
  - prior probability
  - priors
  - posterior probability
  - Bayes' rule
  - likelihood
tags:
  - permanent-note
  - topic-cognitive-science
  - COGS-UN1001
publish: "true"
date: 2022-12-21
lastmod: 2025-05-28T10:57:19-04:00
---
>[!quote] Laplace
>”Probability theory is nothing but common sense reduced to calculation.”

$\quad$Probabilistic reasoning uses **subjective probabilities**—the interpretation of probabilities as degrees of belief—which can be computed using Bayes’ rule, a mathematical theory of learning that specifies how to combine prior knowledge with information provided by new data.

>[!definition] Bayes’ rule for updating beliefs
>Suppose that a learner assigns **prior probabilities** $P(h)$ to each hypothesis $h \in \mathcal H$. Given new observed data $d$, we can calculate **posterior probabilities** assigned to each hypothesis by
>$$
>P(h|d) = \frac{P(d|h) P(h)}{P(d)} = \frac{P(d|h)P(h)}{\sum_{h' \in \mathcal H}P(d|h') P(h')},
>$$
>where the expansion in the final denominator follows from the marginalization principle $P(d) = \sum_h P(d, h)$ and the chain rule $P(d, h ) = P(d|h) P(h)$. This is often expressed as $$ P(h|d) \propto P(d|h) P(h) $$ to emphasize the denominator’s role as a normalizing constant.

$\quad$From a cognitive science perspective, Bayes’ rule describes how a [[Rationality in cognitive science|rational]] agent should approach the [[The problem of induction|problem of induction]]. Bayes’ rule encodes two facts about how our beliefs change in response to new evidence: if we believe an event has a low probability, then the probably is still low in spite of reliable evidence; and if new evidence is unreliable, then our beliefs will change very little.

**Related notes:**
- [[Frequentist, subjectivist, and primitivist interpretations of a probabilistic locution]]
- [[Conditional probability and Bayes' rule]]
- [[Bayesian models of cognition]]
- [[Pragmatic Bayesian modeling]]

---
# Bayesian likelihood

$\quad$ The term $P(d|h)$ is the **likelihood**, which give the probability of observing $d$ if 

![[Pasted image 20250528105708.png]]