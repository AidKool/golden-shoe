import React from 'react';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const userLinks = [
  {
    id: 1,
    icon: <PersonOutlineIcon />,
    text: 'account',
    path: '/',
  },
  {
    id: 2,
    icon: <ShoppingCartIcon />,
    text: 'cart',
    path: '/cart',
  },
];

export default userLinks;
