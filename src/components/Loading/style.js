import styled, { keyframes } from 'styled-components'

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`

export const Spinner = styled.div`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);

  border-top: 2px solid #f3abbd;
  border-right: 2px solid #f3abbd;
  border-bottom: 2px solid #f3abbd;
  border-left: 4px solid #ed59a3;
  background: transparent;
  width: 24px;
  height: 24px;
  border-radius: 50%;
`
