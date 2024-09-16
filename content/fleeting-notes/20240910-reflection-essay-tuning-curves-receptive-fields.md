---
tags:
  - fleeting-note
  - NSBV-BC3386
date: 2024-09-10 04:04
lastmod: 2024-09-10T22:34:15-04:00
aliases:
  - "Reflection Essay: Tuning Curves and Receptive Fields"
---
%% > Write a ~1 page reflection essay about this week's readings (double-spaced is fine). You can write about whatever most stood out to you in the readings. Here are some questions to stimulate your reflection:
> - What is the relationship between tuning curves and receptive fields? How are they different?
> - What did the authors learn from their studies that wasn't known before?
> - What, if any, unanswered questions were the authors left with?
> - For you, what was the most interesting/surprising/confusing new concept from the articles?


---
# Sketch

- Emergent, high-level behaviors
	- Necessity of both ON-center and OFF-center neurons to account for extremes on either end that could potentially suppress one type only
- **Receptive field** = area where stimulus causes change in firing rate
	- **Tuning curve** = a mathematical model that makes activity (usually firing rate) a function of a change in the stimulus

---

# Reflection essay
 %%
Bonnie Yang
Reflection Essay: Tuning Curves and Receptive Fields
2024-09-10

Receptive fields and tuning curves are concepts used to characterize the behavior of a neuron in response to a sensory stimulus. Changes in neural cell activity—in the context of this week’s readings, either firing rate or firing frequency—are caused by stimuli in the cell’s receptive field, which is a subspace of all possible stimuli for that sensory modality. For example, the retinal ganglion cells studied by [[@1984enroth-cugell|Enroth-Cugell and Robson (1984)]] have receptive fields that are divided into two roughly concentric areas: the center and the surround. While [[@1982georgopoulos|Georgopoulos, et al. (1982)]] did not explicitly define receptive fields for the macaque motor neurons they studied, their result that most of these cells responded preferentially to particular movement directions suggests that the cells’ receptive fields are some slices of angles on the two-dimensional plane. 

This second example raises an important distinction between receptive fields and tuning curves: receptive fields are qualitative descriptions of cell activity, while a tuning curve, as the word “curve” suggests, is a formal model. In the case of retinal ganglion cells, the center and the surround are distinguished by their opposing responses to light stimulation, also called their “antagonistic” relationship: in an ON-center ganglion cell, light in the center *increases* cell firing rate, while light in the surround *decreases* cell firing rate; the opposite holds for an OFF-center ganglion cell. Not only are the terms “center” and “surround” justified by qualitative observations, the very point of defining a “center” and a “surround” is to give an efficient way to communicate these observations. 

Tuning curves are the quantitative foil to receptive fields. In [[@1984enroth-cugell|Enroth-Cugell and Robson (1984)]], Robson opens Part II with an almost meta-scientific justification of mathematical models in general. He argues that mathematical models are useful for three reasons: their precision in communicating information to other researchers; the ability to use them to predict behavior not tested in experiments; and, most strikingly, the fact that if a quantitative model of some phenomena exists, then our understanding of it must be incomplete until we make use of that model. (If the final point implies that our understanding will be *completed* by a mathematical model, then it is a bit too strong for me: “All models are wrong, but some are useful.” I think one can have a plurality of useful models since, in principle, none of them are *real*. Anyway.) [[@1984enroth-cugell|Enroth-Cugell and Robson (1984)]] model activity of single retinal ganglion cells using the difference of two Gaussian functions, which plays two important roles in their study: the model confirms their hypothesis that the ganglion cells perform a sort of linear transformation, since both their input stimulus and their *preliminary* model of cell output are sinusoidal; and the difference of two Gaussians allows them to predict cell behavior in response to untested, non-sinusoidal stimuli, which can then be verified experimentally. [[@1982georgopoulos|Georgopoulos, et al. (1982)]] model the direction preferences of macaque motor cells using bell-shaped, sinusoidal curves; this captures the information that cell activity is indeed heightened at preferred directions, and decreases roughly symmetrically on either side of the receptive field angle.

The most interesting concept for me from both articles was how high-level behavioral phenomena emerges from the mostly demystified (endowed with both quantitative and qualitative descriptions, after Robson) activity of single cells. The existence of ON-center and OFF-center retinal ganglion cells allows for light perception to continue even when a strong stimulus completely stops the discharge of a given neuron; [[@1982georgopoulos|Georgopoulos, et al. (1982)]] hypothesize that motor cells with overlapping tuning curves may contribute to a single high-level movement direction. I’m curious about the “population codes” that bridge these cellular-level models and more teleological (e.g., motivated by Darwinian evolution, purposeful activity of the organism) hypotheses.