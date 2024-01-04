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
  Navigate
} from "react-router-dom";
import Success from './pages/Success';

const App = () => {

  const user = true;

  return (
    <StylesProvider injectFirst>
    <Router>
        <Routes>
            <Route path="/" exact element={<Home/>}/>
            <Route path="/product/:id" exact element={<Product/>}/>
            <Route path="/products/:category" exact element={<ProductList/>}/>
            <Route path="/register" exact element={ user ? <Navigate to="/"/> : <Register/>}/>
            <Route path="/login" exact element={ user ? <Navigate to="/" /> : <Login/>}/>
            <Route path="/cart" exact element={<Cart/>}/>
            <Route path="/success" exact element={<Success/>}/>
        </Routes>
    </Router>
    </StylesProvider>
  );
}

export default App