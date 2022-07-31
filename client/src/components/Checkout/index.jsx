import React, { useEffect, useState } from 'react';
import { Button, Grid, Typography } from '@mui/material';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';

function Checkout({ purchases }) {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const totalTemp = purchases.reduce((acc, current) => {
      return acc + current.item.price;
    }, 0);
    setTotal(totalTemp);
  }, [purchases]);

  return (
    <Grid container>
      <Grid item xs={6}>
        <Typography gutterBottom textTransform="capitalize">
          shopping cart
        </Typography>
        <Typography gutterBottom textTransform="capitalize">
          tax
        </Typography>
        <Typography gutterBottom textTransform="capitalize">
          total
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography gutterBottom textTransform="capitalize">
          £{total}
        </Typography>
        <Typography gutterBottom textTransform="capitalize">
          £{(total * 0.2).toFixed(2)}
        </Typography>
        <Typography gutterBottom textTransform="capitalize">
          £{(total + total * 0.2).toFixed(2)}
        </Typography>
      </Grid>
      <Button
        variant="contained"
        disableElevation
        endIcon={<ShoppingCartCheckoutIcon />}
        sx={{ bgcolor: 'warning.light' }}
      >
        <Typography textTransform="capitalize">checkout</Typography>
      </Button>
    </Grid>
  );
}

export default Checkout;
