import { View, Text, StyleSheet } from "react-native";
import colors from "../../contants/color";

function NumberContainer({ children }) {
  return (
    <View style={styles.conatiner}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}
export default NumberContainer;

const styles = StyleSheet.create({
  conatiner: {
    borderWidth: 4,
    borderColor: colors.accent500,
    padding: 24,
    borderRadius: 8,
    margin: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  numberText: {
    color: colors.accent500,
    fontSize: 36,
    fontWeight: "bold",
  },
});
