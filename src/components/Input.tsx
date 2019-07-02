import React, { Component } from "react";
import { TextInput, StyleSheet, TextInputProps } from "react-native";
import { colors } from "../constants";

interface Props extends TextInputProps {}

export class Input extends Component<Props, {}> {
  render() {
    return <TextInput {...this.props} style={styles.inputStyle} />;
  }
}

const styles = StyleSheet.create({
  inputStyle: {
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: colors.borderColor,
    fontSize: 16,
    marginVertical: 10
  }
});
