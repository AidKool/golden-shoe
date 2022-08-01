import React, { useEffect, useState } from 'react';
import { useMutation } from '@apollo/client';
import {
  Button,
  ButtonGroup,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Box,
  IconButton,
  Stack,
} from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import UpdateIcon from '@mui/icons-material/Update';
import { usePurchaseContext } from '../../context/PurchaseContext';
import { UPDATE_PURCHASE } from '../../utils/mutations';

function CartList({ purchases }) {
  const { valid, setValid } = usePurchaseContext();
  const [cart, setCart] = useState({});
  const [updatePurchase] = useMutation(UPDATE_PURCHASE);

  useEffect(() => {
    purchases.forEach((purchase) => {
      if (purchase.item.stock[0].stock < purchase.units) {
        setValid(false);
      }
    });
    const tempUnits = {};
    purchases.forEach((purchase) => {
      const { size, units } = purchase;
      const { _id } = purchase.item;
      const key = JSON.stringify({ _id, size });
      tempUnits[key] = units;
    });
    setCart(tempUnits);
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
                const { size } = item;
                let { units } = item;
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
                        {
                          <IconButton
                            onClick={async () => {
                              const newUnits =
                                cart[JSON.stringify({ _id, size })];
                              const { data } = await updatePurchase({
                                variables: {
                                  id: _id,
                                  size,
                                  units: newUnits,
                                },
                              });
                              if (data) {
                                window.location.reload(false);
                              } else {
                                alert(
                                  'There was an error updating the purchase'
                                );
                              }
                            }}
                          >
                            <UpdateIcon />
                          </IconButton>
                        }
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Stack direction="row" display="flex" alignItems="center">
                        <IconButton
                          onClick={async () => {
                            const key = JSON.stringify({ _id, size });
                            setCart({
                              ...cart,
                              [key]: cart[key] - 1,
                            });
                          }}
                        >
                          <RemoveIcon />
                        </IconButton>
                        <Box>{cart[JSON.stringify({ _id, size })]}</Box>
                        <IconButton
                          onClick={async () => {
                            const key = JSON.stringify({ _id, size });
                            setCart({
                              ...cart,
                              [key]: cart[key] + 1,
                            });
                          }}
                        >
                          <AddIcon />
                        </IconButton>
                      </Stack>
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
