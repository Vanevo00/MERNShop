import React from 'react'
import styled from 'styled-components'
import { MaxWidthContainer } from '../atoms/MaxWidthContainer'

const FooterContainer = styled.footer`
  width: 100%;
  background-color: ${props => props.theme.colors.main};
  color: ${props => props.theme.colors.mainLightFontColor};
`

const FooterMaxWidthContainer = styled(MaxWidthContainer)`
  display: flex;
  justify-content: space-between;
  position: relative;
  min-height: 160px;
  align-items: center;
  padding: 3rem 8rem;
`

const Column = styled.div`  
`

const Logo = styled.img`
  width: 20rem;
  padding: 5px 0px 10px 0px;
  display: block;
  margin: 0 auto;
`

const Menu = styled.div`
`

const MenuItem = styled.a`
  color: inherit;
  padding: 5px 10px;
  border-color: ${props => props.theme.colors.mainLightFontColor};
  border-right-style: solid;
  font-size: 18px;
`

const Copyright = styled.p`
  padding: 10px 0px;
  margin: 5px;
  font-size: 12px;
`

const ContactItem = styled.div`
  display: flex;
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
  padding: 0px 10px;
  font-size: 15px;
  display: flex;
  align-items: center;
`

const SquareButton = styled.button`
  border-radius: 5px;
  border: none;
  margin: 5px 0px;
  display: flex;
`

const Map = styled.img`
  width: 25rem;
`


const Footer = () => {
  return (
    <FooterContainer>
      <FooterMaxWidthContainer>
        <Column>
          <Logo src='/static/logo-main-white.png' alt='Logo'/>
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
            <Circle><Icon className='fas fa-phone-alt fa-lg'/></Circle>
            <CircleInfo>+420 321 724 470</CircleInfo>
          </ContactItem>
          <ContactItem>
            <Circle><Icon className='fas fa-envelope fa-lg'/></Circle>
            <CircleInfo>info@zlatnictvivanek.cz</CircleInfo>
          </ContactItem>
          <SquareButton><Icon className='fab fa-facebook-f fa-2x'/></SquareButton>
          <SquareButton><Icon className='fab fa-instagram fa-2x'/></SquareButton> 
        </Column>
        <Column>
          <ContactItem>
            <Circle><Icon className='fas fa-map-marker-alt fa-lg'/></Circle>
            <CircleInfo>Pražská 164<br/>280 02 Kolín</CircleInfo>
          </ContactItem>
          <Map src='/static/map.png' alt='mapa zlatnictví Vaněk'></Map>  
        </Column>
       </FooterMaxWidthContainer>
    </FooterContainer>
  )
}

export default Footer
