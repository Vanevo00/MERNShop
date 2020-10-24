import React from 'react'
import { MaxWidthContainer } from '../atoms/MaxWidthContainer'
import SectionHeading from '../atoms/SectionHeading'
import styled from 'styled-components'

const PickedForYouContainer = styled(MaxWidthContainer)`
  display: flex;
  justify-content: center;
`

const PickedForYou = () => {
  return (
    <PickedForYouContainer>
      <SectionHeading>Vybráno pro vás</SectionHeading>
    </PickedForYouContainer>
  )
}

export default PickedForYou
