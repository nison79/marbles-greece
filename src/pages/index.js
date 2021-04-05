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
  grid-template-rows:250px 2fr 1fr;
  @media(max-width:800px) {
    grid-template-rows:200px 300px 1fr;
  }
  
  p{
    font-size:1rem;
    grid-column-start:2;
    grid-column-end:3;
    grid-row-start:3;
    grid-row-end:4;
    margin:0;
    z-index:3;
    font-family:'Avenir' ,sans-serif;
    color:white;


    @media(min-width:499px) {
    font-size:1rem;
    grid-row-start:2;
    grid-row-end:3; 
    align-self:end;
    margin-bottom:2rem;
    }
    @media(min-width:658px) {
    font-size:1.2rem;
    align-self:end;
    margin-bottom:0rem;
    grid-row-start:2;
    grid-row-end:3; 
    }
    @media(min-width:800px) {
    font-size:1.8rem;
    align-self:end;
    margin-bottom:0rem;
    grid-row-start:2;
    grid-row-end:3; 
    }
    @media(min-width:978px) {
    font-size:2.5rem;
    grid-row-start:2;
    grid-row-end:3; 
    align-self:end;
    margin-bottom:8rem;
    }
    @media(min-width:1200px) {
    font-size:2.9rem;
    grid-row-start:2;
    grid-row-end:3; 
    align-self:end;
    margin-bottom:rem;
  }
    @media(min-width:1500px) {
    font-size:2.5rem;
    grid-row-start:2;
    grid-row-end:3; 
    align-self:end;
    margin-bottom:10rem;
  }
  @media(min-width:1970px) {
    font-size:4rem;
    grid-row-start:2;
    grid-row-end:3; 
    margin-bottom:30rem;
  }
  @media(min-width:2180px) {
    font-size:4rem;
    grid-row-start:2;
    grid-row-end:3; 
    margin-bottom:40rem;
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

  @media(max-width:1250px) {
    font-size:3.5rem;
  }
  
  @media(max-width:1102px) {
    font-size:3.5rem;
  }
  @media(max-width:888px) {
    font-size:2.6rem;
  }
  @media(max-width:810px) {
    font-size:2em;
  }
  @media(max-width:675px) {
    font-size:1.8rem;
  }
  @media(max-width:454px) {
    font-size:1.1rem;
  }

  span{
    color:#85B6FE;
  }
`

const  StyledButton = styled.button`
  grid-column-start: 3;
  grid-column-end: 4;
  grid-row-start: 2;
  grid-row-end: 3;
  width:180px;
  height:60px;
  align-self:center;
  justify-self:center;
  background-color:#85B6FE;
  font-family:'Avenir' ,sans-serif;
  font-size:0.8rem;
  color:white;
  border:none;
  border-radius:5px;
  cursor:pointer;
  @media(min-width:500px) {
    width:80px;
    height:40px;
    font-size:0.9rem;
  }
  @media(min-width:800px) {
    width:150px;
    height:60px;
    margin-bottom:8rem;
    font-size:1.5rem;
  }
  @media(min-width:900px) {
    width:180px;
    height:60px;
    margin-bottom:15rem;
    font-size:1.5rem;
  }
  @media(min-width:1400px) {
    width:250px;
    height:70px;
    margin-bottom:25rem;
    font-size:1.5rem;
  }
  @media(min-width:1500px) {
    width:250px;
    height:70px;
    margin-bottom:30rem;
    font-size:1.5rem;
  }
  @media(min-width:1700px) {
    width:250px;
    height:70px;
    margin-bottom:35rem;
    font-size:1.5rem;
  }
  @media(min-width:1900px) {
    width:250px;
    height:70px;
    margin-bottom:48rem;
    font-size:1.5rem;
  }
  @media(min-width:2000px) {
    width:250px;
    height:70px;
    margin-bottom:57rem;
    font-size:1.5rem;
  }
  @media(min-width:2000px) {
    width:250px;
    height:70px;
    margin-bottom:65rem;
    font-size:1.5rem;
  }
`

const StyledLink = styled(Link)`
  color:white;
  width:inherit;
`

const IndexPage = () => (
    
    <ContentPage>
        <SEO title="Home" />
        <Menu>
          <StyledLink to="/"><h2>marbles-greece</h2></StyledLink>
          <h2>about</h2>
          <h2>contact</h2>
          <StyledLink to="/producers"><h2>producers</h2></StyledLink>
        </Menu>
        <StaticImage
            src= '../images/bg.jpg'
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
        <StyledButton>
          <StyledLink to="/producers">Find Out</StyledLink>
        </StyledButton>
      </ContentPage>
    

)

export default IndexPage
