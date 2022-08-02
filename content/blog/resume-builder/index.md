---
title: Resume Builder
date: "2022-08-01"
description: I am taking a short hiatus from building my interview-bot in order to focus on developing my resume and actually submit job applications. However, I find myself once again being overwhelmed because not only am I bad at interviews. I am also bad at organizing my own resume. So instead, I'm going to create a program to help me. 
featuredImage: './bernie.jpg'
parent: blog
---


<h2 class="font-italic font-weight-bold" align="center"> What is it this time...? <hr color="blue" width="70%" align="center" style="margin: auto auto auto"> </h2>  

Recently, it has come to my attention that I've been spending too much time trying to build my chatbot and not enough time on fixing resume and applying to jobs. Remember, I got started on these projects so that I would have something to show for on my resume. Now that I have a working website and a working model for my bot (_although I haven't integrated it yet..._), I should really now focus on fixing my resume. 

### _10 Minutes Later..._ ###

<figure align='center'>
<img src = './bernie.jpg'/>
<div></div>

You see, I have gotten a lot of advice on how to fix my resume to find the ***perfect job***. My current resume (which can be found on my side bar) isn't particularly outstanding. As my friend Xi has put it: 
<figure align='center'>
<img src = './friend.jpg'/>
<div></div>

In other words: **it's ugly**  
  
Furthermore, I was told I should tailor my resume to the different roles I'm going to apply to. So if I'm applying to a web development role, I try to present only my web development projects (_which really is just this blog..._). Now upon realizing that I have to create multiple resumes that have only small changes to each one, I find myself being overwhelmed with too many options! Are my previous job experiences more important? Which projects should I prioritize? Recent ones, most relevant ones? There's just so many. Now how many different resumes am I supposed to create? Ahhhh!!!  

Anyway, now that I understand the basic aspects of web-development, I wondered why isn't there something like a static-site-generator for resumes?. All resumes generally have practically the same layout, right? They all have headers, an education section, whatever. All I would then update is the experience sections, right? But... now that I think about it, even it something like that were to exist, it wouldn't really be tailed to my own experiences... 
  
Long story short, I'm taking a break from trying to integrate my chatbot to create my own resume building program. I figured, trying to integrate these things is gonna take a bit and I really want to apply to jobs. Also this resume builder shouldn't take too long since I won't need to integrate that to my blog. Once it's done, it's done. My hope is that it'll streamline future job applications. 

<h2 class="font-italic font-weight-bold" align="center"> Building the Builder <hr color="blue" width="70%" align="center" style="margin: auto auto auto"> </h2> 

Like I did with my chatbot, I'm going to think about this in two parts:  

1. How am I going to structure my data
    - This seems more important since I need to know exactly what data I'm pulling and how I might go about that  
  

2. Building the actual program
    - Well, seems less important at the moment because I at least know what my end result will be. 
  
#### **Part 1:** Structuring the Data  
The idea for this project is also inspired by what I learned previously about intent classification. While I don't plan building a learning model for it... _yet_, I think a good way to go about this is by tagging my projects and experiences with intents. Speaking of projects and experiences, I've been told that experience is more important than personal projects, but relevant projects beat random experience, and relevant experience triumphs over all. Plainly speaking, we have an inherent hierarchy to utilize!  
So my plan is this: I'm going to create a csv file where each row represents a project/job that I've done. The row is then divided into the following columns: 
1. Start Date
2. End Date
3. Project/Job Title
4. Project or Job 
5. Relevant tags
6. Company Name (will be empty if it's a project)
7. Contains the details of the project/job
    - Might separate these details into their own columns
    - Might think about using intent classification in the future to classify the details to the intent (will only work if I have a multitude of descriptors) 
  
Alright... So in hindsight, I think I might've oversimplified my solution a bit. After looking at my friend's resumes, I realized that I completely glossed over other sections, like *Skills*, *Certificates*(although I have none... oops), and *Relevant Coursework*. I forgot that these sections (for the most part), can also be tailored to the job description. This might be the imposter syndrome talking, but I don't think I've developed enough skills to really pick and choose which ones I can throw on there, but hey, I gotta start thinking about future me, right? I am sure future me will be a whole variety of skills for future career aspirations. This is for you Future Ray!  
 
Anyway, let's do this. I'm going to create a Skills CSV. It will contain the following columns:  
  Programming Languages, Software & Tools, Technical Skills, and Certificates. 
- If I find out that I actually have "too many" skills and I might try to create another intent classification model to identify the most relevant skills. 
- My friend Trung suggested that I add some of my relevant coursework for my technical skills. 

#### **Part 2:** Building the program
Okay, I have successfully created my program and now I would love to get into some discussion about how I went about this. That being said, I'm going to have to update my recent projects too! Woo!  

Building this application was a fun experience and I'm glad I took the time to think about how I was structuring my data. I ended up having to create 4 different csvs, where each csv contained different information for each subsection in my resume. I could have hard coded some of the basic information like my name and education but I figured maybe someone likes my idea and wants to try it out?   
  
Anyway, back to my thought processing when creating this application:  
I started this by trying to figure out how to design a resume through Python. There are a lot of options out there, like using a LaTeX template then trying to figure out how to populate the necessary information python, but I figured that was going to get too complicated too quickly, because I thought I would have to manually design a LaTeX template first then find the right libaries to input the correct information. Instead, I opted to use FPDF2, a pdf library for python. I didn't think the aesthetic appeal mattered that much in regards to my resume, especially since this is my first template. If I focused too much making it perfect, I probably would have called it quits. So thus template_1 was born. You can view my original template layout [***here***](https://github.com/rayyungdev/resume_builder/blob/main/template_1.pdf)  
  
  
Once I confirmed that my template was completed, I had to make sure that I knew how to input the necessary data, which you can read about in my comments. This is important because the next step was what I called the builder, which is an object class that pulls the necessary the information from the different csvs. I'm not going to go into too much detail because that's meant for the actual project section. Instead, I'm going to talk about things that I don't like about my project, future fixes, and unaccomplished objectives.  
  
##### *Things I don't like:*  
I hate that I have to use 4 different csvs and furtheremore I hate how I laid them out. Don't get me wrong, I'm glad that it works, but it is definitely not the optimal solution. Remember, I plan on using this program in the future as I continue down my career path. This means that every time I learn something, I will have to manually update these microscopic cells in excel. Sure, sure I can create python functions/scripts whatever, but either way I'm still going to hate it. This now lets me segway into:   
  
##### *Future Fixes:*
So from before, I hate that I have to use 4 different csvs. What I hope to accomplish instead are two things: 
1. Convert my csvs into YAML files and create a YAML method
2. Create a RESTFUL API   
Admittedly, I don't know too much about YAML, but I just love how YAML files look. They look like they can be more easily organized and most impressively, YAML files can act almost as a pseudo python class or at least I think so from what I can gather from the docs (https://pyyaml.org/wiki/PyYAMLDocumentation#constructors-representers-resolvers) (*Thank you Andy for suggesting this*). Also, I would just love to have another method to add onto my ***list of experience***.  
Regarding the RESTful API, I feel like this program would really benefit from it. It would allow me to update the different details of my jobs whenever I want, fix typos quickly, and whatever. Plus, I also get to add "designed an API" onto my list of skills too. I'm sure there's more benefits, but it's 1:09 AM and I'm tired as hell.  
  
##### *Unaccomplished Objectives:*
First of all, I think my resume looks pretty decent. However, I haven't fully implemented my skills section. I'm missing key technologies that I've utilized over the years, like frameworks, libraries, toolboxes, etc. This is all the data contained in _languages.csv_. I don't really have a good reason why it hasn't been included yet... really I'm just tired and I'm moderately satisfied with how my resume looks at the moment. But who knows, I might be more sane when I wake up tomorrow.  
Also, I have not built a classification model (**yet**). Originally, I was thinking about creating a classification model that would pull the most relevant skills according to what your input tags are, but it also had also occured to me that well, I don't have that many skills to go picking and choosing. That being said, I haven't given up on this idea, but it does require more thought.  

## Good Night and stay tune for future updates!