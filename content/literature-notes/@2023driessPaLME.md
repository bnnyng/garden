---
aliases: 
title: "Paper | PaLM-E: An Embodied Multimodal Language Model"
permalink: https://doi.org/10.48550/arXiv.2303.03378
year: 
tags:
  - literature-note
lastmod: 2025-04-12T16:30:32-04:00
date: 2025-04-11T13:39:09-04:00
---
> Driess, Danny, Fei Xia, Mehdi S. M. Sajjadi, Corey Lynch, Aakanksha Chowdhery, Brian Ichter, Ayzaan Wahid, et al. “PaLM-E: An Embodied Multimodal Language Model.” arXiv, March 6, 2023. [https://doi.org/10.48550/arXiv.2303.03378](https://doi.org/10.48550/arXiv.2303.03378).

---
# Summary

>[!example] Key terms
>- **Zero-shot learning:** when a model is trained to recognize new classes that are not present in the training data using sets of attributes that characterize the new classes.
>- **One-shot learning:** when a model is trained to recognize new classes using a single example from each class.
>- **PaLM-E:** a generative text model that takes multi-modal sentences as input.


---

# Topic, thesis

> ***Briefly, why is the research question important to answer?***


---
# Background

> ***What are the main theories in the literature? Is there anything missing or problematic?***

- **General vision-language modeling:** VLMs integrate both visual and text data in different ways TBD
- **Action-output models:**

>***What is the empirical evidence? Is there anything missing or problematic?***

---
# Argument and hypotheses

>***Does the article advance a new theoretical argument? If yes, what is it?***

- The main architectural innovation is to include “embodied” inputs like images, state estimates, and other sensory perceptions as vectors in the same **embedding space** as the language tokens of a pre-trained language model.

>***What are the hypotheses to be tested?***


---
# Research design

>***What is the methodological approach?***

- **Model architecture**
	- “Embodied” information is injected into the pre-trained language model **PaLM** (TBD)
	- **Inputs** are **multimodal sentences** made of interleaved tokens from both text and “multimodal observations”; **output** is text.
	- **Embodiment** is implemented by using a separate **low-level policy** or **planner** to translate low-level **commands** in a restricted vocabulary into **actions**.
	- For embodied planning and control tasks (as in the situation above), PaLM-E is included in a **control loop** where a robot executes the translated actions and makes new observations that serve as model inputs.
- **Environment**
- Experiments

>***What (training) data is used?***

- 

>***What are the specific methods and techniques?***


---
# Results

>***What are the key findings?***

>***What do these findings say about the argument and hypotheses?***


---
# Conclusion

>***What is the overall conclusion?***


>***How did this study advance the literature? What are the main contributions?***

- 

>***What are the key limitations?***


>***What needs to be done in the future?***

---
# Further reading

- [GitHub repository](https://github.com/kyegomez/PALM-E)