import { StylesProvider } from '@material-ui/core/styles';
import Register from './pages/Register';


const App = () => {
  return (
    <StylesProvider injectFirst>
        <Register/>
    </StylesProvider>
  )
}

export default App