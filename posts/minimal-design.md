# Minimal Design: Why I shifted to my current website template (wruby).

2025-03-20

I have come to realizing that all the websites on the internet (atleast a major chunk of them) as being over engineered. 

For example my old website was extremely bloated, over engineered, sloggy and slow to load. It fetched a shit ton of `js` and `css` scripts and it was pretty too complex to make any small change. It was so bloated that I went on a spree to remove random chunks of source code and the website seemed to work the same. Maybe some of chunks were not directly but indirectly necessary. Nevertheless, the point I am trying to make is; it had a lot of 'not so useful' content.

But it did have really good, sophisticated UI with all kinds of animations, parallax effects, beautiful colors etc etc. Infact, it was a bit too fancy interms of design. And somehow didnt represent me a lot of ways. Which is also why I hesitated with sharing it to the public.

Also one of the reason I think it was bloated, was, it having SEO optimization, page optimizations, caching on a CDN or `server-side` rendering etc. Which is probably needed for a large scale webapp. But its definetly not needed for a personal blog/website. 

A good example that comes to mind in context of this is a comment made by a friend, a developer at a large scale platform (I relate with the message in some way), but apparently, there was a situation where a bug on the authentication layer on the platform was reported. But for different reasons this bug was not prioritized. Not sure why but maybe it was not a bug worth fixing. Or maybe it was too much of an effort to fix. But obviously, its a bug none the less. Which can potentially lead to an authentication loophole. The engineers replied, the worst thing that can happend on this is that the exploiter can access very low impact parts of the platform. And he will have to one of the best security engineers to do that. 

Obviously not a reply that you wanna hear at a board meeting or anything. But I want to focous on the spirit of the reply and not the reply itself: Not everything needs the state-of-the-art systems. Systems have to be, in the long term: easy to maintain, bloat free and most importantly, fast. They have to be extreamly fast. For example this website on its bare bones is less than a single MB (excluding all the static PDFs that are commited). Which by definition makes it lightning fast thanks to its small size. I just dont understand why we are okay with things being slow as long as they look fancy. At this point we are used to the buffering circle spinning for 4-5 seconds and have stopped realising, "why does it take so long to load..!" Ofcourse, this excludes large data stuff like videos and images. 

Among a lot of reasons like bloated code base; unoptimized api calling etc, One of the major reasons is tracking. Literally everything is on tracking these days with URL shortning and analytics. And I mean everything as simple as button clicks and scrolling hooks. Maybe this is why people really like retro tech. They are durable, fast and maintenance free (okay maybe not entirely) and most importantly, tracking free. A good example on this was [McMaster-Carr's](https://www.mcmaster.com/) website. It looks a 100 years old and they have an extreamly fast website. 

A similar thing is happening with AI as well now. Everything from cars to cycles are becoming "smart". Now dont get me wrong, a lot of things can provide a lot of value being smart. But not everything. I recently saw an AD on a newspaper where a rice cooker had some "AI" features in them. ITS RICE!! We dont need AI to cook rice. We need it to solve problems that were difficult to solve otherwise like driving or information retrieval. When did we run out of AI-worthy problems that now AI is being unnecessarily shoved down into 'If else ladder' solutions.

Another school of thought that I have come across while trying to debloat my webiste and make it simple was a philosophy "you need complex systems to make solutions simple" (Again looking at [McMaster-Carr's](https://www.mcmaster.com/)). Its definetly an interesting one. But I would prefer everything minimal. Even if it means sometimes trading off some features.   

My website currently uses a minimal site generator, [wruby](https://wruby.btxx.org/). But its not off the shelf. I customized it to my liking. The best part of wruby is; its extreamly fast. Mostly because its bare bones and just html css. No jquery almost no javascript. The builder itself is written in ruby and is a single script that converts MD files to HTML and also replaces placeholders. Pushing for a good balance with simplicity and functionality. It also generates a RSS file (a big win in my book). So you can get RSS updates on all my blog posts which I plan on posting here along with copies on other websites. All this was to just make my website minimal and fast. It has no tracking or analytics; at least for now (until I get a very strong reason to start observability). Just simple plain HTML and CSS files converted from markdown files. 

I came across wruby when I was scrolling throught this community called the [1MB club](https://1mb.club/). This community has a collection of websites which are performance focused. And there are a lot. Going through them fealt like a fresh breeze of air. There are collections of websites of all kinds including some of them being company homepages, personal websites, retro websites etc etc. 

But anyway, I think I have finally choosen my long term website building template/framework. And combined with github actions, I basically have a fully automated CICD workflow that can reduce my TAT (turn around time) from push to release in under a minute. Extremely cool, simple, fast and minimal. And all in my control including the builder.

So I have finally officially launched my website (in other words, will start posting the URL on public platforms) after owning my current domain name for over 5 years. While I had my previous webiste I never got the urge to "launch" it. I guess it just didnt click with me. In case you were curious just add a `dev` infront of the domain name to check out the old website template (it was from html5up.net, bug shoutout to them). I deployed it when I was in my 3rd year uni. I spent a lot more time customizing the old one than I did on this one.

TLDR: Just stop over engineering shit when its not necessary. 

Cheers,  
YM