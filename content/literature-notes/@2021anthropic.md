---
citekey: 2021anthropic
aliases:
  - 
tags:
  - literature-note
title: webpage | A Mathematical Framework for Transformer Circuits
year: 2021
permalink: https://www.anthropic.com/research/a-mathematical-framework-for-transformer-circuits
publish: 
date: 2025-01-21
lastmod: 2025-02-25T14:21:42-05:00
---
> Anthropic. (2021). _A Mathematical Framework for Transformer Circuits_. [https://www.anthropic.com/research/a-mathematical-framework-for-transformer-circuits](https://www.anthropic.com/research/a-mathematical-framework-for-transformer-circuits)

---

# Summary

> [!Abstract]
>
> Anthropic is an AI safety and research company that's working to build reliable, interpretable, and steerable AI systems.
>.


---

# Atomic notes

---

# Key terms

>[!example] Key terms from [[@2021anthropic]]
>- **Residual stream:** “the sum of the output of all the previous layers and the original embedding”; each layer of the transformer model performs an arbitrary [[Vector spaces and ring modules|linear transformation]] to “read” the existing stream before adding to “write.”

---

# Reading notes

## Residual stream as a communication channel

- The **residual stream** is a high-dimensional [[Vector spaces and ring modules|vector space]]. By construction, it has no “privileged” [[Vector bases and dimension|basis]], i.e., “we could rotate it by rotating all the matrices interacting with it, without changing model behavior.”
- 

## Attention heads

