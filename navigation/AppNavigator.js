import React from 'react';
import { createSwitchNavigator } from 'react-navigation';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import LogInScreen from '../screens/LogInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import HomeScreen from '../screens/HomeScreen';

const AppStackNavigator = createStackNavigator({
  LogIn: LogInScreen,
  SignUp: SignUpScreen,
  Home: HomeScreen
})

export default createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  Main: MainTabNavigator,
  App: AppStackNavigator
});
