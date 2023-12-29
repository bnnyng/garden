---
aliases:
  - recurrent neural network
  - RNN
  - recurrent model
  - recurrent
tags:
  - permanent-note
  - topic-computer-science-information
---
# Overview

Recurrent neural networks are specialized for sequential data. While a traditional [[Multilayer perceptron|feedforward neural network]] has separate parameters for each input feature, an RNN shares weights across several time steps.

In an RNN, each member of the output is a function of the previous members of the output. Each output member is produced using the same update rule.

Common design patterns for RNNs include:
- Producing an output at each time step, with recurrent connections between hidden units;
- Producing an output at each time step, with recurrent connections only from the output at one time step to the hidden units at the next time step;
- Recurrent connections between hidden units that read an entire sequence and produce a single output.
