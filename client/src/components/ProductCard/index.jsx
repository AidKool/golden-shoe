import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActions, Grid, IconButton } from '@mui/material';
import ShareIcon from '@mui/icons-material/Share';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

function ProductCard({ model, image, price, stock }) {
  return (
    <Card sx={{ width: 345 }}>
      <CardMedia component="img" height="280" image={image} alt={model} />
      <Grid container display="flex" alignItems="center">
        <Grid item xs={6} display="flex" alignItems="center">
          <CardContent
            sx={{
              display: 'flex',
              flexDirection: 'column',
              rowGap: 3,
            }}
          >
            <Typography variant="h6" paragraph margin={0}>
              {model}
            </Typography>
            <Typography variant="h6" paragraph margin={0}>
              {price}£
            </Typography>
          </CardContent>
        </Grid>
        <Grid item xs={6} display="flex">
          <CardActions
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-end',
              paddingY: 0,
              rowGap: 2,
            }}
          >
            <IconButton sx={{ marginTop: '-1rem' }}>
              <ShareIcon />
            </IconButton>
            <Button
              variant="contained"
              disableElevation
              endIcon={<AddShoppingCartIcon />}
              sx={{ bgcolor: 'warning.light' }}
            >
              <Typography textTransform="capitalize">add to cart</Typography>
            </Button>
          </CardActions>
        </Grid>
      </Grid>
    </Card>
  );
}

export default ProductCard;
