---
title: Getting to Base Camp
date: 2023-01-26
description: "My journey through the foothills, a reflection of my first year as an aspiring Bitcoin Core contributor"
category: notes
images: ["/images/basecamp.png"]
---

Thirteen months ago I began my [Ascent]({{< ref "ascent" >}}). Thirteen months ago I left my job to become a Bitcoin Core contributor. 


**It's time for a checkpoint**.

![](/images/timetracking.png)

When you decide to climb a mountain, especially on any big expedition, you never go straight to the top. Instead, you start by hiking through the foothills, making your way to Base Camp.

Base Camp marks an important milestone, a crucial checkpoint to evaluate progress, rest, recover and plan the next steps before moving higher up the mountain.

In Bitcoin Core, each contributor's journey to Base Camp is unique and personal. TANSTAAGBC - There Ain't No Such Thing As A Global Base Camp[¹](https://twitter.com/Snyke/status/1278262998860206080). It's not a fixed point like Base Camp on a mountain, but rather a gradual process where the complexity of the project becomes more approachable and you start to feel more oriented and familiar with it. 

Each person reaches Base Camp at their own pace, and for some, it may be the end goal in and of itself. For an aspiring contributor is just the beginning. It's a checkpoint, an opportunity to look back, contemplate your mistakes, celebrate your wins, and reassess the map of your journey. 

**This is what "Getting to Base Camp" is about: my journey through the foothills, a reflection of my first year as an aspiring Bitcoin Core contributor and a call to other bystanders.**

{{< figure src="/images/foothills.png" height=450 width=450  >}}

# Obstacles

First there is mist and turmoil and all of sudden there is clarity. That's one of the best moments in every journey, in every new path we choose in life. From chaos, comes order. That was my experience trying to contribute to Bitcoin Core. 

**Looking back, I stayed in chaos for too long.**

{{< months >}}

**Every data graph says a story.** This one describes perfectly my early struggles to do the work, leading up to my turning point at the half-way mark. I called myself an aspiring Bitcoin Core contributor, but it took me six months to even attempt of doing a proper PR review. 

It wasn't the lack of motivation, or not knowing how to begin - I had consumed every available resource and been dreaming the start of this journey for months.

**I just stumbled over some self-imposed obstacles**.

From day one I kept convincing myself that my cool Bitcoin-related time-sink side projects were worthwhile. "Twitter spaces are cool"; builds a platform to discover twitter spaces about Bitcoin. "[Open source sustainability is such a fascinating subject](https://twitter.com/kouloumos/status/1476570418521772033)"; builds an exploration tool of the Bitcoin open-source ecosystem. 

It didn't occur to me until later that those projects were my excuse for quick dopamine hits; a residue from the fast-paced, task-oriented mindset of most traditional jobs. I failed to understand that contributing to Bitcoin Core requires a rewiring of the brain's reward mechanism. [This is at large a context gathering exercise]({{< ref "context-gathering" >}}) and that means being comfortable with not always having something to show for at the end of the day.

Needless to say that I never publicly launched any of those projects. They always needed a bit more work. And a bit more work quickly turned into a never-ending list of tasks and improvements that ultimately became a constant distraction from the actual work I should be doing - **reviewing PRs and gathering context**.

"Start with reviewing" is the first advice you will likely receive when you decide to contribute to Bitcoin Core. And that's a great advice. But start from where? Not knowing better and eager to get my feet wet, I was quick to follow the next piece of advice: "PR Review club, IRC, 17:00 UTC".

What I failed to realize was that [the Bitcoin Core PR Review Club was not for me]({{< ref "review-club" >}}), or at least not in the way that I was approaching it. My constant distractions meant lack of preparation time. I was jumping into complex problems, with limited time in my hands, and lacking context which was not always trivial to gather. The result? Rabbit hole after rabbit hole, interesting subject after interesting subject, but having no idea where I'm going. 

I was slowly overwhelmed by the many moving parts, which made me question my readiness to deal with anything related to the Bitcoin Core repository. 

I was not feeling ready, and so it was easy to find comfort into knowledge seeking, pouring hours into reading and meticulously crafting my notes; I saw that as progress and not yet another excuse to avoid doing the actual work. 

At that point, excuses and misguided attempts to better prepare for contributing were piling up. "PR Review Club seems great for context gathering"; how about going through the last 3 years of PR Review Club meetings from start to finish? "There are so many different interconnected components in the codebase"; what about creating a learn-by-doing project that onboards to Bitcoin Core while building it from scratch?

I got distracted. I was confused. **I was getting far off the path.**

# Accountability
Contributing to Bitcoin Core offers a lot of freedom and flexibility, but it demands a higher level of self-accountability in order to stay on track and make progress towards your goals. This can be challenging, especially at the beginning when the path ahead is not clearly marked.

I learned the hard way that without an effective accountability structure, it's easy to wander aimlessly through the foothills, constantly inventing busywork and avoid doing the actual work. 

I thought that I had put in place such a structure for myself, but it turns out I didn't. Otherwise I would recognize sooner, and by myself, how far off the path I was getting. 

It took six months and some outside help to see through my own bullshit.

{{< discussion >}}

I left my job and called myself an aspiring Bitcoin Core contributor, but six months in, I had nothing to show for, other than a few hundred pages of notes and some webpages that had nothing to do with the actual job.


**That was an eye opening moment for me.**

{{< work >}}

That mid-May call was the push that I needed to get back on track. A push and a direction on how to actually go about contributing. 

<!-- Look close enough on my time tracking overview, and you might be able to spot exactly when this discussion took place. -->


# Through the foothills

There's a good reason why **"Start with reviewing"** is the go-to advice for anyone looking to contribute.

Bitcoin Core is a multi-dimensional project, [which means a wide range of opportunities for contributors to explore]({{< ref "finding-a-fit" >}}). But taking those first steps and navigating through the vast network of loosely defined paths can be overwhelming. That's where reviewing comes in - just like a climber exploring the foothills, **reviewing allows you to get a sense of the different paths ahead of you and find the ones that align with your experiences, skills, and passions**.

To this day, I still wonder why I didn't give the necessary attention to that advice and make more of an effort to review PRs beyond my Review Club attempts. It's like I went straight to the steep, rocky paths without proper gear and training, I stumbled over some obstacles, but never readjusted my approach. 


**That mid-May call was my readjustment.**

**"Start with reviewing functional tests"**; a redirection towards a set of less intimidating and easier to navigate paths in order to familiarize myself with the environment, gather context from my surroundings and steadily progress towards tackling the more complex and challenging paths ahead.

Functional tests are a great exploration tool. In my earlier Review Club attempts, my lack of context always led back to functional tests. Reading a functional test is a high-level tour, a well documented artifact of a specific functionality. Want to learn more about the transaction-creation logic? Check out [`wallet_fundrawtransaction.py`](https://github.com/bitcoin/bitcoin/blob/master/test/functional/wallet_fundrawtransaction.py). Curious about the Replace-by-fee (RBF) implementation? Take a look at [`feature_rbf.py`](https://github.com/bitcoin/bitcoin/blob/master/test/functional/feature_rbf.py). You name it.

But reading can take you so far. To truly make an idea stick, you have to engage with it. You have to get your hands dirty. That's where reviewing comes into play. **Reading code is just reading the code. Reviewing code is engaging with the code**. That's where [the knowledge assets are assembled]({{< ref "building-blocks" >}}), that's where [the context is gathered]({{< ref "context-gathering" >}}).

**Reviewing functional tests put me back on track**. 

{{< work-after >}}


My readjustment was around the same time as the start of the [Summer of Bitcoin program](https://www.summerofbitcoin.org/), a three-month period during which I would be working on my accepted project proposal.

At this point, you might think my proposal would be all about Bitcoin Core, given my aspirations as a contributor and everything. But nope, that's not what happened. I had applied before my readjustment, and my self-doubt ended up [leading me to a different project](https://github.com/mit-dci/libutreexo/issues/13); libutreexo, the C++ implementation of the [Utreexo accumulator](https://github.com/utreexo).

At the time of my application, I saw libutreexo as a more approachable way to become familiar with Bitcoin Core. It was a smaller-scale project, also written in C++, that utilized some of the same ideas as Bitcoin Core and had the goal of eventually becoming part of it. [My proposal](https://www.summerofbitcoin.org/program-details?recordId=recPLKAWw1UFZb7Sl) was to implement benchmarks by integrating the same microbenchmarking library that is used in Bitcoin Core, as well as generating flamegraphs to identify particularly slow functions. Since aspects of that work could be carried over to Bitcoin Core, I considered libutreexo as a good starting point for my journey as a contributor. Although that was just another excuse to avoid doing the actual work, it turned out to be a worthwhile experience.

Through my work on libutreexo, I became familiar with various performance analysis tools, such as benchmarking, profiling, and flamegraphs. This work set the stage for [my involvement with tracepoints](https://github.com/bitcoin/bitcoin/pull/25541) in Bitcoin Core, and also sparked my interest in more extensive benchmarking efforts within the project, like [bitcoinperf](https://github.com/chaincodelabs/bitcoinperf). I've only just begun to scratch the surface in this area, but I'm excited to dive deeper in the future. 

By mid-August, I was starting to feel more confident in my ability to navigate through the project. Reviewing functional tests allowed me to gradually explore and familiarize myself with different parts of Bitcoin Core, while my work on libutreexo opened up new paths to uncover. I finally felt like I was making progress.

**That was until I got into issues triage**.

The Bitcoin Core repository is full of hidden work just waiting to be found, and triaging issues is a great way to resurface some of that work, while also contributing to the overall health of the project.

At any given time, there are usually hundreds of open issues. Many of these have been open for years and need further investigation to determine their current status. These issues could still be reproducible, or may have already been solved without anyone noticing. Or, thanks to recent updates, they might be easier to tackle now, especially if a motivated individual comes along.

An issue is, at its core, a problematic observation, and triaging begins with validating that observation. It's a different learning experience than reviewing functional tests, it's a more involved process that often requires digging deeper and using the software in ways you may not have before. I knew about connection configurations, but I had never used them until [investigating a related issue](https://github.com/bitcoin/bitcoin/issues/5299#issuecomment-1198288049). I believed I had a good understanding of Bitcoin transactions, but trying to reproduce [a signing issue](https://github.com/bitcoin/bitcoin/issues/2265#issuecomment-1202731118) and then [a multisig issue](https://github.com/bitcoin/bitcoin/issues/18620#issuecomment-1209925063) made me realize just how much I still had to learn.

My involvement in issues triage was a humbling experience that showed me just how crucial it is for a contributor to be a power user of the software. It's no coincidence that contributors often start as users. There is no single path to Base Camp, but there is a certain type of context that can only be gathered by interacting with the software.

After all, [Bitcoin Core is a context gathering exercise]({{< ref "context-gathering" >}}). Engaging with the different types of context is an important part of the journey. It helps you understand the bigger picture, find your place within the project, and ultimately become a more effective contributor.

That's why, when given the opportunity, I was so eager to write the [testing guide for the Bitcoin Core 24.0 release candidate](https://github.com/bitcoin-core/bitcoin-devwiki/wiki/24.0-Release-Candidate-Testing-Guide), since it allowed me to engage with all types of context. Cultural context; as I got to see firsthand the release process and the various roles and responsibilities involved in it. Technical and historical context; as I had to understand the technical details, history, and evolution of the new changes in order to effectively guide others. Power-user context; as I had to use the software in a variety of ways in order to write clear, step-by-step instructions for testing the changes. 

Writing the testing guide was just another opportunity to learn and grow as a contributor, another path to explore, and by the end of it, a moment of realization... 


{{< figure src="/images/basecamp.png" height=450 width=450  >}}

**I was at Base Camp.**

# Base Camp

Reaching Base Camp is a significant moment in a contributor's journey. It marks the first sense of belonging and clarity after navigating through the chaos and complexity of the project. The route, approach, and speed may vary, but the end result is the same - personal growth and a stronger conviction to work on this impactful cause.

That's where I stand right now; at Base Camp, reflecting on the past and looking towards the future.  

Could I have done more in this 13-month period? Absolutely. But failure is part of the journey, getting lost along the way is to be expected. What's crucial though, and what I struggled with, is recognizing it and getting back on track; looking at and adjusting the map of my journey.

Despite my struggles and setbacks, I have never been more excited to fail, iterate and move forward. I start this next phase with a renewed focus on consistency and a refined blueprint to achieve that:
> **adjust priorities**, **do the work**, **gather context**, **be accountable**, **repeat**.


The journey is just getting started. 
