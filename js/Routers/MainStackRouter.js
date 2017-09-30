import { StackNavigator } from 'react-navigation';
import Login from '../components/login/';
import Home from '../components/home/';
import DetailPage from '../components/detailPage';
import WantRide from '../components/wantRide';
import GiveRide from '../components/giveRide';
import HomeDrawerRouter from './HomeDrawerRouter';
import CarSharing from '../components/carSharing';

HomeDrawerRouter.navigationOptions = () => ({
  header: null,
});

export default StackNavigator({ // eslint-disable-line
  Login: { screen: Login },
  Home: { screen: Home },
  CarSharing: { screen: CarSharing },
  WantRide: { screen: WantRide },
  GiveRide: { screen: GiveRide },
  DetailPage: { screen: DetailPage },
});
