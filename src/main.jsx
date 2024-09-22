import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider } from '@chakra-ui/react';
import theme from './Components/theme/Theme.js';
import GlobalState from './context/context.jsx';


createRoot(document.getElementById('root')).render(
  <GlobalState>
  <ChakraProvider theme={theme}>
  <StrictMode>
    <App />
  </StrictMode>
  </ChakraProvider>
  </GlobalState>
)
