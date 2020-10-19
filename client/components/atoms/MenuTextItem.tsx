import React from 'react'
import styled from 'styled-components'

interface Props {
  item: {
    name: string
  }
}

const Item = styled.a`
  position: relative;
  margin-right: 2rem;
  font-family: ${props => props.theme.fonts.menu};
  color: ${props => props.theme.colors.mainFontColor};
  font-weight: 300;
  letter-spacing: 1px;
  cursor: pointer;
  font-size: 15px;
  
  &:after{
  content: '';
  position: absolute;
  width: 0; height: 2px;
  display: block;
  margin-top: 5px;
  right: 0;
  background: ${props => props.theme.colors.mainFontColor};
  transition: width .2s ease;
  -webkit-transition: width .2s ease;
}
 
  &:hover:after{
    width: 100%;
    left: 0;
    background: ${props => props.theme.colors.mainFontColor};
  }
`

const MenuTextItem = ({ item }: Props) => {
  return (
    <Item href='#'>{item.name}</Item>
  )
}

export default MenuTextItem
