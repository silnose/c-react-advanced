import styled from 'styled-components'
import { Link as LinkRouter } from '@reach/router'

export const Link = styled(LinkRouter)`
  text-decoration: none;
  justify-self: center;
`

export const Image = styled.img`
  width: 100%;
  object-fit: cover;
  border-radius: 5px;
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 10px;
  margin: 0 10px;
`
