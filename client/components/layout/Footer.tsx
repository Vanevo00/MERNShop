import React from 'react'
import sizes from '../../common/constants/sizes'
import styled from 'styled-components'
import { MaxWidthContainer } from '../atoms/MaxWidthContainer'

const FooterContainer = styled.footer`
  display: grid;
  font-size: 14px;
  //grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 1rem;
  grid-template-areas: 
    's s s s s s'
    '. a b c d .'
    'e e e e e e';

  @media screen and (max-width: ${sizes.small}px) {
    grid-template-areas:
    's'
    'a'
    'b'
    'c'
    'd'
    'e';
  }

  @media screen and (max-width: ${sizes.large}px) {
    grid-template-areas:
    's s'
    'a b'
    'c d'
    'e e';
  }
`

const Stripe = styled.div`
  height: 1rem;
  grid-area: s;
  background-color: ${props => props.theme.colors.main};
`

const ColumnA = styled.div`
  grid-area: a;
  padding-left: 2rem;
`

const ColumnB = styled.div`
  grid-area: b;
  padding-left: 2rem;
`

const ColumnC = styled.div`
  grid-area: c;
  padding-left: 2rem;
`

const ColumnD = styled.div`
  grid-area: d;
  display: grid;
  justify-self: end;
  align-self: start;
  padding-right: 2rem;

  @media screen and (max-width: ${sizes.large}px) {
    display: grid;
    justify-self: start;
    padding-left: 2rem;
  }
`

const HeadColumn = styled.h3`
  color: ${props => props.theme.colors.main};
  font-size: 16px;
  font-weight: normal;
  padding: 1rem 0;
  font-family: ${props => props.theme.fonts.menu}; 
`

const ItemContainer = styled.div<{ showsOnMobile?: boolean }>`
  @media screen and (max-width: ${sizes.small}px) {
    display: ${props => props.showsOnMobile ? 'block' : 'none'}
  };
`

const ColumnItem = styled.a`
  padding: 5px 0;
  display: flex;
  flex-direction: column;
  position: relative;
  
  &:after{
    content: '';
    position: absolute;
    width: 0; height: 2px;
    display: block;
    margin-top: 15px;
    right: 0;
    background: ${props => props.theme.colors.mainFontColor};
    transition: width .2s ease;
    -webkit-transition: width .2s ease;
  }
 
  &:hover:after{
    width: 50%;
    left: 0;
    background: ${props => props.theme.colors.mainFontColor};
  }
`

const SquareButtonContainer = styled.div`
  display: flex;
`

const Icon = styled.i`
  color: ${props => props.theme.colors.main};
`

const SquareButton = styled.a`
  border-radius: 3px;
  border: none;
  margin: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const EndStripe = styled.div`
  grid-area: e;
  height: 2rem;
  display: grid;
  justify-content: center;
  align-items: center;
  background-color: #D9DDDC;
`

const Copyright = styled.p`
  font-size: 12px;
`

const Footer = () => {
  return (
    <FooterContainer>
      <Stripe></Stripe>
      <ColumnA>
        <HeadColumn>ZÁKAZNICKÝ SERVIS</HeadColumn>
        <ItemContainer showsOnMobile={true}>
          <ColumnItem href='#'>Údržba a opravy šperků</ColumnItem>
          <ColumnItem href='#'>Reklamace a vrácení</ColumnItem>
          <ColumnItem href='#'>Sjednejte si schůzku</ColumnItem>
          <ColumnItem href='#'>Často kladané otázky</ColumnItem>
          <ColumnItem href='#'>Dárkové poukazy</ColumnItem>
        </ItemContainer>
      </ColumnA>
      <ColumnB>
        <HeadColumn>O NÁS</HeadColumn>
        <ItemContainer>
          <ColumnItem href='#'>Náš příběh</ColumnItem>
          <ColumnItem href='#'>Kamenná prodejna</ColumnItem>
          <ColumnItem href='#'>Kontaktujte nás</ColumnItem>
        </ItemContainer>
      </ColumnB>
      <ColumnC>
        <HeadColumn>PRÁVNÍ PODKLADY</HeadColumn>
        <ItemContainer>
          <ColumnItem href='#'>Obchodní podmínky</ColumnItem>
          <ColumnItem href='#'>Zásady zpracování osobních údajů</ColumnItem>
        </ItemContainer>
      </ColumnC>
      <ColumnD>
        <HeadColumn>Sledujte nás</HeadColumn>
        <SquareButtonContainer>
          <SquareButton href='https://www.facebook.com/Zlatnictv%C3%AD-Van%C4%9Bk-zal-1991-393430250808811/' target='_blank'><Icon className='fab fa-facebook-f fa-2x'/></SquareButton>
          <SquareButton href='https://www.instagram.com/jewelry_vanek/' target='_blank'><Icon className='fab fa-instagram fa-2x'/></SquareButton> 
        </SquareButtonContainer>
      </ColumnD>
      <EndStripe>
        <Copyright>Copyright ©2020 Zlatnictví Vaněk</Copyright>
      </EndStripe>
    </FooterContainer>
  )
}

export default Footer
