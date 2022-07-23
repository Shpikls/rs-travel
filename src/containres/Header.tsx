import React from 'react'
import styled from 'styled-components'
import { Container } from '../components/Container'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'

const HEADER_CONTAINER_HEIGHT = '765px'

export const Header = () => {
  const header = useSelector((state: RootState) => state.app.cms.header)

  return (
    <Container height={HEADER_CONTAINER_HEIGHT}>
      <HeaderWrapper>
        <Title>{header?.title}</Title>
        <Description>{header?.description}</Description>
      </HeaderWrapper>
      <StartPlaning />
    </Container>
  )
}

const HeaderWrapper = styled.div`
  padding-top: 144px;
  width: 892px;
  box-sizing: border-box;
  color: white;
  font-family: 'Aleo', sans-serif;
`

const Title = styled.h1`
  font-style: normal;
  font-weight: bold;
  font-size: 80px;
  line-height: 96px;
  margin: 0;
`

const Description = styled.p`
  font-style: italic;
  font-weight: bold;
  font-size: 20px;
  line-height: 24px;
`

const StartPlaning = () => {
  const header = useSelector((state: RootState) => state.app.cms.header)

  return (
    <StartPlaningContainer>
      {header?.startPlanningText}
      <StartPlaningBtn>{header?.startPlanningButton}</StartPlaningBtn>
    </StartPlaningContainer>
  )
}

const StartPlaningContainer = styled.div`
  width: 892px;
  height: 95px;
  background: rgba(255, 255, 255, 0.7);
  border-radius: 16px;
  display: flex;
  justify-content: space-between;
  padding: 0 18px 0 42px;
  align-items: center;
  font-family: 'Aleo', sans-serif;
  font-style: italic;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  color: #f2785c;
`

const StartPlaningBtn = styled.button`
  width: 228px;
  height: 59px;
  background: #0d606f;
  box-shadow: 0 0 3px rgba(13, 96, 111, 0.08), 0 2px 3px rgba(13, 96, 111, 0.16);
  border-radius: 10px;
  border: none;
  font-family: 'Red Hat Text', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 32px;
  color: #ffffff;
  cursor: pointer;
`
