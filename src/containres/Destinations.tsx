import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import { getImage } from '../helpers/getImage'

export const Destinations = () => {
  const destinations = useSelector(
    (state: RootState) => state.app.cms.destinations
  )
  return (
    <DestinationContainer>
      <DestinationsTitle>{destinations?.title}</DestinationsTitle>
      <Slider />
      <SliderDot />
      <FindBtn />
    </DestinationContainer>
  )
}

const DestinationContainer = styled.div`
  width: 1440px;
  margin: 0 auto;
`

const DestinationsTitle = styled.h2`
  font-family: 'Red Hat Text', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
  line-height: 53px;
  color: #f2785c;
  text-align: center;
`
const Slider = () => {
  const destinations = useSelector(
    (state: RootState) => state.app.cms.destinations
  )

  return (
    <SliderContainer>
      <SliderItem img={getImage('slider_01.png')}>
        {destinations?.slide1}
      </SliderItem>
      <SliderItem img={getImage('slider_02.png')}>
        {destinations?.slide2}
      </SliderItem>
      <SliderItem img={getImage('slider_03.png')}>
        {destinations?.slide3}
      </SliderItem>
    </SliderContainer>
  )
}

const SliderContainer = styled.div`
  display: flex;
  overflow: hidden;
`

type SliderItemProps = {
  img: string
  children: React.ReactNode
}

const SliderItem: React.FC<SliderItemProps> = ({ img, children }) => {
  return (
    <ItemContainer>
      <ItemImg src={img} />
      <ItemText>{children}</ItemText>
    </ItemContainer>
  )
}

const ItemImg = styled.img`
  position: relative;
  z-index: -2;
`

const ItemText = styled.span`
  position: absolute;
  bottom: 40px;
  left: 15px;
  font-family: 'Red Hat Text', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 42px;
  color: #ffffff;
`
const ItemContainer = styled.div`
  position: relative;
  min-width: 800px;
  height: 800px;
  border-radius: 16px;
  z-index: -1;
  overflow: hidden;
  margin: 0 16px;
  transform: translateX(-516px);
  box-sizing: border-box;
`

const SliderDot = () => {
  return (
    <DotContainer>
      <Dot />
      <Dot active />
      <Dot />
    </DotContainer>
  )
}

const DotContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 24px;
`

type DotProps = {
  active?: boolean
}

const Dot = ({ active }: DotProps) => {
  return active ? (
    <DotImg src={getImage('slider-dot-active.svg')} />
  ) : (
    <DotImg src={getImage('slider-dot.svg')} />
  )
}

const DotImg = styled.img`
  cursor: pointer;

  & + & {
    margin-left: 10px;
  }
`

const FindBtn = () => {
  return (
    <FindContainer>
      <FindButton>
        <ArrowImg src={getImage('bi_arrow-right.svg')} />
        Find More
      </FindButton>
    </FindContainer>
  )
}

const ArrowImg = styled.img`
  margin-right: 10px;
`

const FindButton = styled.div`
  border: none;
  cursor: pointer;
  width: 228px;
  height: 59px;
  background: #0d606f;
  box-shadow: 0 0 3px rgba(13, 96, 111, 0.08), 0 2px 3px rgba(13, 96, 111, 0.16);
  border-radius: 10px;
  font-family: 'Red Hat Text', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 32px;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
`

const FindContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
  margin-bottom: 80px;
`
