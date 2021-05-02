import React, { useState, useEffect } from 'react'
import Title from './ComplexTitle'
import styled from 'styled-components'
import Product from './Product'
const url = 'https://www.course-api.com/react-store-products'

const Products = () => {
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
    <Wrapper>
      <Title title='all products' />
      <div className='products-center'>
        {products.map((product) => {
          return <Product key={product.id} {...product} />
        })}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
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
`

export default Products
