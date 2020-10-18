import { createGlobalStyle, ThemeProps } from 'styled-components'

const GlobalStyle = createGlobalStyle<ThemeProps<any>>`
  * {
    box-sizing: border-box;
  }
  
  html {
    font-family: ${props => props.theme.fonts.default};
  }
  
  input {
    font-family: ${props => props.theme.fonts.default};
  }
  
  a {
    text-decoration: none;
  }
  
  body {
    margin: 0;
    padding: 0;
    color: ${props => props.theme.colors.mainFontColor};
    overflow-x: hidden; 
  }
  
  h1, h2, h3, p {
    margin: 0;
  }
  
  input:focus {
    outline: none;
  }
`

export default GlobalStyle
