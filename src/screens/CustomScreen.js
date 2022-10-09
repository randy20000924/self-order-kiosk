import {
    Box,
    Button,
    Typography,
  } from '@material-ui/core';
  import React, { useContext } from 'react';
  import { useStyles } from '../styles';
  import Logo from '../components/Logo';
  import { setPaymentType } from '../actions';
  import { Store } from '../Store';
  import TextField from '@material-ui/core/TextField';
  
  
  export default function SelectPaymentScreen(props) {
    const { dispatch } = useContext(Store);
    const styles = useStyles();
    const selectHandler = (paymentType) => {
      setPaymentType(dispatch, paymentType);
      if (paymentType === 'Pay here') {
        props.history.push('/payment');
      } else {
        props.history.push('/complete');
      }
    };
    return (
      <Box className={[styles.root, styles.green]}>
        <Box className={[styles.main, styles.center]}>
          <Logo large></Logo>
          <Typography
            className={styles.center}
            gutterBottom
            variant="h3"
            component="h3"
          >
            是否要對餐點進行客製化?
          </Typography>
          <Box className={[ styles.white]}>
              
          <TextField
          id="filled-multiline-static"
          label="客製化內容"
          multiline
          rows={4}
          defaultValue=""
          variant="standard"
        />
          </Box>
        </Box>
        <Box className={[styles.center, styles.space]}>
        <Button
          onClick={() => props.history.push('/select-payment')}
          variant="contained"
          color="primary"
          className={styles.largeButton}
        >
          確認客製化內容
        </Button>
      </Box>
        
      </Box>
    );
  }
  