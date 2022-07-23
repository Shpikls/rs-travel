import React from 'react'
import styled from 'styled-components'
import { getImage } from '../helpers/getImage'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'

export const Stories = () => {
  return (
    <>
      <Title>TRAVEL STORIES</Title>
      <StoriesContainer>
        <StoriesContent />
        <ButtonSeeMore />
      </StoriesContainer>
    </>
  )
}

const StoriesContainer = styled.div`
  background: rgba(255, 255, 255, 0.7);
  padding-bottom: 40px;
`

const Title = styled.h2`
  margin: 0;
  font-family: 'Red Hat Text', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
  line-height: 53px;
  color: #f2785c;
  text-align: center;
`

const StoriesContent = () => {
  const stories = useSelector((state: RootState) => state.app.cms.stories)
  const { content } = stories || {}

  return (
    <StoriesContentContainer>
      {content?.map((data, key) => (
        <StoryItem data={data} key={key}></StoryItem>
      ))}
    </StoriesContentContainer>
  )
}

const StoriesContentContainer = styled.div`
  width: 1440px;
  margin: 0 auto;
`

type StoryData = {
  img: string
  title: string
  content: string
}

type StoryProps = {
  data: StoryData
}

const StoryItem: React.FC<StoryProps> = ({ data }) => {
  const { img, title, content } = data

  return (
    <StoryContainer>
      <StoryImg src={getImage(img)} />
      <StoryContentWrapper>
        <StoryTitle>{title}</StoryTitle>
        <StoryText>{content}</StoryText>
        <StoryLink href="#">Read More</StoryLink>
      </StoryContentWrapper>
    </StoryContainer>
  )
}

const StoryContainer = styled.div`
  padding: 40px 120px;
  display: flex;
`

const StoryImg = styled.img`
  filter: drop-shadow(0px 4px 4px #0d606f);
  border-radius: 16px;
  margin-right: 40px;
`

const StoryContentWrapper = styled.div``

const StoryTitle = styled.h3`
  margin: 0;
  font-family: 'Aleo', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 35px;
  line-height: 42px;
  color: #0d606f;
`

const StoryText = styled.p`
  font-family: 'Aleo', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #0d606f;
  margin: 24px 0 0;
`

const StoryLink = styled.a`
  font-family: 'Aleo', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  text-decoration-line: underline;

  color: #0d606f;
`

const ButtonSeeMore = () => {
  const stories = useSelector((state: RootState) => state.app.cms.stories)
  const { buttonSee } = stories || {}

  return (
    <SeeMoreContainer>
      <SeeMoreImg src={getImage('bi_arrow-right.svg')} />
      {buttonSee}
    </SeeMoreContainer>
  )
}

const SeeMoreContainer = styled.button`
  background: #0d606f;
  box-shadow: 0 0 3px rgba(13, 96, 111, 0.08), 0 2px 3px rgba(13, 96, 111, 0.16);
  border-radius: 10px;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 228px;
  height: 59px;
  font-family: 'Red Hat Text', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 32px;
  color: #ffffff;
  margin: 0 auto;
`
const SeeMoreImg = styled.img`
  margin-right: 10px;
`
