---
title: PuttPlot VR
title2: PuttPlot Unity VR #title shown in first line
date:   2019-09-21 20:40:23 -0400 #date this page is written

categories: projects 2019 fall #project folder, beginning year and season
tags: Product_Project_Management Game_Development All AR_VR
#tags options: Highlight Event_Planning Entrepreneurship Product_Project_Management Game_Development Marketing Negotiation  Web_Design

start-season: "2019 Fall"

assetLoco: /images/projects/PuttPlot
coverPic: /cover.png
carousel:
  - image: /cover.png

---
Published on Oct 29, 2019.

This is a team project for CMU 53-451: Research Issues in Game Development: Designing for XR. This is a game-design/research class taught by Professor Tom Corbett where we work in teams to design video games in VR/AR.

In this project, we designed a golf-dating-sim called PuttPlot. Essentially, it is a Japanese-style dating sim but you choose your response by golfing the ball to the corresponding holes. This is both challenging and fun in that we need to simulate the 3D golfing gestures and physics in VR but at the same time tell an interesting story through 2D animations.

In this 6-week project, I was the producer/programmer in the team. We will go through 6 iterations for the game, developing a prototype for each week and presenting a demo on every Friday.

This is our story.

## Table of Contents
{:.no_toc}

* Table of Contents
{:toc}

## Week 1 - Brain Storming
We have a lot of freedom in our project. The only requirement was that it needed to be a playable VR game inspired by any picnic game. And, of course, it needed to be developed within 6-week by a team of 5-6 people.

We formed our team on Friday, Aug 30th. On the next day, we had our first meeting. In the meeting, we spend about 4 hours talking about game ideas. Our discussion ranged from a technical-challenged beat-saber-style _Hall Ball_ to an Americano dark-humor game called _Catch With Dad_. The game idea I proposed was an environmental-educational sandbox game called _Tree_ where you grow and destroy tress to impact global temperature. Sadly, it is a bit out of scope for a 6-week project so we didn't end up running it.

After several rounds of voting, we ended up with the idea of a dating simulation golf game: _PuttPlot_.
### Producing
After we decided the game idea, we need to present a playable demo that following Friday. We cooperated by assigning tasks to each individual in the team. These were tasks like demo-board design, 2D arts and hitting mechanics. All individual task would be due by Wednesday night. And we would use Thursday night to integrate all the individual parts into a full game.
### Programming
In our first demo, we just used rigid-body on the ball and added a collider on the golf club. We would add a force on the ball to the direction of the club whenever the ball was hit. So Unity physics will handle the collision and how golf ball would fly.

We did pretty well for our first week. Our demo is working and the class seems to like it. We also received a lot of constructive feedback.
{% include image.html img="week1.png" caption="Concept Art for the game"%}

## Week 2 - Pre-Production
To get things going, we did a lot of pre-production work this week.
### Producing
Firstly, we decided on the three pillars of the game:
1. Laughter: the game should be very very funny / subverted expectations
2. Engaging stories: player's decisions matter
3. Board configuration connect to dialogue options

Our game mainly consisted of two parts: a golfing mechanics and an intriguing story. So for the second week, our writer Gus worked on the story and ended up with a bunch of index card full of funny stories he wrote. Our artiest Angelina worked on more concepts and character art. Our programmer Carter and Ann worked on driving golf. And I worked on the board design and producing work.

We still used the integrate-on-Thursday-present-on-Friday approach. Since a lot of the work we did is preproduction, the final demo we presented on Friday for this week isn't that much different from the previous week.
{% include image.html img="week2-story.png" caption="Draft story tree for the game"%}

### Programming
This week we try to mimic how golf ball in the real world works. In real life, the golf ball will not fly away immediately after contact with the club, but will instead be lifted a bit by the club and the fly away.

Thus, we try to do that in the game by adding the ball to be a child object of the club immediately after contact so that it would stick to the club. After the ball move up to the direction of the swing for a few milliseconds, we will release the ball and adding a force to make it fly.

This concept is good but the final result wasn't as successful as we would want it to be. The ball still moves too fast and didn't land on the location you would expect it to land.

### Feedback for this week
Same as last week, we received a lot of feedback after our demo on Friday and we boiled down to four points:
* Ball was too fast/not visible enough
* Text looked bad
* Board UI needed work
* Driving doesn't feel good. Need a RAMP

Sadly, we forget to record gameplay video in the first two iterations so you won't be able to see them.
{% include image.html img="week2-game.png" caption="The second iteration"%}
## Week 3 - A Rough Week :(
In our third iteration of the game, things started to get a bit difficult. We had the Technical Opportunities Conference this week, which is the biggest career fair on CMU each year. Many teammates spent all their free time on Monday, Tuesday, and Wednesday in that event.
### Producing
This essentially meant our Wednesday checkpoint was not met. So we ended up trying to scramble everything together at the last minute. Carter, Gus and I stayed at Hunt Library basement until after midnight. Even after that, the version we submitted was still very buggy.

I designed several levels(boards) for the game. But because we failed to get the dialogue transition working in time. We never got a chance to transit to the new levels. Therefore, our demo on Friday was not ideal.

### Programming - A Ramp is Built
The good thing was we got a working ramp. One of the feedback that we received was that just driving the ball to the board did't feel good. We solved this by adding an acceleration ramp. In this case, the player only needs to putt the ball to the ramp and ball will fly up to the board.

Hopefully, we will do better next week.

Written on Sep 28, 2019.
{% include image.html img="week3-ramp.png" caption="The ramp"%}

## Week 4 - Play-Testing
We are officially passing the halfway point of our project but we still haven't got the core game loop ready. So there is only one goal this week: nail down the game loop.

### Producing - A "Small" Bug
Learning from last week's experience, we tried to add more checkpoints and iterations throughout the week. Instead of only integrating on Thursday night, we integrated and play-test on Tuesday night and integrated again on Wednesday and Thursday nights. This meant we could at least iterate two times in one week: one for play-testing on Tuesday and one for the demo on Friday.

On Tuesday, we were fixing bugs while inviting people to play-test. Near the end of the play-test session, we fixed all the bugs that are left from last week, especially a bug that will prevent the dialogue from moving to the next board and options.
{% include image.html img="week4-environment.png" caption="Week4 the environment behind the player"%}

Then we found a smaller bug. Instead of creating a new ball and destroy old ones, we cycled through golf balls. This meant there are only 10 golf balls in total in the game. We created these ball at the beginning of the game and when you hit the ball with index 9, the ball with index 0 will come back.

But since we only changed its transform.location, there were still forces on the ball if the player went through all the balls very quickly. Since we were play-testing, there was no time to rewrite the script, we just changed the number of balls from 10 to 100000000 in the editor, thinking there is no way a player could go through 100000000 balls that quickly.

We hit the play button, without thinking twice. But apparently, initializing 100000000 game objects in a for-loop at the beginning of the game is a bad idea ...

Unity stopped responding.

We were thinking: "Cool, I'll just have to reopen Unity and change the number back."

But we forgot to save the scene before entering that huge number...

So all the modifications we made that night in the scene was gone...
### Producing (CONT)
All was not lost. We integrated again on Wednesday to revert all the changes we made on Tuesday. And we also integrated on Thursday to add more features like background, voice and more dialogue. At around 11:20 pm on Thursday, when we tried to integrate all the dialogue scriptable objects and voice to our main game, the game broke again because my teammates were using the older version of the event system (the one from last week) and we changed the system since then...

We spent 10-20 mins trying to fix this issue. This meant we only have 20 mins left to integrate. We have to make a hard choice, either we could put all the dialogue in so the player can play a full game without voice acting, or we could put the dialogue and voice acting for the first scene so the player can experience a shorter but complete game loop.

As the producer, it was a hard choice for me to make. Because both sides have spent a lot of time tonight working and both would like their stuff in the game. But I decided to go with the latter because a short snapshot of our game can provide people a better understanding of the game and what the game would look like once it is finished.

### Programming - The Ramp Is on Fire
We moved the golf ball's location around and didn't have time to recalibrate the boosting ramp. So in our demo on Friday, when our TA Adrian tested the game, the ramp boosted too much and he overshot the ball a lot.
### Lesson Learned
If something can go wrong, it will go wrong... So save files periodically.

Written on Oct 5, 2019.
{% include image.html img="week4-player-view.png" caption="Week4 Player's View"%}
## Week 5 - Things Are Finally Coming Together
With two weeks to go, we finally nailed down our core game loop. This week we got all the major elements integrated: story, putting, environment and some voice acting in the game.
### Producing
Since the organizational changes, we made last week worked, we again play-tested our game on Tuesday night and integrate it on Wednesday and Thursday night.

Because our game is dialogue-focused, once we got the dialogue system set up the game would work decently. So this week we saw all the previous debugging and coding efforts finally paid off (special thanks to our lead programmer Carter). We also added a chat history on the sides of the player, so that the player can see the previous chat.

### Programming - The Ramp is Never On
Remember that in week 3 we added a ramp？And in week 4 the ramp makes the player overshot a lot? This was actually kind of wired because in week 3 the ramp would not cause as much overshooting as it did in week 4. So this week we try to solve that problem by recalibrating the ramp and the ball's landing location on the board.

I spent the entire evening with a headset on in our VR game while Carter tweaked parameters for the ramp. Each time he tweaked something, I would the ramp and see where the ball lands. And each time we do that, we would convince ourselves that we are almost there, just a few more tweaks to go.
{% include image.html img="week5-recalibrate.gif" caption="Recalibrating the Ramp"%}

After a while, we were a bit frustrated because no matter how we tweak the parameters, the ramp would always overshoot. Wait a minute, no matter how we change the parameters ... the outcome would not change... it could only be ... but that's impossible ...

Yep, the ramp's collider was never turned on. The collider that was supposed to detect and boost the ball, the collider that we thought we were changing was never on. We must have turned it off during some testing and forgot to turn it back on. Because it was off, it had absolutely no effects in the game. And we just spent about an hour trying to "fix" it...

When we turn the collider on, everything worked decently. In our demo on Friday, our guest, a naive play-tester, seemed impressed by our game, especially how easy the putting feels.

### Lesson Learned
Once you eliminate the impossible, whatever remains, no matter how improbable, must be the truth.

Written on Oct 11, 2019.

## Week 6 - Release
This is our final week to work on the game.
### Producing
After play-testing the game on Tuesday, we listed 10-12 additional features and improvements we wanted to add to the game. Our biggest challenge this week was getting all the voice and dialogue lines in. As I have said before, once we got the main dialogue system working, it would just be a matter of click and drag all the files in. But since we were trying to create a funny dating simulator, we have a long story (consisted of 7 short stories with branches). It took us a long time to put all the dialogue lines and its' corresponding voice acting in.

At around 9:30 pm on Thursday, we managed to get the whole game working (without voice acting). I play-tested the entire game while our writer Gus was putting voices into the scriptable objects for each dialogue. Surprisingly, because we had too many jokes and stories, it took me a good 20-30 minutes to finish the entire game. The version we had right now would be our last-known-good in case things went south.

We finished adding all the voices acting in at around 10:50 - 11:00 pm, about one hour before the deadline. Then, things went south.
### Programming - The Ramp Broke, Again
The programming section of this article was created to talk about the technical challenges we faced during the game development. But I just realized almost all of them are actually about the ramp.

At around 11:00 pm, one hour before the deadline, we decided to recalibrate the ramp (again). This was because we added a tutorial to this game. The tutorial would ask the player to shoot the far left and far right of the board, so that players would know how to control the putting. But, currently, shooting to the side would cause a bug on the ramp, making the golf ball never land on the board. We never notice this problem last week because we did not add the tutorial until this week. So with one hour to go, we started debugging.

Carter and I started our classic duel: He would tweak different parameters on the ramp and I would be in the headset hitting the golf ball and giving him feedback. But we encountered the same problem: no matter how we tweak the parameters, the boosting effect would not be activated for all the balls landing on the far sides of the ramp.

We checked the collider, yes, it was on.

At around 11:45 pm, the atmosphere was tense. On the one hand, hitting the ball up through the ramp was our core game mechanics, we have an obligation to make it work. On the other hand, we had no idea whether we could solve this bug or not.

At 11:50 pm, we found the bug. It was one line of code in the ramp's script that narrowed the range of checking collision. After we simply commented it out, things worked beautifully.

On Friday, we presented our game to the whole class. Even though we still had some problems with the putting, the play-test went well.

In hindsight, I made a mistake here. I should have built the game after we added all the voice acting and before we started debugging the ramp. This is because our last-know-good was the version built around 9:30 pm. It did not have all the voice acting in. Had the debugging effort failed, and the game fails to compile before midnight, all the effort of recording the voice acting and adding it to the game would be lost.

### Lesson Learned
Last-Known-Good is your friend.

<div class="iframe-container"><iframe src="https://www.youtube.com/embed/nhujQxwyqC4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><br>

## Credits
This is my first time working on a game as producer. It is really a learning experience for me. I am very grateful to have a supportive team. I'd really like to give a shout-out to our programmer Carter Williams, our writer Gus Saalfeld and our artiest Angelina Shi. This game would not be possible without their's and all our teammates contribution.
