---
aliases: 
tags:
  - workspace
publish: 
date: 2024-07-23 09:42
lastmod: 2024-07-24T20:18:44-06:00
---
- PCA
- Potentially read about rhetoric mining?
	- https://pubsonline.informs.org/doi/full/10.1287/ijds.2022.0024
	- https://www-sciencedirect-com.ezproxy.cul.columbia.edu/science/article/pii/S0167923610001909
	- https://iris.unito.it/bitstream/2318/1691525/4/Pironti_knowledge.pdf
- Old:
	- 2011 – Latent Semantic Analysis (too complicated?)
	- Pattern matching using seed sets of words – how to reduce into categories?
	- Is sequence information necessary, or can just figure out based on individual words and phrases? Include bigrams
	- Manual tagging, interrater reliability, Cohen’s kappa
- Start with assessment of cognitive moves from the literature OR from LIWC wordlists?
- Potential pipeline for rhetoric mining
	- Extract rhetorical words and phrases
	- Change into vector embeddings with Word2Vec
	- Broadly cluster using topic model
- More ways to extract cognitive moves
	- Document embeddings in a custom sentiment state
	- Classification using cosine similarities
- Data
	- GoEmotions: https://research.google/blog/goemotions-a-dataset-for-fine-grained-emotion-classification/ – can use to classify or augment
	- SemEval datasets: https://semeval.github.io/

##### Corpus
- Na & DeDeo’s seed words

---
# References
##### 2022, Na & DeDeo – Diversity of Argument-Making in the Wild

- Concepts and operationalization
	- **Semantics** = subject matter; topic model separates post into different semantic categories.
	- **Pragmatics** = argument pattern; uses information-theoretic “linkage network” to find patterns of co-occurance between words included in a seed set
- Data
	- Seed words: LIWC wordlists from Pennebaker, et al.; examine corpus for bigrams; topic modeling another subreddit for other argument-based words
##### 2020, Sims & Bamman – [Measuring Information Propagation in Literary Social Networks](https://aclanthology.org/2020.emnlp-main.47.pdf)

##### 2017, DeDeo – Exploration and Exploitation of Victorian Science in Darwin’s Reading Notebooks

- Concepts and operationalization
	- **Cognitive surprise** = extent to which a new reading satisfies or violates expectations based on what came before; topic models “quantify structure of each text,” high surprise means new mixture of topics
- **Cognitive surprise** is measured by comparing distributions of each text over topics
	- 