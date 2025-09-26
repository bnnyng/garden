---
aliases:
  - vNM utility theorem
  - vNM rationality axioms
tags:
  - permanent-note
  - topic-logic-mathematics
publish: 
date: 2025-06-11T13:27:13-04:00
lastmod: 2025-06-26T22:38:30-04:00
---
# Overview

$\quad$ The **von Neumann–Morgenstern utility theorem** states that the **von Neumann–Morgenstern rationality axioms** give the necessary and sufficient conditions for an [[Agent|agent’s]] preferences to be represented as a **utility function**, or the expectation of some scalar-valued function of outcomes.

$\quad$The vNM results motivate the **revealed preference** approach to utility, which holds that utilities—and, by extension, probabilities—are revealed by an agent’s choices instead of being directly measurable psychological or neural properties ([[@2024griffithsBayesian]], p. 200). The revealed preference approach often distinguishes economics, where utilities and probabilities are theoretical constructs for predicting **choice behavior**, from cognitive science. Applied to [[Bayesian models of cognition]], the revealed preference perspective views the mind as behaving *as if* it makes probabilistic calculations, rather than claiming that the mind actually *represents* utilities or makes [[Probabilistic reasoning and Bayesian belief updating|probabilistic inferences]].

---

# The rationality axioms

$\quad$ Let $\mathcal H$ be a set of finite length sequences of some countable set of entities (e.g., an observation-action pair $(o, a) \in \mathcal O \times \mathcal A$ in a [[(Sequential) decision problems|sequential decision problem]]; see linked note for definition of $\mathcal H$ as a **history** of observation-action pairs). For all *distributions* of entities $A, B \in \Delta (\mathcal H)$, define a [[Relation|relation]] by the following: 

- $A > B$ if $A$ is **strictly preferred** to $B$;
- $A = B$ if $A$ is **indifferently preferred** to $B$;
- $A \geq B$ if $A$ is **weakly preferred** to $B$, meaning $A$ can be either strictly or indifferently preferred to $B$.

$\quad$ Further, for any $A, B \in \Delta (\mathcal H)$ and any number $\alpha \in (0, 1)$, let $$ \alpha A + (1-\alpha)B \in \Delta (\mathcal H)$$ be the distribution that samples an entity from $A$ with probability $\alpha$ and an entity from $B$ with probability $(1- \alpha)$. 

| Axiom        | Statement                                                                                                                                                         | Intuition                                                                                                                            |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| Completeness | For all $A, B \in \Delta (\mathcal H)$, we have at least one of $A \geq B$ or $A \leq B$ (with $A = B$ if both are satisfied).                                    | An individual must have *some* preference judgement between any two (distributions of) entities $A, B$.                              |
| Transitivity | For all $A, B, C \in \Delta (\mathcal H)$, if $A \geq B$ and $B \geq C$, then $A \geq C$.                                                                         | Consistent preferences are not cyclical.                                                                                             |
| Continuity   | For all $A, B , C \in \Delta (\mathcal H)$, if $A \geq B \geq C$, then there exists $\varepsilon \in [0, 1]$ such that $\varepsilon A + (1 - \varepsilon) C = B$. | There is a “tipping point” where when one becomes indifferent to a mixture of outcomes that are individually more or less preferred. |
| Independence | For all $A, B, C \in \Delta (\mathcal H)$ and $\alpha \in (0, 1)$, we have $A \geq B$ if and only if $\alpha A + (1-\alpha) C \geq \alpha B + (1-\alpha) C$.      | $A$ is truly preferred to $B$ just in case the *chance* of having $A$ or $B$ does not change this preference.                        |

---
# The utility theorem

$\quad$ The vNM utility theorem states that the rationality axioms hold *if and only if* there exists a utility function whose expected value for any distribution over entities (e.g., distributions of histories in sequential decision problems) is consistent witht he preference relation.

>[!theorem] von Neumann–Morgenstern utility theorem
>A binary preference relation on $\Delta (\mathcal H)$ satisfies the axioms above if and only if there exists a **utility function** $u : \Delta (\mathcal H) \to \mathbb R$ such that:
>- (i) For all $A, B \in \Delta (\mathcal H)$, we have $A \geq B$ if and only if $u(A) \geq u(B)$.
>- (ii) For all $(\sum_i \alpha_i A_i) \in \Delta (\mathcal H)$ where $\alpha_i \in (0, 1)$, we have $$ u \left ( \sum_i \alpha_i A_i \right ) = \sum_i \alpha_i u (A_i). $$
>
>Further, $u$ is unique up to positive affine transformations.



---

# References

- [[@1944vonneumannTheory]], *Theory of Games and Economic Behavior*
- [[@2023bowlingSettling]], “Settling the reward hypothesis”
- [[@2024griffithsBayesian]], *Bayesian Models of Cognition* (Chapter 7)
- [[@2025icardResource]], *Resource Rationality*

---
# Code snippets

```
\Delta (\mathcal H)
```