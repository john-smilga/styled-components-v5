import styled, { keyframes } from 'styled-components'

const spinner = keyframes`
to {
    transform: rotate(360deg);
  }
`

const Loading = styled.div`
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
  border: 5px solid #ccc;
  border-top-color: var(--primary);
  animation: ${spinner} 0.6s linear infinite;
  margin: 0 auto;
`

export default Loading
