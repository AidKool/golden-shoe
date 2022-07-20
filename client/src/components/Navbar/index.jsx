import React from 'react';
import {
  AppBar,
  Button,
  List,
  ListItem,
  Stack,
  Toolbar,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { NavLink } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import links from '../../utils/links';
import DrawerComponent from '../Drawer';
import { Container } from '@mui/system';

function Navbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <AppBar position="static" color="success">
      <Container maxWidth="lg">
        <Toolbar>
          <Typography sx={{ flexGrow: 1 }}>Navbar</Typography>
          {isMobile ? (
            <DrawerComponent />
          ) : (
            <Stack direction="row" spacing={1}>
              {links.map((link) => {
                const { id, path, text } = link;
                return (
                  <NavLink
                    key={id}
                    reloadDocument
                    to={path}
                    style={{ textDecoration: 'none' }}
                  >
                    <Button sx={{ color: '#fff' }}>
                      <Typography textTransform="capitalize">{text}</Typography>
                    </Button>
                  </NavLink>
                );
              })}
            </Stack>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
