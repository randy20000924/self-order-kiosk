import {
  Container,
  createMuiTheme,
  CssBaseline,
  Paper,
  ThemeProvider,
} from '@material-ui/core';
import { useContext } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import AdminScreen from './screens/AdminScreen';
import ChooseScreen from './screens/ChooseScreen';
import LangChoose from './screens/LangChoose';
import CompleteOrderScreen from './screens/CompleteOrderScreen';
import HomeScreen from './screens/HomeScreen';
import OrderScreen from './screens/OrderScreen';
import PaymentScreen from './screens/PaymentScreen';
import QueueScreen from './screens/QueueScreen';
import ReviewScreen from './screens/ReviewScreen';
import CustonScreen from './screens/CustomScreen';
import SelectPaymentScreen from './screens/SelectPaymentScreen';
import FastPaymentScreen from './screens/FastPaymentScreen';
import Sideorderscreen from './screens/SideOrderScreen';
import { Store } from './Store';
import ENChooseScreen from './ENscreens/ENChooseScreen';
import ENCompleteOrderScreen from './ENscreens/ENCompleteOrderScreen';
import ENOrderScreen from './ENscreens/ENOrderScreen';
import ENPaymentScreen from './ENscreens/ENPaymentScreen';
import ENReviewScreen from './ENscreens/ENReviewScreen';
import ENSelectPaymentScreen from './ENscreens/ENSelectPaymentScreen';
import ENFastPaymentScreen from './ENscreens/ENFastPaymentScreen';
import ENCustomScreen from './ENscreens/ENCustomScreen';
import ENSideOrderScreen from './ENscreens/ENSideOrderScreen';

const theme = createMuiTheme({
  typography: {
    h1: { fontWeight: 'bold' },
    h2: {
      fontSize: '2rem',
      color: 'black',
    },
    h3: {
      fontSize: '1.8rem',
      fontWeight: 'bold',
      color: 'white',
    },
  },
  palette: {
    primary: { main: '#ff1744' },
    secondary: {
      main: '#118e16',
      contrastText: '#ffffff',
    },
  },
});

function App() {
  const { state } = useContext(Store);

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth={state.widthScreen ? 'lg' : 'sm'}>
          <Paper>
            <Route path="/" component={HomeScreen} exact={true}></Route>
            <Route path="/lang" component={LangChoose} exact={true}></Route>
            <Route path="/choose" component={ChooseScreen} exact={true}></Route>
            <Route path="/order" component={OrderScreen} exact={true}></Route>
            <Route path="/review" component={ReviewScreen} exact></Route>
            <Route path="/sideorder" component={Sideorderscreen} exact></Route>
            <Route path="/fastpay" component={FastPaymentScreen} exact></Route>
            <Route path="/custom" component={CustonScreen} exact></Route>
            <Route
              path="/select-payment"
              component={SelectPaymentScreen}
              exact
            ></Route>
            <Route path="/payment" component={PaymentScreen} exact></Route>
            <Route
              path="/complete"
              component={CompleteOrderScreen}
              exact
            ></Route>
            <Route path="/admin" component={AdminScreen} exact></Route>
            <Route path="/queue" component={QueueScreen} exact></Route>
            
            <Route path="/ENchoose" component={ENChooseScreen} exact={true}></Route>
            <Route path="/ENorder" component={ENOrderScreen} exact={true}></Route>
            <Route path="/ENreview" component={ENReviewScreen} exact></Route>
            <Route path="/ENsideorder" component={ENSideOrderScreen} exact></Route>
            <Route path="/ENfastpay" component={ENFastPaymentScreen} exact></Route>
            <Route path="/ENcustom" component={ENCustomScreen} exact></Route>
            <Route
              path="/ENselect-payment"
              component={ENSelectPaymentScreen}
              exact
            ></Route>
            <Route path="/ENpayment" component={ENPaymentScreen} exact></Route>
            <Route
              path="/ENcomplete"
              component={ENCompleteOrderScreen}
              exact
            ></Route>
          </Paper>
        </Container>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
