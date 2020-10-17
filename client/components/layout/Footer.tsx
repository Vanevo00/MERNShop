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
  padding: 10px 0px;
  margin: 5px;
  font-size: 15px;
`

const ContactItem = styled.div`
  display: flex;
  justify-content: space-between;
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
  padding: 5px;
`

const SquareButton = styled.button`
  border-radius: 5px;
  border: none;
  margin: 5px;
`

const Map = styled.img`
  width: 100%;
  height: 200;
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
        <Map src='https://www.google.com/maps/place/Pra%C5%BEsk%C3%A1+164,+Kol%C3%ADn+I,+280+02+Kol%C3%ADn/@50.0284553,15.1980657,18z/data=!4m5!3m4!1s0x470c1520e6fefded:0x3b0e02eea7bfcef7!8m2!3d50.0284519!4d15.1988328'alt='Mapa'></Map>    
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
