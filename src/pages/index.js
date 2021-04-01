import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import styled from 'styled-components'

import Layout from '../components/layout'

import SEO from "../components/seo"

const ContentPage = styled.div`
  padding:0;
  display:grid;
  grid-template-columns:1fr 2fr 1fr ;
  grid-template-rows:1fr 2fr 1fr;
  
`


const Title = styled.h1`
  font-family:'Avenir' ,sans-serif;
  color:white;
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 4;
  font-size:5rem;
  z-index:3;
  span{
    color:violet;
  }

  p{
    font-size:2rem;
    grid-column-start:2;
    grid-column-end:3;
    grid-row-start:3;
    grid-row-end:4;
  }
`

const IndexPage = () => (
    <Layout>
    <ContentPage>
        <SEO title="Home" />
        <StaticImage
            src= '../images/bg.jpg'
            layout='fullWidth'
            quality={100}
            style={{gridColumnStart:1 , gridColumnEnd:4 , gridRowStart:1 , gridRowEnd:4}}
            transformOptions={{object:'cover',grayscale:true}}
            />
        <Title>The Material that Highlights<br></br>The <span>Beauty,</span><br></br>For Centuries
        <p>from the best producers and companies in the world.</p>
        </Title>
      </ContentPage>
    </Layout>
 
)

export default IndexPage
