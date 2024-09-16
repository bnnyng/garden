---
tags:
  - fleeting-note
date: 2025-08-20 14:02
lastmod: 2025-08-27T09:01:57-07:00
---
# MALLET inputs

**Import data**
```
bin\mallet import-file --input data\semantic-gpt-1.tsv --output semantic-gpt-1.mallet --keep-sequence 
```

**Training 30 topics**
```
bin\mallet train-topics --input semantic-gpt-1.mallet --num-topics 10 --output-state semanticGPTOutput30-P5-onlyG-1.gz --optimize-interval 10 --optimize-burn-in 20 --output-doc-topics semanticGPTTopics30-P5-onlyG-1.txt --output-topic-keys semanticGPTKeys30-P5-onlyG-1.txt --diagnostics-file semanticGPTDiagnostics30-P5-onlyG-1.txt
```

**Checking stochasticity**
```
bin\mallet train-topics --input semantic-gpt-1.mallet --num-topics 10 --optimize-interval 10 --optimize-burn-in 20 --output-doc-topics semanticGPTTopics5-1.txt --output-topic-keys semanticGPTKeys5-1.txt 
```

```
bin\mallet train-topics --input semantic-gpt-1.mallet --num-topics 10 --optimize-interval 10 --optimize-burn-in 20 --output-doc-topics semanticGPTTopics5-2.txt --output-topic-keys semanticGPTKeys5-2.txt
```

```
bin\mallet train-topics --input semantic-gpt-1.mallet --num-topics 10 --optimize-interval 10 --optimize-burn-in 20 --output-doc-topics semanticGPTTopics5-3.txt --output-topic-keys semanticGPTKeys5-3.txt 
```

```
bin\mallet train-topics --input semantic-gpt-1.mallet --num-topics 10 --optimize-interval 10 --optimize-burn-in 20 --output-doc-topics semanticGPTTopics5-4.txt --output-topic-keys semanticGPTKeys5-4.txt
```

```
bin\mallet train-topics --input semantic-gpt-1.mallet --num-topics 10 --optimize-interval 10 --optimize-burn-in 20 --output-doc-topics semanticGPTTopics5-5.txt --output-topic-keys semanticGPTKeys5-5.txt
```

---
# Unfiltered word list

## Topic evaluation

```
[document_entropy] Topic entropy upper bound: 7.553286605600419
[corpus_dist] Most concentrated topics (low entropy): [8, 16, 6, 21, 11]
[corpus_dist] Most evenly spread topics (high entropy): [3, 1, 20, 10, 5]
[corpus_dist] Topics most similar to the corpus distribution: [28, 3, 0, 15, 4]
[rank_1_docs] Topics most likely to be content-ful: [3, 10, 20, 1, 24]
[rank_1_docs] Topics least likely to be content-ful: [21, 29, 28, 9, 2]
```

## Prompts

Original

```
'Your task is to extract all mathematical terms from a set of documents. For example, in the document {docs[0]}, you would extract the terms "furstenberg", "katznelson", and "carlson simpson theorem." The goal is to find terms that reflect topics of discussion. Allowable terms include equations like "k=3," even though this does not correspond to a real mathematical subfield. Finally, the terms you extract should be copied verbatim and match the formatting of the provided text. Your response will be a string of comma-separated terms with no additional text. Following these instructions, extract the mathematical terms from these documents and return a string of comma-separated terms: \n\n{docs[i:i+batch_size]}'
```

---
# Filtered word list

## Prompts

Original
``` Python
    response = client.chat.completions.create(
        model='gpt-1.5-turbo',
        messages=[
            {'role': 'system', 'content': 'You are a text processing assistant that specializes in mathematical writing and proofs.'},
            {'role': 'user', 'content': f'Your task is to extract all mathematical terms from a set of documents. The terms you extract should be copied verbatim and match the formatting of the provided text. Your answer should be a list of terms on a single line with a comma separating each term. Do not include additional descriptions in your output. Following the previous instructions, extract the mathematical terms from these documents: \n\n{docs[i:i+batch_size]}'}
        ]
    )
```


---

# Best loss results

