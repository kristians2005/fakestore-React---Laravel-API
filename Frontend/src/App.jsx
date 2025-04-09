import { useState, useEffect } from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Header from "./components/headers/header"
import axios from "axios"
import Products from "./components/Products/Products"
import ProductsShow from "./components/Products/ProductsShow"
import Background from "./components/Background"
import ProductsCreate from "./components/Products/ProductsCreate"

function App() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/products")
        setProducts(response.data)
        setLoading(false)
      } catch (error) {
        console.log(error)
      }
    }
    fetchProducts()
  }, [])

  return (
    <Router>
      <div className="h-full w-screen">
        <Background />
        <Header />
        <Routes>
          <Route path="/" element={<Products products={products} isLoading={loading} />} />
          <Route path="/products/:id" element={<ProductsShow products={products} />} />
          <Route path="/products/create" element={<ProductsCreate />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
