import Home from "./pages/Home";
import AllProducts from "./pages/AllProducts";
import ViewProduct from "./pages/ViewProduct";
import Cart from "./pages/Cart";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import {
  BrowserRouter as Router,
  Routes,
  Navigate,
  Route
} from "react-router-dom";




function App() {
  const user= true
  return (
    
    <Router>
      <Alert/>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/*" element={<AllProducts />} />
        <Route path="/product/*" element={<ViewProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<SignIn />}>
              
        </Route>
        <Route path="/register" element={<SignUp />} />
        <Route path="*"  element={
        <main style={{ padding: "1rem" }}>
          <p>There's nothing here!</p>
        </main>
        }/>
        
        
        
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
