import React from 'react'
import sizes from '../../common/constants/sizes'
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

  @media screen and (max-width: ${sizes.small}px) {
    padding: 3rem 1rem 3rem 1rem;
  }
`

const Column = styled.div`  
  @media screen and (max-width: ${sizes.small}px) {
    display: block;
    padding: 2rem 1rem;
  }
`

const Logo = styled.img`
  width: 20rem;
  padding: 5px 0 10px 0;
  display: block;
  margin: 0 auto;

  @media screen and (max-width: ${sizes.large}px) {
    width: 10rem;
  }

  @media screen and (max-width: ${sizes.small}px) {
    display: none;
  }
`

const Menu = styled.div`
  padding: 10px 0;
`

const MenuItem = styled.a`
  color: inherit;
  padding: 5px 10px;
  border-color: ${props => props.theme.colors.mainLightFontColor};
  border-right-style: solid;
  border-width: thin;
  font-size: 18px;
  font-family: ${props => props.theme.fonts.menu};

  &:hover {
    opacity: 0.8;
  }

  @media screen and (max-width: ${sizes.largest}px) {
    font-size: 16px;
  }

  @media screen and (max-width: ${sizes.large}px) {
    font-size: 14px;
    border: none;
  }

  @media screen and (max-width: ${sizes.small}px) {
    display: flex;
  }
`

const Copyright = styled.p`
  padding: 10px 0;
  margin: 5px;
  font-size: 12px;

  @media screen and (max-width: ${sizes.large}px) {
    display: none;
  }
`

const ContactItem = styled.a`
  display: flex;
  color: ${props => props.theme.colors.mainLightFontColor};
`

const Circle = styled.div`
  border-radius: 50%;
  width: 30px;
  height: 30px;
  background-color: ${props => props.theme.colors.mainLightFontColor};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem 0rem;
`

const Icon = styled.i`
  color: ${props => props.theme.colors.main};
`

const CircleInfo = styled.p`
  padding: 0 10px;
  font-size: 15px;
  display: flex;
  align-items: center;

  @media screen and (max-width: ${sizes.large}px) {
    font-size: 13px;
    padding: 0 5px;
  };
  @media screen and (max-width: ${sizes.small}px) {
    display: none;
  }
`

const SquareButtonContainer = styled.div`
  display: flex;

  @media screen and (max-width: ${sizes.small}px) {
    display: flex;
    flex-direction: column;
  }
`

const SquareButton = styled.a`
  border-radius: 3px;
  border: none;
  margin: 5px;
  padding: 5px;
  width: 3rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.colors.mainLightFontColor};
`

const AboutItem = styled.p`
  width: 35rem;

  @media screen and (max-width: ${sizes.large}px) {
    width: auto;
  }
`

const AboutHead = styled.p`
  font-size: 18px;
  font-family: ${props => props.theme.fonts.menu};

  @media screen and (max-width: ${sizes.large}px) {
    display: flex;
    font-size: 14px;
  }

  @media screen and (max-width: ${sizes.small}px) {
    display: none;
  }
`

const AboutText = styled.p`
  font-size: 13px;
  padding: 10px 0;

  @media screen and (max-width: ${sizes.large}px) {
    display: flex;
    font-size: 11px;
  }

  @media screen and (max-width: ${sizes.small}px) {
    display: none;
  }
`


const Footer = () => {
  return (
    <FooterContainer>
      <FooterMaxWidthContainer>
        <Column>
          <Logo src='/static/logo-main-white.png' alt='Logo'/>
          <Menu>
            <MenuItem href=''>Menu</MenuItem>
            <MenuItem href=''>Zakázky</MenuItem>
            <MenuItem href=''>Náš příběh</MenuItem>
            <MenuItem href=''>Otázky</MenuItem>
            <MenuItem href=''>Kontakty</MenuItem>
          </Menu>
          <Copyright>
            Copyright ©2020 Zlatnictví Vaněk<br/>Zásady ochrany osobních údajů
          </Copyright>
        </Column>
        <Column>
          <ContactItem href='https://www.google.com/maps/place/Pra%C5%BEsk%C3%A1+164,+Kol%C3%ADn+I,+280+02+Kol%C3%ADn/@50.0284553,15.1966441,17z/data=!3m1!4b1!4m5!3m4!1s0x470c1520e6fefded:0x3b0e02eea7bfcef7!8m2!3d50.0284519!4d15.1988328?shorturl=1' target='_blank'>
            <Circle><Icon className='fas fa-map-marker-alt fa-lg'/></Circle>
            <CircleInfo>Pražská 164<br/>280 02 Kolín</CircleInfo>
          </ContactItem> 
          <ContactItem href='tel:+420321724470' target='_blank'>
            <Circle><Icon className='fas fa-phone-alt fa-lg'/></Circle>
            <CircleInfo>+420 321 724 470</CircleInfo>
          </ContactItem>
          <ContactItem href='mailto:info@zlatnictvivanek.cz' target='_blank'>
            <Circle><Icon className='fas fa-envelope fa-lg'/></Circle>
            <CircleInfo>info@zlatnictvivanek.cz</CircleInfo>
          </ContactItem>
        </Column>
        <Column>
          <AboutItem>
            <AboutHead>Náš příběh</AboutHead>
            <AboutText>V naší rodinné firmě získáte nadstandardní služby a servis, které jsou založeny na dlouholetých zkušenostech v oboru.<br/><br/>Je pro nás důležitá nejen kvalita a vysoká odbornost, ale zároveň i vztah a osobní přístup ke všem zákazníkům.</AboutText>
          </AboutItem>
          <SquareButtonContainer>
            <SquareButton href='https://www.facebook.com/Zlatnictv%C3%AD-Van%C4%9Bk-zal-1991-393430250808811/' target='_blank'><Icon className='fab fa-facebook-f fa-2x'/></SquareButton>
            <SquareButton href='https://www.instagram.com/jewelry_vanek/' target='_blank'><Icon className='fab fa-instagram fa-2x'/></SquareButton> 
          </SquareButtonContainer>
        </Column>
       </FooterMaxWidthContainer>
    </FooterContainer>
  )
}

export default Footer
