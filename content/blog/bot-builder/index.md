---
title: Building the Chatbot Model
date: "2022-07-07"
description: In this post, I start my adventure to create an INTERVIEW ME chatbot so that I can have a robot bomb my job interviews for me. 
featuredImage: './resume.jpg'
parent: blog
---
<h2 class="font-italic font-weight-bold" align="center"> In the Beginning... <hr color="blue" width="70%" align="center" style="margin: auto auto auto"> </h2> 

The journey started because I suck at interviews. I find myself in a spiral of anxiety and imposter syndrome as I continously bomb my interviews. 
One weird quirk about me, is that although I feel humiliated, I feel even more motivated now to do something creative so that I can still prove to myself that I am a qualified "developer". 
So anyway, I just bombed an interview and it has reaffirmed my distaste for them. I am now reminded again of something that I originally wanted to do: ***create a chatbot to do the interview for me!***   
  
The basis of my idea comes from the believe that interviewers usually ask the same set of questions like, *"Tell me about yourself"* or *"How do you act in high pressure situations"*. There might be variations of this, but they all expect similar responses. So ya know... like **"Frequently Asked Questions"**. The original plan was going to just have a list of these questions and my answer to them in markdown, like my blogs. But you see, I don't want to do that because it takes away time from me actually working on the bot that I definitely want to have, so I'm skipping this step. I still have my list of questions and answers, but I'm not going to post it *yet*. 
  
<h2 class="font-italic font-weight-bold" align="center"> Getting Started <hr color="blue" width="70%" align="center" style="margin: auto auto auto">  </h2> 
<div class = 'font-italic justify-content-center' style="display:flex"> <small class = "font-weight-bold" align="center"> The purpose of this section is to organize my own thoughts on how I plan to go about this project. </small></div>  

I can think about this project as two main parts:  
1. Building the NLP Model for the bot
2. Implementing a chat feature in my site for users to interact with the bot

So for now, let's think about what building the model will take:  
- Figure out what model I will be using
- Gather the data to train my model on
- Once I figure out what model I'm going to use, I'll need to train it. 
    - Will involve preprocessing the data  
    
I originally thought I could create my own dataset where I would create my own answers for the FAQ's, but as I continued to working on it, but that led me down a path to nowhere as I didn't even have a model in mind. I had to do... _research_. 
<h2 class="font-italic font-weight-bold" align="center"> The Research <hr color="blue" width="70%" align="center" style="margin: auto auto auto">  </h2>
  
When I was first tried looking for an appropriate model, I thought I could use a question-answering model. I figured it was going to be straightforward given the name, that it could be trained if the model was given a enough questions and answers. But alas, this was not the case. It turns out the model is trained to understand contextual questions to identify necessary information in an article, which is not my goal at all... So back to the drawing board!

Instead of going into that direction, I decided to look into how chatbots work. They definitely use some sort of machine learning algorithm, right?  Well I stumbled upon this [***article***](https://medium.com/analytics-vidhya/models-for-conversational-ai-34312fe1f6d9) written by Srini Janarthanam. Here, Srini discusses 5 possible Conversational AI classes:   _Interactive FAQ, Form Filling, Question Answering, NL interface for Databases, and Dialogue Planning_.   
  
Did you catch that? **Interactive FAQ!** Is this what I needed to look into the whole time? I've gotten my hopes up once before, only for it to be torn asunder. So let's keep reading...    
> Frequently Asked Questions (FAQ) are usually a common part of business websites where all the frequently asked questions for customers are listed and answered. Instead of having customers go through the list and find answers to their questions, **Interactive FAQ model for chatbots allows users to ask questions in their own way, match customer question to the list of questions and then serve the prepared answer for the matched question.** This process enables customers to find answers quickly instead of having to go through a long list of questions. [_**--- Article by Srini Janarthanam**_](https://medium.com/analytics-vidhya/models-for-conversational-ai-34312fe1f6d9)
  
This... this might be it! Think about it, I'm assuming that different interviewers are asking same question with some variation. While the questions might be diferent, the prepared answer will be the same. **Awesome!**. 
  
Srini then discusses models that exist in this field, Single-vs-Multi turn, Intent-vs-Pattern Recognition, User-utterance, and Deeplearning seq2seq models. I'm not going to go through it all because I recommend that you read his article. Instead, I'm going to discuss which models seem the most releveant to my case and why. 
- Intent-vs-Pattern-Recognition / Intent Classification
    - My idea was to train a model by answering a lot of interview questions with the understanding that some answer to these questions are going to be the same, for example:  
      
       > _Why do you want to work at this company?_  
       > _Why do you want this job?_ 
       My answer would be the same for both:   
       _**"I need money and you guys seem awesome"**_  
         
       Anyway, this model works by mapping **questions with answers** to an **intent**. So my previous example would be 1 intent with 2 datapoints (questions) associated with it. 
          
         The goal of the model is to **learn how to classify a new unseen question from a future interviewer as one of the intents**, as Srini succintly puts it, *Once an intent is identified, the answer can be served*

- Seq2Seq Single-Turn FAQ Model
     - Admittedly I'm not compleltely confident that this model is applicable. seq2seq is a deep learning model and from my understanding of it, it will A LOT of data. You see it a lot with chatbots because the goal of a chatbot is to accept an input as a text and regurgitates a text back. If we want to get into more detail, the sentence is encoded into value, math is done to the value to take context into account, then the calculations are fed into a decoder which is the chatbot's response. In my case, I don't really know how I can implement it. And as I'm looking more into seq2seq models, it seems like it requires a large dataset.
       
       I'm keeping this on here because it might be something I look into later.... 
<figure align='center'>
<img src = './spongebob-dance.gif'>
<figcaption align = "center" ><b> We're getting somewhere!</b> </figcaption>  

    

<h2 class="font-italic font-weight-bold" align="center"> Gathering Data <hr color="blue" width="70%" align="center" style="margin: auto auto auto">  </h2> 
<div class = 'font-italic justify-content-center' style="display:flex"> <small class = "font-weight-bold" align="center"> In this section, I'm going to look into the specifics of the model so I can create a suitable dataset for it</small></div>   
   
At this point, I'm pretty set on using intent classification to create my chatbot. So now let's think about the data. (There won't be any code for this post, just a lot of brainstorming the code will in my project section because ya know I have to have something there at some point).   
  
  I imagine that the data would look something like this: 

| Intent                                   | Question                                                                                    |
| :--------------------------------------- |:-----------------------------------------                                                   |
| Why do you want to work at this company? | I need money and you guys seem awesome                                                      | 
| Why do you want this job?                | I need money and you guys seem awesome                                                      | 
| Tell me about yourself                   | I have a lot of IT experience and I hope to break out in the development world              |
| Walk me through your resume              | I have a lot of IT experience and I hope to break out in the development world              |

  
Now going through all of this, how should I go around gathering my data? So this is probably going to suck because I think going to have to do this manually. Remember, my theory is that there are limited answers to interview questions (_unless they ask me techinical questions..._). Once I gather the questions, I'm going to have to group them myself and give each group a unique value that represents intent. Finally, I'll go through all the intents, pull a random question from it, then finally answer that question. That answer will be my response for the questions in that group. Hopefully, this isn't going to be that bad. 