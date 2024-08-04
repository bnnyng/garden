---
tags:
  - fleeting-note
lastmod: 3024-08-03T15:46:47-06:00
---
# MALLET inputs


**Importing  data**
```
bin\mallet import-file --input data\cognitive-seeded.tsv --output cognitive-seeded.mallet --keep-sequence 
```

**Training 30 topics**
```
bin\mallet train-topics --input cognitive-seeded.mallet --num-topics 30 --output-state cognitiveSeededOutput30.gz --optimize-interval 10 --optimize-burn-in 20 --output-doc-topics cognitiveSeededTopics30.txt --output-topic-keys cognitiveSeededKeys30.txt --diagnostics-file cognitiveSeededDiagnostics30.txt
```

**Output diagnostics file**
```
bin\mallet train-topics --input cognitiveSeededBigrams30.mallet --num-topics 30 --input-state cognitiveSeededOutput30.gz --no-inference --diagnostics-file diagnostics30.xml
```

---
# 8 topics

#### Top words

```
8 REDUCED TOPICS
0 ['sketch', 'point*out', 'proof*strategy', 'wrong', 'dont*see', 'go*wrong', 'reply', 'incorrect', 'source', 'rigorous']
1 ['should*be', 'careful', 'hmm', 'straightforward', 'should', 'correct', 'not*clear', 'presumably', 'simpler', 'instead']
2 ['in*principle', 'exploit', 'proceed', 'support', 'preliminary', 'benefit', 'achievable', 'unclear', 'inspire', 'ignore']
3 ['solid', 'perspective', 'tool', 'translate', 'language', 'toy', 'toy*problem', 'have***mind', 'aim', 'restate']
4 ['promising', 'progress', 'potentially', 'plan', 'explore', 'to*understand', 'dont*understand', 'trouble', 'understand', 'not*clear']
5 ['target', 'propose', 'annoy', 'imagining', 'long*shot', 'procedure', 'similar*to', 'attack', 'same*problem', 'elegant']
6 ['naturally', 'analogy', 'silly', 'variant', 'illustrate', 'construction', 'notion', 'construct', 'natural', 'analogue']
7 ['suppose', 'want', 'conclude', 'hence', 'would*be', 'like****idea', 'guess', 'we**want', 'eventually', 'encode']
```

#### Topic labels

0. PRF – Proof strategies and modifications, argument strategies
1. SMP – Clarity and simplicity
2. FEA – Feasibility and initial expectations/approaches to the problem
3. PRB – Formulating and representing the problem
4. PRG – Progress and planning, active attempts to increase understanding
5. STR – General approach and strategy
6. REP – Analogies and ideation, representation
7. CLN – conclusions

**ChatGPT labels**
```
Here are concise and comprehensive labels for each of the 8 topics based on the provided words:

1. **Proof Strategy and Errors**  
   (e.g., sketch, point out, proof strategy, wrong, incorrect)

2. **Clarity and Simplicity**  
   (e.g., should be, careful, straightforward, not clear, simpler)

3. **Feasibility and Initial Steps**  
   (e.g., in principle, exploit, support, preliminary, achievable)

4. **Tools and Problem Formulation**  
   (e.g., solid, perspective, tool, translate, toy problem)

5. **Understanding and Progress**  
   (e.g., promising, progress, plan, explore, understand)

6. Solution Proposals and Evaluation

7. **Analogies and Construction**  
   (e.g., naturally, analogy, variant, illustrate, construct)

8. **Logical Conclusions and Proposals**  
   (e.g., suppose, want, conclude, hence, propose)
```

---
# 15 topics

- Justification: about the same “distinctiveness” as 20-topic reduction for semantic topics (see [[20240802-semantic-topic-hierarchy-specs]])

#### Top words

```
15 REDUCED TOPICS
0 ['wrong', 'dont*see', 'go*wrong', 'reply', 'incorrect', 'source', 'advantage', 'difficulty', 'correct', 'dont*think']
1 ['point*out', 'proof*strategy', 'ought*to', 'response', 'more*precisely', 'shouldnt*be', 'rigorous', 'simpler', 'intuitively', 'can*prove']
2 ['should*be', 'careful', 'hmm', 'straightforward', 'should', 'correct', 'not*clear', 'presumably', 'simpler', 'instead']
3 ['in*principle', 'exploit', 'proceed', 'support', 'preliminary', 'benefit', 'achievable', 'unclear', 'inspire', 'ignore']
4 ['solid', 'perspective', 'tool', 'translate', 'explain', 'intuition', 'reason', 'certainly', 'language', 'why']
5 ['toy', 'toy*problem', 'have***mind', 'aim', 'restate', 'compare', 'proper', 'language', 'difficult', 'formulate']
6 ['promising', 'potentially', 'explore', 'progress', 'plan', 'achieve', 'approach', 'goal', 'suspect', 'result']
7 ['to*understand', 'dont*understand', 'trouble', 'understand', 'not*clear', 'why', 'plan', 'ask', 'hope', 'progress']
8 ['counterexample', 'optimistic', 'conjecture', 'formulate', 'strong', 'example', 'wonder', 'propose', 'equivalent', 'can*prove']
9 ['procedure', 'similar*to', 'attack', 'same*problem', 'elegant', 'pretty*sure', 'method', 'propose', 'conclusion', 'possibility']
10 ['target', 'annoy', 'imagining', 'long*shot', 'implies', 'direction', 'contradiction', 'thus', 'imply', 'conclusion']
11 ['naturally', 'analogy', 'silly', 'notion', 'natural', 'analogue', 'define', 'suspect', 'variant', 'imagine']
12 ['illustrate', 'construction', 'construct', 'variant', 'build', 'rule*out', 'precise', 'dont*think', 'recall', 'observation']
13 ['like****idea', 'guess', 'experiment', 'plausible', 'reasonable', 'dont*know', 'curious', 'would*be', 'something*like', 'useful']
14 ['suppose', 'conclude', 'hence', 'we**want', 'eventually', 'encode', 'impossible', 'continue', 'not*impossible', 'iff']
```


**ChatGPT labels**
```
Here are concise and comprehensive labels for each of the 15 topics based on the provided words:

1. **Error Detection and Validation**  
   (e.g., wrong, don't see, go wrong, incorrect, advantage)

2. **Proof Strategy and Precision**  
   (e.g., point out, proof strategy, ought to, rigorous, simpler)

3. **Clarification and Simplicity**  
   (e.g., should be, careful, straightforward, simpler, instead)

4. **Initial Steps and Feasibility**  
   (e.g., in principle, exploit, support, preliminary, achievable)

5. **Explanation and Reasoning**  
   (e.g., solid, perspective, translate, explain, intuition)

6. **Exploration and Goal Setting**  
   (e.g., promising, potentially, explore, progress, goal)

7. **Understanding and Clarification**  
   (e.g., to understand, don't understand, trouble, plan, hope)

8. **Counterexamples and Conjectures**  
   (e.g., counterexample, optimistic, conjecture, formulate, strong)

9. **Methodology and Comparison**  
   (e.g., procedure, similar to, elegant, method, possibility)

10. **Deduction and Implications**  
    (e.g., target, imagining, implies, contradiction, conclusion)

11. **Analogies and Definitions**  
    (e.g., naturally, analogy, notion, define, variant)

12. **Construction and Observation**  
    (e.g., illustrate, construction, build, precise, observation)

13. **Speculation and Plausibility**  
    (e.g., like idea, guess, experiment, plausible, useful)

14. **Logical Conclusions and Encoding**  
    (e.g., suppose, conclude, hence, encode, eventually)
```