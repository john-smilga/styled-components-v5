import React from 'react'
import styled from 'styled-components'
const Card = () => {
  return (
    <StyledCard>
      <img
        src='https://dl.airtable.com/.attachments/97a67b32630a587e482863a61861607b/547d4b22/product-6.jpg'
        alt='product'
      />
      <footer>
        <h4>product name</h4>
        <p>$15</p>
      </footer>
    </StyledCard>
  )
}

const StyledCard = styled.article`
  width: 90vw;
  max-width: 300px;
  background: var(--white);
  border-radius: 0.25rem;
  img {
    width: 100%;
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
  }
  footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
    h4 {
      text-transform: capitalize;
      /* ::before {
        content: 'name : ';
        color: red;
      } */
    }

    p {
      color: var(--primary);
      font-weight: 700;
    }
  }
  transition: all 0.5s ease-in-out;
  :hover {
    box-shadow: 0 3px 3px #222;
    cursor: pointer;
  }
  @media (min-width: 768px) {
    min-width: 600px;
  }
`

export default Card
