# A Theory of Learning to Infer

![rw-book-cover](https://readwise-assets.s3.amazonaws.com/media/uploaded_book_covers/profile_658243/M_4_HUVbd-YyQ2we_ut3dKPzGzcRKBEQXV1PQH73zds-cove_xM8zN10.png)

# Metadata
- Author: [[Tenebaum, Gershman et al.]]
- Full Title: A Theory of Learning to Infer

- URL: https://readwise.io/reader/document_raw_content/102076161

# Highlights
- rational probabilistic reasoning is too cognitively burdensome for people, who instead use a variety of heuristics ([View Highlight](https://read.readwise.io/read/01hqkjh38hgxm4mvvs8p3qnr3p))
- rational process models hold that errors arise from principled approximations of rational reasoning, for example some form of hypothesis sampling ([View Highlight](https://read.readwise.io/read/01hqkjhqjqt0sq933w1pq6mtt6))
- All of these approaches require, either explicitly or implicitly, a feedback signal. This requirement poses a problem in inferential settings where no feedback is available. ([View Highlight](https://read.readwise.io/read/01hqkjk7fzgyvmffb2y0xpzxf4))
- Specifically, we propose that people learn to infer. Instead of a domain-general inference algorithm that treats all queries equally, we postulate an approximate recognition model (Dayan, Hinton, Neal, & Zemel, 1995; Kingma & Welling, 2013) that maps queries to posterior probabilities.2 ([View Highlight](https://read.readwise.io/read/01hqkjkxnvfkmej1yr8ew2vqvc))
- the amortized inference engine learns to infer: it generalizes from past experience to efficiently compute the approximate posterior conditional on new data. ([View Highlight](https://read.readwise.io/read/01hqkm2z2jd6p44dcpa8x78wkr))
- This means that amortization only becomes relevant when there are computational constraints that force sharing of variational parameters—that is, limitations on the function approximator’s capacity. A key part of our argument is that the brain’s inference engine operates under such constraints (see Alon et al., 2017; Feng, Schwemmer, Gershman, & Cohen, 2014), which will produce the kinds of inferential errors we wish to explain. ([View Highlight](https://read.readwise.io/read/01hqkm4mp2kf56d6ze8y3054dx))
    - Note: Key idea: prediction errors happen because of computational constraints, which forces sharing of parameters across different sets of observations.
- probability under the query distribution. We will see how this leads to differential underreaction to either prior or evidence ([View Highlight](https://read.readwise.io/read/01hqkmgbr2bbt0xahhzfp46r7p))
    - Note: Why do these feel…obvious?
- We now apply the Learned Inference Model to our motivating question: what is the origin of underreaction to prior probabilities and evidence? We argue that these inferential errors arise from an amortized posterior approximation. ([View Highlight](https://read.readwise.io/read/01hqkmfk7qfch1gds1zaeh82b3))
- the amortized approximation has limited capacity: it can only accurately approximate a restricted set of posteriors, due to the fact that the approximation architecture has a computational bottleneck (in our case, a fixed number of units in the hidden layer). ([View Highlight](https://read.readwise.io/read/01hqkmfzmkatt5k15ytkd7mx19))
- The key idea is that limited capacity forces the model to sacrifice some fidelity to the posterior, producing degeneracy: some inputs map to the same outputs ([View Highlight](https://read.readwise.io/read/01hqkmrda6mcx6ehbeb67yyh9w))
- Intuitively, degeneracy causes the model to have a relatively flat response as a function of the posterior log-odds, which means that deviations will also increase with the posterior log-odds. ([View Highlight](https://read.readwise.io/read/01hqkmrt0dcwrns8jd81m8h4pz))
- Different architectures and ways to parametrize the approximate distribution Q would lead to different kinds of degeneracies and might better model this aspect of the human data. ([View Highlight](https://read.readwise.io/read/01hqkmwqah2xcj8qjccr46ax9d))
    - Note: Possible extension to account for large updates?
- agent’s own internal computations: what kinds of observed data typically indicate that a particular inference is appropriate? ([View Highlight](https://read.readwise.io/read/01hqkhy9e94d9tpp91zwc0d4pf))
- Rather, we must consider how accuracy of probabilistic reasoning trades off against the computational cost of accuracy. A learning system that is trained to approximate probabilistic inference will, when a limit on the computational cost is imposed (modeled here as a computational bottleneck), exploit regularities in the distribution of queries. ([View Highlight](https://read.readwise.io/read/01hqkhwq7ndp4dbsvm5fbzppsv))
- One natural way to combine variational inference with these methods is to use the variational approximation as a proposal distribution. ([View Highlight](https://read.readwise.io/read/01hqkj49460wzpjbj0gpfmd8md))
- people’s judgments and decisions are influenced by whether the data-generating process presented matches preexperimental intuitions about the causal structure of the real world (Ajzen, 1977; Krynski & Tenenbaum, 2007) ([View Highlight](https://read.readwise.io/read/01hqkjybq6c0193jfqwpek33bq))
- Although we are not aware of direct evidence for such an algorithm in brain or behavior, the idea that hypothesis sampling is involved in the learning process is an intriguing possibility that has begun to be studied more systematically (Bramley, Dayan, Griffiths, & Lagnado, 2017; Bramley, Rothe, Tenenbaum, Xu, & Gureckis, 2018; Rule, Schulz, Piantadosi, & Tenenbaum, 2018). ([View Highlight](https://read.readwise.io/read/01hqkj54mab0m33hcamzvb72yk))
- Expanding our results to naturalistic settings, where people might have a priori causal intuitions from previous experience, would allow us to manipulate how intuitive the presented data-generating process is and tease apart its role in judgment errors from the predictions of the Learned Inference Model. ([View Highlight](https://read.readwise.io/read/01hqkk094486gsbfpwph49xraj))
- Studying judgment errors across domains where participants vary in preexperimental experience, or even over the course of an experiment as within-experiment experience increases, would allow us to better understand how learned and memoryless inference strategies interact and trade-off. ([View Highlight](https://read.readwise.io/read/01hqm5z3fmmrnfce8jhskqykys))
- The Learned Inference Model in its current formulation assumes
  that the correct data-generating process is provided in the query, and only learns how to do inference within this data-generating process. ([View Highlight](https://read.readwise.io/read/01hqkj6bpqym9my7rjqhgb7dpp))
    - Note: Key assumption: perfect knowledge of data generating process.
- Ajzen, I. (1977). Intuitive theories of events and the effects of base-rate information on prediction. Journal of Personality and Social Psychology, 35, 303. ([View Highlight](https://read.readwise.io/read/01hqkk0rc4862cfnca9xdrrzxc))
    - Note: For extending model to situations with a priori knowledge.
- Alon, N., Reichman, D., Shinkar, I., Wagner, T., Musslick, S., Cohen, J. D.,... Ozcimder, K. (2017). A graph-theoretic approach to multitasking. In I. Guyon, U. V. Luxburg, S. Bengio, H. Wallach, R. Fergus, S. Vishwanathan, & R. Garnett (Eds.), Proceedings of the 31st International Conference on Neural Information Processing Systems (pp. 2097– 2106). ([View Highlight](https://read.readwise.io/read/01hqkjxn4grdaybmx8bhy3rm00))
- Extending our theory to more noisy and uncertain real-world learning is an important and interesting challenge. ([View Highlight](https://read.readwise.io/read/01hqm626hytdn55cpvzhr4d9g1))
- Benjamin, D. J. (2018). Errors in probabilistic reasoning and judgment biases (Tech. Rep.). Cambridge, Massachusetts: National Bureau of Economic Research. ([View Highlight](https://read.readwise.io/read/01hqkmh3wcgb4v3nf6wrczgc26))
    - Note: Review of biases in classic studies.
- Dasgupta, I., Schulz, E., Goodman, N. D., & Gershman, S. J. (2018). Remembrance of inferences past: Amortization in human hypothesis generation. Cognition, 178, 67–81. ([View Highlight](https://read.readwise.io/read/01hqkm99gedack962qdrda8a7g))
- Grether, D. M. (1980). Bayes rule as a descriptive model: The representativeness heuristic. The Quarterly Journal of Economics, 95, 537–557. ([View Highlight](https://read.readwise.io/read/01hqkjsp6m2pe81v0zsmkqvx7v))
    - Note: Incentives on inferential errors.
- Krynski, T. R., & Tenenbaum, J. B. (2007). The role of causality in judgment under uncertainty. Journal of Experimental Psychology: General, 136, 430. ([View Highlight](https://read.readwise.io/read/01hqkjyr97nd2pa607tc61kfzv))
    - Note: Real-world causal knowledge, vs. assumption that DGP is given.
