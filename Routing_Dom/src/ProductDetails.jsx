import { Link, useParams } from 'react-router-dom'
import NavBar from './component/NavBar'

const productList = {
  1: { name: 'Laptop', price: '$999', description: 'A lightweight laptop for work and study.' },
  2: { name: 'Phone', price: '$699', description: 'A smart phone with excellent camera quality.' },
  3: { name: 'Tablet', price: '$499', description: 'A portable tablet for entertainment and productivity.' },
}

function ProductDetails() {
  const { id } = useParams()
  const product = productList[id]

  if (!product) {
    return (
      <>
        <NavBar />
        <div style={{ padding: '20px' }}>
          <h1>Product Not Found</h1>
          <Link to="/">Go back home</Link>
        </div>
      </>
    )
  }

  return (
    <>
      <NavBar />
      <div style={{ padding: '20px' }}>
        <h1>Product Details</h1>
        <p>Product ID: {id}</p>
        <p>Name: {product.name}</p>
        <p>Price: {product.price}</p>
        <p>Description: {product.description}</p>
        <Link to="/">Back to Home</Link>
      </div>
    </>
  )
}

export default ProductDetails
