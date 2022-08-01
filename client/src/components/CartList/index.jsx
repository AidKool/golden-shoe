import {
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
                    units
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography textTransform="capitalize" fontWeight="bold">
                    size
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography textTransform="uppercase" fontWeight="bold">
                    ppu
                  </Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {purchases.map((item, index) => {
                const { model, price, _id } = item.item;
                const { size, units } = item;
                return (
                  <TableRow key={_id + index}>
                    <TableCell>
                      <Typography textTransform="capitalize">
                        {model}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography textTransform="capitalize">
                        {units}
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
