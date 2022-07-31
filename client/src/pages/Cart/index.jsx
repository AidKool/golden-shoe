import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import { Navbar, CartList, Checkout } from '../../components';
import { useQuery } from '@apollo/client';
import { GET_ALL_PURCHASES } from '../../utils/queries';

function Cart() {
  const { data, loading } = useQuery(GET_ALL_PURCHASES);
  const purchases = data?.getAllPurchases;

  return (
    <Box>
      {loading ? (
        'Loading...'
      ) : (
        <>
          <Navbar />
          <Container maxWidth="lg" sx={{ marginY: 8 }}>
            <Typography
              variant="h4"
              textAlign="center"
              textTransform="uppercase"
              paragraph
              sx={{ padding: 3 }}
            >
              my cart
            </Typography>
            <Grid
              container
              columnGap={1}
              display="flex"
              justifyContent="space-between"
            >
              <Grid item xs={12} sm={8} md={6}>
                <CartList purchases={purchases} />
              </Grid>
              <Grid
                item
                xs={12}
                sm={3}
                md={4}
                display="flex"
                justifyContent="center"
                alignItems="flex-start"
              >
                <Checkout purchases={purchases} />
              </Grid>
            </Grid>
          </Container>
        </>
      )}
    </Box>
  );
}

export default Cart;
