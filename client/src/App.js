import React from 'react';
import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  ApolloProvider,
} from '@apollo/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material';
import { Cart, Home, Products } from './pages';

const customTheme = createTheme({
  palette: {
    dark: {
      main: '#363636',
      contrastText: '#F5F5F5',
    },
  },
});

const httpLink = createHttpLink({
  uri: '/graphql',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={customTheme}>
        <CssBaseline />
        <Router>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/products/:type" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;
