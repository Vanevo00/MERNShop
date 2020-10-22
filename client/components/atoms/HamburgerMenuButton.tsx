import React from 'react'
import styled from 'styled-components'
import sizes from '../../common/constants/sizes'

const HamburgerContainer = styled.div`
  display: none;
  position: absolute;
  width: 25px;
  height: 22px;
  left: 20px;
  top: 38px;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  
  @media screen and (max-width: ${sizes.small}px) {
    display: flex;
  }
`

const HamburgerLine = styled.div`
  width: 100%;
  height: 3px;
  background-color: ${props => props.theme.colors.main}
`

const HamburgerMenuButton = () => {
  return (
    <HamburgerContainer>
      <HamburgerLine/>
      <HamburgerLine/>
      <HamburgerLine/>
    </HamburgerContainer>
  )
}

export default HamburgerMenuButton
