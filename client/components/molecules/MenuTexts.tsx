import React from 'react'
import styled from 'styled-components'
import MenuTextItem from '../atoms/MenuTextItem'
import menuContent from '../../common/constants/menuContent'
import sizes from '../../common/constants/sizes'

const MenuTextsContainer = styled.div`
  display: flex;
  
  @media screen and (max-width: ${sizes.large}px) {
    display: none;
  }
`

const MenuTexts = () => {
  return (
    <MenuTextsContainer>
      {menuContent.map((item, index) => <MenuTextItem key={index} item={item}/>)}
    </MenuTextsContainer>
  )
}

export default MenuTexts
