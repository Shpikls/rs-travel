import logo from '../assets/logo.svg'
import { locale } from '../locale'
import styled from 'styled-components'
import React from 'react'

export const Logo = () => {
  return (
    <LogoContainer>
      <LogoImg src={logo} alt={locale.logoName} />
      <LogoText>{locale.logoName}</LogoText>
    </LogoContainer>
  )
}

const LogoImg = styled.img`
  margin-right: 6px;
`

const LogoText = styled.span`
  font-family: 'Magra', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 39px;
  color: #ffffff;
`

const LogoContainer = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: left;
`
