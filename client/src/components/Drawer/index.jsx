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
import links from '../../utils/links';
import Close from '@mui/icons-material/Close';
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
          {links.map((link) => {
            const { id, path, text } = link;
            return (
              <>
                <ListItem key={id} sx={{}}>
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
              </>
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
