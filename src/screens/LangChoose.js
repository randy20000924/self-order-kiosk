import {
    Box,
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Fade,
    Typography,
  } from '@material-ui/core';
  import React from 'react';
  import Logo from '../components/Logo';
  import { useStyles } from '../styles';
  
  export default function ChooseScreen(props) {
    const styles = useStyles();
  
    const chooseHandler = () => {
      props.history.push('/choose');
    };
    const ENchooseHandler = () => {
      props.history.push('/ENchoose');
    };
  
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
              選擇語言Choose Language
            </Typography>
            <Box className={styles.cards}>
              <Card className={[styles.card, styles.space]}>
                <CardActionArea onClick={() => chooseHandler()}>
                  <CardMedia
                    component="img"
                    alt="中文"
                    image="/images/CH.png"
                    className={styles.media}
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h4"
                      color="textPrimary"
                      component="p"
                    >
                      中文
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
              <Card className={[styles.card, styles.space]}>
                <CardActionArea onClick={() => ENchooseHandler()}>
                  <CardMedia
                    component="img"
                    alt="EN"
                    image="/images/EN.png"
                    className={styles.media}
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h4"
                      color="textPrimary"
                      component="p"
                    >
                      EN
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
  