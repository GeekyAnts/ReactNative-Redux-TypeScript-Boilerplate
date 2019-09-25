import React from 'react';
import {NavigationNativeContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  createDrawerNavigator,
  DrawerNavigationProp,
} from '@react-navigation/drawer';

import {Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

import Home from '../screens/AppScreens/Home';
import Blank from '../screens/AppScreens/Blank';
import SideBar from '../screens/AppScreens/SideBar';
import Login from '../screens/AuthScreens/Login';
import AuthLoading from '../screens/AuthLoading';

type RootDrawerParamList = {
  root: undefined;
};

const Drawer = createDrawerNavigator<RootDrawerParamList>();
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationNativeContainer>
      <Stack.Navigator initialRouteName="AuthLoading">
        <Stack.Screen
          name="AuthLoading"
          component={AuthLoading}
          options={{header: null}}
        />
      </Stack.Navigator>
    </NavigationNativeContainer>
  );
}
