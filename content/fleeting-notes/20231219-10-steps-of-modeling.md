---
tags:
  - fleeting-note
---
## Overview

>[!tip] A typical DL pipeline
>1. **Question/goal:** Define a problem space with goals, hypotheses, and evaluation criteria. Also consider ethics!
>2. **Data:** Find, clean, encode, and format.
>3. **Pre-processing to extract relevant information:** Visualize data, feature engineering, feature extraction.
>4. **Model design:** Define model details including selecting architecture, training algorithm, objective function, and regularizer.
>5. **Model testing:** Evaluate performance using cross-validation, metrics (e.g., confusion matrix), generalization (e.g., hold-out).
>6. **Application:** Deploy model to make predictions!

---
## Framing the question
### 1 - Define the question

- Define the problem space
	- Define and constrain actual modeling project – phenomenon, data, something achievable.
	- Represent the **knowledge gap**, something we do not yet understand.
	- Phenomenon → questions → hypotheses → goals; how is it useful?
- Determine personal goals and **utility** – why do you, personally, care?
- Problem space → model space (formalization) → outcome space (analysis) → utility (evaluation)
- Guiding questions:
	- Brainstorming a question: What phenomena differs from my expectations? In what ways does it differ? How could it be explained? What experiment can be used to investigate this phenomenon? What kind of data is needed?
	- What exact aspect of data needs modeling?
	- What is the evaluation method; how will I know my model is good?
	- For computational models, what experiment or simulation can I use to test my model?

### 2 - Literature review

- Surveying the literature – what’s known? What has already been done? What previous models can I use as a starting point? Alternative approaches?
- Skill sets – do I need to learn something before I can start?
- Look for data sets and alternative modeling approaches

### 3 - Determine basic ingredients

- What parameters / hyperparameters / variables are needed?
- What variables describe the *process* to be modeled?
	- What is measurable? What is latent?
	- Where do these variables come from?
	- Do any abstract concepts need to be instantiated as variables, to relate to potential measurements?

### 4 - Formulating a specific, mathematically defined hypothesis

- Formulating hypotheses in two steps:
	- Relate ingredients identified in Step 3
		- What is the model mechanism expected to do?
		- How are different parameters expected to influence model results?
	- Express hypotheses in mathematical language by giving “ingredients” specific variable names

---
## Implementing the model

### 5 - Selecting the toolkit

- Rules to follow:
	- Determine the level of abstraction
	- Select the toolkit that best represents ingredients and hypotheses
	- Toolkit should express all needed relationships, mechanisms, and concepts
	- Keep it as simple as possible!

### 6 - Model drafting
- The model will have:
	- **Inputs** – data and parameters
	- **Outputs** – the (potentially measurable) predictions
	- **Functions** – a set of functions to perform hypothesized computations