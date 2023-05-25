import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen'
import { SafeAreaView, StyleSheet} from 'react-native';
import StartScreen from './screens/StartScreen';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return(
    <SafeAreaView style={styles.root}>
      <StartScreen/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});

export default App;
