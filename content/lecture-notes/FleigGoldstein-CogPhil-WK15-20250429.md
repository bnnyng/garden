---
aliases: 
tags:
  - fleeting-note
date: <% tp.file.creation_date() %>
lastmod: 2025-05-01T13:14:46-04:00
---
[[2025-04-29]]
# Week 15, Day 1: Nativism vs. empiricism review
---

**Lessons from Meno’s paradox**

- The lesson of [[Meno's paradox]]—aside the extreme nativist version, e.g., Plato, Fodor—is that “you need to know stuff to know more stuff.”
	- The idea of **core knowledge** is that our representations must be constructed from primitive concepts that are not clearly learned from experience.
- The “domain of concepts” is typically taken to be **explicit linguistic thought** in humans. One empiricist response that innate concepts are not *ubiquitous* in the mind, only this very specific form of thought.

**Nativism: Ubiquity of internal representations in animal psychology**

- The nativist response cites evidence from **comparative psychology**: animal navigation appears to involve internal representations, e.g., of distances. This behavior is hard to explain without representations, and hard to say how it could be learned from experience.
	- Interestingly, humans have lost the ability above in many ways.
- “The nativist argument is a sandwich,” applying to both evolutionarily primary, lower cognitive systems and humans.

**Empiricism: Evolution and cognitive gadgets**

- The general trajectory of human evolution is “offloading” innate representations and [[Domain specificity and domain generality are graded phenomena, after Laurence and Margolis|domain-general]] “software” that enabled learning from the environment.
	- Domain-generality enables social learning and large-scale cultural evolution unique to humans.

**Nativism: Chomsky’s computational hierarchy**

- Brendan: We have an intuitive sense of being able to compute arbitrarily **long-distance dependencies**—we feel that we have an **unbounded** understanding of the “rules” of arithmetic, etc., but practical limitations keep us from exhibiting them.
- Empiricist models do not have the computational capacity for this: the **universal approximation theorems** guarantee the power of a look-up table. Transformers *could be* Turing complete, but unclear how.
	- Thus, these models cannot be the correct model of human cognition.
- [[Godel’s disjunction]] states that either mathematical Platonism is true, or we are not Turing machines.

**Nativism: Fallibility of the senses**

- This argument comes from traditional **rationalists**, e.g., Descartes: in mechanical philosophy, senses are **fallible**. If all knowledge were from the senses, then there would be no certain knowledge.
	- Rationalist solution is that we have some “natural light of reason.”
- A similar idea in Chomsky’s [[Defenses for Chomsky's theory of innate language faculty|poverty of the stimulus]]: structurally the same as the Meno paradox; to learn language quickly, we need [[Domain specificity and domain generality are graded phenomena, after Laurence and Margolis|domain-specific]] knowledge of language.
	- **Paradox of language acquisition:** Even professional linguists cannot capture the full richness of human grammar.

**Empiricism: Proofs of possibility**

- Empiricism appeals to **proofs of concept**: if one can provide an artificial system that learns quickly without innate endowment, then shows that Chomsky’s argument is not exceptionlessly true.
- [[@2024bucknerDeep]]’s approach is different from proofs of concept: Buckner’s [[Domain-general modular architecture is the best hope for modeling rational cognition in AI, after Buckner|DoGMA]] proposes to build models with varying levels of innate structure and content and evaluate them on human-plausible data to see which give rise to human-like behavior.
	- In particular, we are interested in **domain-general modular architectures**.

**Nativism: The hardware lottery**

- [[The Bitter Lesson, after Sutton]], which claims that the success of DL models is just scaling, undermines the empiricist argument by showing that the success of such models depend on economic, socio-political, etc. factors.

**Empiricism: Abstraction**

- **Abstraction** allows for concept learning without innate knowledge—a direct answer to the Meno problem.
- Buckner proposes that DL models are generally performing **transformational abstraction**…which is what DCNNs do.
	- Transformational abstraction “sandwiches” together other models of abstraction, such as **abstraction-as-subtraction** or **abstraction-as-composition**.

**Empiricism: Is there really a poverty of a stimulus?**

- Datasets like **SAYCam** enable better model performance.

**Empiricism: Neural plasticity**

- Ferrets which had visual stimuli projected onto the auditory cortex, which developed functional visual responses.
	- However, unclear if this really shows empiricism as claimed—more a demonstration of how cells work. But it is still technically driven by experience. 
- The point of neural plasticity is to allow the mind to be shaped by experience.

**Nativism: Neural plasticity**

- Laurence and Margolis argue that neural plasticity actually supports, rather than undermines nativism.
	- These studies show real constraints, i.e., domain-specific neural architecture. 
- (DoGMA empiricists might explain the constraints as the existence of modules.)
- Other neuroscience studies supporting nativism show the existence of **critical periods** in development (something internal in the organism, not driven by environment).