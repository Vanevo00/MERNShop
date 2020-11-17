import styled from 'styled-components'
import sizes from '../../common/constants/sizes'

export const IconDark = styled.i`
`

export const IconDarkDesktopOnly = styled(IconDark)`
  @media screen and (max-width: ${sizes.small}px) {
    display: none;
  }
`
