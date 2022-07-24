import React from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { Navbar } from '../../components';
import model from '../../assets/images/model.jpg';

function Home() {
  return (
    <Box>
      <Navbar />
      <Container
        maxWidth={false}
        sx={{
          backgroundImage: `url(${model})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          minHeight: '100vh',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            bottom: 0,
            height: '100vh',
            left: 0,
            right: 0,
            backgroundColor: 'rgb(200, 200, 200, 0.55)',
          }}
        ></Box>
      </Container>
      <Container
        maxWidth={false}
        sx={{
          position: 'absolute',
          bottom: 0,
          top: '45%',
        }}
      >
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          marginTop={0}
        >
          <Typography
            variant="h4"
            marginTop={2}
            marginBottom={3}
            color="#000"
            fontWeight="bold"
          >
            Autumn Collection 2022
          </Typography>
          <NavLink to="/products/featured" style={{ textDecoration: 'none' }}>
            <Button
              type="submit"
              variant="contained"
              disableElevation
              sx={{ borderRadius: '100px' }}
            >
              shop now
            </Button>
          </NavLink>
        </Box>
      </Container>
    </Box>
  );
}

export default Home;
