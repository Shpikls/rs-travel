import React from 'react'
import styled from 'styled-components'
import storyImg01 from '../assets/stories_01.png'
import storyImg02 from '../assets/stories_02.png'
import storyImg03 from '../assets/stories_03.png'
import storyImg04 from '../assets/stories_04.png'
import arrowRight from '../assets/bi_arrow-right.svg'

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
type NonEmptyArray<T> = [T, ...T[]]

const storyDataArray: NonEmptyArray<StoryData> = [
  {
    img: storyImg01,
    title: '10 Photos of Attractive Thailand',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
  },
  {
    img: storyImg02,
    title: 'Canyonlands National Park, Utah',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
  },
  {
    img: storyImg03,
    title: 'I left my heart in the Mountains!',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
  },
  {
    img: storyImg04,
    title: 'The Longest journey in my life!',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
  },
]

const StoriesContent = () => {
  return (
    <StoriesContentContainer>
      {storyDataArray.map((data, key) => (
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
      <StoryImg src={img} />
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
  return (
    <SeeMoreContainer>
      <SeeMoreImg src={arrowRight} />
      See More
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
