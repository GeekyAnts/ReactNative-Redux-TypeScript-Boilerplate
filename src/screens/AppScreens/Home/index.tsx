import React, { Component } from "react";
import { View, Text, ScrollView } from "react-native";
import {
  NavigationScreenProp,
  NavigationState,
  FlatList
} from "react-navigation";
import { Header } from "../../../components";
import { colors } from "../../../constants";
import styles from "./styles";
import { ListItem } from "../../../components/ListItem";

interface Props {
  navigation: NavigationScreenProp<NavigationState>;
}

interface itemProp {
  item: string;
}

class Home extends Component<Props, {}> {
  render() {
    const { navigation } = this.props;
    const data = ["abc", "xyz"];
    return (
      <View style={styles.container}>
        <Header title="Home" leftButtonPress={() => navigation.openDrawer()} />
        <FlatList
          data={data}
          keyExtractor={item => item}
          renderItem={({ item }: itemProp) => {
            return <ListItem title={item} />;
          }}
        />
      </View>
    );
  }
}

export default Home;
