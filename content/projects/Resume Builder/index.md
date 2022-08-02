---
title: Resume Builder
date: "2022-08-01"
featuredImage: './cat_circle.jpg'
template: blogtemplate
parent: projects
---

## **Background**
If you want to learn more about how this project came to be, please check it out [**here**](https://rayyungdev.github.io/blogs/resume-builder/)


## **Updates** :
  - ***(8/02/2022)***
    - Added a 'new' template to my list of resumes. It's basically the same as the old template, except that there's an added skill section per project . 
        - This might mean that I can remove the language.csv file because my new method seemingly has the same intention.   

## **Future Updates**
- Finish main.py
    - call my script from command line
- ~Implement language.csv details~
    - See update from ***8/02/2022***

## **Ideas for Myself** 
   - Issues that bug me: 
     - First of all, I'm glad that my application works. However, admittedly, it isn't exactly working as intended and this might be due to my literal lack of experience. This stems from the `any()` function from python, which is what I'm currently using to pull the experiences that are most related to my tags. This means that it's currently just pulling any of my experiences that contain at least 1 of my keywords. Instead, I wish it would pull the N-most relatable experiences. At the moment it's hard to tell given that I don't have a huge variety of experiences, so that's limited. 
       
   - Applying Machine Learning Techniques 
     - I briefly discuss this in my blog post, but I would love to apply some word clustering algorithms into this application, especially now that I've attached 'skills' to my dataset. For instance, instead of me telling my program to look for specific experiences that use 'programming', My key tag is something like 'software developer'. Instead of looking for exact matches in my tags, it'll find the tags (and maybe even combination of tags) that software developers generally use. And like what I had originally wanted, it'll be sorted through rank.  
     - I would also like to apply text generation algorithms that specifically apply to resume building. A friend of mine recently introduced me to something called rezi.ai, a site that uses A.I to build resumes. According to their site, they use the GPT-3, a transformer model, from Open AI, to help formulate details in a resume. 

# Link to GitHub Repository --- [**Here**](https://github.com/rayyungdev/resume_builder)  