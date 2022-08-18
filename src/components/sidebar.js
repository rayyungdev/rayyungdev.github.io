import React from 'react'
import { graphql, useStaticQuery, Link}  from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import resume from '../img/resume.pdf'

const Sidebar = () => {
    const data = useStaticQuery(graphql`
        query ContactQuery {
            site {
                siteMetadata {
                    social {
                        github
                        linkedin

                    }
                }
            }
            interview: markdownRemark(frontmatter: {parent: {eq: "interview"}}) {
                fields {
                  slug
                }
            }
        }
    `)

  return (
    <div className='sidebar'>
        <div className='sidebar-text d-flex flex-column h-100 justify-content-center text-center'>
            <StaticImage
                src = "../img/profile.jpg"
                alt = "Image"
                className='mb-4 p-3 mx-auto w-75 rounded-circle'
                imgClassName='d-block bg-primary img-fluid rounded-circle mb-4 p-3'
                aspectRatio={1}
            />
            <h1 className='font-weight-bold'> Raymond Yung </h1>
            <p className='mb-2 font-weight-bold'>
                MSEE from Drexel University 2022
            </p>
            <p className='mb-2 font-weight-bold'>
                Aspiring Software Dev and Data Engineer
            </p>
            <p className='mb-1 font-weight-bold'>
                Contact: 
            </p>
            <p className='mb-1 font-italic'>
                Raymond.Yung@drexel.edu
                </p>
            <div className = "d-flex justify-content-center mb-5"> 
                <Link 
                    to = {`https://www.linkedin.com/in/${data.site.siteMetadata.social.linkedin}`}
                    className = 'btn btn-outline-primary mr-2'
                >
                    <FontAwesomeIcon icon={faLinkedin} />
                </Link>
                <Link
                    to = {`https://www.github.com/${data.site.siteMetadata.social.github}`}
                    className = 'btn btn-outline-primary mr-2'
                >
                    <FontAwesomeIcon icon = {faGithub} />
                </Link>
            </div>
            <div className="d-flex justify-content-center mb-5">
                <a href = {resume} className='btn btn-lg btn-block btn-primary mt-auto'> My Resume </a>
            </div>
            <div className="d-flex justify-content-center mb-5">
                <Link to = {'https://rayyungdev.github.io/interview-bot-react/'} className='btn btn-lg btn-block btn-primary mt-auto'> Interview-Bot Discord </Link>
                {/* <Link to = {`${data.interview.fields.slug}`} className='btn btn-lg btn-block btn-primary mt-auto'> Interview FAQ's </Link> */}
            </div>
        </div>
    </div>  
  )
}

export default Sidebar