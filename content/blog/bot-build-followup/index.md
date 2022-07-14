---
title: Chatbot Model Complete
date: "2022-07-14"
description: Build-a-Bot Follow Up
featuredImage: './resume.jpg'
parent: blog
---
<h2 class="font-italic font-weight-bold" align="center"> Build a Bot Update! <hr color="blue" width="70%" align="center" style="margin: auto auto auto"> </h2> 

Alright, I am officially FINISHED with my first model. There's a lot of improvements to be made, but let me tell you my process.
First, I had to understand what my goal and objective, but you can read about that in my previous blog post, link [*here*]{https://rayyungdev.github.io/blogs/bot-builder/}. Once I figured out that I wanted to an intent classification model, I had to learn about how those models were built.   
   
Originally I wanted to replicate a paper, that claimed that CBoW-SVM learning model that uses fasttext embeddings. Unfortunately, I was not able to successfully implement that since I couldn't understand how to implemement CBoW with fasttext. After giving up on that, I found a model through kaggle, that I'll link [*here*](https://www.kaggle.com/code/hassanamin/atis-intent-classification-using-svm-and-spacy/notebook). 

Alright, before I tell you about that though, let me tell you about the dataset. Did you know that an interview question dataset that does not exist? Yea! Even though there's a bunch of interview prep guides out there, an interview question dataset does not yet exist. So I had to build on myself! I went through a couple of interview prep guides, looked through their question and judged their intent. I came out with like 150 questions, with a lot of repetition. Of those 150 questions, I had 30 labeled intentions. I know that's not a lot of questions, but once I have the bot running I plan on having people use it and also build upon that dataset. It's not much, but it's a start. 
  

Going back to the model, the original model from Kaggle uses an SVC model, but I found that I got better results using an SGD model. Of course, this might just be because of how small my dataset it, but yea, please help me build onto this dataset!

Actually, I'm getting ahead of myself. The next step now, is to implmement a chatbot that you can use on my site. It'll probably mean that I have to have a server running somewhere to keep my python model running... but we'll see when we get there! 

Here's a sneakpeak of my model working:

<figure align='center'>
<img src = './chatbot sneakpeak.jpg'>
<figcaption align = "center" ><b> Chatbot Sneakpeak</b> </figcaption></figure>  

## Stay tune for the next update! 