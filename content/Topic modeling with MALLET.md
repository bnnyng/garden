---
aliases:
  - MALLET
tags:
  - workspace
  - polymetamath
publish: 
date: 2024-07-12 06:37
lastmod: 2024-08-08T11:58:11-06:00
---
MALLET is a Java-based package for quantitate text analysis, including LDA and hierarchical LDA implementations of [[Topic modeling|topic models]]. The following prompts are used to fit an LDA algorithm from the command line.

**Importing data**
```
bin\mallet import-file --input data\comments-mallet-bigrams-20.tsv --output commentsBigrams20.mallet --keep-sequence 
```

**Training**
```
bin\mallet train-topics --input commentsBigrams20.mallet --num-topics 10 --output-state commentsOutput10.gz --optimize-interval 10 --optimize-burn-in 20 --output-doc-topics commentsTopics10.txt --output-topic-keys commentsKeys10.txt 
```

**Output diagnostics file**
```
bin\mallet train-topics --input commentsBigrams20.mallet --num-topics 20 --input-state commentsOutput20.gz --no-inference --diagnostics-file diagnostics20.xml
```

---
# Resources

- [(Wayback Machine) Topic Model Diagnostics](https://web.archive.org/web/20240418012335/https://mallet.cs.umass.edu/diagnostics.php)