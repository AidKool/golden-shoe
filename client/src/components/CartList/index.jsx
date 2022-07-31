import {
  Grid,
  List,
  ListItem,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

function CartList({ purchases }) {
  if (purchases.length > 0) {
    console.log(purchases);
  } else {
    console.log('no shoes');
  }
  return (
    <Box>
      {purchases.length > 0 && (
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <Typography textTransform="capitalize" fontWeight="bold">
                    model
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography textTransform="capitalize" fontWeight="bold">
                    gender
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography textTransform="capitalize" fontWeight="bold">
                    size
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography textTransform="capitalize" fontWeight="bold">
                    price
                  </Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {purchases.map((item) => {
                const { gender, model, price, _id } = item.item;
                const { size } = item;
                return (
                  <TableRow key={_id}>
                    <TableCell>
                      <Typography textTransform="capitalize">
                        {model}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography textTransform="capitalize">
                        {gender === 'F' ? 'women' : 'men'}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography textTransform="capitalize">{size}</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography textTransform="capitalize">
                        £{price}
                      </Typography>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Box>
  );
}

export default CartList;
