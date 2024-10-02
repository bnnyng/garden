---
lit-author: 
aliases:
  - Foundations of Intelligence in Natural and Artificial Systems
tags:
  - literature-note
title: Workshop Report | Foundations of Intelligence in Natural and Artificial Systems
lastmod: 2024-07-10T00:09:34-06:00
date: 2023-12-26
publish: 
---
# Summary

[Source](https://arxiv.org/abs/2105.02198) – [[RAW-20231226-foundations-of-intelligence|Highlights]]

>[!abstract]
>In March of 2021, the Santa Fe Institute hosted a workshop as part of its Foundations of Intelligence in Natural and Artificial Systems project. This project seeks to advance the field of artificial intelligence by promoting interdisciplinary research on the nature of intelligence. During the workshop, speakers from diverse disciplines gathered to develop a taxonomy of intelligence, articulating their own understanding of intelligence and how their research has furthered that understanding. In this report, we summarize the insights offered by each speaker and identify the themes that emerged during the talks and subsequent discussions.


---
# Takeaways

- Different definitions of intelligence are used in different research areas.
- Social networks are important for intelligent computation, and intelligent behavior is often produced collectively.
- Intelligence involves modeling a problem and selecting the appropriate heuristic to solve it.
- [[Evolution is the only guaranteed method of producing general intelligence]]

---
# Notes

## Conclusion

- [[Intelligence takes different forms]], and different definitions of intelligence are appropriate for different research areas.
	- In AI, domain-specific progress is often mistaken for progress toward general AI.
	- Reflexive thinking is better understood and distinct from higher-level thinking, which remains undefined.
	- Other forms of intelligence include “liquid brain” architecture in ant colonies and “learned incomprehension” in competitive puzzle-solving.
- The distinction between [[Dual process theory of reasoning]] is controversial and hard to draw.
- Social networks are important for understanding intelligence.
	- Social groups provide scaffolding for learning.
	- Social connections enhance intelligence by connecting us with diverse perspectives.
- Intelligence itself may be a collective phenomenon.
	- Collective intelligence extends both biological and human intelligence.
	- Computation and intelligence may be modeled from a network of interacting components.
- General intelligence involves higher-order cognition.
	- Intelligence involves the ability to use heuristics in appropriate contexts.
	- Intelligence could be the ability to construct a representation of a problem that allows one to choose the appropriate solution.
	- Human intelligence is uniquely capable of modeling ourselves and our cognitive processes.
- Evolution shapes intelligence; in particular, evolution is the only known process that has produced true general intelligence.
	- Defining intelligence rigorously is difficult without considering environment and limitations from evolutionary constraints.
	- Evolutionary constraints drive intelligent behavior and should be replicated for AI.
	- Evolution is a design process.
- It is important to consider different forms of natural intelligence when developing AI systems.

## Summaries of talks
### [[Mitchell, Melanie|Melanie Mitchell]] – “Why AI Is Harder Than We Think”
- There are five fallacies that arise when thinking about progress in artificial intelligence:
	- Domain-specific intelligence is on a continuum with general intelligence (e.g., chess-playing vs. everyday human intelligence).
	- Things that are easy for humans are objectively easy, and things that are hard for humans are objectively hard (e.g., perception vs. playing a difficult puzzle).
	- Researchers uncritically use “wishful” analogies when describing AI performance, such as “reading” texts.
	- Understanding intelligence and learning is limited to internal phenomena in the brain; Mitchell believes [[Embodied cognition|embodiment]] is an important consideration.
	- Intelligence can be described without considering the limitations, biases, strategies, and goals of an agent.
- Mitchell describes three components in her [[Definitions of intelligence]]: representational modeling, ability to affect the external world, and capacity for generalization.

### Daniel Dennett – “Knowing What To Do When You Don’t Know What To Do”
- Intelligence is different from competence.
	- Animals display competence with different tasks without understanding the reason for doing them.
	- Humans might show worse competence at similar tasks, but they would understand what they are doing and why. Thus, humans demonstrate intelligence.
- [[Intelligence is the capacity to choose between different available heuristics, after Dennett]]
- Dennett believes that we should not aim to make AI reason like humans.
	- Dennett suggests a symbiotic relationship between AI that presents candidate solutions and humans to select them.
	- This allows AI to extend human cognition and reduces [[AI risk]].

### Alison Gopnik – “Three Ages, Three Intelligences”

- Gopnik’s theory is about how humans resolve the [[Exploration-exploitation tradeoff]] using adaptive changes over their life history.
	- In machine learning, a common solution is to begin learning with more exploration and gradually shift to more exploitation.
	- Long childhoods allow for exploratory learning.
- Menopause and grandparents caring for grandchildren can be explained by the evolutionary benefits of prioritizing knowledge transmission to developing, exploring children.

### James Evans – “Designing Alien Intelligences: Programming Beyond the Limits of Collective Knowledge and Reason”

- Evans’ talk is about how to design AI systems that support both individual and collective intelligence of humans.
	- One example is word embedding in scientific papers predict what material properties will be identified in the future (Tshitoyan et al., 2019).
- Compared to the previous study, it is more useful for AI systems to propose plausible inferences (similar to Dennett’s proposal) that are likely for humans to miss, based on their current work and professional connections.

>Evans envisions AI as a kind of alien intelligence that (while not as adept at inference as human beings) can be tuned to explore the space of possible inferences in ways that human investigators are unlikely to pursue (Evans, 2020).


### David Krakauer – “Tradition and the Individual Talent: Collective Puzzling at the Limits of Individual Cognition”

- Krakauer draws insights from the competitive Rubik’s cube community.
- The social learning timescale arises from the individual learning timescale.
	- More advanced techniques require individuals to spend more time adopting them. Individual learning curves determine collective advancement.
	- Collective intelligence develops in a “stair” progression.
- Representation of a problem domain is important for finding useful rules and good performance.
- [[Intelligence is a “learned incomprehension” that comes from acquisition of expertise, after D. Krakauer]]
- #concept-question What is “Searle Inversion”?

### Ricard Sole – “Intelligence and the Nature of Embodiment: From Liquid to Solid”

- Sole seeks to understand the “nature of intelligence” by identifying a space of possible intelligences and exploring the actual intelligences in this space.

>[!question] #open-question What constraints give rise to patterns in forms of intelligence? For example, ants are mobile and have more general intelligence than plants, which fall in an evolutionary niche where intelligence is not as important.


- [[Liquid brains change both their connections and their structure, after Sole]]. One example is a group of ants.
- Animal species show there may be a trade-off between collective and individual complexity. Sole is unsure how this generalizes to other collectives.

### Thalia Wheatley – “How Other Minds Shape Our Own: Intelligence as a Networked Phenomenon”

- Wheatley argues that human social relationships can make us more or less intelligent based on the type and number of connections we have.
- [[Humans offload cognition to other members of their social groups]]
- People have different types of connections to others
	- [[Brokers are individuals that bridge poorly connected social groups]]
- Our connections to others shape how we think.
	- When viewing different videos, patterns of brain activity were more similar for more closely connected individuals.
	- Some people are better at enhancing our cognitive abilities and others; for example, synchronized activity can lead to a narrowed perspective.

### Bruno Olshausen – “Perception as Model Building”

- Olshausen investigates the role of model building in perception and how these models are implemented in the brain (see: [[Information-processing systems are understood at knowledge, algorithm, and physical implementation levels|levels of explanation]]).
- One way to study perceptual models is to ask participants to draw a vague object before and after they recognize what it is supposed to be.
	- Results suggest that visual object recognition relies on building a model of what is seen (see: Melanie Mitchell in [[Definitions of intelligence]]).
- An important part of model building is the ability to factorize, or separate, different parts of a scene.
- The brains of fruit flies have neurons arranged in a ring topology; theoretical work suggests that such recurrently connected neurons produce an internal representation of fly’s head direction.
	- The representation does not receive input from sensory perceptions, since there is no sense for head direction.
- The purpose of the talk is to emphasize disentanglement and neural implementation when understanding mental models.
	- This has implications for developing AI as well.

>Neural networks do not engage in explicit processes of factorization nor do they involve a realistic representation of the organization or computation abilities of actual neurons.

### John Krakauer – “Understanding the Cognitive Brain”
- “Intelligent reflexes” are reflexive control policies that explain behavior that we might initially assume comes from higher-level reasoning like modeling, simulation, and prediction.
	- #concept-question A more exhaustive definition of high-level reasoning?
- Intelligent behavior depends on automating learned skills; effortful cognition is needed to learn the skills in the first place.

>The key idea is that we have the ability to transform propositional knowledge into automatic, goal-directed responses (i.e., “intelligent reflexes”). These reflexes are governed by a control policy which maps states of the body to motor commands in a manner conducive to accomplishing particular goals.

### Melanie Moses – “All Intelligence Is Collective, but Not All Collectives Are Intelligent”

- Moses divides intelligence into biological, human, and collective forms (see: [[Intelligence takes different forms]])
- Human intelligence can be enhanced by emphasizing the advantages of other forms of intelligence.
	- Moses thinks AI can help with this, both in our ability to learn and communicate and to investigate existing features of our cognition, like biases.
	- However, [[AI can enhance dangers already present in intelligence]]

>Moses is also cautious about AI risks—not because she believes that AI will be radically different or vastly more intelligent than humans, but because the methods humans have already used to extend our intelligence (e.g., cultural transmission and social institutions) have already posed serious risks.

### Jessica Flack – “The Elements of Collective Intelligence”
- Flack presents a framework for understanding computation performed by collectives, particularly ones that lead to adaptive behaviors.
	- Mechanics are an important consideration because biological collectives face information processing and thermodynamic constraints.
	- We must also understand how mechanisms are tuned by evolution.
- Flack gives seven key elements of collective intelligence: environment, input, output, task, circuit (what are the components and how are they organized?), algorithm, and termination criteria.

### Mirta Galesic – “Intelligence Needs (At Least) Two Blades”

- Galesic argues that a human-centered definition of intelligence fails to account for when animals outperform humans on cognitive tasks (see: [[Intelligence takes different forms]])
- A better model is ecological rationality; thus, intelligence is a fit between a cognitive system and its environment.
- General intelligence is a sort of meta-cognition where we are able to select the best tool across many environments; this offers a direction for developing generally intelligent AI.

### David Wolpert – “Beyond 20th Century Notions of an Intelligence: Using Stacking to Combine Intelligences”
- “Stacking” combines the predictions of several machine learning models under a meta-model that is trained to both incorporate other models’ predictions and account for their biases.
- Stacking has implications for improving the scientific method, which is currently more like single-model cross-validation.
- General AI will most likely come from a “web-based ecology of AI systems.”

>[!question] #open-question How do AI communities compare to human communities?

- Interestingly, we cannot predict (compute) the behavior of an AI community because individual AI programs are [[Humans as Turing machines|Turing complete]].

> [!question] #open-question Is it worth sacrificing understanding of the systems we model for “predictive accuracy”? Engineers already do this!

### Risto Miikkulainen – “Evolving Intelligent Behavior in Virtual Agents”
- Evolutionary constraints (resource limitation, body-brain co-evolution, competitive arms races, the need for coordination) “solve the harder problem of finding good body/behavior combinations.”
- Intelligence arises from evolutionary optimization of neural networks under realistic constraints.

### Stephanie Forrest – “Evolution and Engineering”
- Despite the difficulty of defining intelligence, information processing capacities are implemented in the same substrate (i.e., nervous system) that evolved over the same process of natural selection.
- Software can also evolve at both the level of individual programs and software environments as used by human communities.
	- Evolution at the level of individual programs is a type of evolutionary computation.
- Forrest draws insights from biological evolution for advancing evolutionary computation: “open-endedness, major transitions, neutrality and drift, genotype/phenotype mappings, multi-objectivity, and co-evolution.”
- Evolution and engineering are not distinct processes; hybrid approaches might be the key to constructing genuinely intelligent AI systems.