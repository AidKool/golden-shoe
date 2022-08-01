import React, { useEffect } from 'react';
import {
  AppBar,
  Box,
  Button,
  InputAdornment,
  Stack,
  TextField,
  Toolbar,
  Typography,
  useMediaQuery,
  Container,
} from '@mui/material';
import { NavLink } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import { useQuery } from '@apollo/client';
import userLinks from '../../utils/userLinks';
import { DrawerComponent } from '../../components';
import { customTheme } from '../../utils/theme';
import menuLinks from '../../utils/menuLinks';
import { GET_NUMBER_PURCHASES } from '../../utils/queries';
import { usePurchaseContext } from '../../context/PurchaseContext';

function Navbar() {
  const { valid, setValid } = usePurchaseContext();

  const theme = useTheme(customTheme);
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { data: numPurchases, loading: loadingNumPurchases } =
    useQuery(GET_NUMBER_PURCHASES);

  const purchases = numPurchases?.getNumberPurchases;

  useEffect(() => {
    if (numPurchases) {
      if (purchases === 0) {
        setValid(false);
      }
    }
  }, [numPurchases, purchases, setValid]);

  return (
    <AppBar position="fixed" sx={{ bgcolor: 'dark.main' }}>
      <Container maxWidth="lg">
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <NavLink
              to="/"
              style={{ textDecoration: 'none', color: '#F5F5F5' }}
            >
              <Typography sx={{ textDecoration: 'none' }}>LOGO</Typography>
            </NavLink>
          </Box>
          {isMobile ? (
            <DrawerComponent purchases={purchases} />
          ) : (
            <>
              <Stack direction="row" flexGrow={1} spacing={1}>
                {menuLinks.map((link) => {
                  const { id, text, path } = link;
                  return (
                    <NavLink
                      key={id}
                      reloadDocument
                      to={path}
                      style={{ textDecoration: 'none' }}
                    >
                      <Button sx={{ color: '#fff' }}>
                        <Typography textTransform="capitalize">
                          {text}
                        </Typography>
                      </Button>
                    </NavLink>
                  );
                })}
              </Stack>
              <Stack direction="row" spacing={1}>
                <Box component="form">
                  <TextField
                    size="small"
                    sx={{
                      bgcolor: '#fff',
                    }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          {<SearchIcon />}
                        </InputAdornment>
                      ),
                    }}
                  ></TextField>
                </Box>
                {userLinks.map((link) => {
                  const { id, path, icon, text } = link;
                  return (
                    <NavLink
                      key={id}
                      reloadDocument
                      to={path}
                      position="relative"
                      style={{ textDecoration: 'none' }}
                    >
                      <Button sx={{ color: '#fff' }}>
                        {icon}
                        {text === 'cart' && (
                          <Box
                            position="absolute"
                            sx={{
                              bgcolor: 'red',
                              top: 0,
                              right: 20,
                              borderRadius: '50%',
                              display: 'flex',
                              alignItems: 'center',
                            }}
                          >
                            <Typography
                              sx={{
                                width: '1rem',
                                height: '1rem',
                                lineHeight: 1.35,
                                fontSize: '0.75rem',
                                fontWeight: 'bold',
                              }}
                            >
                              {!loadingNumPurchases && purchases}
                            </Typography>
                          </Box>
                        )}
                      </Button>
                    </NavLink>
                  );
                })}
              </Stack>
            </>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
