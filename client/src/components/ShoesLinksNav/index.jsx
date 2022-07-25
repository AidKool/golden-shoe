import React from 'react';
import { Button, Stack, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import FilterListIcon from '@mui/icons-material/FilterList';
import shoesLinks from '../../utils/shoesLinks';

function ShoesLinksNav({ type }) {
  return (
    <Stack
      direction="row"
      display="flex"
      alignItems="center"
      flexWrap="wrap"
      justifyContent="space-between"
    >
      <Stack
        direction="row"
        spacing={4}
        padding={3}
        display="flex"
        alignItems="center"
        flexWrap="wrap"
      >
        {shoesLinks.map((link) => {
          const { id, text, path } = link;
          return (
            <NavLink
              key={id}
              to={path}
              style={{
                textDecoration: 'none',
              }}
            >
              <Typography
                sx={{
                  color: type === text ? 'dark.main' : '#6d6d6d',
                  textDecoration: type === text ? 'underline' : 'none',
                  '&:hover': {
                    color: 'dark.main',
                    textDecoration: 'underline',
                  },
                }}
                textTransform="capitalize"
              >
                {text}
              </Typography>
            </NavLink>
          );
        })}
      </Stack>
      <Button
        variant="outlined"
        sx={{ color: '#6d6d6d', borderColor: '#6d6d6d', marginY: 2 }}
        endIcon={<FilterListIcon />}
      >
        <Typography textTransform="capitalize">filter</Typography>
      </Button>
    </Stack>
  );
}

export default ShoesLinksNav;
