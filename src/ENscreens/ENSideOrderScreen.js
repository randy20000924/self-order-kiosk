import {
    Avatar,
    Box,
    Button,
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    CircularProgress,
    Dialog,
    DialogTitle,
    Grid,
    List,
    ListItem,
    TextField,
    Typography,
  } from '@material-ui/core';
  import { Alert } from '@material-ui/lab';
  
  import AddIcon from '@material-ui/icons/Add';
  import RemoveIcon from '@material-ui/icons/Remove';
  import React, { useContext, useEffect, useState } from 'react';
  import {
    addToOrder,
    clearOrder,
    listCategories1,
    listProducts,
    removeFromOrder,
  } from '../actions';
  import Logo from '../components/Logo';
  import { Store } from '../Store';
  import { useStyles } from '../styles';
  
  export default function OrderScreen(props) {
    const styles = useStyles();
    const [categoryName, setCategoryName] = useState('');
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
  
    const { state, dispatch } = useContext(Store);
    const { categories, loading, error } = state.categoryList1;
    const {
      products,
      loading: loadingProducts,
      error: errorProducts,
    } = state.productList;
  
    const {
      orderItems,
      itemsCount,
      totalPrice,
      orderType,
    } = state.order;
  
    useEffect(() => {
      if (!categories) {
        listCategories1(dispatch);
      } else {
        listProducts(dispatch, categoryName);
      }
    }, [dispatch, categories, categoryName]);
  
    const categoryClickHandler = (name) => {
      setCategoryName(name);
      listProducts(dispatch, categoryName);
    };
  
    const OrderHandler = () => {
      props.history.push(`/ENorder`);
    };
  
    return (
      
      <Box className={styles.root}>
        <Dialog
          maxWidth="sm"
          fullWidth={true}
          open={isOpen}
          onClose={closeHandler}
        >
          <DialogTitle className={styles.center}>Add {product.enname} to Sideorder</DialogTitle>
          <Box className={[styles.row, styles.center]}>
          </Box>
          <Box className={[styles.row, styles.around]}>
            <Button
              onClick={cancelOrRemoveFromOrder}
              variant="contained"
              color="primary"
              size="large"
              className={styles.mediumButton}
            >
              {orderItems.find((x) => x.name === product.name)
                ? 'Remove'
                : 'Cancel'}
            </Button>
            <Button
              onClick={addToOrderHandler}
              variant="contained"
              color="primary"
              size="large"
              className={styles.mediumButton}
            >
              Add
            </Button>
          </Box>
        </Dialog>
        <Box className={styles.main}>
          <Grid container>
            <Grid item md={2}>
              <List>
                {loading ? (
                  <CircularProgress />
                ) : error ? (
                  <Alert severity="error">{error}</Alert>
                ) : (
                  <>
                    <ListItem  >
                      <Logo></Logo>
                    </ListItem>
                    {categories.map((category) => (
                      <ListItem
                        button
                        key={category.name}
                        onClick={() => categoryClickHandler(category.name)}
                      >
                        <Avatar alt={category.name} src={category.image} />
                      </ListItem>
                    ))}
                  </>
                )}
              </List>
            </Grid>
            <Grid item md={10}>
              <Typography
                gutterBottom
                className={styles.title}
                variant="h2"
                component="h2"
              >
                {'SideOrder'}
              </Typography>
              <Grid container spacing={1}>
                {loadingProducts ? (
                  <CircularProgress />
                ) : errorProducts ? (
                  <Alert severity="error">{errorProducts}</Alert>
                ) : (
                  products.map((product) => (
                    <Grid item md={6}>
                      <Card
                        className={styles.card}
                        onClick={() => productClickHandler(product)}
                      >
                        <CardActionArea>
                          <CardMedia
                            component="img"
                            alt={product.enname}
                            image={product.image}
                            className={styles.media}
                          />
                        </CardActionArea>
                        <CardContent>
                          <Typography
                            gutterBottom
                            variant="body2"
                            color="textPrimary"
                            component="p"
                          >
                            {product.enname}
                          </Typography>
                          <Box className={styles.cardFooter}>
                            <Typography
                              variant="body2"
                              color="textSecondary"
                              component="p"
                            >
                              {product.calorie} Cal
                            </Typography>
                            <Typography
                              variant="body2"
                              color="textPrimary"
                              component="p"
                            >
                              NT${product.price}
                            </Typography>
                          </Box>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))
                )}
              </Grid>
            </Grid>
          </Grid>
        </Box>
        <Box>
          <Box>
            <Box className={[styles.bordered, styles.space]}>
              My Order - {orderType} | Total: NT${totalPrice} |
              Cart Items: {itemsCount} 
            </Box>
            <Box className={[styles.row, styles.around]}>
              <Button
                onClick={ 
                    OrderHandler
                }
                variant="contained"
                color="primary"
                className={styles.largeButton}
              >
                Cancel
              </Button>
              <Button
                onClick={OrderHandler}
                variant="contained"
                color="primary"
                disabled={orderItems.length === 0}
                className={styles.largeButton}
              >
                Complete
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    );
  }
  