import React, { useEffect } from 'react'
import { Header } from './Header'
import { Footer } from './Footer'
import { Destinations } from './Destinations'
import { Stories } from './Stories'
import { Steps } from './Steps'
import { NavBar } from './NavBar'
import {
  BGContainer,
  FooterContainer,
  HeaderContainer,
} from '../components/Container'
import { GlobalStyle } from '../helpers/globalCss'
import { useDispatch } from 'react-redux'
import { setLoader, updateCMS } from '../redux/appSlice'
import { useCms } from '../hooks/useCms'
import { getImage } from '../helpers/getImage'
import { TailSpin } from 'react-loader-spinner'
import styled from 'styled-components'

function App() {
  const HeadContainer = BGContainer(HeaderContainer, getImage('header-bg.png'))
  const FootContainer = BGContainer(FooterContainer, getImage('footer_bg.png'))
  const { data, isLoading, isError } = useCms()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(updateCMS(data))
  }, [data, dispatch])

  useEffect(() => {
    dispatch(setLoader('loading'))
  }, [isLoading, dispatch])

  if (isError) {
    console.log('Check CMS')
  }

  return (
    <>
      <GlobalStyle />
      <>
        {isLoading && <Loader />}
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
    </>
  )
}

const Loader = () => {
  return (
    <LoaderContainer>
      <TailSpin ariaLabel="loading-indicator" color="#555555" />
    </LoaderContainer>
  )
}

const LoaderContainer = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`

export default App
