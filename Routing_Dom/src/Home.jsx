import { Link } from 'react-router-dom'
import NavBar from './component/NavBar'

const products = [
  { id: '1', name: 'Laptop' },
  { id: '2', name: 'Phone' },
  { id: '3', name: 'Tablet' },
]

const Home = () => {
  return (
    <>
      <NavBar />
      <div style={{ padding: '20px' }}>
        <h1>Home Page</h1>
        <p>Choose a product:</p>
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <Link to={`/product/${product.id}`}>{product.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default Home
