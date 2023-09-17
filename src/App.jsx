import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import NoPage from "./pages/noPage/NoPage";
import MyState from "./context/data/myState";
import Signup from "./pages/registration/signup/Signup";
import Login from "./pages/registration/login/Login";
import ProductInfo from "./pages/productInfo/ProductInfo";
import AllProduct from "./pages/allProduct/AllProduct";
import ScrollTop from "./components/scrollTop/ScrollTop";
import FeedBack from "./pages/feedback/FeedBack";
import AllProductInfo from "./pages/allProductInfo/AllProductInfo";


function App() {
  return (
    <MyState>
      <Router>
      <ScrollTop />
       <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/about" element={ <About/> } />
        <Route path="/contact" element={ <Contact/> } />
        <Route path="/feedback" element={ <FeedBack/> } />
        <Route path="/signup" element={ <Signup/> } />
        <Route path="/login" element={ <Login/> } />
        <Route path="/allproduct" element={ <AllProduct/> } />
        <Route path="/productinfo/:id" element={ <ProductInfo/> } />
        <Route path="/allproduct/productinfo/:id" element={ <AllProductInfo/> } />
        <Route path="/*" element={ <NoPage/> } />
       </Routes>
      </Router>
    </MyState>
  )
}

export default App