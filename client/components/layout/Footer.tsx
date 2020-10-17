import React from 'react'
import styled from 'styled-components'

const FooterContainer = styled.footer`
  width: 100%;
  background-color: ${props => props.theme.colors.main};
  color: ${props => props.theme.colors.mainLightFontColor};
  display: flex;
  justify-content: space-between;
`

const Column = styled.div`
  padding: 5px;
  margin: 10px;
`

const Logo = styled.img`
  width: 50%;
  padding: 5px 0px;
`

const Menu = styled.div`
`

const MenuItem = styled.a`
  color: inherit;
  padding: 5px;
  border-color: ${props => props.theme.colors.mainLightFontColor};
  border-right-style: solid;
`

const Copyright = styled.p`
  padding: 5px 0px;
  margin: 5px;
`

const ContactItem = styled.div`
  display: flex;
  justify-content: center;
`

const Circle = styled.div`
  border-radius: 50%;
  width: 30px;
  height: 30px;
  background-color: ${props => props.theme.colors.mainLightFontColor};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px 5px;
`

const Icon = styled.i`
  color: ${props => props.theme.colors.main}
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
          Copyright ©2020 Zlatnictví Vaněk<br/>Zásady ochrany osobních údajů
        </Copyright>
      </Column>
      <Column>
        <ContactItem>
          <Circle><Icon className='fas fa-map-marker-alt'/></Circle>
          <CircleInfo>Pražská 164<br/>280 02 Kolín</CircleInfo>
        </ContactItem>
        <Map src=''alt='Mapa'></Map>    
      </Column>
      <Column>
        <ContactItem>
          <Circle><Icon className='fas fa-phone-alt'/></Circle>
          <CircleInfo>+420 321 724 470</CircleInfo>
        </ContactItem>
        <ContactItem>
          <Circle><Icon className='fas fa-envelope'/></Circle>
          <CircleInfo>info@zlatnictvivanek.cz</CircleInfo>
        </ContactItem>
        <SquareButton><Icon className='fab fa-facebook-f fa-lg'/></SquareButton>
        <SquareButton><Icon className='fab fa-instagram fa-lg'/></SquareButton>
      </Column>
    </FooterContainer>
  )
}

export default Footer
