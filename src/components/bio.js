/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import { rhythm } from "../utils/typography"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.png/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  const { author, social } = data.site.siteMetadata
  return (
    <div
      style={{
        display: `flex`,
        marginBottom: rhythm(2.5),
      }}
    >
      <p
       style={{
        fontFamily: `Proxima Nova, sans-serif`,
        fontWeight: "normal",
        color: "#828282",
        fontSize: "0.875em"
      }}
      >
      Hi I'm Parth, and I'm currently an Experiential Learning Manager at <a href={`https://lambdaschool.com/`}>Lambda School</a>. 
      My previous work experience includes teaching high school math and computer science, along with developing computer science
      curriculum for Codecademy and GitHub. I strive to create engaging lessons that focus on student discovery and 
      most importantly, fun. Below are samples of some lessons and curricula that I've developed and taught.
        {`  `}
        <a href={`https://twitter.com/${social.twitter}`}>
          Follow me on twitter!
        </a>
      </p>
    </div>
  )
}

export default Bio
