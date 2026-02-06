  
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";  
import Layout from "./components/Layout";
import ProductDetails from "./pages/ProductDetails";      
function App() {
  return (
    <Layout>
      <Routes>    
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} /> 
        <Route path="/products/:id" element={<ProductDetails />} />
      </Routes>
      {/* Your routes and components will go here */}
    </Layout>
  );
}

export default App;
