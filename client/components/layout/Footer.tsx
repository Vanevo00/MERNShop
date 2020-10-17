import React from 'react'
import styled from 'styled-components'

const FooterContainer = styled.footer`
  width: 100%;
  background-color: ${props => props.theme.colors.main};
  color: ${props => props.theme.colors.mainLightFontColor};
  display: flex;
  justify-content: space-between;
  padding: 0px 100px;
`

const Column = styled.div`
  padding: 5px 10px;
  margin: 10px 20px;
  width: 100rem;
`

const Logo = styled.img`
  width: 50%;
  padding: 5px 0px 10px 0px;
`

const Menu = styled.div`
`

const MenuItem = styled.a`
  color: inherit;
  padding: 5px 10px;
  border-color: ${props => props.theme.colors.mainLightFontColor};
  border-right-style: solid;
`

const Copyright = styled.p`
  padding: 10px 0px;
  margin: 5px;
  font-size: 15px;
`

const ContactItem = styled.div`
  display: flex;
  margin: 0px 20px;
`

const Circle = styled.div`
  border-radius: 50%;
  width: 30px;
  height: 30px;
  background-color: ${props => props.theme.colors.mainLightFontColor};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px 0px;
`

const Icon = styled.i`
  color: ${props => props.theme.colors.main};
`

const CircleInfo = styled.p`
  padding: 5px 10px;
`

const SquareButton = styled.button`
  border-radius: 5px;
  border: none;
  margin: 5px 20px;
`

const Map = styled.img`
  width: 100%;
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
        <SquareButton><Icon className='fab fa-facebook-f fa-2x'/></SquareButton>
        <SquareButton><Icon className='fab fa-instagram fa-2x'/></SquareButton>
      </Column>
    </FooterContainer>
  )
}

export default Footer
