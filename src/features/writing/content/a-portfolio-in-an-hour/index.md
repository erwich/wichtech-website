---
title: "A portfolio in an hour, and the work before it"
description: "Helping a friend get a portfolio online with Astro, Pages CMS, and Cloudflare—and how the preparation around my AI tools made the speed possible."
slug: a-portfolio-in-an-hour
date: 2026-10-08
category: Building things
draft: false
---

At the end of the evening, I had to stop and ask: damn, did that take us about an hour?

A friend was getting ready for a job search and feeling overwhelmed by the prospect of building a portfolio website. They’re a designer. They had the skills to decide what it should look like, but turning that into a working site was another whole project sitting between them and the thing they actually wanted to do.

My offer was pretty simple: pick a domain, mock up your dream portfolio, and set me loose.

They brought the design. I brought my development setup and an AI coding partner. Roughly an hour later, we had a live Astro site on a custom domain, a GitHub-based content editing setup, automated deployment, and a guide written for the person who would actually maintain it.

There were still final images and copy to supply. We had a working portfolio foundation with placeholders, ready for the creative work my friend would bring to it. The website had gone from an intimidating task to something real, online, and ready to fill in.

That felt pretty damn good.

## The hour had a head start

I’ve been putting time into the harnesses and reusable skills around my AI tools. A big part of that is portable context: where things live, how I organize code, which tools to use, and what needs to be checked before a change is considered done. That knowledge can come with me into a new session or workspace, instead of depending on what an agent happens to remember from an earlier conversation.

Some of that is personal preference. Some of it is much more consequential. Verify the target account before changing infrastructure. Keep credentials out of source control. Use the established deployment workflow. Ask before stepping outside an approved access method. Distinguish a successful local build from a verified live website.

Writing those things down as reusable procedures has turned out to be a pretty good investment. The agent has an established way to approach familiar work, with less need to improvise about access, architecture, or what “finished” means. It still needs to inspect the current repository and verify live access; portable context needs to be checked against the current state of things.

For this project, we already had a useful starting point in my own site. I’d recently been working with Astro and Cloudflare, and the decisions about content, hosting, and deployment were fresh. We could reuse an approach I understood while giving my friend a site built around their own designs.

The repository still had to be created. Access still had to be authorized. The domain still had to be connected. Having a procedure for that work meant we could spend our attention on the actual decisions instead of rediscovering every step.

When I talk about a safe AI harness, that’s a lot of what I mean: useful context, explicit boundaries, appropriate tools, and ways to check the result. Written instructions help guide the work; limited credentials and validation provide other layers. None of it makes an agent infallible. It gives us a much better environment to work in.

## Astro clicked a little harder

I’m still early in my experience with Astro, and this was a satisfying second application of what I’d been learning on my own website.

We kept the portfolio static. Astro builds the pages ahead of time, and [Cloudflare Workers Static Assets](https://developers.cloudflare.com/workers/static-assets/) serves the output. There’s a home page, project pages, and a résumé page. Shared components handle the navigation and footer. A small amount of client-side behavior makes moving around feel smooth.

Project content lives in Markdown, and profile information lives in structured text files. [Astro’s content collections](https://docs.astro.build/en/guides/content-collections/) gave us a way to define and validate the project fields as part of the build.

I like how little machinery that requires for this particular job. A designer needs to show work, explain it, and give someone a way to get in touch. We could focus on those things and keep the application small enough to understand.

The design work still needed attention. We compared the implementation against the mockups, caught typography and spacing differences, adjusted the résumé layout, and checked smaller screens. Generating the first version quickly left room to care about those details.

## Files in Git, forms for the editor

My initial thought was that my friend could update text files in GitHub. That works well for me. While building this, I got a much better appreciation for putting a friendly editing surface over the same files.

We used [Pages CMS](https://pagescms.org/docs/), which edits content and media in a GitHub repository. A configuration file describes the fields the editor should present. We set up forms for the introduction and contact details, projects, and résumé content.

The resulting publishing path is straightforward: save an edit, commit the change to GitHub, run validation and the build, and deploy the output to Cloudflare. In this setup, saving to the publishing branch starts that process automatically. If validation fails, the last working deployment stays online.

That distinction matters enough to put in the editing guide. So do the smaller things: how project drafts work, where images go, and why updating the résumé page doesn’t also update a separately uploaded PDF.

I really like this arrangement. I can work directly with the files, and the content owner gets forms. We keep the history and deployment process we already use. The site itself doesn’t need a content database or a CMS running behind every page request.

## Crossing the stack without losing the thread

The part that keeps sticking with me is how fluid the whole session felt.

We moved from looking at mockups to implementing layouts, defining content, wiring up GitHub Actions, authorizing Cloudflare access, checking the deployed site, and writing instructions for its owner. Then we went back through the design with a more critical eye.

Those are different kinds of work. Normally, each transition costs me some momentum. I have to remember a command, find the right settings page, reread documentation, or switch from thinking about CSS to thinking about deployment permissions.

Working with an agent that could carry the context across those steps made the full stack feel suddenly very close together. I could stay engaged with what we were trying to accomplish while the tools helped move the work through each layer.

It felt like navigating the stack at light speed. There were still checks, corrections, and moments where I had to authorize access. I was still responsible for what we shipped. But the distance between deciding something and seeing it work had gotten remarkably short.

## A useful reason to build the tooling

I enjoy building systems, and I can spend a lot of time refining the environment around my work. This was a nice moment of seeing that preparation pay off for somebody else.

My friend supplied the taste and the direction. The tooling helped us turn it into a working site, with a practical path for future edits. The remaining work was concrete: choose the final images, finish the copy, and make sure it all represents their work well.

I’m still a little amazed by the hour. I’m happier that we could take something a friend was dreading and get enough of it out of the way for them to move forward.
