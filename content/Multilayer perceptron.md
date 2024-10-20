---
aliases:
  - multilayer perceptron
  - feedforward neural network
  - activation function
  - output layer
  - hidden layer
  - artificial neuron
  - unit
tags:
  - permanent-note
  - topic-computer-science-information
lastmod: 2024-10-03T12:08:50-04:00
---
# Overview

A multilayer perceptron, sometimes called a feedforward network, is a model which defines a mapping $y = f(x, \theta)$ and learns the values of $\theta$ which best approximate a target function $f^*$.

In the [[§ Deep Learning|deep learning]] approach, the model output is given by  $$ y = f(x; \theta,w) = \phi(x; \theta)^{\top}w, $$ where $\phi$ is a nonlinear function called a hidden layer. The parameters $\theta$ specify $\phi$ from a family of functions, and the weights $w$ are used to map $\phi(x)$ to the desired output $y$.

Feedforward neural networks are equivalent to **finite state machines** (see also: [[Computability and Turing machines]], Chomsky hierarchy).

---
# Key terms
- **Output layer** = the final layer of the perceptron.
- **Hidden layer** = the intermediate layers of a perceptron. The algorithm learns how to use hidden layers to best implement an approximation of $f^*$.
- **Unit** = also called artificial neurons; parallel vector-to-scalar functions that make up a single layer. Similar to biological neurons, each unit receives input from many other units to compute its own activation value.
- **Activation function** = a fixed nonlinear function that follows a transformation by a neural network layer, which is controlled by learned parameters.

---
# Notes

## Activation functions
- The rectified linear unit (ReLU) is defined by $g(z) = max\{0, z\}$.
- Sigmoid activation is used for Bernoulli distributed outputs, softmax for multinoulli.

## MLP example

```Python
class MLP(nn.Module):
  """
  This class implements MLPs in Pytorch of an arbitrary number of hidden
  layers of potentially different sizes. Since we concentrate on classification
  tasks in this tutorial, we have a log_softmax layer at prediction time.
  """

  def __init__(self, in_dim=784, out_dim=10, hidden_dims=[], use_bias=True):
    """
    Constructs a MultiLayerPerceptron

    Args:
      in_dim: Integer
        dimensionality of input data (784)
      out_dim: Integer
        number of classes (10)
      hidden_dims: List
        containing the dimensions of the hidden layers,
        empty list corresponds to a linear model (in_dim, out_dim)

    Returns:
      Nothing
    """

    super(MLP, self).__init__()

    self.in_dim = in_dim
    self.out_dim = out_dim

    # If we have no hidden layer, just initialize a linear model (e.g. in logistic regression)
    if len(hidden_dims) == 0:
      layers = [nn.Linear(in_dim, out_dim, bias=use_bias)]
    else:
      # 'Actual' MLP with dimensions in_dim - num_hidden_layers*[hidden_dim] - out_dim
      layers = [nn.Linear(in_dim, hidden_dims[0], bias=use_bias), nn.ReLU()]

      # Loop until before the last layer
      for i, hidden_dim in enumerate(hidden_dims[:-1]):
        layers += [nn.Linear(hidden_dim, hidden_dims[i + 1], bias=use_bias),
                   nn.ReLU()]

      # Add final layer to the number of classes
      layers += [nn.Linear(hidden_dims[-1], out_dim, bias=use_bias)]

    self.main = nn.Sequential(*layers)

  def forward(self, x):
    """
    Defines the network structure and flow from input to output

    Args:
      x: Tensor
        Image to be processed by the network

    Returns:
      output: Tensor
        same dimension and shape as the input with probabilistic values in the range [0, 1]

    """
    # Flatten each images into a 'vector'
    transformed_x = x.view(-1, self.in_dim)
    hidden_output = self.main(transformed_x)
    output = F.log_softmax(hidden_output, dim=1)
    return output
```