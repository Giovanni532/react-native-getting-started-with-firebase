import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import Login from '../screens/Auth/Login';
import Loading from '../screens/Loading/Loading';
import Congrats from '../screens/Auth/Congrats';
import ResetPassword from '../screens/Auth/ResetPassword'

export default createAppContainer(
  createSwitchNavigator({
    Loading:{
      screen: Loading
    },
    Login:{
      screen: Login
    },
    ResetPassword: {
      screen: ResetPassword
    },
    Congrats: {
      screen: Congrats
    },
    Main:{
      screen: MainTabNavigator
    },
  })
);
