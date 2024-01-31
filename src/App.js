import Routers from './Routers'
import { ChakraProvider,} from '@chakra-ui/react'
import theme from './theme';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Routers />
    </ChakraProvider>
  )
}

export default App;
