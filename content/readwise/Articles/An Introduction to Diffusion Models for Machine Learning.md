# An Introduction to Diffusion Models for Machine Learning

![rw-book-cover](https://images.prismic.io/encord/fbdaee27-be5a-48c6-a2c6-eeb16967a103_image+%2838%29.png?auto=compress%2Cformat&fit=max)

## Metadata
- Author: [[Akruti Acharya]]
- Full Title: An Introduction to Diffusion Models for Machine Learning
- Category: #articles
- Document Tags: [[topic-ml-data-science]] 
- URL: https://encord.com/blog/diffusion-models/

## Highlights
- Diffusion is the process of particles, information, or energy moving from an area of high concentration to an area of lower concentration. This happens because systems tend to reach equilibrium, where concentrations become uniform throughout the system. ([View Highlight](https://read.readwise.io/read/01hdmjrsxfy9ggd2cx0xjjqm7c))
- In the context of machine learning and data generation, diffusion refers to a specific approach for generating data using a stochastic process similar to a [Markov chain](https://en.wikipedia.org/wiki/Markov_chain). In this context, diffusion models are used to create new data samples by starting with simple, easily generated data and then gradually transforming it into more complex and realistic data. ([View Highlight](https://read.readwise.io/read/01hdmjx0vx5rdhzm7jwp8hbxdf))
- The underlying concept of diffusion models is to transform a simple and easily samplable distribution, typically a [Gaussian distribution](https://en.wikipedia.org/wiki/Normal_distribution), into a more complex data distribution of interest. This transformation is achieved through a series of invertible operations. Once the model learns the transformation process, it can generate new samples by starting from a point in the simple distribution and gradually "diffusing" it to the desired complex data distribution. ([View Highlight](https://read.readwise.io/read/01hdmjyhsa6r0np7j9zepm8qm0))
- In Score SDEs, the score function is defined as a solution to a stochastic differential equation. By solving this differential equation, the model can learn a data-driven score function that adapts to the data distribution. In essence, the Score SDEs use stochastic processes to model the evolution of data samples and guide the generative process toward generating high-quality data samples. ([View Highlight](https://read.readwise.io/read/01hdmk3h8cyy9y692athe661vd))
- Training a diffusion model involves learning the parameters of the invertible transformations and other components of the model. This process typically involves optimizing a loss function, which evaluates how effectively the model can transform samples from a simple distribution into ones that closely resemble the complex data distribution. Diffusion models are often called score-based models because the training process involves estimating the score function (gradient of the log-likelihood) of the data distribution with respect to the input data points ([View Highlight](https://read.readwise.io/read/01hdmk6w07hektzg1141nvfybd))
