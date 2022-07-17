import React, { FC, ReactNode } from 'react'
import styled from 'styled-components'
import { AdaptiveContainer } from '../components/AdaptiveContainer'
import stpLogo1 from '../assets/steps_01.svg'
import stpLogo2 from '../assets/steps_02.svg'
import stpLogo3 from '../assets/steps_03.svg'
import { locale } from '../locale'

export const Steps = () => {
  return (
    <AdaptiveContainer>
      <StepsTitle>{locale.steps.title}</StepsTitle>
      <StepsContainer>
        <StepSection img={stpLogo1}>{locale.steps.step01}</StepSection>
        <StepSection img={stpLogo2}>{locale.steps.step02}</StepSection>
        <StepSection img={stpLogo3}>{locale.steps.step03}</StepSection>
      </StepsContainer>
    </AdaptiveContainer>
  )
}

const StepsTitle = styled.h2`
  text-align: center;
  font-family: 'Red Hat Text', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
  line-height: 53px;
  color: #f2785c;
  margin: 80px 0 40px;
`

const StepsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 80px;
`

type StepSectionProps = {
  children?: ReactNode
  img: string
}

const StepSection = ({ children, img }: StepSectionProps) => {
  return (
    <StepSectionContainer>
      <StepSectionImg src={img} />
      <StepSectionText>{children}</StepSectionText>
    </StepSectionContainer>
  )
}

const StepSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const StepSectionImg = styled.img`
  width: 100px;
  margin-bottom: 30px;
`
const StepSectionText = styled.span`
  font-family: 'Aleo', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #0d606f;
`
