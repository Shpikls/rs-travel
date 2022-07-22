import styled, { StyledComponent } from 'styled-components'

type ContainerProps = {
  height?: string
}

export const Container = styled.section<ContainerProps>`
  max-width: 1440px;
  margin: 0 auto;
  box-sizing: border-box;
  padding: 0 120px;
  ${({ height }) => height && `height: ${height}`};
`

export const HeaderContainer = styled.header`
  background-position: center 0;
`

export const FooterContainer = styled.footer`
  background-repeat: no-repeat;
  background-position: center 53px;
  background-size: cover;
  box-sizing: border-box;
  width: 1440px;
  margin: 0 auto;
`
export const BGContainer = (
  Container: StyledComponent<'section' | 'header' | 'footer', any>,
  image: string
) => styled(Container)`
  background-image: url('${image}');
  background-repeat: no-repeat;
`
