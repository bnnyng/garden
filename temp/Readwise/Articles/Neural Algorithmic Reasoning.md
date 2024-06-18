# Neural Algorithmic Reasoning

![rw-book-cover](https://thegradient.pub/content/images/2023/09/profile.png)

## Metadata
- Author: [[Petar Veličković]]
- Full Title: Neural Algorithmic Reasoning
- Category: #articles
- URL: https://thegradient.pub/neural-algorithmic-reasoning/

## Highlights
- **Can neural networks** ***learn*** ***to execute*** **classical algorithms?**
  This can be seen as a good way to *benchmark* to what extent are certain neural networks capable of behaving algorithmically; arguably, if a system can produce the outputs of a certain computation, it has *“captured”* it ([View Highlight](https://read.readwise.io/read/01hhdcc21kvk8vfypesd93vkeh))
- The landmark paper, *“What Can Neural Networks Reason About?”* [2] established a mathematical foundation for why an architecture might be *better* for a task (in terms of *sample complexity*: the number of training examples needed to reduce validation loss below epsilon). The authors’ main theorem states that *better **algorithmic alignment** leads to better **generalisation*** ([View Highlight](https://read.readwise.io/read/01hhdcdfz40dcvta64z7evrrga))
- The MIT team made the important observation that GNNs appear to algorithmically align with DP, and since DP can itself be used to express many useful forms of classical computation, GNNs should be a very potent general-purpose model for learning to execute ([View Highlight](https://read.readwise.io/read/01hhdcfvst2jzbmrxvwazetswn))
- We found that while algorithmic alignment is indeed a powerful tool for model class selection, it unfortunately does not allow us to be *reckless*. Namely, we cannot just apply any expressive GNN to an algorithmic execution task and expect great results, especially **out-of-distribution**—which we previously identified as a key setting in which “true” reasoning systems should perform well ([View Highlight](https://read.readwise.io/read/01hhdch5ece2qcbvdhhwtekscb))
