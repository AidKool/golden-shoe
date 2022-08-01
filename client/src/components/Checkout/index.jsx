import React, { useEffect, useState } from 'react';
import { Button, Grid, Typography } from '@mui/material';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { useMutation } from '@apollo/client';
import { usePurchaseContext } from '../../context/PurchaseContext';
import { CHECKOUT } from '../../utils/mutations';

function Checkout({ purchases }) {
  const [total, setTotal] = useState(0);
  const { valid } = usePurchaseContext();
  const [checkout] = useMutation(CHECKOUT);

  useEffect(() => {
    const totalTemp = purchases.reduce((acc, current) => {
      return acc + current.item.price * current.units;
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
        disabled={!valid}
        endIcon={<ShoppingCartCheckoutIcon />}
        sx={{ bgcolor: 'warning.light' }}
        onClick={async () => {
          const { data } = await checkout();
          if (data) {
            alert('Checkout complete');
            setTimeout(() => {
              window.location.reload(false);
            }, 1000);
          } else {
            alert('There was an error');
          }
        }}
      >
        <Typography textTransform="capitalize">checkout</Typography>
      </Button>
    </Grid>
  );
}

export default Checkout;
