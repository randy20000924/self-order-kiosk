import {  makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  root: {

    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
  navy: {
    backgroundColor: '#003080',
  },
  red: {
    backgroundColor: '#ff2040',
    color: '#ffffff',
  },
  white:{
    backgroundColor:'#FFFFFF',
    
  },
  main: {
    flex: 1,
    overflow: 'auto',
    flexDirection: 'column',
    display: 'flex',
    color: '#ffffff',
  },
  center: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  left: {
    display: 'flex',
    justifyContent: 'left',
    alignItems: 'left',
    textAlign: 'left',
  },
  right: {
    display: 'flex',
    justifyContent: 'right',
    alignItems: 'right',
    textAlign: 'right',
  },
  green: {
    backgroundColor: '#056608',
  },
  largeLogo: {
    height: 100,
  },
  logo: {
    height: 50,
  },
  cards: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: { 
    margin: 10, 
  },
  cardsize:{
    width: 168,
    margin: 10,
  },
  title: {
    marginTop: 18,
  },
  space: {
    padding: 10,
  },
  media: { width: 200 },
  largeButton: {
    width: 250,
  },
  media2:{
    width:300,
  },
  mediumButton: {
    width: 200,
  },
  buttonspace:{
    width: 30,
    height: 40,
  },
  largeInput: {
    width: '60px!important',
    padding: '0!important',
    fontSize: '35px!important',
    textAlign: 'center!important',
  },
  bordered: {
    borderWidth: 2,
    borderRadius: 5,
    margin: 5,
    borderStyle: 'solid',
  },
  row: {
    display: 'flex',
    padding: 10,
  },
  around: {
    justifyContent: 'space-around',
  },
  between: {
    justifyContent: 'space-between',
  },
  column: { flexDirection: 'column' },
  
}));
