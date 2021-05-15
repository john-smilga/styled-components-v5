import React, { useState, useEffect } from 'react'
import Title from './ComplexTitle'
import styled from 'styled-components'
import Product from './Product'
const products = [
  { id: 1, name: 'chair', price: 30 },
  { id: 2, name: 'bed', price: 150 },
  { id: 3, name: 'couch', price: 550 },
]

const Products = () => {
  return (
    <section>
      <Title title='all products' />
      <div className='products-center'>
        {products.map((product) => {
          return <Product key={product.id} {...product} />
        })}
      </div>
    </section>
  )
}

export default Products
