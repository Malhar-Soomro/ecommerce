import { StylesProvider } from '@material-ui/core/styles';
import ProductList from './pages/ProductList';


const App = () => {
  return (
    <StylesProvider injectFirst>
        <ProductList/>
    </StylesProvider>
  )
}

export default App