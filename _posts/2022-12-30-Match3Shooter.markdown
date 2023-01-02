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
What would Candy Crush + Call of Duty look like?

Match-3 games are among the most popular games on mobile, while shooter games are among the most popular games on PC. What if we combined the two?

Introducing Match-3 Siege!

## How does it work?

In this game, you'll be part of either the attacking or defending team. The attackers must destroy all of the colored spheres on the field, while the defenders must protect them.

To destroy the spheres, attackers must shoot and match three or more of the same color, while fighting against the defenders' fire.

To defend the spheres, the defenders need to find and guard strategic positions to prevent match-3 combinations from occurring (e.g. blue blue red blue) and insert new spheres into the field every 30 seconds to make it harder for the attackers (e.g. blue yellow blue red blue).

If the attackers succeed in destroying all the spheres before time runs out, they win. If any spheres remain, the defenders win.

<div class="iframe-container"><iframe src="https://www.youtube.com/embed/saNxsox4Wz8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><br>

The video above is a single-player demo I made for this idea. Although it's against AI, you can already feel the intense and fast-paced adrenaline rush caused by constantly switching between playing match-3 and fighting against enemies.

I think this game mode could be added alongside team deathmatch, search and destroy, and battle royal. Let me know what you think!

## Under the Hood 
 
This game was made independently by me using Unreal Engine 5.1 and C++. It is my first time making Unreal games with C++ and it has been a great learning experience. I used free 3D and animation assets and implemented the following features:

- Animation blending using blendspace
- Input mapping for locomotion
- AI behavior tree and blackboard for enemies
- Integration of particles and sound for shooting
- Lose and win conditions
- Match-3 system with chaos destruction.

PS: I created the icon of this page using Stable Diffusion and the text of this page using ChatGPT