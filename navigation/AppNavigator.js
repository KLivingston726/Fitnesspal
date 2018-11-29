import React from 'react';
import { createSwitchNavigator } from 'react-navigation';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import SignUpScreen from '../screens/login/SignUpScreen';
import AuthLoadingScreen from '../screens/AuthLoadingScreen';

// const AppStackNavigator = createStackNavigator({
//   LogIn: LogInScreen,
//   SignUp: SignUpScreen,
//   Home: HomeScreen
// });

const AuthStackNavigator = createStackNavigator({Login: SignUpScreen});


//The order you make this is the way it loads in for the app
export default createSwitchNavigator(
  {
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    Main: MainTabNavigator,
    //App: AppStackNavigator,
    Auth: AuthStackNavigator,
    AuthLoading: AuthLoadingScreen
  },
  {
    initialRouteName: 'AuthLoading'
  }
);
