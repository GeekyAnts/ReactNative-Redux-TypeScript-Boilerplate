import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ViewProps,
  ImageBackground
} from "react-native";
import { colors } from "../constants";

interface Props extends ViewProps {
  title: string;
  avatar: string;
}

export class AvatarItem extends Component<Props, {}> {
  render() {
    const { title, avatar } = this.props;
    return (
      <View {...this.props} style={styles.itemContainer}>
        <ImageBackground
          source={{ uri: `${avatar}.jpg` }}
          style={styles.avatarStyle}
        >
          <Text style={styles.titleStyle}>{title}</Text>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.containerBg,
    borderBottomWidth: 1,
    borderBottomColor: colors.borderColor,
    paddingHorizontal: 16,
    paddingVertical: 12
  },
  titleStyle: {
    fontSize: 20,
    fontWeight: "600",
    color: colors.containerBg
  },
  avatarStyle: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    backgroundColor: colors.borderColor,
    justifyContent: "center",
    alignItems: "center"
  }
});
