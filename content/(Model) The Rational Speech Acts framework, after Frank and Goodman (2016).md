---
aliases:
  - pragmatic listener
  - RSA
tags:
  - permanent-note
  - topic-cognitive-science
publish: "true"
date: <% tp.file.creation_date() %>
lastmod: 2025-06-09T11:45:51-04:00
---
# Overview

$\quad$The **Rational Speech Acts (RSA) framework** aims to model how people make **pragmatic inferences** beyond the literal semantics of language—essentially formalizing Gricean pragmatics (e.g., [[@1975griceLogic]]). In this situation, we have two agents:

- A **speaker** who is knowledgable about some states $\mathcal S$ and their distribution $P$, and produces “utterances” from a *fixed* set $\mathcal M$ with conditional probability $P_S(m | s)$ for all $m \in \mathcal M$ and $s \in \mathcal S$.
- A **listener** who, for all possible utterances $m \in \mathcal M$, maintains a distribution $P_L(s | m)$ over all $s \in \mathcal S$.

![[Pasted image 20250211153915.png|350]]

$\quad$ In RSA, speakers are [[(Resource-)rational analysis|boundedly rational]] agents who optimize the trade-off between informativeness and utterance costs. Speakers make utterance decisions simulating a listener’s distribution $P_L$, then selecting the message $m \in \mathcal M$ that is most likely to induce beliefs about the true world state.

$\quad$Different listener models correspond to different speaker utilities:

| Listener type   | Description                                                                                                               | Implementation                                                                                                                                           | Speaker utility (of an utterance)                                                                                |
| --------------- | ------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| Literal $L_0$   | Interpret utterances according to “lexical meanings” $\delta_{[m](s)}$: $$ P_{L_0}(s \| m) \propto \delta_{[m](s)}P(s).$$ | Uniform distribution over possible world states.                                                                                                         | Listener’s gain about the true world state after hearing the utterance: $$ U( m \| s) = \log P_{L_0}(s \| m). $$ |
| Pragmatic $L_1$ | Formalize [[Gricean pragmatics]] and account for the relevance of an utterance.                                           | [[Self-reference\|Recursively]] embed a speaker model, which in turn embeds a literal literal listener: $$ P_{L_1}(s \| m) \propto P_S( m \| s) P(s). $$ | Open research question.                                                                                          |

---

# Basic implementation

$\quad$ Let $\mathcal S$ be a set of world states and $\mathcal M$ be a fixed set of utterances.

- The **pragmatic listener’s** inferred world state $s$ is conditioned on speaker choosing utterance $m$: $$P_L(s | m) \propto P_S(m | s)P(s).$$
- The **speaker** $S$ chooses and utterance $u$ in proportion to the expected utility gain (i.e., approximately rationally), where $\alpha$ represents the extent to which utility is maximized (i.e., how rational the speaker will be): $$ P_S(m | s) \propto \exp(\alpha \cdot U(m, s)). $$
- The **speaker utility** is determined by how certain a literal listener $L_0$ becomes about world state $w$ after hearing utterance $u$: $$ U(m ; s) = \log P_{L_0}(s| m). $$
- The **literal listener** updates beliefs about the world under the assumption that the utterance $u$ directly corresponds to a true semantic denotation $[m]$: $$ P_{L_0}(s|m) \propto \delta_{[m](s)}P(s). $$

---

# Variants

#### A resource-rational perspective for (joint) communicative success, after [[@2025icardResource]]



#### Continuous semantics, after [[@2020degenRedundancy]]

#### Integrating epistemic utility with decision-theoretic in speaker utilities, after [[@2024sumersReconciling]]

- The truthfulness, or **epistemic utility**, of an utterance is defined as a penalty on false utterances, with threshold determined by the speaker’s softmax optimality $\alpha$ (around $\alpha = 1$ is a preference for true utterances, while $\alpha \to \infty$ “recovers a more typical RSA constraint to true utterances): 
$$ 
U_{truthfulness} (u | q) = 
\begin{cases}
1 & \text{if }\delta_{[m](s)} = 1 \\
0 & \text{if }\delta_{[m](s)} = 0
\end{cases}.
$$
- The **listener’s posterior** is the expected reward for taking an action $a \in A \subseteq \mathcal A$. Reward is a scalar value $R : \mathcal A \times W \to \mathbb R$ obtained by conditioning the learner’s beliefs about the world state on the utterance, then marginalizing over worlds:
$$
R_L(a, u) = \sum_{w \in W}R(a, w) P_L(s|m),
\quad\quad
P_{L}(s|m) \propto \delta_{[m](s)}P(w).
$$
- The **listener’s decision policy** is a softmax over beliefs that chooses from actions $A \subseteq \mathcal A$ according to their expected utility:
$$
\pi_L (a|u, A) \propto \exp(\beta \cdot R_L(a, u)).
$$
- The relevance, or **decision-theoretic utility**, of an utterance is defined as the expected utility of the listener’s decision policy after hearing it; informally, more relevant utterances induce beliefs that improve listener decision-making:
$$
U_{Relevance}(m | s, A) = \sum_{a \in A}\pi_L(a|u, A) R(a, w).
$$
- The **speaker utility** is a convex combination of truthfulness (epistemic accuracy) and relevance (decision-theoretic utility) with a cost term:
$$
U_{Combined}(m | s, A) = \lambda \cdot U_{Relevance} + (1-\lambda) \cdot U_{Truthfulness} + C(u).
$$
