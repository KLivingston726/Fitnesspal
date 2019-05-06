import React from 'react';
import { createSwitchNavigator } from 'react-navigation';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import SignUpScreen from '../screens/SignUpScreen';
import SigninScreen from '../screens/SigninScreen';
import SplashScreen from '../screens/SplashScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import AuthLoadingScreen from '../screens/AuthLoadingScreen';

//Test screen
import WorkoutSheetTest from '../screens/WorkoutSheetTest';
import WorkoutSheetCreate from '../screens/WorkoutSheetCreate';


const AuthStackNavigator = createStackNavigator({Splash: SplashScreen, Login: SigninScreen, Signin: SignUpScreen,
                                                ForgotPassword: ForgotPasswordScreen});
//const AuthStackNavigator = createStackNavigator({Login: SignUpScreen});


//The order you make this is the way it loads in for the app
export default createSwitchNavigator(
  {
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html

    Main: MainTabNavigator,
    Auth: AuthStackNavigator,
    AuthLoading: AuthLoadingScreen,
    WOcreate: WorkoutSheetCreate,
    showWorkouts: WorkoutSheetTest,
  },
  {
    initialRouteName: 'AuthLoading'
  }
);
