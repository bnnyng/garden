---
aliases:
  - CNN
  - convolutional neural network
  - receptive field
  - parameter sharing
tags:
  - permanent-note
  - topic-computer-science
---
# Overview

Convolutional neural networks (CNNs) are specialized to process data with a known grid-like topology, such as images. CNNs use a linear operation called [[Convolution]] instead of general matrix multiplication in at least one hidden layer.

The input to a convolutional layer is a tensor of data. Each convolutional layer outputs a feature or activation map.

#wip Make a note that CNNs are biologically inspired

---
# Key terms

- **Kernel** = also known as a filter; a tensor of parameters that are adapted by the learning algorithm. The kernel is the second argument to the convolution, and the input tensor is the first.
- **Receptive field** = input units which affect a given output unit.
- **Parameter sharing** = using the same parameter for more than one function in a model. Also known as **tied weights**, because the value of the weight applied to one input is “tied” to the value of a weight applied elsewhere.