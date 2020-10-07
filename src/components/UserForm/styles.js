import styled, { css } from 'styled-components'
import { userFormActions } from './'
export const Form = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;

  margin: 0 20px 5px 20px;
  box-sizing: border-box;
`

export const Input = styled.input`
  font-weight: 400;
  margin: 10px 0;
  outline: none;
  padding: 10px;
  width: 100%;
  background: #fff;
  color: #525865;
  border-radius: 4px;
  border: 1px solid #afacac;
  box-shadow: inset 1px 2px 8px rgba(0, 0, 0, 0.07);
  &:hover {
    box-shadow: inset 1px 2px 8px rgba(0, 0, 0, 0.02);
  }
  &:focus {
    color: #4b515d;
    border: 1px solid #7f7c7c;
    box-shadow: inset 1px 2px 4px rgba(0, 0, 0, 0.01),
      0px 0px 8px rgba(0, 0, 0, 0.2);
  }
  &[disabled] {
    opacity: 0.3;
  }
`
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
export const Title = styled.h2`
  text-align: center;
  color: #525865;
  font-weight: 400;
  font-size: 18px;
`
export const Small = styled.small`
  color: #262626;
  font-size: 14px;
  margin: 15px;
  text-align: center;
  font-weight: 400;
  & a {
    text-decoration: none;
    color: #0095f6;
    font-weight: bold;
  }
  ${(props) =>
    props.display === userFormActions.REGISTER &&
    css`
       {
        display: none;
      }
    `}
`

export const Error = styled.span`
  color: red;
  text-align: center;
  font-weight: 300px;
  font-size: 14px;
  &::before {
    content: ' ⚠ ';
  }
`
