---
aliases:
  - pragmatic listener
  - RSA
tags:
  - permanent-note
  - topic-cognitive-science
publish: "true"
date: <% tp.file.creation_date() %>
lastmod: 2025-05-15T12:52:21-04:00
---
# Overview

$\quad$The **Rational Speech Acts (RSA) framework** aims to model how people make **pragmatic inferences** beyond the literal semantics of language. 

$\quad$RSA treats **speakers** as [[(Resource-)rational analysis|boundedly rational]] agents—i.e., agents whose decision-making is optimal with respect to both environmental utility and internal (cognitive) constraints—who optimize the trade-off between **informativeness** and **utterance costs**. Speakers make decisions by *simulating* a **listener**, selecting the **utterance** from a fixed set that is most likely to induce beliefs about the true **world state**. 

![[Pasted image 20250211153915.png]]

Different listener models correspond to different speaker utilities:

| Listener type   | Description                                                                                                               | Implementation                                                                                                                                           | Speaker utility (of an utterance)                                                                               |
| --------------- | ------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| Literal $L_0$   | Interpret utterances according to “lexical meanings” $\delta_{[u](w)}$: $$ P_{L_0}(w \| u) \propto \delta_{[u](w)}P(w).$$ | Uniform distribution over possible world states.                                                                                                         | Listener’s gain about the true world state after hearing the utterance: $$ U(u \| w) = \log P_{L_0}(w \| u). $$ |
| Pragmatic $L_1$ | Formalize [[Gricean pragmatics]] and account for the relevance of an utterance.                                           | [[Self-reference\|Recursively]] embed a speaker model, which in turn embeds a literal literal listener: $$ P_{L_1}(w \| u) \propto P_S( u \| w) P(w). $$ | Open research question.                                                                                         |


---
# Basic framework

- The **pragmatic listener’s** inferred world state $w$ is conditioned on speaker choosing utterance $u$: $$P_L(w | u) \propto P_S(u | w)P(w).$$
- The **speaker** $S$ chooses and utterance $u$ in proportion to the expected utility gain (i.e., approximately rationally), where $\alpha$ represents the extent to which utility is maximized (i.e., how rational the speaker will be): $$ P_S(u|w) \propto \exp(\alpha \cdot U(u, w)). $$
- The **speaker utility** is determined by how certain a literal listener $L_0$ becomes about world state $w$ after hearing utterance $u$: $$ U(u; w) = \log P_{L_0}(w| u). $$
- The **literal listener** updates beliefs about the world under the assumption that the utterance $u$ directly corresponds to a true semantic denotation $[u]$: $$ P_{L_0}(w|u) \propto \delta_{[u](w)}P(w). $$


---
# Variants

#### Continuous semantics, after [[@2020degen]]



#### Integrating epistemic utility with decision-theoretic in speaker utilities, after [[@2024sumersReconciling]]


- The truthfulness, or **epistemic utility**, of an utterance is defined as a penalty on false utterances, with threshold determined by the speaker’s softmax optimality $\alpha$ (around $\alpha = 1$ is a preference for true utterances, while $\alpha \to \infty$ “recovers a more typical RSA constraint to true utterances): 
$$ 
U_{truthfulness} (u | q) = 
\begin{cases}
1 & \text{if }\delta_{[u](w)} = 1 \\
0 & \text{if }\delta_{[u](w)} = 0
\end{cases}.
$$
- The **listener’s posterior** is the expected reward for taking an action $a \in A \subseteq \mathcal A$. Reward is a scalar value $R : \mathcal A \times W \to \mathbb R$ obtained by conditioning the learner’s beliefs about the world state on the utterance, then marginalizing over worlds:
$$
R_L(a, u) = \sum_{w \in W}R(a, w) P_L(w|u),
\quad\quad
P_{L}(w|u) \propto \delta_{[u](w)}P(w).
$$
- The **listener’s decision policy** is a softmax over beliefs that chooses from actions $A \subseteq \mathcal A$ according to their expected utility:
$$
\pi_L (a|u, A) \propto \exp(\beta \cdot R_L(a, u)).
$$
- The relevance, or **decision-theoretic utility**, of an utterance is defined as the expected utility of the listener’s decision policy after hearing it; informally, more relevant utterances induce beliefs that improve listener decision-making:
$$
U_{Relevance}(u|w, A) = \sum_{a \in A}\pi_L(a|u, A) R(a, w).
$$
- The **speaker utility** is a convex combination of truthfulness (epistemic accuracy) and relevance (decision-theoretic utility) with a cost term:
$$
U_{Combined}(u|w, A) = \lambda \cdot U_{Relevance} + (1-\lambda) \cdot U_{Truthfulness} + C(u).
$$
