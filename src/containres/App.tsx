import React from 'react'
import { Header } from './Header'
import { Footer } from './Footer'
import { Destinations } from './Destinations'
import { Stories } from './Stories'
import { Steps } from './Steps'
import styled, { createGlobalStyle } from 'styled-components'
import { NavBar } from './NavBar'
import headerBg from '../assets/header-bg.png'
import footerBg from '../assets/footer_bg.png'

function App() {
  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <HeadBGContainer>
          <NavBar />
          <Header />
        </HeadBGContainer>
        <Steps />
        <Destinations />
        <FooterBGContainer>
          <Stories />
          <Footer />
        </FooterBGContainer>
      </AppContainer>
    </>
  )
}

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Aleo:ital,wght@0,700;1,700&family=Magra:wght@700&family=Red+Hat+Text:wght@500&display=swap');
  
  body {
    margin: 0;
  }
`

const AppContainer = styled.div`
  width: 100%;
`

const HeadBGContainer = styled.div`
  background-image: url('${headerBg}');
  background-repeat: no-repeat;
  background-position: center 0;
`

const FooterBGContainer = styled.div`
  background-image: url('${footerBg}');
  background-repeat: no-repeat;
  background-position: center 53px;
  background-size: cover;
  box-sizing: border-box;
  width: 1440px;
  margin: 0 auto;
`

export default App
