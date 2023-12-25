import { Text, View, StyleSheet } from "react-native";
import Textc from "../components/ui/Text";
import { useState } from "react";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

function GameScreen({ userNumber }) {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  function nextGuessHandler(direction){
    // direction => 'lower' , "grater"
    
  }
  return (
    <View style={styles.screen}>
      <Textc>opponents guess</Textc>
      <NumberContainer>{currentGuess}</NumberContainer>

      <View>
        <Text>Higher or lower</Text>
        <View>
          <PrimaryButton onPress={}>+</PrimaryButton>
          <PrimaryButton onPress={}>-</PrimaryButton>
        </View>
      </View>
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
});
