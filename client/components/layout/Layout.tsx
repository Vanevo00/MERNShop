import React, { FunctionComponent } from 'react'
import Head from 'next/head'

interface Props {
  title?: string
}

const Layout: FunctionComponent<Props> = ({ title = 'Vaněk | Šperky s drahými kameny', children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel='icon' href='/static/favicon-32x32.png'/>
        <link rel="apple-touch-icon" sizes="180x180" href='/static/apple-touch-icon.png'/>
      </Head>
      {children}
    </>
  )
}

export default Layout
