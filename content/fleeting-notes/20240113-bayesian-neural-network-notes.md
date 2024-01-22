---
tags:
  - fleeting-note
lastmod: 2024-01-13T13:25:27-08:00
---
[Bayesian Neural Network | Deep learning](https://www.youtube.com/watch?v=OVne8jDKGUI)
- BNNs learn best distribution for each weight, rather than hard values
	- Want to learn best mean and STD values for each weight distribution
- Training data $\mathcal D_{tr} = (\mathbf x_i, y_i)^n_{i=1}$, model $F_\theta()$, loss $\mathcal L$
- Typical NN:
	- Training:
		- Maximum likelihood estimate – maximizing log likelihood of each individual training data
	- Prediction
		- Find best $\theta$ using loss function
		- Prediction inputs training vector, parameters; forward pass
- BNN:
	- Training:
		- Want to learn mean and covariance
		- Regularization KL
		- Maximize likelihood, minimize KL divergence (prevents overfitting)
		- LL term translates to log function
	- Prediction:
		- Integrating
		- Sample data multiple times over learned distribution using best settings
		- Pass test input using each of the sample thetas
		- Average over all individual sample predictions

[Hands-on Bayesian Neural Networks - a Tutorial for DeepLearning Users](https://www.youtube.com/watch?v=T5TPaI5H4q8)

[From Theory to Practice with Bayesian Neural Network, Using Python](https://towardsdatascience.com/from-theory-to-practice-with-bayesian-neural-network-using-python-9262b611b825)

[Generating probability distributions with a NN](https://medium.com/hal24k-techblog/a-guide-to-generating-probability-distributions-with-neural-networks-ffc4efacd6a4)