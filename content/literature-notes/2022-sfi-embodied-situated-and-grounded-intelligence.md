---
lit-author: "[[Mitchell, Melanie]]"
aliases:
  - "Embodied, Situated, and Grounded Intelligence: Implications for AI"
tags:
  - literature-note
title: "Workshop Report | Embodied, Situated, and Grounded Intelligence: Implications for AI"
date: 2023-12-27
lastmod: 2024-05-26T15:57:16-07:00
publish: "true"
---
# Summary

[Source](https://arxiv.org/abs/2210.13589) – [[RAW-20231224-embodied-situated-and-grounded-intelligence|Highlights]] – *Santa Fe Institute*

>[!abstract]
>In April of 2022, the Santa Fe Institute hosted a workshop on embodied, situated, and grounded intelligence as part of the Institute's Foundations of Intelligence project. The workshop brought together computer scientists, psychologists, philosophers, social scientists, and others to discuss the science of embodiment and related issues in human intelligence, and its implications for building robust, human-level AI. In this report, we summarize each of the talks and the subsequent discussions. We also draw out a number of key themes and identify important frontiers for future research.

---
# Takeaways
- Having a body and being situated in an environment are important for human learning, especially in early development.
- Making machine learning more like embodied learning requires major changes to architecture, optimization, evaluation, or training data.

---
# Key terms

- **Semantic efficacy** = “the view that the meaning or content of mental states makes a causal difference to what agents do and how they affect their environments” 
- **Semantic externalism** = “the view that the meaning or “content” of a mental state depends on how one is situated in one’s environment”
- **The cognitive revolution** = “the rise of modern cognitive science and the decline of behaviorism as the dominant approach in psychology”
- **Neuromuscular blockade** = temporary paralysis caused inhibited communication at neuromuscular junctions, usually due to drugs
- **Interoception** = “the ability to discern one’s internal states, such as hunger or fatigue”
- **Affordance** = a resource or support that the environment offers to an individual agent
- **Self-generated learning** = [[Self-generated learning happens when learners shape the data they learn from]]
- **Symbol grounding problem** = [[The symbol grounding problem asks how the brain connects mental representations to the external world]]
- **Foundation model** = a deep neural network pretrained on large datasets, then adapted to specific tasks.

---
# Notes

## Conclusion

### Embodiment, situatedness, and human development
- The key takeaway from the workshop was that embodiment and situatedness play a crucial role in [[Human development (cognitive science)]].
- People disagreed on the following related questions:
	- Is self-generated learning fully captured in the data gathered by infants about the world? That is, can AI agents learn from being trained on infant data without interacting with the world themselves?
	- Would an AI system trained on infant data have the same capacity for generalization as infants?
- An [[Interventionist theory of causation]] suggests that intervening on one’s environment is necessary for testing hypotheses of the world’s causal structure.

### Embodiment, situatedness, and ongoing cognition

- Clark and Chalmers (1998) give an example of when embodiment and situatedness are relevant for ongoing cognition, comparing Tetris performance when rotating pieces on the screen vs. only mentally.
	- They argue that machine, screen, and software are actively contributing to the brain’s cognitive task of playing Tetris.
- As Nick Cheney showed, physical characteristics can reduce the amount of computation needed for physical control.
- People disagreed about how to draw a distinction between behaviors that interact with the world and “proper” cognition.
- Another idea repeated in the talks is that syntactical relationships between mental [[Representation is describing some aspect of reality with a useful symbol|representations]] do not explain the connection between those symbols and the perceptual, external world.
- There are two ways to frame the [[The symbol grounding problem asks how the brain connects mental representations to the external world|symbol grounding problem]]: mental content externalism and sensorimotor grounding.
	- The two [[Different accounts of the symbol grounding problem give different importance to embodiment in ongoing cognition]].

### An extended role for embodiment and situatedness
- This section asks: do distal and historical facts about the body and environment play a role in ongoing cognition?
	- Most accept the role of extended factors in developing an adult cognitive system.
	- People disagree about whether they play an active role in ongoing cognition.
- For example, the ecological niche of an animal could help fix the meaning of symbols in the animal’s brain; the niche is a fact extended beyond any individual animal.
	- Does information about an animal’s environment and evolutionary history help us understand its cognition and behavior?

### Embodiment, learning, and artificial intelligence

- [[Learning and optimization is performed over multiple timescales]].
	- Most neural networks today lack this property.
- Embodiment and exploration leads naturally to different types of data, while richer data must be explicitly fed to neural networks.
	- Performance may be improved by making AI learning more similar to embodied learning.
- [[Large language models produce truth as a means to the end of producing human-like text]].

## Day 1

### Lisa Miracchi – “Why intelligent reasoning must be embodied”
- Mirachi’s philosophical argument for the importance of embodied cognition, particularly how agents are situated in their environments, is based on **semantic efficacy** and **semantic externalism**.
- Describing cognitive systems is different from understanding the meaning of its output (that is, the output of [[Computationalist and connectionist approaches to cognition]])
	- The traditional approach to cognitive science uses content-neutral descriptions of cognitive mechanisms at various [[Information-processing systems are understood at knowledge, algorithm, and physical implementation levels|levels of explanation]].
	- To assign meaning to that description, we need to consider how it is incorporated into the agent’s “cognitive economy” and how the agent is situated in its environment.

>It seems like we could give a narrow, content-neutral description of how each circuit operates (e.g., identifying the algorithm it uses to processes inputs and produce outputs), then ascribe a meaning to its output based on wider considerations.

- This strategy rejects **semantic efficacy** because it assumes that the levels of cognition determine its operation. Mirachi believes mental content has a more causal role.

> Mental content is better understood as a consequence of coordinating a diversity of internal mechanisms and external processes.

- Using mental content to give meaning to mental representations only makes sense if the agent’s internal state is somehow coupled with the environment.
- The reality we are representing is an active part of ongoing cognition.

### Kenneth Aizawa – “Embodied cognition: Some philosophical proposals”

- Aizawa believes cognition and behavior have distinct roles, and their interaction should be studied as if they are separate entities.
	- Cognition is computation over representations of content that did not come from other agents.
	- This distinction is a main theme of the **cognitive revolution**.
- Aizawa believes that including environmental coupling in the definition of cognition underestimates the importance of internal, mental machinery.
	- Patients with **neuromuscular blockade** are physically, but not cognitively inhibited. This suggests that cognition can happen without embodiment and situatedness.

>Radical embodiment theorists often fail to adequately distinguish between cognition itself and the causal contributors to cognition and cognitive development.

### Daniel Casasanto – “The Ad Hoc Construction of Meaning”

- [[Meaning is constructed in an ad hoc way during cognition, after Casasanto]]
- The circumstances around encountering a cue, such as a word, determine a specific pattern of neuro-cognitive activity that produces our understanding of the word.
- The meaning of words depends on context, and this meaning is reflected physically in the brain.
	- These patterns of activity use both language and motor areas of the brain.
	- For example, different patterns will be activated by saying “it is very hot in here” in a desert vs. in a room with a closed window. One is an “indirect request for action.”
	- Experiments using transcranial magnetic stimulation have shown that [[Impairing motor regions impairs understanding of relevant words]]
- Words do not have “core meanings” because their actual usage is very flexible.
	- Conventional meanings (i.e., dictionary definitions) of words are still relevant, but there are context-dependent nuances.

### General discussion for day 1

- [[Certain systems can only be understood in terms of things that lack an immediate causal effect in the system, after Smith]]
- People generally agree that mental content can make a causal difference in cognitive processes, but disagree about whether causal power comes from high (mental representations and contents) or low (physical or sub-semantic) levels.
	- If we attribute causation to the lower levels, then the causal role of mental content falls under the study of cognitive science.

>[!question] #concept-question 
>What is the definition of causation and content in this context? How does the content of a mental representation fit into the levels of explanation?

## Day 2

### Guy Dove – “Language is a Neuroenhancement”

- [[Language is an embodied neuroenhancement and scaffold, after Dove]]
- Dove’s LENS theory addresses the “symbol ungrounding problem.” 
	- [[The symbol ungrounding problem asks how literal meanings are abstracted into arbitrary symbols]]
- [[Language is enhances our capacity for abstract thought but is not strictly necessary]]. Dove’s talk has some ambiguity here:
	- Is language a scaffold for certain kinds of thinking (i.e., a source for abstract reasoning)?
	- Or is language just a special form of elastic thinking, related to [[Meaning is constructed in an ad hoc way during cognition, after Casasanto]]?

### Louise Connell – “Language, perception, and action shape the human conceptual system”

- Connell researches the relationship between word similarity judgements made by humans and judgements made by machine learning models.
	- One goal is to determine which features of words best predict human judgements.
- [[Embodied cognition]] implies that words associated with similar sensorimotor experiences will be judged to be more similar.
- Connell found that both best and worst predictors were distributional models; models using sensorimotor associations were more “consistently successful.”
- Connell also studied a semantic task where people were asked to produce a sequence of examples for a given category.
	- Distributional models are more likely to predict the first word produced; [[Distributional statistics are a heuristic for similarity, after Connell]].
	- Sensorimotor models were more likely to predict where in a sequence that a word appears.
	- The best performance was a model that used both distributional and sensorimotor similarity, returning words according to their maximum similarity to the target category.

>This suggests, she argues, that distributional information might be employed as a convenient heuristic for producing examples, but that when generating less closely associated examples, we engage sensorimotor concept representations.

- The “closest” word was more often found in the distributional space, while such words were “further out” in the sensorimotor space.
- Connell’s work is exciting because it can be extended in a number of ways:

>[!question] #open-question Are words even understood and compared along different general dimensions? For example, people can lose their ability to recognize human faces, which is a narrow category-specific agnosia.

>[!question] #open-question Which sensorimotor dimensions are most fundamental to understanding? Are representations for categories based on sensorimotor experience or causal networks?

### Penny Pexman – “Multimodal grounding for concrete and abstract concepts”

>Pexman quantified sensorimotor involvement as “Body-Object Interaction” (hereafter, “BOI”), asking study participants to rate “how easily a human body can interact with a word’s referent.”

- Pexman used BOI ratings to compare high and low rated words across different tasks, and assessed the relevance of BOI compared to other word features.
	- High BOI words were more easily recognized than low BOI words, even controlling for other relevant dimensions (e.g., age of acquisition).
	- High BOI words were assigned to categories more accurately and quickly; FMRI data shows higher motor area activity during classification.
- Network analysis showed that the most important dimension was a word’s association with **interoception**; factor analysis showed that interoception was more closely associated with emotional dimensions, not bodily ones.
	- These results do not support the idea that embodiment is primarily responsible for [[The symbol grounding problem asks how the brain connects mental representations to the external world|symbol grounding]].
- Pexman’s work shows that concepts are grounded by the most important dimensions required by task demands.

### General discussion for day 2

- According to Andrew Lampinen (DeepMind), adding linguistic data to training in [[Reinforcement learning]] improves performance and leads to better abstraction.
- Concreteness can be relative; in mathematics and logic, abstract concepts are frequently used as concrete examples for even more abstract concepts.

>Embodying existing systems might improve their performance and, especially, their robustness and generalization abilities.

>[!question] #open-question Can reinforcement learning implement a symbol system that learns generalizable rules and augments an existing system?

>[!question] #open-question How can we “embody” existing AI systems to improve robustness and generalization abilities?

## Day 3

### Linda Smith – “Why ‘self-generated learning’ may be more radical and consequential than first appears”

- [[Self-generated learning happens when learners shape the data they learn from]]. A domain-general system should be able to use behavior to enhance learning across a variety of contexts.
- Smith’s talk had three key arguments about [[Human development (cognitive science)]] and the role of embodiment.

>1. Bodily development determines what data infants have access to.
>2. Behavior creates data for learning in real-time.
>3. The systems of knowledge are shaped by the constraints of space, time, and context.

- Smith’s work documents what babies experience and when by attaching sensors to babies that record what they see and hear.
	- Physical development in babies leads to increased control over head orientation and ability to move around the environment.

>Objects that were close by and centered in their field of view when named were learned more reliably. In addition, other factors such head stability, head-eye alignment, and whether the child held the object also contributed to success.

- Training AI systems on infant data did enhance learning, but according to Smith, the ability to “learn” from infant data is not the same as a domain-general learning system that is capable of self-generated learning.

### Arthur Glenberg and Cameron Jones – “Language comprehension requires affordances”

- Glenberg and Jones’s research investigate how large language models understand environmental resources, or **affordances**.

> To understand the affordances of something is to understand how one might interact with it.

- Glenberg’s previous research showed that latent semantic analysis models struggled to distinguish between contexually appropriate and inappropriate affordances.

>Glenberg hypothesizes that humans understand many affordances through sensorimotor simulations of the relevant contexts and objects and that language models struggle because they rely on distributional information alone.


>[!question] #open-question What does training LLMs on the kind of language that parents use with children, instead of large corpora of written texts, reveal about what can be learned from language?

### Yoshua Bengio – “System 2 GFlowNets: Inductive biases towards machines that understand and think”

- Bengio introduces a novel deep learning architecture called GFlowNets, which uses principles that can improve machine intelligence.
- Current AI is only capable of System 1 thinking, of the [[Dual process theory of reasoning]] used by humans.
- [[Global workspace theory]] implies that cognition is sequential processing.
- The key results of Bengio’s work are identifying a lack of System 2 thinking in existing neural network architectures and a way to actually implement System 2 thinking.
### General discussion for day 3

- [[Learning and optimization is performed over multiple timescales]]: 
	- Evolutionary timescales allow brains to be capable of learning form the environment in the first place.
	- Developmental timescales involve learning that occurs as the body and brain develop.
	- Short timescales involve acquiring specific knowledge and skills.

## Day 4

### Percy Liang – “Are Foundation Models Castles in the Air?”
- Foundation models, which are trained on more general tasks and then tested on specific tasks, are different from transfer learning models, which are trained on one specific task then tested on another.
- Liang notes several differences between foundation models and human minds, and suggests that comparing the two is a good way to evaluate foundation models:
	- Humans can learn from multi-modal data;
	- Humans’ data involves actions and their consequences (implemented in [[Reinforcement learning]]);
	- Humans’ own activity can generate data (potential for [[Self-generated learning happens when learners shape the data they learn from|self-generated learning]]);
	- Humans have a more structured and [[The mind is comprised of interacting, interpretable modules|modular]] neural architecture ( #concept-question how do we know?).

### Chris Potts – “Could a Purely Self-Supervised Foundation Model Achieve Grounded Language Understanding?”
- Philosophical intuitions, like the Chinese Room and Chinese Gym, suggest “yes” because their answers about what systems are capable of understanding language depend on the systems’ size, speed, and complexity.
- In addition to using performance benchmarks for specific competences, we can test AI systems for understanding by asking about causal models of relative phenomena (e.g., distinct but causally related stimuli in Potts’ research).