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
    if (paymentType === '點點卡') {
      props.history.push('/fastpay');
    } 
    else if(paymentType ==='電子票證'){
      props.history.push('/fastpay');
    }
    else if(paymentType ==='信用卡'){
      props.history.push('/fastpay');
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
            選擇支付方式
          </Typography>
          <Box className={styles.cards}>
            <Card className={[styles.cardsize, styles.space]}>
              <CardActionArea onClick={() => selectHandler('點點卡')}>
                <CardMedia
                  component="img"
                  alt="點點卡"
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
                    點點卡
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <Card className={[styles.cardsize, styles.space]}>
              <CardActionArea onClick={() => selectHandler('電子票證')}>
                <CardMedia
                  component="img"
                  alt="電子票證"
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
                    電子票證
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <Card className={[styles.cardsize, styles.space]}>
              <CardActionArea onClick={() => selectHandler('信用卡')}>
                <CardMedia
                  component="img"
                  alt="信用卡"
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
                    信用卡
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
