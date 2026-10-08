---
title: Revelation
description: A TypeScript and Lua MUD engine with visual world-building tools and AI-powered encounters, atmosphere, and item variations.
category: Game development · MUD engine
order: 1
featured: true
---

Revelation is the engine behind a world I keep coming back to. It’s a MUD—a multiplayer, text-based game engine—and probably the most substantial personal software project I’ve built. It brings together two things I’ve loved for a long time: programming and getting lost in a good game.

What started as a way to learn new languages has grown into a suite of tools for building and running a shared world. Today, about half a dozen of us use it to make **Triloka Eternal**, a fantasy game we work on when life gives us the time.

## My role and the shape of the project

I build the engine and the tools around it, while our small community helps shape the game and its content. Over the years, I’ve explored the idea in Java, Python, and Rust. The most mature version uses **TypeScript for the engine and Lua for game scripting**.

The distinction between the engine and the game matters to me. Revelation provides reusable systems; Triloka gives them a world to inhabit. Volunteer scripters can work through the Lua API without needing to change the TypeScript engine, and builders have a web interface for writing and organizing content.

## Tools for people who want to build worlds

There’s a lot behind a room you can walk into. Its description, the exits, the things you can examine, the characters you meet, and what happens when you interact with them all need somewhere to live.

Revelation’s web tools bring that work together:

- **World and room editors** for descriptions, directional exits, environments, atmospheric text, and interactions.
- **Quest tools** for laying out the steps a player will follow.
- **Template and replica systems** for giving individual items their own details while keeping shared foundations consistent.
- **AI Content tools** for setting creative direction, inspecting generated results, and keeping content ready for the game to use.

The part I love is how immediate it feels. Someone writes a room, and you can walk into it. You’re building the world and experiencing it with your friends at the same time.

## AI with specific powers

The Dungeon Master layer can respond to who’s online and what’s happening in the world to create encounters. The first time an unexpected character approached me with a quest while I was testing, the project felt different. My own game had surprised me.

Making that predictable has been one of the hardest and most interesting parts of the work. Early item-generation experiments created duplicate master templates and made a mess of the catalog. That pushed me to get much more deliberate about the APIs and constraints available to AI.

Dynamic replica pools are one example of where that led. Builders choose approved base templates and a creative direction, then inspect the generated variations. Lua decides when to spawn an item from the cache. The engine limits the properties generation can change, and refills happen in the background so spawning doesn’t have to wait for an AI response.

In practice, that can mean something as small as a shop full of different cookies: browse them, choose one, pay in sterling, and eat it. The interesting engineering is in getting those pieces to work together while leaving room for variety.

## A project with room to grow

Revelation is an ongoing passion project with private source code. Triloka Eternal is still in development; we’re taking our time and building it together.

For the personal story, the lessons from the AI experiments, and a screenshot tour of the admin tools and actual gameplay, read **[Building Revelation, and why I keep coming back to it](/writing/the-world-i-keep-coming-back-to/)**.

You can also visit **[Triloka Eternal](https://trilokaeternal.com/)** to create an account and join the mailing list for updates and access announcements.
