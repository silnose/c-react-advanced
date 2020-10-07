import styled from 'styled-components'
import { fadeIn } from '../../styles/animation.js'

export const Image = styled.img`
  ${fadeIn()}
  box-shadow: 0 10px 14px rgba(0, 0, 0, .2);
  height: 100%;
  object-fit: cover;
  position: absolute;
  border-radius: 10px;
  top: 0;
  width: 100%;
`

export const ImgWrapper = styled.div`
  padding: 56.25% 0 0 0;
  height: 0;
  display: block;
  border-radius: 10px;
  position: relative;
`

export const Card = styled.article`
  margin: 5px;
  height: 320px;
`
