---
title: Silent Echo
title2: Interview Preparation in Mixed Reality 
date: 2023-11-10 01:40:23 -0400  
role: VR Developer 
categories: projects 2023 fall  #project folder, beginning year and season
tags: All  AR_VR  Software_Engineer
#tags options: Highlight Event_Planning Entrepreneurship Product_Project_Management Game_Design Marketing Negotiation  Web_Design
description: From Couch to Candidate - Elevate Your Interview Skills in Mixed Reality
start-season: "2023 Fall"
#this is a bad practice
assetLoco: /images/projects/InterviewPrep
coverPic: /roundedIcon.png
carousel:
  - image: /roundedIcon.png
---

Getting ready for job interviews can be really tough, especially if you're a college student. It usually means asking friends for help, digging up good questions, and practicing by taking turns being the interviewer and the interviewee. But even after all that effort, the feedback you get might not be of high quality because, let's face it, your friends are probably just as new to this as you are.

Now, imagine if you could have a super experienced hiring manager right there in your living room to practice with. That's the idea behind this innovative personal project. In this project, I wanted to learn how to merges the immersive experience of mixed reality with advanced AI technology to tackle real-life problems. If you're curious to see how it works, feel free to check out the video below.

<div class="iframe-container"><iframe src="https://www.youtube.com/embed/9tO_cyigUsg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><br>

## Main Takeaways 

### 1. Exploitation vs Exploration -- the Epsilon-Greedy Strategy

During the creation of our latest demo, I encountered a perplexing issue. In the Unity editor, everything functioned seamlessly, with every network request executing flawlessly. Yet, when making an Android build for the Quest 3, I was consistently thwarted by DNS resolution errors. Initially, I adopted an "exploitation" strategy: searching online for DNS resolution fixes, tweaking DNS servers, adjusting Android manifest network permissions, leveraging my accumulated knowledge to craft solutions based on available data. Nonetheless, this approach led me down a fruitless path, consuming an entire afternoon without resolving the issue.

On the verge of capitulation, I shifted to an "exploration" mindset. I started aimlessly clicking through random menus in the Unity's project settings. That's when I made an expected discovery: 
{% include image.html img="BadUnityBad.png"%}<br>
Buried within a labyrinth of menus (Project Setting -> XR Manager -> OpenXR -> Android -> All Features -> Meta Quest Support -> Settings Icon), I found an additional network toggle, mysteriously disabled the network by default and undocumented. It's inconceivable for any platform to embed such a critical toggle so obscurely - imagine developing an iPhone app, meticulously setting camera permissions, only to find Apple concealed a disabling switch deep within seven layers of its interface.

I ended up wasting seven exhausting hours on this bug. In hindsight, this reminds me of the Epsilon-Greedy Strategy. When debugging, instead of only selects the best-known action (exploitation), I should also occasionally chooses a random action (exploration) as sanity checks.

### 2. Unity's OpenXR + Meta Quest 3 -- A Tale of Instability
In this project, I wanted to delve into the intricacies of Unity's OpenXR and XR Interaction Toolkit. Unfortunately, as of my experience, Unity's implementation of OpenXR is in a state of considerable flux. Activating it within an existing project is akin to navigating a minefield; achieving mixed-reality passthrough is a Herculean task. Instead, my workaround was starting from Unity's own sample OpenXR project, but this didn't shield me from the previously mentioned network issues, nor did it ensure seamless operation on the Quest. Frustratingly, I often found myself trapped in a loop of forcibly uninstalling and reinstalling the app just to launch it.

The root cause of these launch failures remains elusive, and I strongly suspect it's not an issue with my code. There's a telltale sign: the Unity icon doesn't even display on the screen when the app stumbles with no error logs from my app. The most plausible explanation seems to be a discordance between OpenXR and the OS version of my Quest 3 - a mismatch that leaves much to be desired in terms of stability and integration.

Consequently, I strongly recommend anyone who plans to develop exclusively for the Quest to opt for Meta's XR UPM Package instead of OpenXR. This alternative seems to offer a more stable and streamlined path for development in the current landscape.


### 3. AI NPC in Mixed Reality -- The Power of Presence
In this project, my objective was to explore the integration of Large Language Models (LLMs) with avatars, envisioning a scenario where an AI-driven expert interviewer could be virtually present in your living room to help with interview practice. The outcome, however, far surpassed my expectations. It's hard to convey through video alone, but the experience of interacting with a life-sized humanoid that converses and responds to you is incredibly surreal. The avatar I employed wasn't photorealistic, yet it still imparted a tangible sense of someone's presence in my room.

In the final demo video, I playfully responded to most of the interview questions to add a layer of interest, but in my initial takes, I found myself responding earnestly. The experience evoked the genuine stress of a real interview, complete with the pressure of someone watching and awaiting your responses. I felt an instinctive urge to answer promptly, mirroring the dynamics of an actual interview situation, where letting questions linger feels awkward. This venture into mixed reality with an AI NPC showcased the profound impact and potential of digital presence in our everyday interactions.

## Disclaimer 
 
THIS PROJECT, CREATED AND DEVELOPED SOLELY BY SEBASTIAN YANG, IS INTENDED EXCLUSIVELY FOR PERSONAL EDUCATIONAL PURPOSES. ALL DEVELOPMENT AND TESTING HAVE BEEN CONDUCTED ON SEBASTIAN’S OWN PERSONAL EQUIPMENT. UNDER NO CIRCUMSTANCES SHALL THE SOURCE CODE OR THE APPLICATION ITSELF BE DISTRIBUTED, PUBLISHED, OR SOLD IN ANY FORM OR MANNER.

NO ANIMALS HARMED IN THE MAKING OF THIS PROJECT.