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
import React, { useEffect } from 'react';
import { usePurchaseContext } from '../../context/PurchaseContext';

function CartList({ purchases }) {
  const { valid, setValid } = usePurchaseContext();
  if (purchases.length > 0) {
    console.log(purchases);
  }

  useEffect(() => {
    purchases.forEach((purchase) => {
      if (purchase.item.stock[0].stock < purchase.units) {
        setValid(false);
      }
    });
  }, [purchases, setValid]);

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
                const { model, price, _id, stock } = item.item;
                const { size, units } = item;
                return (
                  <TableRow key={_id + index}>
                    <TableCell>
                      <Typography
                        textTransform="capitalize"
                        sx={{
                          ...(units > stock[0].stock && {
                            color: 'error.light',
                            fontWeight: 'bold',
                          }),
                        }}
                      >
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
