import { StylesProvider } from '@material-ui/core/styles';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Product from './pages/Product';
import ProductList from './pages/ProductList';
import Login from './pages/Login';
import Register from './pages/Register';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";



const App = () => {
  return (
    <StylesProvider injectFirst>
    <Router>
        <Routes>
            <Route path="/" exact element={<Home/>}/>
            <Route path="/product" exact element={<Product/>}/>
            <Route path="/product-list" exact element={<ProductList/>}/>
            <Route path="/register" exact element={<Register/>}/>
            <Route path="/login" exact element={<Login/>}/>
            <Route path="/cart" exact element={<Cart/>}/>
        </Routes>
    </Router>
    </StylesProvider>
  );
}

export default App