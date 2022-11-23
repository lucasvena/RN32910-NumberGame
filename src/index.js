import React, {useState} from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { Header } from './components';
import { StartGame, Game, GameOver } from './screens/index';
import colors from './utils/colors';
import { useFonts } from 'expo-font';

export default function App() {
  const [loaded] = useFonts({
    'Lato-Regular': require('../assets/fonts/Lato-Regular.ttf'),
    'Lato-Bold': require('../assets/fonts/Lato-Bold.ttf'),
    'Lato-Italic': require('../assets/fonts/Lato-Italic.ttf'),
  })


  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);
  const onStartGame = (selectedNumber) => {
    setUserNumber(selectedNumber);
  };

  const onGameOver = (rounds) => {
    setGuessRounds(rounds);
  }

  const onRestart = () => {
    setUserNumber(null);
    setGuessRounds(0);
  }

  let content = <StartGame onStartGame={onStartGame}/>
  
  const getTitle = () => {
    let title;
    if (userNumber && guessRounds <= 0) {
      title= 'Adivina adivinador!';
    } else if (guessRounds > 0) {
      title = 'Fin del Juego';
    } else {
      title= 'Bienvenido!';
    }
    return title;
  }

  if (userNumber && guessRounds <= 0) {
    content = <Game selectedNumber={userNumber} onGameOver={onGameOver} />
  } else if (guessRounds > 0) {
    content = <GameOver rounds={guessRounds} selectedNumber={userNumber} onRestart={onRestart}/>
  }
  

  if (!loaded) {
    return(
    <View style={styles.containerLoader}>
      <ActivityIndicator size='large' color={colors.primary}/>
    </View>
    )
  }

  return (
    <View style={styles.container}>
      <Header title={getTitle()}/>
      {content} 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  containerLoader:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
  },
});
