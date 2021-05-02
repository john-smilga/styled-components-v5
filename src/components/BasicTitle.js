import styled from 'styled-components'

const BasicTitle = styled.h1`
  text-transform: capitalize;
  text-align: center;
  /* color: ${(props) => props.special && 'red'}; */
  /* color: ${(props) => (props.special ? 'red' : null)}; */
  /* color: ${(props) => (props.special ? 'red' : 'blue')}; */
`

export default BasicTitle
