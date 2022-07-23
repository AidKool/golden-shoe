import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useLazyQuery } from '@apollo/client';
import { Box, Grid } from '@mui/material';
import { Container } from '@mui/system';
import { Navbar } from '../../components';
import {
  GET_ALL_SHOES,
  GET_DEALS,
  GET_FEATURED,
  GET_MEN_SHOES,
  GET_WOMEN_SHOES,
} from '../../utils/queries';
import ProductCard from '../../components/ProductCard';

function Products() {
  const [shoes, setShoes] = useState([]);
  const [loading, setLoading] = useState(true);
  const params = useParams();
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

  const type = params.type;

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
      <Container maxWidth="lg">
        <Grid container display="flex" justifyContent="center" gap={2}>
          {!loading &&
            shoes.map((item) => {
              return (
                <Grid key={item.model}>
                  <ProductCard {...item}></ProductCard>
                </Grid>
              );
            })}
        </Grid>
      </Container>
    </Box>
  );
}

export default Products;
