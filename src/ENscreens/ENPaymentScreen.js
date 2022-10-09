import { Box, Card, CardActionArea, CardContent, CardMedia,  Fade, Typography } from '@material-ui/core';
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
    if (paymentType === 'Point card') {
      props.history.push('/ENfastpay');
    } 
    else if(paymentType ==='E-ticket'){
      props.history.push('/ENfastpay');
    }
    else if(paymentType ==='credit card'){
      props.history.push('/ENfastpay');
    }
  }
  return (
    <Fade in={true}>
      <Box className={[styles.root, styles.green]}>
        <Box className={[styles.main, styles.center]}>
          <Logo large></Logo>
          <Typography
            variant="h3"
            component="h3"
            className={styles.center}
            gutterBottom
          >
            Choose Payment Method
          </Typography>
          <Box className={styles.cards}>
            <Card className={[styles.cardsize, styles.space]}>
              <CardActionArea onClick={() => selectHandler('Point card')}>
                <CardMedia
                  component="img"
                  alt="Point card"
                  image="/images/pointcard.jpg"
                  className={styles.media}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h3"
                    color="textPrimary"
                    component="p"
                  >
                    Point card
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <Card className={[styles.cardsize, styles.space]}>
              <CardActionArea onClick={() => selectHandler('E-ticket')}>
                <CardMedia
                  component="img"
                  alt="E-ticket"
                  image="/images/payonline.png"
                  className={styles.media}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h3"
                    color="textPrimary"
                    component="p"
                  >
                    E-ticket
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <Card className={[styles.cardsize, styles.space]}>
              <CardActionArea onClick={() => selectHandler('credit card')}>
                <CardMedia
                  component="img"
                  alt="credit card"
                  image="/images/payhere.png"
                  className={styles.media}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h3"
                    color="textPrimary"
                    component="p"
                  >
                    credit card
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Box>
        </Box>
      </Box>
    </Fade>
  );
}
