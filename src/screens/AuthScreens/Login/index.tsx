import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { NavigationScreenProp, NavigationState } from "react-navigation";
import Icon from "react-native-vector-icons/SimpleLineIcons";
import { Input, Button } from "../../../components";
import styles from "./styles";

interface Props {
  navigation: NavigationScreenProp<NavigationState>;
}

class Login extends Component<Props, {}> {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.headStyle}>
          <Icon name="emotsmile" size={100} />
          <Text style={styles.headText}>Build Something Amazing</Text>
        </View>
        <View style={styles.inputContainer}>
          <Input placeholder="Username" />
          <Input placeholder="Password" />
          <Button
            text="Login"
            onPress={() => navigation.navigate("AppStack")}
          />
        </View>
      </View>
    );
  }
}

export default Login;
