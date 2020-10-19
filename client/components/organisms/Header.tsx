import React from 'react'
import styled from 'styled-components'
import MenuTexts from '../molecules/MenuTexts'
import MenuIcons from '../molecules/MenuIcons'

const HeaderContainer = styled.header`
  width: 100%;
  min-height: 80px;
  display: flex;
  align-items: center;
  padding: 0 5rem;
`

const Logo = styled.img`
  margin-top: -7px;
  margin-right: 6rem;
`

const Header = () => {
  return (
    <HeaderContainer>
      <Logo src='/static/logo-dynamic.gif' alt='zlatnictví Vaněk'/>
      <MenuTexts/>
      <MenuIcons/>
    </HeaderContainer>
  )
}

export default Header
