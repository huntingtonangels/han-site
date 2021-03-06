import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import base from './base.css'
import Container from './container'
import Navigation from './navigation/navigation'
import Sock from './sock/sock'
import Footer from './footer/footer'

const Layout = ({location, children}) => {

    //const { location, children } = this.props
    const data = useStaticQuery(graphql`
  query FooterQuery {
    site {
      siteMetadata {
        title
      }
    }
    contentfulFooter {
      hanLogo {
        file {
          url
        }
      }
      descriptionAboutHan
      affiliationText
      damoreMcKimLogo {
        fluid {
          src
        }
      }
      mosaicLogo {
        fluid {
          src
        }
      }
    }
    contentfulContactInformation {
      email
      instagramLink
      linkedInLink
      mediumLink
    }
  }
`
)

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    return (
      <Container>
        <Navigation />
        <div style={{"margin-top": "60px"}}>
        {children}
        </div>
        <Sock />
        <Footer contentfulFooter={data.contentfulFooter} contactInfo = {data.contentfulContactInformation} />
      </Container>
    )
  }


export default Layout