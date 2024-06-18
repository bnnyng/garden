# #063 - Prof. YOSHUA BENGIO - GFlowNets, Consciousness & Causality

![rw-book-cover](https://i.ytimg.com/vi/M49TMqK5uCE/maxresdefault.jpg)

# Metadata
- Author: [[Machine Learning Street Talk]]
- Full Title: #063 - Prof. YOSHUA BENGIO - GFlowNets, Consciousness & Causality

- URL: https://youtube.com/watch?v=M49TMqK5uCE&si=bdRShmFHUr37H_Mu

# Highlights
- active learning which is a model that can economically ask an oracle which is probably the real world for the most salient training examples to continue learning the learner can choose or have an influence on the examples it gets and we want to learn a function which approximates the oracle efficiently ([View Highlight](https://read.readwise.io/read/01hk2wyndqvmt9yne5cdjr2r5a))
    - Note: Active learning definition
- machine teaching which is an interactive version where the human interactively selects the most salient data to train a machine learning model maximizing the information gain in respect of the training samples ([View Highlight](https://read.readwise.io/read/01hk2wzp1fw3xj91gexjsjh0ta))
    - Note: Machine teaching
- markov chain monte carlo just starts with an initial guess just one value that might plausibly be drawn from the distribution and then we produce a chain of samples from this initial guess by adding random perturbations in the neighborhood of that example and each new proposal and drawn from that random perturbation distribution is either rejected or accepted ([View Highlight](https://read.readwise.io/read/01hk2x15vdcb4e1xapth06mfy5))
- markov chain monte carlo methods they capture a distribution with only a relatively small number of random samples ([View Highlight](https://read.readwise.io/read/01hk2x1rnq4yxmq397emv91y99))
- the reality is anything but in high dimensions and where the
  distribution has many modes spread far apart it's actually exponentially expensive ([View Highlight](https://read.readwise.io/read/01hk2x1zsxvznqgnf4vqyv7cbm))
    - Note: Problem with MCMC
- assuming that the function we want to learn has underlying structure then we can escape the exponential time of markov chain monte carlo with machine learning and this is what bengio calls
  systematic generalization ([View Highlight](https://read.readwise.io/read/01hk2x2v5nnn5p7z1pwwtqnz5e))
    - Note: Systematic generalization term
- training objective is to make them approximately sample in proportion to the given reward function ([View Highlight](https://read.readwise.io/read/01hk2x416m159fq52fvcs1hhm1))
- imagination machine in our mind until we're ready and waiting to produce good questions to the real world we could use
  imagined experiments to train our generator then produce queries to the real world ([View Highlight](https://read.readwise.io/read/01hk2x4tggq9qrameskyfd3r3q))
    - Note: Don’t understand the imagination machine perspective?
- well the policy network and alpha zero gives you a set of actions given a state alpha
  zero trains the policy network to maximize reward so that the trajectories all end up at the highest reward now what g flow nets do is they train so that the actions are distributed in proportion to the reward so rather than pruning away all of the low reward trajectories it will sample them just less often ([View Highlight](https://read.readwise.io/read/01hk2x6x7hep0nmmh5zsfgdrhg))
    - Note: Alpha zero vs gflownets
- g flow nets which are an active learning framework in a reinforcement learning configuration where the name of the game is to request salient and diverse training data from the real world to augment our learned models in the most sample efficient way possible ([View Highlight](https://read.readwise.io/read/01hk3pe3f4pewdba7cgxntdmye))
    - Note: Technical terms: active learning!
- minimize the divergence between the path distribution and the reward distribution and then sample paths according to the reward distribution ([View Highlight](https://read.readwise.io/read/01hk3pfa61y6y42xa56cqpfk4n))
- traditional reinforcement learning where we're trying to maximize the expected reward ([View Highlight](https://read.readwise.io/read/01hk3pfjh3eaqs1ccan3h6qzw6))
- diverse strategies instead of being greedy and converging quickly after finding a single one ([View Highlight](https://read.readwise.io/read/01hk3pgnfc6ya7c2zg2weaswdw))
- i think about g flow nets is a kind of framework for generic learnable inference for probabilistic machine learning ([View Highlight](https://read.readwise.io/read/01hk3phr3evjharhpvkw2cg7gf))
- swiss army knife of probabilistic modeling that uses machine learning to be able to do things that look intractable but do them efficiently thanks to generalization power of large neural nets ([View Highlight](https://read.readwise.io/read/01hk3pj8ywsyyjkghx8w4w7pr1))
- this neural net or potentially several neural nets but that share allow you to share
  uh statistical strength as we call it uh share information across all the possible positions so that it can generalize to places paths that it has never seen from a finite number of training trajectories ([View Highlight](https://read.readwise.io/read/01hk3pkr03pxdbg0negb8a4ggs))
- free energy principle and active inference which is pretty much a bayesian flavored version of reinforcement learning ([View Highlight](https://read.readwise.io/read/01hk3pm5tq3daetb6k1bzs7kw9))
- think of entropy as keeping your options open ([View Highlight](https://read.readwise.io/read/01hk3pmj2hn6pfm70a12a181v4))
- maximizing expected reward is the objective is misguided and we should instead perform inference over future paths balancing expected reward of relative entropy ([View Highlight](https://read.readwise.io/read/01hk3ppwgx44qyecesa4my3pgm))
- we can use the g flow that machinery
  uh to estimate entropy of say an action distribution or a distribution over bayesian parameters for example which is would be something you'd like to minimize if you're going to take an action in the world and you have a model of the world that has uncertainty ([View Highlight](https://read.readwise.io/read/01hk3ppe711bt40yz5yra07cb6))
- evolutionary algorithm advocates they differentiate themselves from gradient-based single-aged monolithic approaches like reinforcement learning and they point out that their approaches overcome so-called deception and search problems you know which is to say they don't get stuck in local minima ([View Highlight](https://read.readwise.io/read/01hk3q1apgx5xn6ktacwb8f35j))
- search process needs to have a big uh bonus on um on diversity like on trying different ways of achieving something good like better understanding how the world works ([View Highlight](https://read.readwise.io/read/01hk3q1yf8zy4nmkzm3gmm4n9g))
- the objective we're trying to optimize is not tractable actually ([View Highlight](https://read.readwise.io/read/01hk3q2f8f6dawzsjyxekn860x))
- we can sample these trajectories which
  i think of like sampling thoughts like our thought process is going through some chain of explanation it's not a complete and it doesn't represent all the explanations ([View Highlight](https://read.readwise.io/read/01hk3q2nnvrp922x6c9rnv61fb))
- you need your model of the reward distribution um or the reward function to be uh one
  that captures uncertainty like uh maybe in a bayesian way ([View Highlight](https://read.readwise.io/read/01hk3q6qxkgwadd51fhh7j6cd3))
- geophoning approach is trying to acquire as much knowledge as possible about the underlying reward function so you're trying to minimize the uncertainty ([View Highlight](https://read.readwise.io/read/01hk3q7fchz5xgj7e3srp61vzb))
- g for that that models the uncertainty in the reward in the that you're gonna get from the real world and that's like a bayesian model and then you have another gefornet that controls the policy that searches and its reward is how much uncertainty
  reduction you're going to get by doing this or that ([View Highlight](https://read.readwise.io/read/01hk3q7ycgy39bm0s9y7y9dtv8))
- you need to have a part of your model that is kind of uh aware of um the fact that there are whole areas in the world that you don't know about or aspects of the world that you don't know about so that you it can drive the exploration ([View Highlight](https://read.readwise.io/read/01hk3q86q39fpkr124aa6cfdqh))
    - Note: Metacognition!
- there is structure then there is a free lunch ([View Highlight](https://read.readwise.io/read/01hk3qax9e3ny3gd1j7a6yxjwh))
- the machine learning problem is
  um given some examples of good things like you know places where you got reward you can you generalize to other places and the supervised learning way of thinking about it is you know given a candidate place tell me how much reward i think i would get ([View Highlight](https://read.readwise.io/read/01hk3qbg9j34561frd275jc1pj))
- g for that sampler is learning the inverse function it's going to to sample but it's kind of the same thing it's just going in the other direction uh give me some samples some some good places that that you know where the reward is high ([View Highlight](https://read.readwise.io/read/01hk3qbncrsn5btstrxvh9ab8s))
- active learning thinking like well i'm not just trying to win here i'm trying to gather information so that i'll win more in the future
  and it's a different objective right and that's where you need diversity and exploration and like a model of your own uncertainty and and an active learning policy ([View Highlight](https://read.readwise.io/read/01hk3qff15z5jre866n56macxf))
- g flow net strengths comes in you can represent very very complex distributions over compositional objects it's not just a few numbers um then i think you could get to much more efficient uh human machine interfaces ([View Highlight](https://read.readwise.io/read/01hk3qhf7bjgw5cja0569beq8s))
    - Note: Practical use of glow nets!
- they plan experiments that are going to allow them to reduce the uncertainty on their theories of you know some aspect of the world it's the same problem yeah you have a series of questions you're allowed to ask to nature and you try to ask as few questions as possible to as quickly as possible understand what's going on is there a connection fundamentally ([View Highlight](https://read.readwise.io/read/01hk3qj7g4rw24xb6syd3t8725))
    - Note: Nice
- it's an ideal tool for implementing what i called in my talks um system two
  inductive biases ([View Highlight](https://read.readwise.io/read/01hk3qjzymjvh2p9byt4ttwnyd))
- the ability to implicitly represent those distributions and sample pieces of them as thoughts is i think fundamental to how we think ([View Highlight](https://read.readwise.io/read/01hk3qna2rxrk80yfs0wss5126))
- g flawlets can help us with is causal discovery so in other words what is the underlying cause structure of the world including the uncertainty about it ([View Highlight](https://read.readwise.io/read/01hk3qnhcf5v27mab5fxdmsy3g))
- the possible free lunch here is that you can learn abstract structure on on x and so if you learn these abstract world models throwing away all the nitty gritty that doesn't really matter you can potentially have very powerful you know predictive encoding ([View Highlight](https://read.readwise.io/read/01hk3qr0f3ewgxs17kj11p717m))
- the whole point of abstraction is that it it gives you very powerful abilities to generalize to new settings including out of distribution which is one of the hottest topics in machine learning right now how do we extend what we do so that it generalizes well in new settings ([View Highlight](https://read.readwise.io/read/01hk3qseer68q8htpdvnpd2c52))
- abstract causal dependencies as the things that are preserved across changes in distribution ([View Highlight](https://read.readwise.io/read/01hk3qtk36nv8ja4t6fz0d39bj))
- what i really want to do
  is build machines that can discover their own semantic categories abstract ones that really help them understand the world ([View Highlight](https://read.readwise.io/read/01hk3qwmxpvv79zvx07ev1p3xg))
- our brain is a machine that discovers new abstractions of course ([View Highlight](https://read.readwise.io/read/01hk3qx1ff7kfbtg0nmbpszka4))
- that's the ability that we don't have right now in machine learning ([View Highlight](https://read.readwise.io/read/01hk3qx6w42bj8ymxa0b98r35x))
- we're talking about unsupervised learning so we're talking
  about how can a machine discover these often discrete concepts that somehow help it understand so in other words build a compact understanding of lots of things that generalize across many settings ([View Highlight](https://read.readwise.io/read/01hk3qxjb659k08y5g2fknefzg))
- discrete concepts emerge as a way to get better generalization ([View Highlight](https://read.readwise.io/read/01hk3qyjwtx5sr82zmy5hk2a29))
- what is it that's going on in our brain that gives us that feeling and then make us say well i i'm you know uh i'm conscious of x y and z ([View Highlight](https://read.readwise.io/read/01hk3r5rwqqx6b29g843v7pd3b))
- we have a world model and then we we because we have an attention that focuses only parts of it at a time and we need to have like a little mini world model that controls that attention uh that creates a sort of separation between um uh the the the where the real knowledge is and then sort of this more abstract control machinery ([View Highlight](https://read.readwise.io/read/01hk3r6ewf39watwtfy4mev289))
- multi-layer perceptrons as a decomposition method which produces a honeycomb of linear cells in the ambient space and they're activated turned off or on by input examples ([View Highlight](https://read.readwise.io/read/01hk3r8dhxaxerjzrmsr9k1xxp))
    - Note: What
- discrete abstract logic you know reasoning things sitting on top that's controlling
  the pieces um but but otherwise fairly simple in each how each of the pieces are you know like linear for example ([View Highlight](https://read.readwise.io/read/01hk3r9k3hnzq352yfzpeycr2x))
    - Note: Complexity … composition is power
