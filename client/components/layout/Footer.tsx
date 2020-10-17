import React from 'react'
import styled from 'styled-components'

const FooterContainer = styled.footer`
  width: 100%;
  background-color: ${props => props.theme.colors.main};
  color: ${props => props.theme.colors.mainLightFontColor};
`

const Column = styled.div`
  width: 35%;
`

const Logo = styled.img`
`

const Menu = styled.div`
`

const MenuItem = styled.a`
  color: inherit;
`

const Copyright = styled.p`
`

const ContactItem = styled.div`
`

const Circle = styled.div`
`

const CircleInfo = styled.p`
`

const SquareButton = styled.button`
`

const Map = styled.img`
`


const Footer = () => {
  return (
    <FooterContainer>
      <Column>
        <Logo src='/static/logo.png' alt='Logo'/>
        <Menu>
          <MenuItem href=''target='_blank'>Menu</MenuItem>
          <MenuItem href='' target='_blank'>Zakázky</MenuItem>
          <MenuItem href='' target='_blank'>Náš příběh</MenuItem>
          <MenuItem href='' target='_blank'>Otázky</MenuItem>
          <MenuItem href='' target='_blank'>Kontakty</MenuItem>
        </Menu>
        <Copyright>
          Copyright 2020 Zlatnictví Vaněk<br/>Zásady ochrany osobních údajů
        </Copyright>
      </Column>
      <Column>
        <ContactItem>
          <Circle></Circle>
          <CircleInfo>Pražská 164<br/>280 02 Kolín</CircleInfo>
        </ContactItem>
        <Map src=''alt='Mapa'></Map>    
      </Column>
      <Column>
        <ContactItem>
          <Circle></Circle>
          <CircleInfo>+420 321 724 470</CircleInfo>
          <Circle></Circle>
          <CircleInfo>info@zlatnictvivanek.cz</CircleInfo>
          <SquareButton></SquareButton>
          <SquareButton></SquareButton>
        </ContactItem>
      </Column>
    </FooterContainer>
  )
}

export default Footer
