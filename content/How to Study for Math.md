---
aliases: 
tags:
  - permanent-note
  - topic-logic-mathematics
publish: 
date: 2024-10-07 16:10
lastmod: 2024-10-17T14:57:22-04:00
---
# Tackling a proof

- Whenever you see a problem, spell out exactly what the hypothesis is, and what you’re trying to show. 
- If you’re not sure what to do with a problem because it uses some notion you’re not comfortable with (say, inverse image), find all propositions involving that notion and be sure to spell out all definitions as much as necessary. Sometimes, to solve a problem, you just need to spell everything out completely; sometimes you just need to apply the right fact. 
- See if you can combine your hypotheses in some way to get something new. Does that get you anywhere closer to your goal? 
- See if any of your hypotheses (or any facts you know) or goals seem similar to the hypotheses or conclusions of theorems from the course notes. Are those applicable? Are those helpful? 
- To quote a former student, you have to be generative: you have to come up with ideas and see if they work. If they don’t, you scrap them. If they do, you win! But if you’re not trying something, you won’t get much anywhere. 
- Try to think about how you could possibly do something. For instance, if you’re trying to show that two subspaces have the same dimension, you know (by thinking about the definition) that you have to show that a basis of one has the same size as a basis of the other. That suggests to me that if I have a basis of one, I need a way to construct a basis of the other. 
- When trying to come up with a general argument, sometimes it is helpful to imagine a specific example first and see if you can write a proof of that, and then see if you can generalize your proof. (For instance, if you’re trying to prove that $(v_1, · · · , v_n)$ is linearly dependent if and only if there’s a redundant vector, you could start with a specific example of five vectors in $\mathbb  R^3$ and see how to go back and forth between the notions of linear dependence and redundancy. In doing so, you will probably figure out the general argument.)
- If you are inclined to say that something is ‘obvious’ or ‘trivial’, be sure you can actually explain why it’s true! I hone in on words like that to look for errors, because there are usually errors nearby.

---

# How to study
## Notes to prepare
- The course notes are far too expansive to quickly review when you need a definition or fact (they’re more of a textbook than compact notes. You should make your own much more concise notes, including definitions and major (frequently used) theorems, which is much faster to scan.
- In addition to your reference sheet, I also encourage you to make a flowchart showing how all the different definitions connect (we have theorems showing how they connect to one another: for instance, in Chapter 5, there is the theorem that a linear map $A : V \to W$ is injective if and only if  $\ker A = \{ \vec 0\}$, so we have a relationship between injectivity and surjectivity. 
- Make a third sheet of notes which illustrates every definition and relationship with one interesting example (and, if helpful, one interesting non-example). For instance, there is the theorem which says that a list $(v_1, · · · , v_n)$ is linearly dependent if and only if one of the vectors vi is redundant. Have an example written down where you see why this is true! (This will also help you illustrate the argument.) 
- Beyond ‘time’, there is a reason I suggest you make these as opposed to making them for you: the very act of making such sheets will help you organize your thoughts.

## Studying homework sets and sample exams
- Study your homework. Each problem is trying to teach you something. What technique was crucial in that problem? If you gave a long argument, what was the essential idea? It is unlikely that your long argument will be repeated verbatim elsewhere, but your idea might be. Figure out what the idea is. 
- Similarly, when looking at proofs in my notes or otherwise, try to extract an essential idea from each argument. The argument that linearly independent sets are no larger than spanning sets had as a fundamental idea “Start with a spanning set of size $m$, and replace its terms with elements of a linearly independent set of size $n$, one by one; so long as we have more elements of the linearly independent set, there will always be at least one element of the spanning set to replace, so $m \leq n$.” 
- Review comments you’ve received on homework assignments. The comments are a big part of the point of homework assignments; they will not only help you identify gaps in your arguments, but how to write those arguments clearly.