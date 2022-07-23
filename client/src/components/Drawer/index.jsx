import React, { useState } from 'react';
import {
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  Typography,
} from '@mui/material';
import { NavLink } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import userLinks from '../../utils/userLinks';
import menuLinks from '../../utils/menuLinks';
import { Box } from '@mui/system';

function DrawerComponent() {
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <>
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <Box display="flex" justifyContent="flex-end">
          <IconButton
            color="secondary"
            onClick={() => setOpenDrawer(!openDrawer)}
          >
            <CloseIcon />
          </IconButton>
        </Box>
        <List>
          {userLinks.map((link) => {
            const { id, path, icon, text } = link;
            return (
              <Box key={id}>
                <ListItem>
                  <NavLink
                    reloadDocument
                    to={path}
                    style={{ textDecoration: 'none' }}
                    onClick={() => setOpenDrawer(false)}
                  >
                    <Button startIcon={icon}>
                      <Typography
                        paddingRight={10}
                        textTransform="capitalize"
                        display="flex"
                        alignItems="center"
                      >
                        {text}
                      </Typography>
                    </Button>
                  </NavLink>
                </ListItem>
                <Divider />
              </Box>
            );
          })}
          {menuLinks.map((link) => {
            const { id, path, text } = link;
            return (
              <Box key={id}>
                <ListItem>
                  <NavLink
                    reloadDocument
                    to={path}
                    style={{ textDecoration: 'none' }}
                    onClick={() => setOpenDrawer(false)}
                  >
                    <Button>
                      <Typography paddingRight={10} textTransform="capitalize">
                        {text}
                      </Typography>
                    </Button>
                  </NavLink>
                </ListItem>
                <Divider />
              </Box>
            );
          })}
        </List>
      </Drawer>
      <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
        <MenuIcon sx={{ color: '#fff' }} />
      </IconButton>
    </>
  );
}
export default DrawerComponent;
