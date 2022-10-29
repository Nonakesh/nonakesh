---
title: Unannounced indie game
start: 2020-04 # The day is not true, but jekyll requires a full date
techTags:
    - 🦀 Rust
    - C#
    - Unity
image: images/Game.jpg
featured: true
---
An unannounced multiplayer game project I have been working on as a solo dev with Unity as a renderer and a Rust backend.

A big part of this project was creating tools to simplify development for myself.
This includes custom scripting languages, code generators, and lots of editor UI.

<!--more-->

## Features and tools
The game isn't public yet, but I can write about some of the more exciting tools I have implemented.

### Ability scripting language
A specialized scripting language using a bytecode interpreter.
I have implemented a rudimentary optimizer, with a pinhole optimizer and reachability analysis.
It is fully sandboxed and will make it possible to create mods that can be safely downloaded from the server.

The language powers all abilities in the game, like turrets, teleportation, explosions, etc.
It is integrated tightly in Unity, so it's easy to create variations and change parameters.

The ability VM is also used in Unity itself.
C# code sends ability data to the Rust module, which sends back a list of values for visual effects.

### C# code generator
The game uses binary messages to communicate between server and clients. 
Using Rust and C# this quickly became error-prone and hard to keep in sync.
In the end I decided to create a procedural macro in Rust to generate matching C#.

The generator creates C# classes to match select Rust structs and enums. 
Optionally it can create ToString, Equals, and DeepCopy methods, constructors, or a match function that's similar to Rust.
It's also possible to add C# attributes to improve Unity editor UI.

At the time of writing, the project has over 30000 lines of generated code.

### Dialogue language
A simple dialogue language, with conditions, choices, and full localization support.

### Data-driven AI
Inspired by the GDC talk [Building a Better Centaur: AI at Massive Scale](https://www.gdcvault.com/play/1021848/Building-a-Better-Centaur-AI), 
I have implemented a fully data-driven AI system. It is easy to extend and can be customized for individual actors.
AIs can dynamically change to accommodate abilities. 

### Physics customizations
To simplify my workflow and to optimize the server, I had to do a small dive into mathematics.
I added custom colliders to avoid expensive mesh colliders and manually derived formulas to calculated exact forces.

### Steam sockets FFI implementation
I also contributed the initial implementation of the Steam networking sockets api in [steamworks-rs](https://github.com/Noxime/steamworks-rs).
