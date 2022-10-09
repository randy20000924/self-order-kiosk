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
                靠卡支付
              </Typography>
            </CardContent>
          
        </Card>
          <Typography
            gutterBottom
            className={styles.title}
            variant="h3"
            component="h3"
          >
            確認支付後請按下確認按鈕
          </Typography>
          <CircularProgress />
        </Box>
      </Box>
      <Box className={[styles.center, styles.space]}>
        <Button
          onClick={() => props.history.push('/complete')}
          variant="contained"
          color="primary"
          className={styles.largeButton}
        >
          確認並領取發票
        </Button>
      </Box>
    </Box>
  );
}
