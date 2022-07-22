import React from 'react'
import { Header } from './Header'
import { Footer } from './Footer'
import { Destinations } from './Destinations'
import { Stories } from './Stories'
import { Steps } from './Steps'
import { createGlobalStyle } from 'styled-components'
import { NavBar } from './NavBar'
import headerBg from '../assets/header-bg.png'
import footerBg from '../assets/footer_bg.png'
import {
  BGContainer,
  FooterContainer,
  HeaderContainer,
} from '../components/Container'

function App() {
  const HeadContainer = BGContainer(HeaderContainer, headerBg)
  const FootContainer = BGContainer(FooterContainer, footerBg)

  return (
    <>
      <GlobalStyle />
      <HeadContainer>
        <NavBar />
        <Header />
      </HeadContainer>
      <Steps />
      <Destinations />
      <FootContainer>
        <Stories />
        <Footer />
      </FootContainer>
    </>
  )
}

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`

export default App
