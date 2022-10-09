import React from 'react';
import { Box, Card, CardActionArea, Typography } from '@material-ui/core';
import TouchAppIcon from '@material-ui/icons/TouchApp';
import { useStyles } from '../styles';
import Logo from '../components/Logo';

export default function HomeScreen(props) {
  const styles = useStyles();
  return (
    <Card>
      <CardActionArea onClick={() => props.history.push('/lang')}>
        <Box className={[styles.root, styles.red]}>
          <Box className={[styles.main, styles.center]}>
            <Typography component="h5" variant="h5">
              快速 & 簡單
            </Typography>
            <Typography component="h5" variant="h5">
              Fast & Eazy
            </Typography>
            <Typography component="h1" variant="h1">
              麥當勞自助點餐系統
            </Typography>
            <Typography component="h2" variant="h2">
              Macdonald Self-Order Kiosk
            </Typography>
            <TouchAppIcon fontSize="large"></TouchAppIcon>
          </Box>
          <Box className={[styles.center, styles.green]}>
            <Logo large></Logo>
            <Typography component="h5" variant="h5">
              點擊以開始 Press to Start
            </Typography>
          </Box>
        </Box>
      </CardActionArea>
    </Card>
  );
}
