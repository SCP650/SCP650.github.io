---
title: A Second Person VR Game
date: 2022-11-27 01:40:23 -0400 #date this page is written
role: VR Developer 
categories: projects 2022 fall  #project folder, beginning year and season
tags: All  AR_VR  Software_Engineer Game_Development
#tags options: Highlight Event_Planning Entrepreneurship Product_Project_Management Game_Design Marketing Negotiation  Web_Design
description: A Second Person View Multiplayer VR Shooting Game
start-season: "2022 Fall"
#this is a bad practice
assetLoco: /images/projects/SPS
coverPic: /icon2.png
carousel:
  - image: /pic1.png
---

Have you ever played a second-person multiplayer VR shooting game? Me neither, so I made one over the Thanksgiving break.   

Well, we first need to figure out what is a second-person game. 

- In a first-person game, you control yourself through your own perspective -- I'm going left, I'm going right. 
- In a third-person game, you control yourself through an external perspective -- They go left, they go right. 
- So naturally, in a second-person game, you control yourself through the perspective of another character -- You go left, you go right. 

In this game, there are two players and two guns on the table. The goal is very simple: whoever picks up the gun and shoots the other player first wins. But there's one catch: it's a second-person game -- you are controlling yourself through the perspective of your opponent. 

What does that actually mean? In this clip, it may look like a normal first-person game but you are not controlling yourself -- if you raise your VR controller, the character in front of you will raise their hand, not the character you are in the perspective of. 

Originally I thought this would be as if I'm controlling myself through a mirror, but in reality, it is much worst ...

You can try it out [here](https://github.com/SCP650/SecondPersonVRGame/releases/tag/v1)

<div class="iframe-container"><iframe src="https://www.youtube.com/embed/fCkHKXO1GiU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><br>

## Main Takeaways 

### 1. True Second Person VR Games are BAD

To make a true second-person game meant you cannot control the camera, since the camera is technically on the head of another character who you don't control -- you just happen to look out from their perspective.

What that meant for VR is that when you move your head to look right, the view you are seeing is not moving, instead, you have to ask the other player to move their head to look right so that you can see what's on the right. 

This also meant if the other player moves their head randomly, their view is not going to be impacted (since your head is not moving), but your view will move randomly causing vertigo and dizziness. 


### 2. A Compatitive Game Become Cooperative Quickly 

Even though the goal of the game is to kill the other player, we quickly realize it's not playable if we don't cooperate. 

In the video, you can see we struggle to get our own character inside our view. This is because:
- Player A can only see stuff from Player B's perspective. So A needs to give B instructions to adjust A's view.
- But B doesn't know what A is seeing (B can only see A's perspective), so B doesn't know many degrees they need to turn. 

Hence we end up spending the majority of the play time telling the other party how to move their head -- "Can you look right?","Can you look left?" -- which I guess makes this a successful second-person game..? but not an enjoyable game. 

### 3. Player Will Instinctively Move Their Head to Adjust the Camera 

One added difficulty I wasn't expecting before was that when A wants to look left, A will not only give instructions to B to look left but also instinctively move their head to the left -- this means it's also disrupting B's view.

And then B's view is disrupted, B will instinctively move their head in the opposite direction, further disrupting A's view. This would create a compound effect what gets worst more and more...

## Some Thoughts...

I started this project knowing a second-person VR game would be a bad idea. But my main goal is to figure out how to network a VR game, and I did end up with a multiplayer VR game so I consider this a success! 

Nonetheless, let this serve as a lesson to whoever comes after me that wants to make a second-person VR game. Unless you want to make major sacrifices (like in Trover Saves the Universe), a true second-person game is not a good idea. 

## Under the Hood 
 
This is made independently by me with [free 3D assets](https://assetstore.unity.com/packages/3d/props/interior/polygon-dining-room-199435) from Asset Store, the Oculus Plugin, and the BNG Interaction Framework. It is networked using Normcore. This app is made in Unity with Oculus Quest 2. It can also run on a windows machine with Oculus Link.

PS: I created the icon of this page using text to image AI.