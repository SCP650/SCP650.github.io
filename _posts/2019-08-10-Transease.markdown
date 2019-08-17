---
title:  Transease

date:   2019-08-10 14:37:52 -0400 #date this page is written

categories: projects 2018 spring #project folder, beginning year and season
tags: All Entrepreneurship
#tags options: Highlight Event_Planning Entrepreneurship Leadership Game_Design Marketing Negotiation Video_Editing Web_Design

start-season: "2018 Spring"

assetLoco: /images/projects/Transease
coverPic: /cover.png
carousel:
  - image: /bg1.png

---
In my third year in high school, we have a new teacher named Mark coming from England. But the problem is that he cannot speak Chinese at all. So, when he needed to rent a house or talk to the locals, he needed us to help translate.

This got me thinking. Wouldn’t it be so nice if every time people need translation, somebody can just magically show up and help them?

Being inspired by Uber, I come up with a real-time human translation app that can achieve just that at a low price. By working with my friends Tony Lian and Yujie Wang, we came up with a prototype and won the world top 50 in the 2018 Microsoft Imagine Cup Big Idea Challenge. We are also the only team from mainland China that receive such prize in 2018.

{% include image.html img="award.png" caption="Don't ask my why they put my last name first. I have no idea." %}

## Table of Contents
{:.no_toc}

* Table of Contents
{:toc}

## Problem

I have been to 17 different countries, but I can only speak two languages. Hence, trying to communicate across different languages have always been a problem I wanted to solve. Currently, people tend to use free online translation apps like Google translate or hire an expensive translator. The problem is these translation apps are inaccurate. Here is one example. Even though the Chinese “能穿多少穿多少” is the same, it actually has totally different meanings in different settings. In the following case, it actually means “It’s hot, wear as little clothes as you can.”
{% include image.html img="Translation_Error.jpg" caption="Translation Error"%}
As for hiring translators, well, it’s way too expensive. So, I want to see if there is a middle ground that can make a translation by human affordable.
## Solution

Uber fascinates me because its core idea is so simple, yet it solves a huge problem in our society. If Uber can connect available drivers with people who need rides, why couldn’t we connect available translators with people who need translation service?

### One User Story

Jieke is a Chinese traveler visiting the US. He wanted to talk to a local shop owner for about 10 minutes about their business, but he cannot speak English. So, he opens our app Transease in his phone and clicks “Translate”.
{% include image.html img="1.png"%}<br>

Our system will search for whoever is available and connect them with Jieke

Let’s say on the other side of the globe, an American exchange student Jack just finishes his class in a Chinese university. He can speak English and Chinese and have about 10 minutes available. He can open our app and click “start receiving jobs”.
{% include image.html img="2.png"%}<br>

Our system will then connect Jack with Jieke, and let Jack translate for Jieke via voice call. After the service, Jack will receive a small fee from Jieke. And , Jieke can rate his experience with Jack and continue his travel until he needs translation service again.
{% include image.html img="3.png"%}<br>

### Prototype

To make sure this will actually work, I came up with an MVP. I asked 6 friends who can speak Chinese and English to help out. I put their contact info in a table showing their available timeslots. I also recruited two foreign teachers who cannot speak Chinese very well to be our test subjects. Basically, in the MVP, whenever the subjects need translation service, he or she can look up the table and call the number that is available during that timeslot. The person who is available will translate for them via the phone call.
{% include image.html img="Call_Table.png" caption="Call Table"%}<br>
This MVP is like a proof of concept to show translation over voice call actually works. We received many feedbacks. And we try to address most of the problem in our first prototype.

To avoid the high costs of developing apps for different platforms, our first prototype is a website that is optimized for mobile users. It has login and voice calling features. We added more features such as ratings and video chat as we went. This prototype helped us win the Big Idea Challenge In 2018 Microsoft Imagine Cup.

## Potential Development

In the middle stage of our project, I realize a more significant problem. Our app can easily be replaced if the translation algorithm is good enough. And since people are used to using free translation apps, how can we encourage them to spend a few more bucks to use a human translator?

If I have more time, these are the areas I would try to improve. First, I would like to hold another user testing this time asking people to actually pay for the service. Then, through more iterations, I would like to improve our app’s UI design and a better payment system. Moreover, in the future, if the app does work, we will have the recording of millions of minutes of translation. This amount of data may help us train an algorithm that can outperform most of the free translation service.

But sadly, we stop the project after we parted ways to different colleges.
{% include image.html img="bg1.png"%}<br>

## Credits

The actual app development is all done by my friend Tony Lian and Yujie Wang. Tony is responsible for back end and Yujie for front end.

Other than coming up with the idea, my role in this project is providing feedbacks across iterations and making sure the scope of our project is working. I am also responsible for user testing, market research, surveys, and pitching the idea to Microsoft.
