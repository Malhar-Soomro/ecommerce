// import Home from "./pages/Home"
import { StylesProvider } from '@material-ui/core/styles';
import Product from "./pages/Product";


const App = () => {
  return (
    <StylesProvider injectFirst>
    <Product/>
    </StylesProvider>
  )
}

export default App