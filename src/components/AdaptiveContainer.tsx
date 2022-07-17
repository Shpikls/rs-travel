import React from 'react'
import styled from 'styled-components'

type Props = {
  children: React.ReactNode
  background?: string
  height?: string
}

export const AdaptiveContainer = ({ children, background, height }: Props) => {
  return (
    <AdaptiveSection background={background} height={height}>
      {children}
    </AdaptiveSection>
  )
}

type AdaptiveSectionProps = {
  background?: string
  height?: string
}

export const AdaptiveSection = styled.section<AdaptiveSectionProps>`
  max-width: 1440px;
  margin: 0 auto;
  box-sizing: border-box;
  padding: 0 120px;
  ${({ background }) => background && `background-image: url("${background}")`};
  ${({ height }) => height && `height: ${height}`};
`
