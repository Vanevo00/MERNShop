import React from 'react'
import styled from 'styled-components'
import { IconDark, IconDarkDesktopOnly } from '../atoms/IconDark'
import sizes from '../../common/constants/sizes'

const MenuIconsContainer = styled.div`
  margin-left: auto;
  display: flex;
  
  i {
    margin-right: 1.5rem;
  }
  
  a {
    color: inherit;
  }
  
  @media screen and (max-width: ${sizes.small}px) {
    margin-top: 1rem;
  }
`

const MenuIcons = () => {
  return (
    <MenuIconsContainer>
      <a href='#'>
        <IconDark aria-hidden className='fas fa-user fa-2x'/>
      </a>
      <a href='#'>
        <IconDark aria-hidden className='fas fa-search fa-2x'/>
      </a>
      <a href='#'>
        <IconDarkDesktopOnly aria-hidden className='fas fa-map-marker-alt fa-2x'/>
      </a>
      <a href='#'>
        <IconDarkDesktopOnly aria-hidden className='fas fa-shopping-bag fa-2x'/>
      </a>
    </MenuIconsContainer>
  )
}

export default MenuIcons
