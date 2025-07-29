---
aliases:
  - decision problem
  - sequential decision problem
  - strategy
  - stationary strategy
  - mixed strategy
tags:
  - permanent-note
  - topic-information-computation-statistics
publish: "true"
date: 2024-11-01 11:30
lastmod: 2025-07-18T16:49:50-04:00
---
# Overview

$\quad$ Traditional decision theory aims to assess the *behavioral* interactions between an agent and its environment by operationalizing the agent’s external behavior as a **strategy** and assumptions about what is “good” or “bad” for the agent as **utility**. 

$\quad$Formally, a **sequential decision problem** is a tuple $\langle \mathcal S, \mathcal A, q, u \rangle$, where $\mathcal S$ is a set of states, $\mathcal A$ is a set of actions, $q : \mathcal H \times \mathcal A \to \Delta (\mathcal S)$ is a **transition function** mapping history-action pairs to distributions over states, and $u : \mathcal H \times \mathcal A \to \mathbb R$ is a **utility function** associating a reward to each action after following a certain history.

**Related notes:**

- [[Markov decision processes]]: a special case of sequential decision problems that satisfy the [[The Markov property|Markov property]], meaning that any two histories $h, h’ \in \mathcal H$ induce the same mapping $q_{h, a} = q_{h’, a}$, and the rewards $u (h, a) = u(h’,a)$ are precisely equal whenever the two histories agree on their final state.
- [[(Resource-)rational analysis]]: a framework distinguished from traditional decision theory by accounting for internal structures that impose constraints on optimal behavior.

---

# Preliminaries: Conceptual primitives of Bayesian decision theory

#### States, observations, and probabilities

- **States:** a set $\mathcal S = \{ s_1, s_2, \ldots \}$ consisting of ways the world may be at any given time; they include everything that might “matter” to an agent.
- **Probability of a state:** the value of function $p : S \to [0, 1]$ assigning a probability $p(s)$ to each state $s \in S$; the fact that this is a [[General definition of probability|probability]] means simply that the axiom $\sum_s p(s) = 1$ is satisfied. The set of all probability distributions on a set $\mathcal S$ is denoted $\Delta (\mathcal S)$.
- **Observations:** a set $\mathcal O = \{ o_1, o_2, \ldots \}$ of (potentially imperfect) inputs taken by the agent to reflect each state.
	- #concept-question  In a bijection with the set of states? 
- **Likelihood of an observation:** for each state $s \in \mathcal S$, a function $\ell(\cdot | s) \in \Delta (\mathcal O)$ for which $\ell (o | s)$ specifies the probability of observing $o \in \mathcal O$ in the current $s$.
- **Posterior probability of a state:** after observing $o$, the probability that $s$ is what generated $o$ is given by [[Probabilistic reasoning and Bayesian belief updating|Bayes' rule]] $$ p (s | o ) = \frac{\ell (o | s) p(s)}{ \sum_{s'}\ell (o | s') p (s')} $$ or, equivalently, the proportion $$ p (s | o ) \propto \ell (o | s) p (s). $$
	- #concept-question $p(\cdot | o) \in \Delta(\mathcal S)$?
	- For a *sequence* of (independently generated) observations $\mathbf o = o_1, \ldots, o_n$, the posterior is proportional to the product  $$ p ( s | \mathbf o) \propto \prod_{i \leq n}\ell (o_i | s) p(s). $$

#### Actions

- **Actions:** a set $\mathcal A$ minimally understood as an event that is directly under an agent’s control. 
	- **Stochastic** or non-deterministic behavior can be represented by the set of probability distributions $\Delta (\mathcal A)$ on $\mathcal A$, where each element gives the probability with which an agent takes a given action.

#### Utility

- **Utility function:** a map $u : \mathcal S \times \mathcal A \to \mathbb R$ that associates each state-action pair with a real-valued quantity $u (s, a)$ that measures, roughly, how “good” or “desirable” it is to take action $a$ in situation $s$.
- **Expected utility of an action:** when state $s$ is uncertain, the expected utility of taking $a \in \mathcal A$ is the average of $u (s, a)$ when $s$ is drawn with probability $p(s)$: $$ \mathbb E U(a) = \mathbb E_{s \sim p}u(s,a) = \sum_{s \in \mathcal S} p(s) u(s, a). $$ Alternatively, if the actions have uncertain outcomes and utility $u: \mathcal S \to \mathbb R$ depends only on the state, we use the expected utility $$ \mathbb EU(a) = \sum_{s \in \mathcal S} p(s|a) u(s). $$

----

# Sequential decision problems and strategies

>[!definition] History
>Let $\mathcal S, \mathcal A$ be sets of possible states and actions, respectively. A **history** $$ h = s_0, a_0, \ldots, s_{t-1}, a_{t-1}, s_t $$ is a sequence of length $2t + 1$ produced by an interaction between an agent an its environment at time $t$, where each action $a_i$ produces a new state $s_{i+1}$. 
>$\quad$The set of all histories of length $2t + 1$ is denoted $$ \mathcal H = \bigcup_t \mathcal H_t. $$

>[!definition] Sequential decision problem
>A **sequential decision problem** is a tuple $\langle \mathcal S, \mathcal A, q, u \rangle$, where:
>- $\mathcal S$ is a set of states;
>- $\mathcal A$ is a set of actions;
>- $q : \mathcal H \times \mathcal A \to \Delta(\mathcal s)$ is a **transition function** capturing environmental dynamics, with $q_{h,a}(s)$ giving the probability of reaching $s$ in one step following history $h$ when the agent performs action $a$;
>- $u : \mathcal H \times \mathcal A \to \mathbb R$ is the **utility function**, with $u(h,a)$ giving the utility or **reward** obtained from taking action $a$ after following history $h$.

>[!definition] Strategy
>A **strategy**, also known as a **policy**, is a function $\sigma : \mathcal H \to \Delta (\mathcal A)$ which specifies a distribution on actions for every possible history $h \in \mathcal H$. We write $\sigma_h(a)$ for the probability of action $a$ at history $h$. A **stochastic policy** is also known as a **mixed strategy**.

---

# Markov decision processes and stationary strategies

**Primary note:** [[Markov decision processes]]

>[!definition] Markov decision process
>A **Markov decision process** is a sequential decision problem $\langle \mathcal S, \mathcal A, q, u \rangle$ which satisfies the following:
>- (i) For all $h, h’ \in \mathcal H$, we have $q_{h, a} = q_{h’, a}$;
>- (ii) Whenever $h, h’$ agree on their last state, the rewards $u (h,a) = u(h’,a)$ also agree. 
>
>Thus, when considering MDPs we write $q_{s, a}$ and $u (s, a)$ instead of $q_{h, a}$ and $u(h, a)$, respectively.

>[!definition] Stationary strategy
>A strategy or policy $\sigma: \mathcal H \to \Delta(\mathcal A)$ is said to be **stationary** if it depends only on the current state, i.e., $\sigma$ is a map $\mathcal S \to \Delta(\mathcal A)$.

---

# Selected quotations

- **Lewis (1974, quoted in [[@2025icardResource]]) on expected utility theory as “a yardstick for rational choice”:** Expected utility theory “is the very core of our common-sense theory of persons, dissected out and elegantly systematized”. (26)
- **Meek and Glymour (1994, quoted in [[@2025icardResource]]); on the tension between predictability of decisions and overriding external causal influences:** “One may view decisions, one’s own or another’s, as the result of a dual system with a default part and an extraordinary part—the default part subject to causes that may also influence the outcome through another mechanism, but the extraordinary part not so influenced and having the power to intervene and displace or modify the productions of the default part.” (28)

---

# References

- [[@2025icardResource]], *Resource Rationality*

---

# Code snippets

```
\langle \mathcal S, \mathcal A, q, u \rangle
```