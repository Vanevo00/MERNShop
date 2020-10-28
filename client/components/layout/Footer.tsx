import React from 'react'
import sizes from '../../common/constants/sizes'
import styled from 'styled-components'
import { MaxWidthContainer } from '../atoms/MaxWidthContainer'

const FooterContainer = styled.footer`
  width: 100%;
  background-color: #D9DDDC;
`

const Stripe = styled.div`
  width: 100%;
  height: 1rem;
  background-color: ${props => props.theme.colors.main};
`

const FooterMaxWidthContainer = styled(MaxWidthContainer)`
  display: flex;
  justify-content: space-between;
  position: relative;
  min-height: 160px;
  padding: 3rem 8rem;
  font-size: 14px;
`
const MainColumn = styled.div`
  display: flex;
  justify-content: space-between;
`

const Column = styled.div`
  padding: 3rem 9rem 3rem 0;  
`

const HeadColumn = styled.p`
  color: ${props => props.theme.colors.main};
  font-size: 16px;
  padding: 1rem 0;
  font-family: ${props => props.theme.fonts.menu};
  
`

const ColumnItem = styled.p`
  padding: 5px 0;
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
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 1rem 0;
`

const Copyright = styled.p`
`

const Footer = () => {
  return (
    <FooterContainer>
      <Stripe></Stripe>
      <FooterMaxWidthContainer>
        <MainColumn>
          <Column>
            <HeadColumn>ZÁKAZNICKÝ SERVIS</HeadColumn>
            <ColumnItem>Údržba a opravy šperků</ColumnItem>
            <ColumnItem>Reklamace a vrácení</ColumnItem>
            <ColumnItem>Sjednejte si schůzku</ColumnItem>
            <ColumnItem>Často kladané otázky</ColumnItem>
            <ColumnItem>Dárkové poukazy</ColumnItem>
          </Column>
          <Column>
            <HeadColumn>O NÁS</HeadColumn>
            <ColumnItem>Náš příběh</ColumnItem>
            <ColumnItem>Kamenná prodejna</ColumnItem>
            <ColumnItem>Kontaktujte nás</ColumnItem>
          </Column>
          <Column>
            <HeadColumn>PRÁVNÍ PODKLADY</HeadColumn>
            <ColumnItem>Obchodní podmínky</ColumnItem>
            <ColumnItem>Zásady zpracování osobních údajů</ColumnItem>
          </Column>
        </MainColumn>
        <MainColumn>
          <Column>
            <HeadColumn>Sledujte nás</HeadColumn>
            <SquareButtonContainer>
             <SquareButton href='https://www.facebook.com/Zlatnictv%C3%AD-Van%C4%9Bk-zal-1991-393430250808811/' target='_blank'><Icon className='fab fa-facebook-f fa-2x'/></SquareButton>
             <SquareButton href='https://www.instagram.com/jewelry_vanek/' target='_blank'><Icon className='fab fa-instagram fa-2x'/></SquareButton> 
            </SquareButtonContainer>
          </Column>
        </MainColumn>
       </FooterMaxWidthContainer>
       <EndStripe>
         <Copyright>Copyright ©2020 Zlatnictví Vaněk</Copyright>
       </EndStripe>
    </FooterContainer>
  )
}

export default Footer
