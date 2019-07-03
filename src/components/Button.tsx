import React, { Component } from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  TouchableOpacityProps
} from "react-native";
import { colors } from "../constants";

interface Props extends TouchableOpacityProps {
  text: string;
}

export class Button extends Component<Props, {}> {
  render() {
    const { text } = this.props;
    return (
      <TouchableOpacity {...this.props} style={styles.buttonStyle}>
        <Text style={styles.buttonTextStyle}>{text}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: colors.primary,
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 16
  },
  buttonTextStyle: {
    color: colors.containerBg,
    fontWeight: "700",
    fontSize: 16
  }
});
