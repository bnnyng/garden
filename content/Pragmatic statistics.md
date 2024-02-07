---
aliases: 
tags:
  - permanent-note
  - topic-logic-mathematics
publish: 
date: 2024-02-01
lastmod: 2024-02-07T11:55:06-08:00
---
Adapted from a presentation by Anthony Ozerov for [[2024-mcm|CUMMW 2024]]. Full notes [[20240124-CUMMW-modeling-right-when-the-time-is-tight|here]].

---
# Overview

- Before deciding on what methods to use on a problem, decide on what the goal is: description, prediction, or inference?
	- **Descriptive** statements only concern the data, and nothing outside the data.
	- **Predictive** statements are about new, unseen observations (ideally similar to what is already observed).
	- **Inference** involves showing understanding of real-world phenomena outside of the data.

---
# What is statistics for?

Statisticians have three basic tasks:
- **Description** – coming up with facts based on the data
- **Prediction** – making claims about new or unseen observations
- **Inference** – understanding a property of the world, such as a general causal relationship

Progressing from description → prediction → inference means more insights, but also more difficulty and assumptions.
## Description

Description reveals what interesting questions can be asked about the dataset and what statistical methods can be used. It often involves *no assumptions* and *no math*; often, simply inspecting a graph is enough to guide more interesting questions.

Tools of description include any forms of “**exploratory data analysis**” that visualize or summarize the data—including graphs (e.g., scatter plots, histograms) and summary statistics (e.g., mean, median, standard deviation)—as well as **principal components analysis**, which projects data into lower dimensions to reveal information about its structure.

## Prediction

Prediction is used for problems where “black box” solutions are enough, and *understanding* is not required. **Confidence intervals** are needed to show levels of belief in a prediction.

Tools of prediction include statistical and machine learning models, from regression to neural networks. Note that predictions can be made without statistics as well, such as with physics models.

## Inference

Inference makes a claim about the world outside of the data given certain *assumptions*. The validity of an inferential statement can be assessed with *testable predictions*. 

**Sensitivity** and **stability** analyses—varying parts of the model, including estimated parameters and the input variables themselves—show how sensitive the model is to small changes. Sensitivity analyses are also an opportunity to test the model’s robustness to assumptions. 

Any trustworthy inference must quantify uncertainty using probabilities (see: [[Frequentist vs. Bayesian inference]]).