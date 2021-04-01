import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import styled from 'styled-components'


import SEO from "../components/seo"

const ContentPage = styled.div`
  padding:0;
  min-height:100vh;
  display:grid;
  grid-template-columns:1fr 2fr 1fr ;
  grid-template-rows:1fr 2fr 1fr;
  @media(max-width:600px) {
    grid-template-rows:1fr 300px 1fr;
  }
  
  p{
    font-size:2rem;
    grid-column-start:2;
    grid-column-end:3;
    grid-row-start:3;
    grid-row-end:4;
    margin:0;
    z-index:3;
    font-family:'Avenir' ,sans-serif;
    color:white;
    font-size:3rem;
    @media(max-width:978px) {
    font-size:2rem;
    }
    @media(max-width:650px) {
    font-size:1.2rem;
    }
    @media(min-width:1500px) {
    font-size:3rem;
    grid-row-start:2;
    grid-row-end:3; 
    align-self:end;
  }
  @media(min-width:1970px) {
    font-size:3rem;
    grid-row-start:2;
    grid-row-end:3; 
    margin-bottom:10rem;
  }
  @media(min-width:2180px) {
    font-size:3rem;
    grid-row-start:2;
    grid-row-end:3; 
    margin-bottom:20rem;
  }
  }
`

const Menu = styled.menu`
    grid-column-start:3;
    grid-column-end:4;
    grid-row-start:1;
    grid-row-end:2;
    font-family:'Avenir' ,sans-serif;
    color:white;
    h2{
      font-size:1.5rem;
      @media(max-width:978px) {
    font-size:1.1rem;
    }
    @media(max-width:678px) {
    font-size:0.8rem;
  }
    @media(max-width:442px) {
    font-size:0.7rem;
  }
    }
`


const Title = styled.h1`
  font-family:'Avenir' ,sans-serif;
  color:white;
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 4;
  font-size:5rem;
  font-weight:700;
  z-index:3;
  justify-self:start;
  padding:0;
  margin:0;
  display:flex;
  flex-direction:column;


  span{
    color:violet;
  }
  @media(max-width:1102px) {
    font-size:4rem;
  }
  @media(max-width:888px) {
    font-size:3.7rem;
  }
  @media(max-width:810px) {
    font-size:3rem;
  }
  @media(max-width:675px) {
    font-size:2rem;
  }
  @media(max-width:454px) {
    font-size:1.8rem;
  }
`

const  StyledButton = styled.button`
  grid-column-start: 3;
  grid-column-end: 4;
  grid-row-start: 2;
  grid-row-end: 3;
  width:100px;
  height:50px;
  align-self:center;
  justify-self:center;
`

const IndexPage = () => (
    
    <ContentPage>
        <SEO title="Home" />
        <Menu>
          <h2>marbles-greece</h2>
          <h2>about</h2>
          <h2>contact</h2>
          <h2>companies</h2>
        </Menu>
        <StaticImage
            src= '../images/bg3.jpg'
            layout='constrained'
            // width={2500}
            // height={2000}
            quality={100}
            style={{gridColumnStart:1 , gridColumnEnd:4 , gridRowStart:1 , gridRowEnd:4 ,zIndex:-1}}
            transformOptions={{fit:"cover"}}
            />
            
        <Title>The Material that Highlights<br></br>The <span>Beauty,</span>For Centuries.
        </Title>
        <p>from the best producers and experts in the world.</p>
        <StyledButton>Find Out</StyledButton>
      </ContentPage>
    

)

export default IndexPage
