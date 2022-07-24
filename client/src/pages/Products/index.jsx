import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useLazyQuery } from '@apollo/client';
import {
  Box,
  Grid,
  Container,
  IconButton,
  Icon,
  Button,
  Typography,
} from '@mui/material';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import {
  Navbar,
  ProductCard,
  ShoesLinksNav,
  SingleProduct,
} from '../../components';
import {
  GET_ALL_SHOES,
  GET_DEALS,
  GET_FEATURED,
  GET_MEN_SHOES,
  GET_WOMEN_SHOES,
} from '../../utils/queries';

function Products() {
  const [shoes, setShoes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [id, setId] = useState('');

  const params = useParams();
  const type = params.type;

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [getAllShoes, { loading: allLoading, data: allShoesData }] =
    useLazyQuery(GET_ALL_SHOES);
  const [getWomenShoes, { loading: womenLoading, data: womenShoesData }] =
    useLazyQuery(GET_WOMEN_SHOES);
  const [getMenShoes, { loading: menLoading, data: menShoesData }] =
    useLazyQuery(GET_MEN_SHOES);
  const [getFeatured, { loading: featuredLoading, data: featuredData }] =
    useLazyQuery(GET_FEATURED);
  const [getDeals, { loading: dealsLoading, data: dealsData }] =
    useLazyQuery(GET_DEALS);

  useEffect(() => {
    const getShoesData = async () => {
      console.log(type);
      switch (type) {
        case 'women':
          await getWomenShoes();
          if (womenShoesData) {
            setShoes(womenShoesData.getWomenShoes);
          }
          console.log(shoes);
          setLoading(womenLoading);
          break;
        case 'men':
          await getMenShoes();
          if (menShoesData) {
            setShoes(menShoesData.getMenShoes);
          }
          setLoading(menLoading);
          break;
        case 'featured':
          await getFeatured();
          if (featuredData) {
            setShoes(featuredData.getFeatured);
          }
          setLoading(featuredLoading);
          break;
        case 'deals':
          await getDeals();
          if (dealsData) {
            setShoes(dealsData.getDeals);
          }
          setLoading(dealsLoading);
          break;
        default:
          await getAllShoes();
          if (allShoesData) {
            setShoes(allShoesData.getAllShoes);
          }
          setLoading(allLoading);
      }
    };
    getShoesData();
  }, [
    allLoading,
    allShoesData,
    dealsData,
    dealsLoading,
    featuredData,
    featuredLoading,
    getAllShoes,
    getDeals,
    getFeatured,
    getMenShoes,
    getWomenShoes,
    menLoading,
    menShoesData,
    shoes,
    type,
    womenLoading,
    womenShoesData,
  ]);

  return (
    <Box>
      <Navbar />
      <Container maxWidth="lg" sx={{ marginY: 8 }} position="relative">
        <ShoesLinksNav type={type} />
        <Grid container display="flex" justifyContent="center" gap={2}>
          {!loading &&
            shoes.map((item) => {
              return (
                <Grid item key={item.model}>
                  <ProductCard
                    {...item}
                    setId={setId}
                    handleOpen={handleOpen}
                  />
                </Grid>
              );
            })}
        </Grid>
        <SingleProduct open={open} handleClose={handleClose} id={id} />
        <Button
          variant="contained"
          color="success"
          sx={{
            position: 'fixed',
            right: 0,
            bottom: '0',
            marginRight: 5,
            marginBottom: 5,
            borderRadius: '100px',
          }}
          endIcon={<ChatBubbleOutlineOutlinedIcon />}
        >
          <Typography textTransform="capitalize">chat</Typography>
        </Button>
      </Container>
    </Box>
  );
}

export default Products;
