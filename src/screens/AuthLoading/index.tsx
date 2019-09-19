import React from 'react';
import {ActivityIndicator, StatusBar, StyleSheet, View} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {NavigationScreenProp, NavigationState} from 'react-navigation';

interface Props {
  navigation: NavigationScreenProp<NavigationState>;
}

class AuthLoading extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);
    this._bootstrapAsync();
  }

  _bootstrapAsync = async () => {
    const {navigation} = this.props;
    const userToken = await AsyncStorage.getItem('userToken');
    navigation.navigate(userToken ? 'AppStack' : 'AuthStack');
  };

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator />
      </View>
    );
  }
}

export default AuthLoading;
