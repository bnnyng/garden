# Attention Is All You Need

![rw-book-cover](https://readwise-assets.s3.amazonaws.com/media/uploaded_book_covers/profile_658243/_SStoqdCU5SqPkYIhn2NQduqnuinP-VSPEcRmXhe_3c-cover_00fJxIP.png)

# Metadata
- Author: [[Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit, Llion Jones, Aidan N. Gomez, Lukasz Kaiser, Illia Polosukhin]]
- Full Title: Attention Is All You Need

- URL: https://arxiv.org/pdf/1706.03762.pdf

# Highlights
- Recurrent models typically factor computation along the symbol positions of the input and output sequences. Aligning the positions to steps in computation time, they generate a sequence of hidden states ht, as a function of the previous hidden state ht−1 and the input for position t. ([View Highlight](https://read.readwise.io/read/01h6rs9wmwa8eyj15yhz2vjrc3))
- Attention mechanisms have become an integral part of compelling sequence modeling and transduction models in various tasks, allowing modeling of dependencies without regard to their distance in the input or output sequences. ([View Highlight](https://read.readwise.io/read/01h6rx70x3g21s941hseq9w6vb))
- Self-attention, sometimes called intra-attention, is an attention mechanism relating different positions of a single sequence in order to compute a representation of the sequence. ([View Highlight](https://read.readwise.io/read/01h6rs1bvwnvnjxm3yzdnqk0th))
- To the best of our knowledge, however, the Transformer is the first transduction model relying entirely on self-attention to compute representations of its input and output without using sequence-aligned RNNs or convolution. ([View Highlight](https://read.readwise.io/read/01h6rthhavjgd42455p4ay0s8r))
- An attention function can be described as mapping a query and a set of key-value pairs to an output, where the query, keys, values, and output are all vectors. The output is computed as a weighted sum of the values, where the weight assigned to each value is computed by a compatibility function of the query with the corresponding key. ([View Highlight](https://read.readwise.io/read/01h6rthwtes3ah8jebyqmq4wa9))
- The transformer's encoder contains self-attention layers. In a self-attention layer all of the keys, values and queries come from the same place, in this case, the output of the previous layer in the encoder. Each position in the encoder can attend to all positions in the previous layer of the encoder.
  Similarly, self-attention layers in the decoder allow each position in the decoder to attend to all positions in the decoder up to and including that position. ([View Highlight](https://read.readwise.io/read/01h6rv9pkz244mq1bw3zcjkxe1))
- Learning long-range dependencies is a key challenge in many sequence transduction tasks. One key factor affecting the ability to learn such dependencies is the length of the paths forward and backward signals have to traverse in the network. The shorter these paths between any combination of positions in the input and output sequences, the easier it is to learn long-range dependencies ([View Highlight](https://read.readwise.io/read/01h6rv88k2ka3bet5exz3vq8sc))
