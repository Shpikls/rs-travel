import React from 'react'
import styled from 'styled-components'
import { Container } from '../components/Container'
import { getImage } from '../helpers/getImage'
import { useSelector } from 'react-redux'
import { selectCopyright } from '../redux/selectors'

export const Footer = () => {
  const copyright = useSelector(selectCopyright)

  return (
    <FooterContainer>
      <Copyright>{copyright}</Copyright>
      <IconContainer>
        <a href="javascript:void(0)">
          <img src={getImage('icon_instagram.svg')} alt="icon instagram" />
        </a>
        <a href="javascript:void(0)">
          <img src={getImage('icons_youtube.svg')} alt="icon youtube" />
        </a>
        <a href="javascript:void(0)">
          <img src={getImage('icons_twitter.svg')} alt="icon twitter" />
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
