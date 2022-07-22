import React, { ReactNode } from 'react'
import styled from 'styled-components'
import { Logo } from '../components/Logo'
import { locale } from '../locale'

export const NavBar = () => {
  return (
    <Container>
      <Logo />
      <Nav>
        {locale.nav.map((text, index) => (
          <NavItem link="#" key={index}>
            {text}
          </NavItem>
        ))}
      </Nav>
      <LoginButton>{locale.buttonLogin}</LoginButton>
    </Container>
  )
}

const Container = styled.div`
  background-color: rgba(242, 120, 92, 0.7);
  box-shadow: 0 4px 4px rgba(13, 96, 111, 0.5);
  height: 90px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 120px;
  margin: 0 auto;
  width: 1440px;
  box-sizing: border-box;
`

type NavProps = {
  children: ReactNode
}

const Nav = ({ children }: NavProps) => {
  return (
    <NavContainer>
      <NavUl>{children}</NavUl>
    </NavContainer>
  )
}

const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  font-family: 'Red Hat Text', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 21px;
  color: white;
`

const NavUl = styled.ul`
  list-style-type: none;
  display: flex;
`

type NavItemProps = {
  children: ReactNode
  link: string
}

const NavItem = ({ link, children }: NavItemProps) => {
  return (
    <NavItemContainer>
      <NavItemLink href={link}>{children}</NavItemLink>
    </NavItemContainer>
  )
}

const NavItemContainer = styled.li`
  padding: 0 21px;
`

const NavItemLink = styled.a`
  color: white;
  text-decoration: none;
`
const LoginButton = styled.button`
  width: 103px;
  height: 41px;
  background: #0d606f;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25), 0 2px 3px rgba(13, 96, 111, 0.16);
  border-radius: 10px;
  border: 0;
  font-family: 'Red Hat Text', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 21px;
  color: #ffffff;
  cursor: pointer;
`
