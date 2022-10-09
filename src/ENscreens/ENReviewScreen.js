import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  Dialog,
  DialogTitle,
  Grid,
  TextField,
  Typography,
} from '@material-ui/core';
import React, { useContext, useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { addToOrder, removeFromOrder } from '../actions';
import { Store } from '../Store';
import { useStyles } from '../styles';
import Logo from '../components/Logo';

export default function ReviewScreen(props) {
  const { state, dispatch } = useContext(Store);
  const {
    orderItems,
    itemsCount,
    totalPrice,
    orderType,
  } = state.order;

  const [quantity, setQuantity] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const [product, setProduct] = useState({});
  const closeHandler = () => {
    setIsOpen(false);
  };
  const productClickHandler = (p) => {
    setProduct(p);
    setIsOpen(true);
  };
  const addToOrderHandler = () => {
    addToOrder(dispatch, { ...product, quantity });
    setIsOpen(false);
  };
  const cancelOrRemoveFromOrder = () => {
    removeFromOrder(dispatch, product);
    setIsOpen(false);
  };
  const editFromOrder = (foodtype) => {
      removeFromOrder(dispatch, product);
      setIsOpen(false);
      props.history.push('ENsideorder')
  };
  const procedToCheckoutHandler = () => {
    props.history.push('/ENcustom');
  };

  const styles = useStyles();
  return (
    <Box className={[styles.root]}>
      <Box className={[styles.main, styles.green, styles.center]}>
        <Dialog
          maxWidth="sm"
          fullWidth={true}
          open={isOpen}
          onClose={closeHandler}
        >
          <DialogTitle className={styles.center}>
            Add {product.enname}
          </DialogTitle>
          <Box className={[styles.row, styles.center]}>
            <Button
              variant="contained"
              color="primary"
              disabled={quantity === 1}
              onClick={(e) => quantity > 1 && setQuantity(quantity - 1)}
            >
              <RemoveIcon />
            </Button>
            <TextField
              inputProps={{ className: styles.largeInput }}
              InputProps={{
                bar: true,
                inputProps: {
                  className: styles.largeInput,
                },
              }}
              className={styles.largeNumber}
              type="number"
              variant="filled"
              min={1}
              value={quantity}
            />
            <Button
              variant="contained"
              color="primary"
              onClick={(e) => setQuantity(quantity + 1)}
            >
              <AddIcon />
            </Button>
          </Box>
          <Box className={[styles.row, styles.around]}>
            <Button
              onClick={cancelOrRemoveFromOrder}
              variant="contained"
              color="primary"
              size="large"
              className={styles.largeButton}
            >
              {orderItems.find((x) => x.name === product.name)
                ? 'remove'
                : 'Cancel'}
            </Button>
            {
              product.category==="配餐"&&(
            <Button
              onClick={editFromOrder}
              variant="contained"
              color="primary"
              size="large"
              className={styles.largeButton}
            >
              Edit
            </Button>
            )}
            {
              product.category==="配餐飲料"&&(
            <Button
              onClick={editFromOrder}
              variant="contained"
              color="primary"
              size="large"
              className={styles.largeButton}
            >
              Edit
            </Button>
            )}
            <Button
              onClick={addToOrderHandler}
              variant="contained"
              color="primary"
              size="large"
              className={styles.largeButton}
            >
              Add
            </Button>
          </Box>
        </Dialog>
        <Box className={[styles.center, styles.column]}>
          <Logo large></Logo>
          <Typography
            gutterBottom
            className={styles.title}
            variant="h3"
            component="h3"
          >
            Check my order
          </Typography>
        </Box>
        <Grid container> 
          {orderItems.map((orderItem) => (
            <Grid item md={12} key={orderItem.name}>
              <Card
                className={styles.card}
                onClick={() => productClickHandler(orderItem)}
              >
                <CardActionArea>
                  <CardContent>
                    <Box className={[styles.row, styles.between]}>
                      <Typography
                        gutterBottom
                        variant="body2"
                        color="textPrimary"
                        component="p"
                      >
                        {orderItem.enname}
                      </Typography>
                      <Button variant="contained">Edit</Button>
                    </Box>
                    <Box className={[styles.row, styles.between]}>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        {orderItem.calorie} Cal
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textPrimary"
                        component="p"
                      >
                        {orderItem.quantity} x NT${orderItem.price}
                      </Typography>
                    </Box>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box>
        <Box>
          <Box className={[styles.bordered, styles.space]}>
            My order - {orderType === 'Take out' ? 'Take out' : 'Eat In'} | 
              Total: NT${totalPrice} | Cart Items: {itemsCount} 
          </Box>
          <Box className={[styles.row, styles.around]}>
            <Button
              onClick={() => {
                props.history.push(`/ENorder`);
              }}
              variant="contained"
              color="primary"
              className={styles.largeButton}
            >
              return
            </Button>
            <Button
              onClick={procedToCheckoutHandler}
              variant="contained"
              color="secondary"
              disabled={orderItems.length === 0}
              className={styles.largeButton}
            >
              Custom
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
