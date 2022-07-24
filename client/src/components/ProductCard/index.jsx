import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActions, Grid, IconButton } from '@mui/material';
import ShareIcon from '@mui/icons-material/Share';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

function ProductCard({ _id, model, image, price, setId, handleOpen }) {
  return (
    <Card sx={{ maxWidth: 360 }}>
      <CardMedia
        component="img"
        height="280"
        image={image}
        alt={model}
        onClick={() => {
          setId(_id);
          handleOpen();
        }}
        sx={{
          '&:hover': {
            cursor: 'pointer',
          },
        }}
      />
      <Grid container display="flex">
        <Grid item xs={6} display="flex" alignItems="center">
          <CardContent
            sx={{
              display: 'flex',
              flexDirection: 'column',
              rowGap: 1,
            }}
          >
            <Typography
              variant="title"
              sx={{
                color: '#6d6d6d',
                '&:hover': {
                  cursor: 'pointer',
                  textDecoration: 'underline',
                },
              }}
              paragraph
              margin={0}
            >
              {model}
            </Typography>
            <Typography
              variant="subtitle"
              sx={{ color: '#4f4f4f' }}
              paragraph
              margin={0}
            >
              £{price}
            </Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          xs={6}
          display="flex"
          justifyContent="flex-end"
          alignItems="flex-start"
          marginTop={1}
        >
          <CardActions
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'flex-end',
              paddingY: 0,
              rowGap: 2,
            }}
          >
            <IconButton>
              <FavoriteBorderIcon />
            </IconButton>
            <IconButton>
              <ShareIcon />
            </IconButton>
          </CardActions>
        </Grid>
      </Grid>
    </Card>
  );
}

export default ProductCard;
