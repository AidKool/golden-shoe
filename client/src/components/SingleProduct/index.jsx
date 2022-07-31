import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {
  Button,
  Container,
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Stack,
} from '@mui/material';
import ShareIcon from '@mui/icons-material/Share';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useLazyQuery } from '@apollo/client';
import { useEffect } from 'react';
import { GET_SHOES_BY_ID } from '../../utils/queries';

function SingleProduct({ open, handleClose, id }) {
  const initialState = {
    size: 'size',
    colour: 'colour',
  };
  const [formState, setFormState] = useState(initialState);
  const [shoes, setShoes] = useState({});
  const [getShoesById, { loading, data }] = useLazyQuery(GET_SHOES_BY_ID);

  useEffect(() => {
    const fetchData = async () => {
      if (id) {
        await getShoesById({ variables: { id } });
      }
      if (data) {
        setShoes(data.getShoesById);
      }
    };
    fetchData();
  }, [data, getShoesById, id]);

  return (
    <Modal
      disableEnforceFocus
      open={open}
      onClose={() => {
        handleClose();
        setShoes({});
        setFormState(initialState);
      }}
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 0,
        margin: 0,
        border: 'none',
      }}
    >
      <Container maxWidth="lg" sx={{ padding: 0, marginX: 3, outline: 'none' }}>
        <Grid container sx={{ bgcolor: '#fff' }}>
          <Grid item xs={12} md={6} padding={3}>
            <Box
              component="img"
              width="100%"
              height="100%"
              sx={{ objectFit: 'cover' }}
              src={
                !loading ? shoes.image : 'https://via.placeholder.com/690x411'
              }
            ></Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            padding={3}
            display="flex"
            flexDirection="column"
            rowGap={2}
            justifyContent="space-evenly"
            position="relative"
          >
            <Typography
              variant="h6"
              sx={{ color: '#6d6d6d' }}
              paragraph
              margin={0}
              lineHeight={1}
            >
              {!loading ? shoes.model : 'model'}
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: '#4f4f4f' }}
              paragraph
              margin={0}
              lineHeight={1}
              textTransform="capitalize"
            >
              {shoes.gender === 'F' ? 'women' : 'men'}
            </Typography>
            <Typography
              variant="h6"
              sx={{ color: '#4f4f4f' }}
              paragraph
              margin={0}
              lineHeight={1}
            >
              £{!loading ? shoes.price : 'price'}
            </Typography>
            <FormControl size="small">
              <InputLabel id="status-select-label">Size</InputLabel>
              <Select
                name="size"
                label="size"
                value={formState.size}
                className="my-select"
                sx={{
                  '& > div': {
                    display: 'flex',
                    justifyContent: 'space-between',
                  },
                }}
                onChange={(event) => {
                  setFormState({
                    ...formState,
                    size: event.target.value,
                  });
                }}
              >
                <MenuItem width="100%" value="size" disabled>
                  Size
                </MenuItem>
                {!loading &&
                  shoes.stock &&
                  shoes.stock.map((item) => {
                    const { size, stock } = item;
                    return (
                      <MenuItem
                        key={size}
                        value={size}
                        className="test"
                        sx={{
                          display: 'flex',
                          justifyContent: 'space-between',
                        }}
                      >
                        <Typography variant="body2">{size}</Typography>
                        <Typography variant="body2">
                          {stock > 0 ? `(${stock} left)` : '(Out of stock)'}
                        </Typography>
                      </MenuItem>
                    );
                  })}
                {/* <MenuItem
                  width="100%"
                  value={!loading && shoes.stock ? shoes.stock.size : ''}
                  disabled={
                    shoes.stock && shoes.stock.stock === 0 ? true : false
                  }
                >
                  {!loading && shoes.stock
                    ? shoes.stock.size + `(${shoes.stock.stock} left)`
                    : 'size'}
                </MenuItem> */}
                ;
              </Select>
            </FormControl>
            <FormControl size="small">
              <InputLabel id="status-select-label">Colour</InputLabel>
              <Select
                name="colour"
                label="colour"
                value={formState.colour}
                onChange={(event) => {
                  setFormState({
                    ...formState,
                    colour: event.target.value,
                  });
                }}
              >
                <MenuItem width="100%" value="colour" disabled>
                  Colour
                </MenuItem>
                <MenuItem width="100%" value={!loading ? shoes.colour : ''}>
                  {!loading ? shoes.colour : 'colour'}
                </MenuItem>
                ;
              </Select>
            </FormControl>
            <Button
              variant="contained"
              disableElevation
              endIcon={<AddShoppingCartIcon />}
              sx={{ bgcolor: 'warning.light' }}
            >
              <Typography textTransform="capitalize">add to cart</Typography>
            </Button>
            <Stack
              direction="row"
              position="absolute"
              right={0}
              top={0}
              marginRight={2}
              marginTop={2}
            >
              <IconButton>
                <FavoriteBorderIcon />
              </IconButton>
              <IconButton>
                <ShareIcon />
              </IconButton>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Modal>
  );
}

export default SingleProduct;
