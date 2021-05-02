import React from 'react'
import styled from 'styled-components'

const ComplexTitle = ({ title }) => {
  return (
    <StyledTitle>
      <h1>{title}</h1>
      <div className='underline'></div>
    </StyledTitle>
  )
}

const StyledTitle = styled.div`
  h1 {
    text-transform: capitalize;
    text-align: center;
  }
  .underline {
    height: 0.25rem;
    width: 5rem;
    background: var(--primary);
    margin: 0 auto;
  }
`

export default ComplexTitle
