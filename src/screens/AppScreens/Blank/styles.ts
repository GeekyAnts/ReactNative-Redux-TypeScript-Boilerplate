import { StyleSheet } from "react-native";
import { colors } from "../../../constants";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.containerBg
  },
  contentStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  textStyle: {
    fontSize: 20,
    fontWeight: "700"
  }
});

export default styles;
