import React from 'react'
import styled from 'styled-components'
import { colors, setupBorder } from '../utils'
const ComplexTitle = ({ title, className }) => {
  return (
    <div className={className}>
      <h1>{title}</h1>
      <div className='underline'></div>
      <div className='box'></div>
    </div>
  )
}

const Wrapper = styled(ComplexTitle)`
  h1 {
    text-transform: capitalize;
    text-align: center;
  }
  .underline {
    width: 5rem;
    height: 0.25rem;
    background: ${colors.primary};
    margin: 0 auto;
  }
  .box {
    height: 10px;
    border: ${setupBorder({ width: 5, color: 'green' })};
  }
`

export default Wrapper
