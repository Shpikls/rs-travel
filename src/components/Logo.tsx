import styled from 'styled-components'
import React from 'react'
import { useSelector } from 'react-redux'
import { getImage } from '../helpers/getImage'
import { selectLogoName } from '../redux/selectors'
import { LogoSkeleton } from './LogoSkeleton'

export const Logo = () => {
  const logoName = useSelector(selectLogoName)

  return (
    <LogoContainer>
      <LogoImg src={getImage('logo.svg')} alt={logoName} />
      {logoName ? <LogoText>{logoName}</LogoText> : <LogoSkeleton />}
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
  align-items: flex-start;
  justify-content: left;
`
