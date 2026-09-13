import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact' 
import ProductDetails from './ProductDetails'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </Router>
  )
}

export default App
