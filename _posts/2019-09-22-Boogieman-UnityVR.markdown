---
title: Boogieman VR
title2: Boogieman Unity VR #title shown in first line
date:   2019-09-22 20:40:23 -0400 #date this page is written

categories: projects 2019 fall #project folder, beginning year and season
tags: Game_Development All Highlights AR_VR
#tags options: Highlight Event_Planning Entrepreneurship Product/Project_Management Game_Development Marketing Negotiation  Web_Design

start-season: "2019 Fall"

assetLoco: /images/projects/Boogieman
coverPic: /cover.png
carousel:
  - image: /cover.png

---

This is a team project for CMU 53-451: Research Issues in Game Development: Designing for XR. This is a game-design/research class taught by Professor Tom Corbett where we work in teams to design video games in VR/AR.

In this project, we designed a VR rhythm dancing game. Our original idea was to use ML and OpenCV so that the player can dance freely. Then we realized that is not gamey enough. The final result is a beat-saber-like node-hitting dancing game --- as you hit the nodes, you begin to boogie. We knew we succeed when during the final demo, not only the person in VR is dancing, but the entire class spontaneously started dancing to the game.

In this 6-week project, I was the programmer in the team. We will go through 6 iterations for the game, developing a prototype for each week and presenting a demo on every Friday.

<div class="iframe-container"><iframe src="https://www.youtube.com/embed/kXyuNnvKIBo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><br>

## Main Takeaways

This was a highly intense 6-week project. I learned a lot about developing in VR. Here are some of my main takeaways. 

### 1. Never Seize the Camera in VR

Our game takes under the bed of a kid's bedroom (the Bogeyman under the bed). In one of our iteration, we wanted to show the bedroom environment before going under the bed. So we added a "cut scene" where the camera will drop from above the bed to under the bed. 

That...turned out to be a bad idea. Seizing the camera meant the play lost control of his or her own head. It's disorienting and dizzy. Not to mention the drop in height. 

### 2. Use Visual Cues to Direct the Player's view

Because we cannot seize the camera and add cut scenes, this means a player can have total control over the camera movement. This is also where VR stands out from flat-screen media: VR invites the player to discover the environment in a self-paced way. 

That also means the player may miss key animations and moments in the game. For example, in our early iterations, the dance floor is a square. We noticed many players missed the Boogieman entrance animation completely and are not sure where they should face. We later change the dance floor to a long strip to guide the player to look at the Boogieman.

### 3. If it seems interactive, it needs to be

In this project, I saw many players feeling disappointed when they try to pick the toys in the environment up and failed. It made our game less immersive.

The magic of VR is the feeling of presence in a virtual world. Hence, users will naturally apply the rules of the real world to the virtual world. If something looks like it can be picked up, pressed, or thrown, it better should be or else it will ruin the immersive experience. 

We didn't have time to implement this in our 6-week production schedule but it's a good takeaway to keep in mind. 

## Credits
This game is made by (in alphabetical order): Ann Maria, Connie Chau, Kalpa Anjur, Lisa Lo, Carter Williams, and me.

Thank you all for making this amazing dancing game a reality!!!
