import React from 'react'
import { useProducts } from '../context/ContextProvider'

function ProductsPage() {
    console.log(useProducts())
  return (
    <div>ProductsPage</div>
  )
}

export default ProductsPage