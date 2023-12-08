import { StylesProvider } from '@material-ui/core/styles';
import Cart from './pages/Cart';


const App = () => {
  return (
    <StylesProvider injectFirst>
        <Cart/>
    </StylesProvider>
  )
}

export default App