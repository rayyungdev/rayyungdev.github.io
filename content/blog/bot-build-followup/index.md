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

<h2 class="font-italic font-weight-bold" align="center">  July 28 2022 Update: <hr color="blue" width="70%" align="center" style="margin: auto auto auto"> </h2> 
I didn't want to create a whole new post for this update because I haven't yet accomplished what I wanted to get done. Instead, I wanted to provide some updates on ways I'm looking to integrate my bot to my post.  

But first, let's establish what I need to get accomplished: 
1. I need the script to constantly run on a separate server
    - This is because I need to set up my specific python environment, like the spaCY NLP encoder. 
    - It takes time to start up the bot (around 5 seconds) before you can actually communicate with it. 
2. Figure out if I need to create a chat interface using Python or Gatsby
    - If the chat function is built with Gatsby, then I'm constantly pulling data from my python server. 
    - If the chat funciton is built with Python, then am I just creating an entirely new site with Flask and hosting it on a separate site? Or am I just linking a component... 
3. Find a way to integrate my bot to my blog
4. Maybe find a way for outside users to help me update my question bank?
    - This might be where the RESTful API comes in... but eventually I want to continue stockpiling questions for my database so I can further develop my juvenile bot. 

Originally, I was looking into using a RESTful API with Flask because it seemed simple. It was moments later, as I was reading about RESTful when I discovered that I had no idea what I was even talking about. In case you don't know : RESTful is a fantastic API to use when you're just trying to obtaining organized and sorted data.  
As the docs from microsoft says: it's designed around _resources_. So for example, this might've been feasable if I was creating a way for people to pull specific word for word interview questions and answers. And if I was going to implement so that people can interact with it, then it would be easily overloaded since each message you send to the bot would be another POST request. Basically, it sounds like it sucks trying to get realtime data.    


Instead, a friend recommended that I look into Web Sockets. However, based on what I'm reading, this is not only more complex but poses more of a security risk. I'm still figuring out the minute details, but this seems like this might be it. Basically, this API is used for real-time applications like video games and chat applications, which is you know... what I'm trying to build!

Things I'm going to need to look into:   
- How do I create a Websocket with Python: 
    - [**Here's a quick link**](https://www.piesocket.com/blog/python-websocket#:~:text=WebSocket%20Client%20with%20Python&text=Create%20a%20new%20File%20%E2%80%9Cclient,did%20in%20our%20server%20code.&text=Now%20let's%20create%20a%20Python%20asynchronous%20function%20(also%20called%20coroutine).&text=async%20def%20test()%3A,build%20a%20WebSocket%20client%20connection.)
- Where should I look to host this websocket?
    - A friend recommended I look into [***serverless***](https://serverless.com)
- How should I implemenent my websocket with React
    - A quick google search gave me this [**link**](https://dev.to/muratcanyuksel/using-websockets-with-react-50pi).
- What are the risks and how do I minimize it? 

Anyway, thank you for reading and: 

## Stay tuned for the next update! 