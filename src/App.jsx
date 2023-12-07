import { StylesProvider } from '@material-ui/core/styles';
import Login from './pages/Login';


const App = () => {
  return (
    <StylesProvider injectFirst>
        <Login/>
    </StylesProvider>
  )
}

export default App