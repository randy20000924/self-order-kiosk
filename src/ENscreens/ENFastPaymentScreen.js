import { Box, Button,Card, CardActionArea, CardContent, CardMedia, CircularProgress, Typography } from '@material-ui/core';
import React, { useContext } from 'react';
import { setPaymentType } from '../actions';
import Logo from '../components/Logo';
import { Store } from '../Store';
import { useStyles } from '../styles';

export default function PaymentScreen(props) {
  const styles = useStyles();
  const { dispatch } = useContext(Store);
  const selectHandler = (paymentType) => {
    setPaymentType (dispatch, paymentType);
    if (paymentType === 'Pay here') {
      props.history.push('/payment');
    } 
    //else if(paymentType ===){
    //  props.history.push('/complete');
  }
  return (
    <Box className={[styles.root, styles.green]}>
      <Box className={[styles.main, styles.center]}>
        <Box>
          <Logo large></Logo>
          <Card className={[styles.card, styles.space]}>
          
            <CardMedia
              component="img"
              image="/images/payhere.png"
              className={styles.media2}
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h4"
                color="textPrimary"
                component="p"
              >
                Tap Card
              </Typography>
            </CardContent>
          
        </Card>
          <Typography
            gutterBottom
            className={styles.title}
            variant="h3"
            component="h3"
          >
            Concern your payment and push button
          </Typography>
          <CircularProgress />
        </Box>
      </Box>
      <Box className={[styles.center, styles.space]}>
        <Button
          onClick={() => props.history.push('/ENcomplete')}
          variant="contained"
          color="primary"
          className={styles.largeButton}
        >
          Concern and Get Receipt
        </Button>
      </Box>
    </Box>
  );
}
