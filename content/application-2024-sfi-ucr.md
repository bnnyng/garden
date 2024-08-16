---
aliases:
  - 2024 SFI undergradute research application
  - SFI undergraduate research
tags:
  - fruit
publish: 
date: 2024-01-09
lastmod: 2024-06-18T21:16:59-06:00
---
Essay responses for the 2024 Undergraduate Complexity Research program at SFI.

Associated notes:
- [[20231221-application-santa-fe-institute-undergraduate-research]]
- [[20231231-sfi-research-proposal-dump]]

References:
- [[2019-jaques-social-influence-as-intrinsic-motivation]]
- [[2019-spelke-from-core-concepts-to-new-systems-of-knowledge]]
- [[20231228-video-social-influence-as-intrinsic-motivation]]

Related: [[Complex systems have nontrivial emergent and self-organizing behaviors|complex system]]

---
# Complex systems

>Please briefly discuss what appeals to you about the study of complex systems and/or the research philosophy of the Santa Fe Institute. You can get a brief overview of SFI here: https://santafe.edu/about/overview

I had an intrinsic attraction toward complexity long before I heard of complex systems science. For years, I’ve used an application called Obsidian to take “atomic” notes, short text files containing a single concept or proposition. Notes can be linked to build a personal Wikipedia, and Obsidian’s graph feature allows users to view all notes and links as an intricate network. I was, and still am, obsessed with watching connections between distinct topics develop over time. Most of my original ideas emerge from examining densely linked graph areas to be developed into essays or projects. My knowledge management strategy is complexity in practice. (I recently began publishing notes online; see “graph view” for some fledgling connections: bnnyng.github.io/garden.)

Further, a complex systems framework helped me articulate why my interests in cognitive science and mathematics felt closely coupled, even though the subjects are only vaguely related. After reading *[[20240816-2009-mitchell-complexity-a-guided-tour|Complexity: A Guided Tour]]*, I noticed how mathematical reasoning is inherently complex: simple axioms and a strict formal system give rise to beautifully abstract forms, a creative process apparently unique to humans. Learning math is essentially a problem of how to ensure these imaginary forms are, ironically, accurately represented by individual brains. Teachers and researchers regularly develop new language, visuals, and gestures to communicate math, while their audiences essentially must learn novel cognitive processes—hence the common experience of poring over 1 or 2 lines of a proof for hours before comprehension strikes. In short, the language of complex systems, particularly intelligent systems, reveals how the practice of math fuses individual and collective cognition.

I am especially excited about SFI because my past research experiences have been highly specified, leading me to jump between labs in unrelated domains to gain more interdisciplinary knowledge. I still have a burning curiosity for topics I may never research or meaningfully discuss because I lack the formal background (e.g., political economy and development, information theory, physics of computation). The easy flow of knowledge between researchers of all levels at SFI is a thrilling opportunity for me to engage with these topics, and so many others that I might not yet know exist.

----
# Topics

## Developing core knowledge with evolutionary algorithms

>Please describe two scientific questions or research projects that interest you as well as your general idea of how you might address these. For both, provide enough background and detail to convey (1) the importance of the question or project or what interests you about it, and (2) the logic of your approach. 
>
>Note: These topics are not necessarily research projects that you would pursue during the UCR program at SFI. Project development is a collaborative process between the student and their mentor.

[[§ Intelligence|Intelligence]] is characterized by the ability to generalize past experiences to unseen problems. There are two contrasting approaches to engineering general intelligence in artificial systems: the top-down designing of a higher-order cognition that selects solutions from lower-order systems like skills or heuristics; and the bottom-up encoding of “common sense” knowledge, or the ability to develop that knowledge. I am interested in the latter, because I believe common sense is precisely what allows many biological intelligences to perform general reasoning with limited data. Specifically, I am inspired by Dr. Elizabeth Spelke’s theory of [[Six systems of core knowledge, after Spelke|six systems of core knowledge]]—objects, agents, persons, places, forms, and numbers—that exist both humans and animals (Spelke, 2007). All these systems are abstract, innate, physically localized in the brain, and most importantly ancient; that is, core knowledge evolved from a common ancestor. Because [[Evolution is the only guaranteed method of producing general intelligence|evolution is currently the only known method of producing general intelligence]], Spelke’s theory has instructive implications for developing general AI.

I am interested in implementing Spelke’s theory by using evolutionary algorithms to create neural networks that demonstrate one of the core knowledge systems. Beginning with a variety of architecture, weight, and parameter combinations, the objective of each network is to approximate human or animal behavior shown in traditional psychology studies. The particular system and lower-level architectures I investigate depends heavily on available data. For example, if the goal system is “agents,” I might train convolutional neural networks or vision transformers on image sequences or videos used for assessing human infants’ understanding of agents. After a few generations of evolution, the extent of “innate” knowledge would be assessed by testing networks on novel data, which then becomes the new training data. Ideally, the data changes would mimic the pace of environmental changes in biological evolution. Finally, if possible, I would like to include hierarchical or “multi-agent” architectures in the initial network options. 

## Emergence of communication from intrinsic social influence

Effective communication between individuals in an organized group is crucial for collective adaptation. This can take pretty creative forms in nature; for example, honey bees perform a “waggle dance” to transmit spatial information about resources to other hive members. [[2019-jaques-social-influence-as-intrinsic-motivation|Jaques et al. (2019)]] showed similar behavior in a multi-agent reinforcement learning (MARL) setting. The researchers implemented [[Intrinsically motivated behavior is performed for its own sake|intrinsic social motivation]]—motivation that leads to indirectly rewarded social behaviors, like choosing collaboration in the classic prisoner’s dilemma—in a [[Reinforcement learning|reinforcement learning]] framework, which typically uses extrinsic motivation, or explicit rewards, to improve agents’ performance on some task. Not only did agents with intrinsic social motivation perform much better on a social dilemma game, these agents started using their movements on the game map to signal the presence or absence of resources to other agents. That is, communication emerged without any explicit training! This complements other studies that did use explicit training for emergent communication, which generally show that “selfish” agents do not learn to communicate (e.g., Cao et al., 2018). 

Although these social dilemma games are played *in silico*, the problem has real philosophical interest: humans face such dilemmas regularly (e.g., “tragedy of the commons,” COVID-19 protocols). Understanding the mechanisms of cooperation may improve policy-making for collective benefit, for example.

Broadly, I would like to build upon the research on social influence and untrained, emergent communication in MARL. I might begin by replicating results from Jaques et al., then adjust the experimental procedure to determine which factors are involved in emergence, such as trying different dilemma games or implementations of social influence. I am especially interested in the effect of adding a model of other agents (i.e., network layers that try to approximate other agents’ reward functions) to each individual agent, which is a similar concept to human theory of mind.

---

# Collaborative work

>The SFI UCR program requires collaboration. Please describe an experience with collaboration, whether in college or elsewhere, and what you learned from that experience about how to work effectively as part of a team.

My time at Columbia University’s Spectator Publishing Company—first as a copy editor, then a product manager—gave me experience in two distinct modes of collaboration. As a copy editor, I took six-hour shifts in the newsroom as a part of the publishing pipeline: I began as a trainee, the first to lay eyes on and fact-check an incoming article, then gradually moved up to an associate making high-level semantic or structural edits. The office buzzed with live communication (as indicated by our complaint-inducing noise levels), and us copy editors, seated around a special circular table, were in constant dialogue about our work. Occasionally, an article that completely missed the paper’s standards would fall in our inbox—then several of us would spring from our seats for a diplomatic mission to the relevant writer or section head editor. Even as a trainee, my perspective was valued by the most senior members. I learned to unabashedly ask questions, to disagree with both grace and firmness, and most importantly, how to account for my mistakes. Later, I learned how to mentor my own trainees with the same openness and often benefited from their keen editorial observations or unanswerable questions.

In contrast, collaboration as a product manager meant being responsible for numerous “deliverables.” (The two Spectator teams are roughly analogous to the [[Dual process theory of reasoning|two systems of thinking]]: “Copy” is System 1, quick, parallel-working, and habitual; “Product” is System 2, slow, sequential, and contemplative.) Product meetings were all knowledge exchange, explaining our progress to each other and planning assignments for the next week, which was not a new experience after 14 years of meeting deadlines in school. I did, however, undergo a crucial mindset shift. My idea for a bulletin website had been selected as our major project of the semester, and I felt somewhat possessive of the designs I sent to the engineers. As the designers and engineers continued our back-and-forth, I quickly realized that this was making me devalue everyone else’s contributions, without which the website could not exist. I learned that individualism, even if I didn’t explicitly act on it, prevented me from working as effectively as when I considered this website a collective achievement.