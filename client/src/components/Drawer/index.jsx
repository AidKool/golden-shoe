import React, { useState } from 'react';
import {
  Button,
  Divider,
  Drawer,
  IconButton,
  InputAdornment,
  List,
  ListItem,
  TextField,
  Typography,
} from '@mui/material';
import { NavLink } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import { Box } from '@mui/system';
import userLinks from '../../utils/userLinks';
import menuLinks from '../../utils/menuLinks';

function DrawerComponent({ purchases }) {
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
        <Box component="form" sx={{ paddingX: 1 }}>
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
                        paddingRight={1}
                        textTransform="capitalize"
                        display="flex"
                        alignItems="center"
                      >
                        {text}
                      </Typography>
                      {text === 'cart' && (
                        <Typography>({purchases})</Typography>
                      )}
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
