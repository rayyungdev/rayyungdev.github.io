import React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import Header from "../components/header"

const about = () => {
  return (
    <Layout>
        <Header location = 'About Me'/>
        <div className = 'container bg-white pt-5 mb-2'>

            <div className="container bg-white pt-5">
                <div className="row">
                    <div className="col-sm-10">
                        <h2 className="mb-4 font-weight-bold text-center"> Recent Drexel Graduate and Aspiring Software Dev! </h2>
                        <StaticImage 
                            className="img-fluid float-left w-50 mr-4 mb-3"
                            src="../img/about.jpg" 
                            alt="Image"
                            quality={100}
                        />
                        <p className="m-3 font-weight-bold">
                            Hi there and welcome to my blog!
                        </p>
                        <p className="m-2">
                            My name is Raymond Yung. I graduated Drexel University with both my Masters and Bachelors in Electrical Engineering. Despite what my degree suggests, my hope is to pursue a career in Software Development and Data Engineering. In fact, the reason why I even pursued my masters in Electrical Engineering was so that I could learn more about machine learning! Because of this, I have a lot of experience with both Python and Matlab. 
                        </p>
                        <p className="m-2">
                            I created this blog as a means of furthering my own software development skills. Admittedly, I don't know that much about web development which is why this site doesn't look that great, but hey, it's a start. 
                        </p>
                        <p className="font-weight-bold">
                            I'd like to thank my friends for the encouragemnt on my journey and a special shoutout to my accountability-buddy Anshul Kharbanda who is always wiling to lend his expertise!
                        </p> 
                    </div>
                </div>
            </div>
            </div>
    </Layout>
  )
}

export default about