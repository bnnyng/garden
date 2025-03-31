---
aliases:
  - pragmatic listener
  - RSA
tags:
  - permanent-note
  - topic-cognitive-science
publish: 
date: <% tp.file.creation_date() %>
lastmod: 2025-03-31T12:48:20-04:00
---
# Overview

The **Rational Speech Acts (RSA) framework** aims to model how people make **pragmatic inferences** beyond the literal semantics of language. 

RSA treats **speakers** as [[(Resource-)rational analysis|boundedly rational]] agents—i.e., agents whose decision-making is optimal with respect to both environmental utility and internal (cognitive) constraints—who optimize the trade-off between **informativeness** and **utterance costs**. Speakers make decisions by *simulating* a **listener**, selecting the **utterance** from a fixed set that is most likely to induce beliefs about the true **world state**. 

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



#### Integrating epistemic utility with decision-theoretic in speaker utilities, after [[@2024sumers]]