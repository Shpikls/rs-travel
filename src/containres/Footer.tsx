import React from 'react'
import styled from 'styled-components'
import iconsInstagram from '../assets/icon_instagram.svg'
import iconsYoutube from '../assets/icons_youtube.svg'
import iconsTwitter from '../assets/icons_twitter.svg'
import { Container } from '../components/Container'

export const Footer = () => {
  return (
    <FooterContainer>
      <Copyright>All Rights Reserved © Travel Portal</Copyright>
      <IconContainer>
        <a href="#">
          <img src={iconsInstagram} alt="iconsInstagram" />
        </a>
        <a href="#">
          <img src={iconsYoutube} alt="iconsYoutube" />
        </a>
        <a href="#">
          <img src={iconsTwitter} alt="iconsTwitter" />
        </a>
      </IconContainer>
    </FooterContainer>
  )
}

const IconContainer = styled.div`
  position: absolute;
  right: 120px;

  & > a + a {
    margin-left: 20px;
  }
`

const FooterContainer = styled(Container)`
  min-height: 60px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  justify-content: center;
  position: relative;
`

const Copyright = styled.span`
  font-family: 'Red Hat Text', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 21px;
  color: #ffffff;
`
