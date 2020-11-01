import React from 'react'
import sizes from '../../common/constants/sizes'
import styled from 'styled-components'
import { MaxWidthContainer } from '../atoms/MaxWidthContainer'

const FooterContainer = styled.footer`
  width: 100%;
  font-size: 14px;
  display: grid;
  grid-template-columns: 1fr 2fr 2fr 2fr auto 1fr;
  grid-template-rows: 1rem auto 2rem;
  grid-gap: 1rem;
  grid-template-areas: 
    's s s s s s'
    '. a b c d .'
    'e e e e e e';
  `


const Stripe = styled.div`
  grid-area: s;
  grid-column: 1 / -1;
  background-color: ${props => props.theme.colors.main};
`

const ColumnA = styled.div`
  padding: 1rem 0;  
  grid-area: a;
`
const ColumnB = styled.div` 
  padding: 1rem 0;
  grid-area: b;
`
const ColumnC = styled.div` 
  padding: 1rem 0; 
  grid-area: c;
`
const ColumnD = styled.div` 
  padding: 1rem 0; 
  grid-area: d;
  justify-self: end;
`

const HeadColumn = styled.p`
  color: ${props => props.theme.colors.main};
  font-size: 16px;
  padding: 1rem 0;
  font-family: ${props => props.theme.fonts.menu};
  
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
  grid-column: 1 / -1;
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
        <ColumnItem href='#'>Údržba a opravy šperků</ColumnItem>
        <ColumnItem href='#'>Reklamace a vrácení</ColumnItem>
        <ColumnItem href='#'>Sjednejte si schůzku</ColumnItem>
        <ColumnItem href='#'>Často kladané otázky</ColumnItem>
        <ColumnItem href='#'>Dárkové poukazy</ColumnItem>
      </ColumnA>
      <ColumnB>
        <HeadColumn>O NÁS</HeadColumn>
        <ColumnItem href='#'>Náš příběh</ColumnItem>
        <ColumnItem href='#'>Kamenná prodejna</ColumnItem>
        <ColumnItem href='#'>Kontaktujte nás</ColumnItem>
      </ColumnB>
      <ColumnC>
        <HeadColumn>PRÁVNÍ PODKLADY</HeadColumn>
        <ColumnItem href='#'>Obchodní podmínky</ColumnItem>
        <ColumnItem href='#'>Zásady zpracování osobních údajů</ColumnItem>
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
