import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { colors } from "../constants";
import Icon from "react-native-vector-icons/Ionicons";

interface Props {
  title: string;
  leftButtonPress?: () => void;
  rightButtonPress?: () => void;
}

export class Header extends Component<Props, {}> {
  render() {
    const { title, leftButtonPress, rightButtonPress } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.leftContainer}>
          <TouchableOpacity style={styles.iconButton} onPress={leftButtonPress}>
            <Icon name="ios-menu" size={24} />
          </TouchableOpacity>
        </View>
        <View style={styles.midContainer}>
          <Text style={styles.headerTitle}>{title}</Text>
        </View>
        <View style={styles.rightContainer}>
          {rightButtonPress ? (
            <TouchableOpacity
              style={styles.iconButton}
              onPress={rightButtonPress}
            >
              <Icon name="ios-power" size={24} />
            </TouchableOpacity>
          ) : null}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 56,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.containerBg,
    borderBottomWidth: 1,
    borderBottomColor: colors.borderColor
  },
  leftContainer: {
    flex: 1,
    alignItems: "flex-start"
  },
  midContainer: {
    flex: 3,
    alignItems: "center"
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: "700"
  },
  rightContainer: {
    flex: 1,
    alignItems: "flex-end"
  },
  iconButton: {
    paddingHorizontal: 16
  }
});
