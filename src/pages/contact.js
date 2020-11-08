import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import get from 'lodash/get'
import Layout from '../components/layout'
import Img from 'gatsby-image'
class ContactPage extends React.Component {
    render(){
        const siteTitle = get(this,  'props.data.site.siteMetadata.title')
        const contact = get(this,  'props.data.contentfulContactPage')
        return (
            <Layout location={this.props.location}>
              <Helmet title={siteTitle} />
                <div>{contact.headline}</div>
                <div>{contact.tagline}</div>
                <div>{contact.emailHeader}</div>
                <div>{contact.emailDescription}</div>
                <Img fluid={contact.emailIcon.image.fluid}/>
                <div>{contact.email.value.value}</div>
                <div>{contact.linkedInHeader}</div>
                <div>{contact.linkedInDescription}</div>
                <Img fluid={contact.linkedInIcon.image.fluid}/>
                <div>{contact.linkedIn.value.value}</div>
                <div>{contact.newsletterHeader}</div>
                <div>{contact.newsletterDescription}</div>
                <Img fluid={contact.newsletterIcon.image.fluid}/>
                <div>{contact.faqHeader}</div>
                <Img fluid={contact.faqImage.fluid}/>
                <div>{contact.socialMediaHeader}</div>
                <div>{contact.socialMediaDescription}</div>
            </Layout>
        )
    }
}

export default ContactPage

export const pageQuery = graphql`
  query ContactPageQuery {
    site {
      siteMetadata {
        title
      }
    }
    contentfulContactPage {
        headline
        tagline
        emailHeader
        emailDescription
        emailIcon {
          image{
            fluid (maxWidth: 100, maxHeight: 100) {
              ...GatsbyContentfulFluid
            }
          }
        }
        email {
          value {
            value
          }
        }
        linkedInHeader
        linkedInDescription
        linkedInIcon {
          image{
            fluid (maxWidth: 100, maxHeight: 100) {
              ...GatsbyContentfulFluid
            }
          }
        }
        linkedIn {
          value {
            value
          }
        }
        newsletterHeader
        newsletterDescription
        newsletterIcon {
          image{
            fluid (maxWidth: 100, maxHeight: 100) {
              ...GatsbyContentfulFluid
            }
          }
        }
        faqHeader
        faqImage {
          fluid (maxWidth: 100, maxHeight: 100) {
            ...GatsbyContentfulFluid
          }
        }
        socialMediaHeader
        socialMediaDescription
      }
  }
`