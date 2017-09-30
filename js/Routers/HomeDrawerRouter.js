import React from 'react';
import { DrawerNavigator } from 'react-navigation';
import Home from '../components/home/';
import BlankPage2 from '../components/blankPage2';
import DrawBar from '../components/DrawBar';

export default DrawerNavigator( // eslint-disable-line
  {
    Home: { screen: Home },
    BlankPage2: { screen: BlankPage2 },
  },
  {
    contentComponent: props => <DrawBar {...props} />,
  }
);
