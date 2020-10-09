import React from 'react'
import { Helmet } from 'react-helmet'
import { Container, Title, Subtitle } from './styles'
export const Layout = ({ children, title = '', subtitle = '' }) => {
  return (
    <>
      <Helmet>
        <title>{`${title} | Petgram 🐕 `}</title>
        <meta name='description' content={subtitle} />
      </Helmet>
      <Container>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
        {children}
      </Container>
    </>
  )
}
