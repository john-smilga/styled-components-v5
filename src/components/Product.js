import React from 'react'
import styled from 'styled-components'
const Product = ({ image, name, price }) => {
  return (
    <Wrapper>
      <img src={image} alt={name} />
      <footer>
        <h4>{name}</h4>
        <p>${price}</p>
      </footer>
    </Wrapper>
  )
}

const Wrapper = styled.article`
  background: var(--white);
  border-radius: 0.25rem;
  transition: all 0.5s ease-in-out;
  :hover {
    box-shadow: 0 3px 5px #000;
    img {
      opacity: 0.8;
    }
  }
  img {
    height: 225px;
    width: 100%;
    display: block;
    object-fit: cover;
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
    transition: all 0.5s ease-in-out;
  }
  footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
    h4 {
      text-transform: capitalize;
    }
    p {
      color: var(--primary);
    }
  }
`

export default Product
