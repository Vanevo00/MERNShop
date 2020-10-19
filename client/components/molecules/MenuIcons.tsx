import React from 'react'
import styled from 'styled-components'
import { IconDark } from '../atoms/IconDark'

const MenuIconsContainer = styled.div`
  margin-left: auto;
  display: flex;
  
  i {
    margin-right: 1.5rem;
  }
  
  a {
    color: inherit;
  }
`

const MenuIcons = () => {
  return (
    <MenuIconsContainer>
      <a href='#'>
        <IconDark className='fas fa-user fa-lg'/>
      </a>
      <a href='#'>
        <IconDark className='fas fa-search fa-lg'/>
      </a>
      <a href='#'>
        <IconDark className='fas fa-map-marker-alt fa-lg'/>
      </a>
      <a href='#'>
        <IconDark className='fas fa-shopping-bag fa-lg'/>
      </a>
    </MenuIconsContainer>
  )
}

export default MenuIcons
