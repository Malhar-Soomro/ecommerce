import Home from "./pages/Home"
import { StylesProvider } from '@material-ui/core/styles';


const App = () => {
  return (
    <StylesProvider injectFirst>
    <Home/>
    </StylesProvider>
  )
}

export default App