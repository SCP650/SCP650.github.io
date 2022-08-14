---
title: Siggraph 2022 Day 2
date: 2022-08-12 10:40:23 -0400 #date this page is public
categories: blogs 2022 summer #project folder, beginning year and season
description: A TLDR of the cool things I saw on Day 2 of Siggraph
start-season: "2022 Summer"
#this is a bad practice
assetLoco: /images/projects/siggraph22
coverPic: /icon.jpg
carousel:
  - image: /p0.jpg
---

Hi all, welcome to my Siggraph series where I post the TLDR of the most memorable stuff I see at the conference. 

This started as some rambling notes I took during the conference, and I just cleaned it up a bit. It may not be the most accurate (especially the technical papers) but feel free to take a look!

## Day 2 Events I’ve attended:

- Tech Papers: **Ray Tracing & Monte Carlo Methods**
- Expo: **Emerging Technologies** + **Immersive Pavilion**
- Presentation: **Advances in Real-Time Rendering in Games: Part II**
- Expo: Companies
- Unreal Talk: **Animating In-Engine - Real-Time Production Workflows**
- Expo: Appy Hour

## Highlights
---
## Immersive Pavilion

### A VR Locomotion Method that (kinda) Solves Motion Sickness

What is it: The demo is called “**HyperJumping**” by Bernhard E. Riecke. It has two parts: lean based locomotion and hyperjump. 

**Lean-Based Locomotion**: instead of pushing a thumbstick, you have to physically lean forward to move forward. Since your body is actually leaning forward as your visual changes, it’s less dizzy. 

**Hyperjump**: when the user reached a max speed, it will automatically teleport the user for a segment, and then the user will continue to travel at max speed. 

Use case: if a person wants to travel long distances in VR, they don’t want to use smooth locomotion (which is dizzy) and don’t want to teleport (since they will miss the view), they will use lean-based movement + hyperjump. 

Sebastian’s Review: conceptually this is a very interesting idea — combining physical movement with smooth locomotion and teleportation, but in practice, when I tried the demo the Hyperjump(teleportation) feels scary — I would suddenly teleport to another place without any warning. I really like the idea and think further exploration is required. 

---
## Expo: Companies

I tried a ton of demos at the expo, these are the top most memorable three

### Omniverse 

I was really really shocked when I saw a live demo of Nvidia’s Omniverse. The demo showcases a game development workflow of 3 people, using Maya, Unreal and Adobe Substance 3D respectively on their own laptops. 

With Omniverse, everything is synced in real-time bi-directionally: if a new car is added in Unreal’s scene, it will be reflected in Maya and Substance 3D instantly. Then the artist in Substance 3D will pain the car, the texture will show up instantly in Unreal and Maya. 

This workflow is very magical and can drastically increase a team’s collaboration efficiency. Under the hood, everything works because they are using Disney’s new and open Universal Scene Description (USD) format. 
{% include image.html img="omniverse.jpg"  caption="Omniverse Integarting 3 Different Workflow"%}

### Oppo Air glass 

I tried Oppo’s Air glass, which is an extension screen you can attach to any glasses. It can display information like weather, messages and live translation. 

In theory, it sounds very good, but when I tried it in practice, I need to constantly change my eye focus between the glass and the person I’m talking to in real life which result in fatigue very quickly. The major issue is that the info is not spatialized. Having a screen that constantly displays irrelevant info is also distracting. It’s a good tech demo but would need a lot more improvement to be consume-ready. 

### StretchSense Gloves 

A current problem with optical hand tracking is that if the hand is obstructed, it can’t be tracked. StretchSense gloves managed to imbed a lot of senses in a normal looking glove, and send rotational information from each joint to their software, which will then convert the data to Unity/Unreal supported format.

On the update, the glove feels comfortable and does hand tracking very feel. But it comes at a hefty~$5k. It’s a good mocap solution and for research use, but probably not for consumer tech. 

---
## Animating In-Engine - Real-Time Production Workflows

The folks at Epic Games showcased how you can create animations in-engineer without the need for professional software like Maya.

In the demo, the speaker is able to copy parts of one animation (jumping) and paste them to another animation (moving forward), the final result is a person hopping forward.

This is very impressive in that programmers can just download a few free mocap assets, and cut and paste different portions to combine to the desired motions. This makes prototyping ideas and making short video clips so much faster.

---
## Tech Papers: Ray Tracing & Monte Carlo Methods

### R2E2: Low-latency Path Tracing of Terabyte-scale Scenes Using Thousands of Cloud CPUs

Problem: if you need to render terabyte-scale scenes, and you don’t happen to own a super computer… you are out of luck 

Solution: Why now rent thousands of CPUs to run at the same time? That’s what the author did, live, at the presentation — he rented thousands of AWS E3 instances and rendered a path-traced picture of a terabyte scene in ~1 mins. 

### Generalized Resampled Importance Sampling: Foundations of ReSTIR

Problem: Traditional ray tracing is very costly and slow, it also requires multiple passes to generate a good image.

Context: The ReSTIR approach - it reuses samples from previous frames to improve path distributions across frames (temporal reuse) and resample between this and nearby pixels (spatial reuse)

Solution: Through some cool math and magic that I don’t fully understand, the author generalized the ReSTIR approach to work on any domains without the need to know the exact PDF

### Regression-based Monte Carlo Integration

Problem: Solving integration is a hard but common problem in graphics, e.g. to light up one pixel properly, we need to calculate the integral of all the light paths connecting the pixel to the light source.

Context: Currently we mostly use Monte Carlo Integration, which randomly samples the function and averages those values to estimate the integral. However, this is only an estimate and has errors.

Solutions: the author proposes a new estimator using regression function + residual, this estimator is provable better than Monte Carlo. Because in the worst case, the regression will be a constant, which will produce the same result as Monte Carlo.