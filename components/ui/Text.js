import { Text, StyleSheet } from "react-native";
import colors from "../../contants/color";
function Textc({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}
export default Textc;
const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    padding: 12,
    borderWidth: 2,
    borderColor: "white",
    margin: 4,
  },
});
