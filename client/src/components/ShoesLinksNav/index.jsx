import React from 'react';
import { Stack, Typography } from '@mui/material';
import shoesLinks from '../../utils/shoesLinks';
import { NavLink } from 'react-router-dom';

function ShoesLinksNav({ type }) {
  return (
    <Stack
      direction="row"
      spacing={4}
      padding={3}
      display="flex"
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
  );
}

export default ShoesLinksNav;
