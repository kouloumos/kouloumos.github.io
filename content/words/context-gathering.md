---
title: "Bitcoin Core - A context gathering exercise"
description: "What do ants, termites and Bitcoin Core contributors have in common?"
category: notes
images: ["/images/knowledge-graph.png"]
feedback: "https://github.com/kouloumos/kouloumos.github.io/pull/1"
---

{{< intro >}}

# Ants, termites and Bitcoin Core contributors 

**What do ants, termites and Bitcoin Core contributors have in common?**
They all show impressive collective problem-solving capabilities without relying on a centralized direction.

And the basis of that? **Stigmergy**; derived from the Greek words "stigma" (mark, sign) and "ergon" (work, action), captures the notion of spontaneous, indirect coordination, where the trace left in the environment by an individual action stimulates a subsequent action by the same or different agent.

{{< figure src="/images/stigmergy-core.png" height=500 width=400 caption="figure from [Susnea, 2015](https://www.researchgate.net/publication/280314681_Cognitive_Maps_for_Indirect_Coordination_of_Intelligent_Agents)" >}}

For social insects, this trace is pheromones.
Ants lay down pheromones directing each other to resources while exploring their environment.
Termites build complex nests by stacking pheromone-infused mudballs. 

For Bitcoin Core contributors, this trace is in the form of GitHub discussions, git commits, IRC messages, documentation, blog posts, transcripts, stack exchange questions, and mailing list posts - artifacts with which they share information, insights, and knowledge as they explore and engage with their environment.

Transparent communication means that individuals interact through the environment.
This behavior creates an ever-expanding network of traces with various levels of interconnected branches stretching in all directions - p2p, wallet, tests, mempool, privacy, culture, you name it.

{{< figure src="/images/stigmergy.jpeg" height=600 width=500 caption="a simplified representation of the underlying network of traces" >}}

Those references on that closed Pull Request you stumbled upon; traces to help you add more nuance and detail to your understanding.
That review comment outlining the reviewer's approach; a trace to improve your future reviews.
That open issue that keeps showing up; a trace towards work that might be worth resurfacing.
That segwit-era mailing-list thread; a trace to give you an insight into Bitcoin's culture and development process.
That Scaling Bitcoin talk from 2015; a trace to initiate your adversarial thinking.
Those notes on the latest PR Review Club meeting; traces to help you understand the change and explore how things came to be. 

As more and more contributors leave their traces and build upon what came before, a collective intelligence emerges, enabling the project to evolve and grow beyond the contributions of any one individual.

> "Collective intelligence is the totality of processes that lead to the emergence of either new knowledge, intelligent decisions, or behavior, within a group of agents coupled by sharing a common memory, or any other means to record and process information about the activity of the group" ~ [Susnea, 2016](https://www.gup.ugal.ro/ugaljournals/index.php/eeaci/article/view/438)

According to [Susnea](https://www.researchgate.net/publication/317636897_Technologies_For_Sensing_And_Modeling_Collective_Intelligence), a key element of any system capable of collective intelligence is the “aggregator”, an instance that collects and fuses the raw data derived from the activity of the agents, and makes the result available to the agents as a shared memory.

{{< figure src="/images/aggregator.png"  caption=" " >}}

Ants act as very simple agents in a system where the role of the aggregator is played by their shared environment - the ground on which the network of pheromone trails is created.

**Contributors act as both agents and aggregators**.
They sense, act and leave traces across multiple environments (git, GitHub, mailing-list, IRC, stack exchange, WWW) and at the same time aggregate to create new artifacts and leave new traces for others to act upon.
Just like an insect reinforces a pheromone trail to guide other insects to resources, contributors reinforce the underlying network of traces, amplifying specific branches to provide valuable context and guidance to their peers.

{{< figure src="/images/stigmergy-action.gif"  caption="" >}}

This amplification can take many forms:
- a github comment highlighting the historic or cultural context behind a change
- a [tweet](https://twitter.com/real_or_random/status/1445124342698975235) on a valuable but overlooked Sigma protocols tutorial
- a [podcast episode](https://stephanlivera.com/episode/450/) on Bitcoin Developer Education
- a transcript from the latest Bitcoin CoreDev tech about [getting stuff merged](https://btctranscripts.com/bitcoin-core-dev-tech/2022-10-12-merging/) 
- a [blueprint for reviewing](https://jonatack.github.io/articles/how-to-review-pull-requests-in-bitcoin-core)
- some [thoughts on ASMap](https://gist.github.com/fjahr/bf0ff0917e03a4e49fac0617b2b35747) for Bitcoin Core releases
- a summary of the current state of [tracepoints support](https://b10c.me/blog/008-bitcoin-core-usdt-support/)
- a [website dedicated to BIP324](https://bip324.com/)
- an in-depth article about the [history of Bitcoin wallet backups](https://wizardsardine.com/blog/state-of-the-art-for-bitcoin-wallet-backups/)
- a [contributor's personal journey](https://bitcointechtalk.com/contributing-to-bitcoin-core-a-personal-account-35f3a594340b)
- an overview of [Addrman and countermeasures against eclipse attacks](https://github.com/bitcoin-core/bitcoin-devwiki/wiki/Addrman-and-eclipse-attacks#deployed-countermeasures-for-eclipse-attacks)
- the [why-what-how](https://achow101.com/2020/10/0.21-wallets) on descriptor wallets
- a [contributor's public notes](https://github.com/glozow/bitcoin-notes)
- the [Bitcoin Optech's topics](https://bitcoinops.org/en/topics/)
- the [Mastering Bitcoin](https://github.com/bitcoinbook/bitcoinbook) book
- the [Bitcoin Protocol Development seminar](https://learning.chaincode.com/) curriculum
- the [Onboarding to Bitcoin Core](https://obc.256k1.dev/) guide

An open-source project isn’t just an open codebase - it’s a living and evolving entity shaped by the marks of its past and present members.
These traces can be explicit or implicit and can vary greatly in scale and scope, but each one is a building block of the collective context, a shared external memory that facilitates collaboration and knowledge sharing among contributors.

This collective context is essential for contributors who seek to understand and build upon what came before, making context gathering a fundamental aspect of contributing.

# Context gathering

> "Context is important. That's one of the things that people may not realize. The longer you stay in the space the more accumulative context and history you have in your brain." ~ [Jon Atack, Adopting Bitcoin 2022](https://www.youtube.com/watch?v=Bduon80-4CE)

Bitcoin Core is a dense and complicate subject.
You start applying a bit of context and all of a sudden clarity happens.

At first glance, it might seem that context gathering is just about navigating the underlying network of traces in the pursuit of personal growth and understanding.
While this may be true for newcomers, over time, context gathering becomes just as much about creating traces as it is about utilizing the traces left by others.
It’s similar to the foraging behavior of ants, where finding food is not just an individual pursuit, but rather a collective effort that benefits the entire colony.

>> **Context gathering is the stigmergic accumulation of context by simultaneously contributing to and utilizing the collective context**.

There is no single way to approach context gathering.
To some extent, we all start from the same surface-level traces that gradually form the foundation of our understanding, but our unique set of experiences provides each of us with a distinct lens through which we navigate the underlying network of traces and establish context.

You are always establishing context.
Every time you go down a rabbit hole, review a PR, verify an issue or propose a change, you are undertaking a small context gathering act.
And context is transformative, is knowledge that compounds over time, helping your ideas connect and build on each other.
In an effort to [find a fit]({{< ref "finding-a-fit" >}}), your distinct perspective will inevitably guide you towards a  context gathering path that sets you apart from your peers. As you accumulate context, you'll start seeing patterns and connections that others might not, possibly unlocking new insights and ideas that can make a difference.

Whatever you do, your attitude towards information is working in the background, profoundly shaping how you see and understand the world.
Context gathering is a lens through which you can perceive the atomic units that make up everything you do.
Stop thinking in terms of commits and start thinking in terms of [building blocks that you can assemble]({{< ref "building-blocks" >}}) and potentially enhance the collective context with.
This lens reframes contributing as an ongoing, continual cycle of context gathering, rather than a commits-number-go-up endeavor.

The complexity of such a multi-dimensional project can be overwhelming.
Reframing your productivity in terms of context gathering turns the passage of time into your friend, essentially making you fearless about complexity.

If everything is context, all you have to do is to start gathering it.

# Towards a collective collaborative knowledge graph

What's a typical context gathering scenario?

You are trying to better understand a piece of code.
You `git blame` that line to see who is the last person that changed it.
Then, you go back to the pull request and read all the discussions around that line of code.
You are still missing context, so from there, you follow a reference to another pull request, and another, and then to a couple of related issues.
You keep going until you've satisfied your curiosity and feel confident with your understanding.

GitHub's stigmergic environment makes it easy to follow the breadcrumbs and trace the evolution of ideas. 
This shares similarities with academia, where researchers write and publish papers, methodically building a citation graph that others can follow.

> "The scaling of knowledge production works better in academia.[...]It turns out that inefficient as it is, there is a reason for this sort of weird paper writing process that we insist on. Which is that you end up with this knowledge graph consisting of millions of papers, but because of the rigor that goes into that, the citation graph turns out to be a really good way to maintain pointers between all of this information and navigate it and build one piece of knowledge upon another. It gives us a way to stand on the shoulders of giants.[...] There's an automatic process of tracing ideas back to their roots." ~ [Arvind Narayanan, MIT Bitcoin Expo 2016](https://btctranscripts.com/mit-bitcoin-expo/mit-bitcoin-expo-2016/lessons-for-bitcoin-from-150-years-of-decentralization/)


In the case of GitHub, this "citation" graph is the byproduct of the bidirectional linking that contributors initiate every time they mention an issue or pull request within the platform.
While this [cross-reference](https://en.wikipedia.org/wiki/Cross-reference) mechanism is highly beneficial for context gathering, inevitably there is supportive context that falls out of GitHub's "citation" graph.

That's because GitHub is just one of the knowledge bases that contributors utilize as part of the collective context.
What I previously referred to as a "shared external memory" is actually composed of multiple overlapping knowledge bases:
- Codebase
- GitHub
- Bitcoin Core PR Review Club
- Bitcoin Stack Exchange
- Bitcoin Optech’s topics and newsletter
- Each individual contributor's notes and blog posts

These are loosely connected through the pointers that contributors establish with their individual traces.
While this concept of scattered knowledge is not unique to Bitcoin Core, I believe that its multi-dimensional nature alongside its particular development philosophy creates a need for more effective context gathering solutions. 

<!-- It's not a coincidence that, as of recently, Bitcoin has its own search engine. -->

Could we come up with better ways to connect those knowledge bases and navigate the ever-evolving underlying network of traces?

What if we create a better shared external memory that will enhance our ability to gather context, therefore, improving the collective intelligence?

_[WIP - my thoughts/ideas on a collective collaborative knowledge graph]_

{{< figure src="/images/review-club-traces.gif"  caption="knowledge graph teaser" >}}

---
# Acknowledgements

Thanks to Jonas for giving me a term to describe something that I've been doing intuitively. It has helped me to better understand and articulate the value of this approach.
