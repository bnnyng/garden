# Neural Networks, Manifolds, and Topology

![rw-book-cover](https://readwise-assets.s3.amazonaws.com/static/images/article3.5c705a01b476.png)

## Metadata
- Author: [[colah.github.io]]
- Full Title: Neural Networks, Manifolds, and Topology
- Category: #articles
- Document Tags: [[review-ml-ai]] 
- URL: https://colah.github.io/posts/2014-03-NN-Manifolds-Topology/

## Highlights
- With each layer, the network transforms the data, creating a new representation. ([View Highlight](https://read.readwise.io/read/01h5svsjmxxz1z3tw7qhxcqsdr))
    - Tags: [[review-ml-ai]] 
- Each dimension corresponds to the firing of a neuron in the layer. ([View Highlight](https://read.readwise.io/read/01h5svsybf4htc6awq1jjxdf55))
    - Tags: [[review-ml-ai]] 
    - Note: What does "dimension" refer to here, the number of different input features? Is this different for different layer types, such as linear vs. convolutional?
- The story is much the same for other standard layers, consisting of an affine transformation followed by pointwise application of a monotone activation function. ([View Highlight](https://read.readwise.io/read/01h5svnya7bsmpnh9w4wdnmh0c))
- As mentioned previously, classification with a sigmoid unit or a softmax layer is equivalent to trying to find a hyperplane (or in this case a line) that separates data in the final represenation. ([View Highlight](https://read.readwise.io/read/01h5svzny27j3j8nq9yksm49ns))
    - Tags: [[review-ml-ai]] 
- As mentioned previously, classification with a sigmoid unit or a softmax layer is equivalent to trying to find a hyperplane (or in this case a line) that separates \(A\) and \(B\) in the final represenation. With only two hidden units, a network is topologically incapable of separating the data in this way, and doomed to failure on this dataset. ([View Highlight](https://read.readwise.io/read/01h5vd0skprrt80ahp6125qzzv))
    - Note: Is the relevant fact that the maximum "dimensionality" of the network should be one dimension above the "manifold" classes?
- The manifold hypothesis is that natural data forms lower-dimensional manifolds in its embedding space. ([View Highlight](https://read.readwise.io/read/01h5vd06bz6zdh8efdnx8fyqwb))
    - Tags: [[manifold hypothesis]] [[review-ml-ai]] 
- From this knot perspective, our continuous visualization of the representations produced by a neural network isn’t just a nice animation, it’s a procedure for untangling links. In topology, we would call it an *ambient isotopy* between the original link and the separated ones. ([View Highlight](https://read.readwise.io/read/01h5vd96nrq2vfamc2xbxxwkp1))
    - Tags: [[knot theory]] 
    - Note: So in a way, the "desired" classification function, which the network is trying to learn, is precisely the isotopy? Is there something analogous for more realistic classification tasks?
- Links and knots are \(1\)-dimensional manifolds, but we need 4 dimensions to be able to untangle all of them. Similarly, one can need yet higher dimensional space to be able to unknot \(n\)-dimensional manifolds. All \(n\)-dimensional manifolds can be untangled in \(2n+2\) dimensions.[6](https://colah.github.io/posts/2014-03-NN-Manifolds-Topology#fn6) ([View Highlight](https://read.readwise.io/read/01h5vd6xf65tahxmx9mcmmcnyv))
    - Tags: [[knot theory]] [[manifold hypothesis]] [[review-ml-ai]] 
- Topological properties of data, such as links, may make it impossible to linearly separate classes using low-dimensional networks, regardless of depth. Even in cases where it is technically possible, such as spirals, it can be very challenging to do so.
  To accurately classify data with neural networks, wide layers are sometimes necessary. ([View Highlight](https://read.readwise.io/read/01h5vdkm5ntczq4sx5cgc9nkya))
    - Tags: [[review-ml-ai]] 
