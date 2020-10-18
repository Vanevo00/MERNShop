import React from 'react'
import styled from 'styled-components'
import MenuTextItem from '../atoms/MenuTextItem'

const MenuTextsContainer = styled.div`
  display: flex;
`

const menuTextsContent = [
  {
    name: 'ŠPERKY'
  },
  {
    name: 'PROČ ZVOLIT NÁS'
  },
  {
    name: 'KONTAKT'
  },
  {
    name: 'KAMENNÁ PRODEJNA'
  }
]

const MenuTexts = () => {
  return (
    <MenuTextsContainer>
      {menuTextsContent.map((item, index) => <MenuTextItem key={index} item={item}/>)}
    </MenuTextsContainer>
  )
}

export default MenuTexts
