import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { Home, Products, About, Contact, Auth } from './pages';
import { createTheme, ThemeProvider } from '@mui/material';

const customTheme = createTheme({
  palette: {
    dark: {
      main: '#363636',
      // contrastText: '#F5F5F5',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="auth" element={<Auth />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
