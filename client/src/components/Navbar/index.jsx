import React from 'react';
import {
  AppBar,
  Box,
  Button,
  Stack,
  Toolbar,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { NavLink } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import { Container } from '@mui/system';
import userLinks from '../../utils/userLinks';
import DrawerComponent from '../Drawer';
import { customTheme } from '../../utils/theme';
import menuLinks from '../../utils/menuLinks';

function Navbar() {
  const theme = useTheme(customTheme);
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <AppBar position="static" sx={{ bgcolor: 'dark.main' }}>
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
            <DrawerComponent />
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
                {userLinks.map((link) => {
                  const { id, path, icon } = link;
                  return (
                    <NavLink
                      key={id}
                      reloadDocument
                      to={path}
                      style={{ textDecoration: 'none' }}
                    >
                      <Button sx={{ color: '#fff' }}>{icon}</Button>
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
