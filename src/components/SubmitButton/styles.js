import styled from 'styled-components'

export const Button = styled.button`
  padding: 10px;
  width: 100%;
  background-color: #0095f6;
  color: white;
  outline: none;
  border: 1px solid transparent;
  margin: 10px;
  font-weight: bold;
  &[disabled] {
    opacity: 0.3;
  }
`
