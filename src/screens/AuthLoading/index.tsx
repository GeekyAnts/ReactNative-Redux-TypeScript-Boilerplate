import * as React from 'react';
import {ActivityIndicator, View} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {createStackNavigator} from '@react-navigation/stack';
import {
  createDrawerNavigator,
  DrawerNavigationProp,
} from '@react-navigation/drawer';

import Login from '../../screens/AuthScreens/Login';
import Home from '../../screens/AppScreens/Home';
import Blank from '../../screens/AppScreens/Blank';
import SideBar from '../AppScreens/SideBar';

const Drawer = createDrawerNavigator();

export default function AuthLoading({navigation}) {
  const [isLoading, setIsLoading] = React.useState(true);
  const [userToken, setUserToken] = React.useState(undefined);

  React.useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      // We should also handle error for production apps
      const userToken = await AsyncStorage.getItem('userToken');

      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      setIsLoading(false);
      setUserToken(userToken);
    };

    bootstrapAsync();
  }, []);

  return (
    <>
      <Drawer.Navigator
        contentComponent={() => <SideBar navigation={navigation} />}>
        {isLoading ? (
          // We haven't finished checking for the token yet
          <Drawer.Screen name="splash" options={{header: null}}>
            {() => (
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <ActivityIndicator />
              </View>
            )}
          </Drawer.Screen>
        ) : userToken === undefined ? (
          // Notoken found, user isn't signed in
          <>
            <Drawer.Screen
              name="Login"
              component={Login}
              options={{header: null}}
            />
            <Drawer.Screen
              name="Home"
              component={Home}
              options={{header: null}}
            />
          </>
        ) : (
          // User is signed in
          <>
            <Drawer.Screen
              name="Home"
              component={Home}
              options={{header: null}}
            />
            <Drawer.Screen
              name="Blank"
              component={Blank}
              options={{header: null}}
            />
            <Drawer.Screen
              name="Login"
              component={Login}
              options={{header: null}}
            />
          </>
        )}
      </Drawer.Navigator>
    </>
  );
}
