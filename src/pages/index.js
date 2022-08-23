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

  Let's move everything so that we can make our homepage ....
     - Recent Project
     - Recent Post
*/


const Home = ({data}) => {
  const blogs = data.blogs.nodes
  const projects = data.projects.nodes 

  return (
    <Layout >
      <Header location = 'Home'/>

      <div className = 'p-0 mb-2'> </div>
      <div className = 'container bg-white pt-5 mb-2'>
        <div>
          <div className = 'py-1 mb-1 bg-secondary'> 
            <h1 className = 'text-light font-weight-boldish text-center' > Recent Project </h1>
          </div>
          {projects.map(post => {
            const title = post.frontmatter.title || post.fields.slug
            const img = getImage(post.frontmatter.featuredImage)
            return(
              <div className="row blog-item pb-5">
                <div className = 'col-sm-4'>
                  <GatsbyImage 
                    className="img-fluid mb-4 mb-md-3"
                    image={img}
                  />
                </div>
                <div className="col-sm-7 position-relative">
                  <h3 className="text-md-left px-md-3 mb-2 bg-white font-weight-bold"> <u>{title}</u></h3>
                  <div className="d-flex mb-3">
                    <small className="mr-2 text-muted">{post.frontmatter.date}</small>
                  </div>
                  <p>
                    {post.frontmatter.description}
                  </p>
                  <p className = "fixed-bottom-most"> 
                    <Link to = {post.frontmatter.github} className="btn btn-link btn-outline-dark mt-4 mr-2" > <FontAwesomeIcon icon = {faGithub} /></Link>
                    <Link to = {post.fields.slug} className="btn btn-link btn-outline-dark mt-4" >Read More</Link>
                  </p>
                </div>
              </div>
            )
          })
          }
        </div>
      </div>
      
      <div className = 'container bg-white pt-5'>
        <div> 
          <div className= "py-1 mb-1 bg-secondary">
            <h1 className = 'text-light font-weight-boldish' style = {{textAlign : 'center'}}> Recent Blog Post </h1>
          </div> 

          {blogs.map(post => {
            const title = post.frontmatter.title || post.fields.slug
            const img = getImage(post.frontmatter.featuredImage)
            return(
              <div className="row blog-item pb-5">
                <div className = "col-sm-4"> 
                  <GatsbyImage 
                    className="img-fluid mb-4 mb-md-3"
                    image={img}
                  /> 
                </div>
                <div className="col-sm-7 position-relative">
                  <h3 className="px-md-3 mb-2 bg-white font-weight-bold text-md-left" > <u>{title}</u></h3>
                  <div className="d-flex mb-3">
                    <small className="mr-2 text-muted">{post.frontmatter.date}</small>
                  </div>
                  <p>
                    {post.frontmatter.description}
                  </p>
                  <p className = 'fixed-bottom-most'>
                    <Link to = {post.fields.slug} className="btn btn-link btn-outline-dark mt-4" >Read More <i className="fa fa-angle-right"></i></Link>
                  </p>
                </div>
              </div>
            )
          })
          }
        </div>
      </div>

    </Layout>
  )
}

export default Home
export const Head = () => <Seo title="Home" />

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    blogs: allMarkdownRemark(
        filter: {frontmatter: {parent: {eq: "blog"}}}
        sort: { fields: [frontmatter___date], order: DESC }
        limit : 1) 
        {
        nodes {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
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
    projects: allMarkdownRemark(
      filter: {frontmatter: {parent: {eq: "projects"}}}
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 1) {
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