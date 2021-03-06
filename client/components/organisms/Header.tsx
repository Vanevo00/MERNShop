import React from 'react'
import styled from 'styled-components'
import MenuTexts from '../molecules/MenuTexts'
import MenuIcons from '../molecules/MenuIcons'
import sizes from '../../common/constants/sizes'
import { MaxWidthContainer } from '../atoms/MaxWidthContainer'
import HamburgerMenuButton from '../atoms/HamburgerMenuButton'

const HeaderContainer = styled.header`
  position: relative;
  width: 100%;
  min-height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 8rem;
  
  @media screen and (max-width: ${sizes.small}px) {
    padding: 3rem 1rem 3rem 8rem;
  }
`

const LogoDesktop = styled.img`
  margin-top: -7px;
  cursor: pointer;
  
  @media screen and (max-width: ${sizes.small}px) {
    display: none;
  }
`

const LogoMobile = styled.img`
  display: none;
  width: 12rem;
  
  @media screen and (max-width: ${sizes.small}px) {
    display: block;
  }
`

const Header = () => {
  return (
    <MaxWidthContainer>
      <HeaderContainer>
        <HamburgerMenuButton/>
        <LogoDesktop src='/static/logo-dynamic.gif' alt='zlatnictví Vaněk'/>
        <LogoMobile src='/static/logo-black-name-only.png' alt='zlatnictví Vaněk'/>
        <MenuTexts/>
        <MenuIcons/>
      </HeaderContainer>
    </MaxWidthContainer>
  )
}

export default Header
