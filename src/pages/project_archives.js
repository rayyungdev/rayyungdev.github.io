import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/Layout"
import {getImage, GatsbyImage} from "gatsby-plugin-image"
import Seo from "../components/seo"
import Header from "../components/header"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
/*
  We're going let's consolidate... just move the carosel and side bar here b.c the caraousel and the blog list are only used for the index anyway 


  ** Let's remove the RECENT PROJECTS section ....
      - Let's replace it with something else like... 
*/


const project_index = ({data}) => {
  const projects = data.projects.nodes
  return (
    <Layout >
      <Header location = 'Projects' /> 
      <div className = "container bg-white pt-5 mb-2 py-2"> 
            <h4 className = 'text-center'> This section contains the projects that I discussed in my blog posts. You can view the complete list of all my projects, including those that I worked on in school,on my github </h4>
      </div>
      <ol style={{ listStyle: `none` }} className = 'container bg-white pt-5'>
        {projects.map(post => {
                    const title = post.frontmatter.title || post.fields.slug
                    const img = getImage(post.frontmatter.featuredImage)
                    return(
                        <div className="container bg-white pt-5">
                            <div className="row blog-item px-2 pb-5">
                                <div className="col-sm-5">
                                    <GatsbyImage
                                        className="img-fluid mb-4 mb-md-0"
                                        image={img}
                                    />
                                </div>
                                <div className="col-sm-7 position-relative">
                                    <h3 className="text-md-left px-md-3 mb-2 bg-white font-weight-bold">{title}</h3>
                                    <div className="d-flex mb-3">
                                        <small className="mr-2 text-muted">{post.frontmatter.date}</small>
                                    </div>
                                    <p>
                                    {post.frontmatter.description}
                                    </p>
                                    <p className = 'fixed-bottom-most'> 
                                        <Link to = {post.frontmatter.github} className="btn btn-link btn-outline-dark mt-4 mr-2" > <FontAwesomeIcon icon = {faGithub} /></Link>
                                        <Link to = {post.fields.slug} className="btn btn-link btn-outline-dark mt-4" >Read More <i className="fa fa-angle-right"></i></Link>
                                    </p>
                                </div>
                            </div>
                            <hr/>
                        </div>
            )})}
      </ol>
    </Layout>
  )
}

export default project_index
export const Head = () => <Seo title="RayYungDev Personal Blog / Project Archives" />

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    projects: allMarkdownRemark(
        filter: {frontmatter: {parent: {eq: "projects"}}}
        sort: { fields: [frontmatter___date], order: DESC }) {
        nodes {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            github
            featuredImage {
              childImageSharp {
                gatsbyImageData(
                  width: 300, 
                  height: 300,
                  quality: 100, 
                  )
              }
            }
          }
        }
    }
  }
`
