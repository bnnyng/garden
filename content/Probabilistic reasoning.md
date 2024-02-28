---
aliases:
  - probabilistic reasoning
  - subjective probabilities
  - Bayesian optimal
  - Bayesian optimality
  - Bayesian suboptimal
  - prior probability
  - priors
  - posterior probability
tags:
  - permanent-note
  - topic-cognitive-science
  - COGS-UN1001
publish: "true"
date: 2022-12-21
lastmod: 2024-02-22T15:25:22-08:00
---
>[!quote]
>”Probability theory is nothing but common sense reduced to calculation.” – Laplace

Probabilistic reasoning uses *subjective* probabilities, which can be computed by Bayes’ theorem. From a cognitive science perspective, Bayes’ theorem encodes two facts about how our beliefs change in response to new evidence: if we believe an event has a low probability, then the probably is still low in spite of reliable evidence; and if new evidence is unreliable, then our beliefs will change very little.

Subjective probabilities are Bayesian optimal when they come from taking a weighted average of past events. However, agents often make incorrect probability judgements because of using heuristics, such as representativeness and availability.

Related: [[Bayesian models of cognition]], [[Metacognition]], [[Conditional probability and Bayes' theorem]]

---

# Key terms

- **Subjective probability** = probabilities of events that are assigned in reasoning.
- **Bayesian optimality** = for discrepant cues, the probability of a cue is determined by taking a weighted average, where each weight depends on the **reliability** of that cue.
- **Bayesian suboptimal** = using **heuristics** to make incorrect probability judgements.
    - **Representativeness** = when asked the probability that A belongs to category B, people often rely on the degree to which A is a **paradigmatic example** of B.
    - **Availability** = when asked the probability of A, people often rely on the ease with which instances of A can be recalled.

---
# Bayes’ theorem from a cognitive perspective


>[!example] Bayes’ theorem
>
> $$ \text{Pr}(H \mid E) = \frac{P(E \mid H) \times P(H)}{P(E)}$$
> 
> - **Posterior** $\text{Pr}(H \mid E)$ = probability assigned to the *possibility* of an event, which is **hypothesis** $H$, when new **evidence** $E$ is gathered.
>- **Prior** = probability based on previous knowledge of likelihood.
>	- **Likelihood** $P(E \mid H) \times P(H)$ = also known as **reliability**; the possibility of new **evidence** $E$ if **hypothesis** $H$ is taken to be true.
>	- **Normalizing constant** $P(E)$ = equal to $P(E \mid H) + P(E \mid \neg H)$.

Bayes’ theorem encodes two facts about how beliefs change:
- If you believe an event is almost impossible (i.e., **prior** probability of $H$ is low), new evidence will not make much of a difference (i.e., **posterior** probability will also be low).
- If you believe your evidence is worthless (i.e., $P(E \mid H)$ and $P(E \mid \neg H)$ are similar), you will stick with what you already believed (i.e., the **posterior** will be close to the **prior**).


