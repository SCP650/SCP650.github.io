---
title: Match-3 Siege
date: 2022-12-30 05:40:23 -0400 #date this page is written
categories: projects 2022 winter #project folder, beginning year and season
tags: All Game_Development
#tags options: Highlight Event_Planning Entrepreneurship Product_Project_Management Game_Design Marketing Negotiation  Web_Design

start-season: "2022 Winter"
#this is a bad practice
assetLoco: /images/projects/match3
coverPic: /icon.png
carousel:
  - image: /pic1.png
  - image: /pic2.png
---
Match-3 games like Candy Crash are some of the most popular games on mobile, while shooter games like Call of Duty are some of the most popular games on PC.

What if we combine the two?

Introducing Match-3 Siege! 

## How does it work?

In this game, you'll be part of either the attacking or defending team. The attackers must destroy all of the colored spheres on the field, while the defenders must protect them.

To destroy the spheres, attackers must shoot and match three or more of the same color, while countering defenders' fire. 

To defend the sphere, the defenders need to find and guard strategic positions to prevent match-3 to happen (e.g. blue blue red blue) while inserting a new sphere into the field every 30s to make it harder for the attackers. (e.g. blue yellow blue red blue)

If the attackers succeed in destroying all the spheres before time runs out, they win! But if there are any spheres remaining at the end of the game, the defenders win.

<div class="iframe-container"><iframe src="https://www.youtube.com/embed/saNxsox4Wz8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><br>

The video above is a single-player demo I made for this idea. Even though it's against AI, you can already feel the intense and fast-path adrenaline rush caused by constantly switching between playing match-3 while fighting against enemies. 

I think this can be another game mode in addition to team deathmatch, search and destroy and battle royal. Let me know what you think!

## Under the Hood 
 
This is made independently by me with Unreal Engine 5.1 and C++. This is my first time making Unreal games with C++ and it has been a great learning experience! I used free 3D and animation assets and implemented these:

- animation blending using blendspace
- input mapping for locomotion 
- AI bahavior tree and blackboard for enemies 
- hook up particles and sound for shooting 
- lose and win conditions 
- the match-3 systems 


PS: I created the icon of this page using text to image AI.