import React, { useState, useEffect } from 'react'
import Title from './ComplexTitle'
import styled from 'styled-components'

const url = 'https://www.course-api.com/react-store-products'

const Products = ({ className }) => {
  const [products, setProducts] = useState([])

  const fetchProducts = async () => {
    try {
      const resp = await fetch(url)
      const products = await resp.json()
      setProducts(products)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <section className={className}>
      <Title title='all products' />
      <div className='products-center'>
        {products.map((product) => {
          const { id, name, price, image } = product
          return (
            <article key={id}>
              <img src={image} alt={name} />
              <footer>
                <h4>{name}</h4>
                <p>${price}</p>
              </footer>
            </article>
          )
        })}
      </div>
    </section>
  )
}

const StyledProducts = styled(Products)`
  padding: 5rem 2rem;
  background: var(--grey);
  .products-center {
    margin: 2rem 0;
    display: grid;
    gap: 2rem;
  }
  @media (min-width: 768px) {
    .products-center {
      grid-template-columns: 1fr 1fr;
    }
  }
  @media (min-width: 992px) {
    .products-center {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  article {
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
      /* h4::before {
        content: 'name : ';
        color: red;
      } */
      p {
        color: var(--primary);
      }
    }
  }
`

export default StyledProducts
