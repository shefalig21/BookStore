import React from 'react';
import { StyleSheet, Text, View,} from 'react-native';
import { Provider } from 'react-redux';
import store from './src/Redux/store';
import Navigation from './src/Navigation/Navigation';

const App = () => {
  return (
    <View style={styles.container}>

    <Provider store={store}>
      <Navigation />
    </Provider>

    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container:{
    flex:1,
  }
})

