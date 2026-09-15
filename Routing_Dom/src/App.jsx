import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import ProductDetails from './ProductDetails'
import Axios from './Axios'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="*" element={<Navigate to="/" replace />} />
        <Route path="/Axios" element={<Axios />} />
      </Routes>
    </Router>
  )
}

export default App
