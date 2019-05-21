import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import TabBarIcon from '../components/TabBarIcon';


import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import SignupScreen from '../screens/SignUpScreen';
import UserInfoScreen from '../screens/UserInfoScreen';
import ProfileScreen from '../screens/ProfileScreen';
import ExerciseDescription from '../components/ExerciseDescription';
import ExerciseScreen from '../screens/ExerciseScreen';
//TEST SCREENS
import WorkoutSheetTest from '../screens/WorkoutSheetTest';

import WorkoutSheetCreate from '../screens/WorkoutSheetCreate';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-home${focused ? '' : '-outline'}`: 'ios-home'
      }
    />
  ),
};

const LinksStack = createStackNavigator({
  Links: LinksScreen,
});

LinksStack.navigationOptions = {
  tabBarLabel: 'Links',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-link${focused ? '' : '-outline'}` : 'md-link'}
    />
  ),
};


const WorkoutSheetStack = createStackNavigator({
  WorkoutTest: WorkoutSheetTest,
});

WorkoutSheetStack.navigationOptions = {
  tabBarLabel: 'WOTest',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-add-circle${focused ? '' : '-outline'}` : 'ios-add-circle'}
    />
  ),
};


const ExerciseStack= createStackNavigator({
  Exercise: ExerciseDescription,
  ExerciseScreen: ExerciseScreen,
});

ExerciseStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-options${focused ? '' : '-outline'}` : 'md-options'}
    />
  ),
};

const ExerciseScreenStack= createStackNavigator({
  ExerciseScreen: ExerciseScreen,
});

ExerciseScreenStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-options${focused ? '' : '-outline'}` : 'md-options'}
    />
  ),
};

const UserInfoStack = createStackNavigator({
  UserInfo: UserInfoScreen,
});

UserInfoStack.navigationOptions = {
  tabBarLabel: 'User Info',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-options${focused ? '' : '-outline'}` : 'md-options'}
    />
  ),
};

const ProfileScreenStack = createStackNavigator({
  ProfileScreenStack: ProfileScreen,
});

ProfileScreenStack.navigationOptions = {
  tabBarLabel: 'Profile',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-options${focused ? '' : '-outline'}` : 'md-options'}
    />
  ),
};

const WorkoutSheetCreateStack = createStackNavigator({
  WorkoutSheetCreateStack: WorkoutSheetCreate,
})





export default createBottomTabNavigator({
  HomeStack,
  WorkoutSheetStack,
  UserInfoStack,
  ProfileScreenStack,
  ExerciseScreenStack,
  //SettingsStack,
});
