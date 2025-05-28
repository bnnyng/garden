---
aliases:
  - computationalism
  - information processing
  - information-processing system
  - connectionism
  - parallel distributed processing
  - computationalist
tags:
  - permanent-note
  - topic-cognitive-science
publish: "true"
lastmod: 2025-05-23T11:46:33-04:00
date: 2023-12-24
---
# Overview

$\quad$ Cognitive science historically viewed the mind and brain in terms of computation. There are three main research traditions that follow: **computationalism**, which emphasizes structured mental representations; **connectionism**, which focuses on learning and implementation in parallel hardware; and **rational analysis**, which focuses on why cognitive processes reliably lead to observable thought and behavior.

| Name                                                        | View of cognition                                                                                                                                                                                                                 | Key figures                                                                                                                                                                                                                                                        | Main limitations                                                                                                                                                                                                                                                                                    |
| ----------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Computationalism** (a.k.a., the symbolic approach)        | The mind operates as an information processing machine,  especially performing computations over symbols following formal syntactical rules. <br><br>(Heavily influenced by the development of *digital* computers in the 1950s). | Chomsky (e.g., computational arguments for [[Defenses for Chomsky's theory of innate language faculty\|Universal Grammar]]). <br><br>Simon and Newell (e.g., [[@1976newellComputer]]).<br><br>Fodor (e.g., [[The language-of-thought-hypothesis]]).<br><br>Minsky. | Limited calculus for dealing with uncertainty (e.g., “local ambiguity” of natural language as well as sensory perceptions).<br><br>”Excessively rigid” compared to gradual biological learning and degradation.<br><br>Unclear how to implement serialized process in in parallel brain structures. |
| **Connectionism** (a.k.a., parallel distributed processing) | Cognition is distributed signal activity, and learning involves the bottom-up process of locally adjusting network components (i.e., units).                                                                                      | McClelland (e.g., [[@1988mcclellandAppeal]]).<br><br>Rosenblatt, developer of the [[Perceptrons and basic learning algorithms\|perceptron]] model.<br><br>Hinton, Sejnowski, Rumelhart.                                                                            | Lack of representational power for rich symbolic systems (e.g., implicated in human language, reasoning, planning).                                                                                                                                                                                 |
| **Rational approaches**                                     | Agents take optimal solutions to cognitive problems, with reasoning constrained by a well-defined notion of coherence. <br><br>Focuses on the characteristics of the optimal solution, not the mechanisms for obtaining it.       | Gibson’s ecological analyses of visual perception. <br><br>Marr’s [[Classical levels of cognitive theory\|computational-level]] explanations.<br><br>Shepard (e.g., 1987, 1994).<br><br>Anderson (e.g., [[(Resource-)rational analysis\|rational analysis]]).      |                                                                                                                                                                                                                                                                                                     |

**Related notes:** 
- [[Classical theories of mind]]
- [[Systematicity and productivity]]
- [[Nativist and empiricist positions in cognitive science]]
- [[(Resource-)rational analysis]]

---
# Connectionism vs. computationalism

|                            | Computationalism                                                                                                                                                                           | Connectionism                                                                                                                                                   |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Examples**               | “Good old-fashioned AI”; expert systems                                                                                                                                                    | Parallel-distributed processing; [[§ Deep Learning]]                                                                                                            |
| **Basic characteristics**  | - Symbol manipulation<br>- (Domain-specific) rules of inference over explicit representations<br>- Ability develops in distinct stages<br>- Innateness<br>- Systematicity and productivity | - Subsymbolic processes<br>- Emergent representations<br>- Gradual learning<br>- Domain-general learning mechanisms<br>- Flexible behavior/graceful degradation |
| **Definition of learning** | Developing explicit rules that capture powerful generalizations about the world.                                                                                                           | Tune connections to capture interdependencies between activations, thus acting “as though it knows the rules.”                                                  |



---
# References

- [Fodor & Pylyshyn (1988)](<https://doi.org/10.1016/0010-0277(88)90031-5>), “Connectionism and Cognitive Architecture: A Critical Analysis”
- [[@2011kimMind]], “Mind as a Computing Machine”
- [[@2024griffithsBayesian]], *Bayesian Models of Cognition*
