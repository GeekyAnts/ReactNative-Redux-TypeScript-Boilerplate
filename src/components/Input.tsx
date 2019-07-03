import React, { Component } from "react";
import { TextInput, StyleSheet, TextInputProps } from "react-native";
import { colors } from "../constants";

interface Props extends TextInputProps {
  error?: any;
}

export class Input extends Component<Props, {}> {
  render() {
    const { error } = this.props;
    return (
      <TextInput
        {...this.props}
        style={[
          styles.inputStyle,
          { borderBottomColor: error ? colors.accent : colors.borderColor }
        ]}
      />
    );
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
