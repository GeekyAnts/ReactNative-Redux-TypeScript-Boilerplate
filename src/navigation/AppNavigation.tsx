import React from "react";
import {
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator,
  createDrawerNavigator
} from "react-navigation";

import { Dimensions } from "react-native";

const { width } = Dimensions.get("window");

import Home from "../screens/AppScreens/Home";
import Blank from "../screens/AppScreens/Blank";
import SideBar from "../screens/AppScreens/SideBar";
import Login from "../screens/AuthScreens/Login";
import AuthLoading from "../screens/AuthLoading";

const MainStack = createStackNavigator(
  {
    Home: { screen: Home }
  },
  {
    initialRouteName: "Home",
    headerMode: "none"
  }
);

const AuthStack = createStackNavigator(
  {
    Login: { screen: Login }
  },
  {
    initialRouteName: "Login",
    headerMode: "none"
  }
);

const AppStack = createDrawerNavigator(
  {
    MainStack: { screen: MainStack },
    Blank: { screen: Blank }
  },
  {
    drawerWidth: width - 50,
    drawerPosition: "left",
    contentComponent: props => <SideBar {...props} />
  }
);

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoading,
      AuthStack: AuthStack,
      AppStack: AppStack
    },
    {
      initialRouteName: "AuthLoading"
    }
  )
);
