import React from 'react'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../components/GlobalStyle'
import theme from '../components/ThemeProvider'

import type { AppProps } from 'next/app'

const JewelryStore = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <link href="https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap" rel="stylesheet"/>
        <script src="https://kit.fontawesome.com/3bca9cb446.js" crossOrigin="anonymous"/>
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle/>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default JewelryStore
