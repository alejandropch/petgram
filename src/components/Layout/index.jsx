import React from 'react'
import { Div, Title, Subtitle } from './styles'
import { Helmet } from 'react-helmet'

export const Layout = ({ title, subtitle, children }) => {
  return (
    <>
      <Helmet>
        {title && <title>{title} | Petgram &#128021;</title>}
        {subtitle && <meta name='description' content={subtitle} />}
      </Helmet>
      <Div>
        {title && <Title>{title}</Title>}
        {subtitle && <Subtitle>{subtitle}</Subtitle>}

        {children}

      </Div>
    </>
  )
}
