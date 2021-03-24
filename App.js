import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import CarItem from './components/carItem/index.js';
import CarList from './components/carList/index.js';
import Header from './components/Header/index.js';
const App = () => {
  return (
    <View style={styles.container}>
        <Header />
        <CarList />

      <StatusBar style="auto"/>
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  carContainer: {
    width: '100%',
    height: '100%',
  },

  titles: {
    marginTop: '30%',
    width: '100%',
    alignItems: 'center',
  },

  title: {
    fontSize: 40,
    fontWeight: '500',
    color: "#fff",
  },

  subtitle: {
    fontSize: 16,
    color: '#fff',
  },

  backgroundImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',

  }
});
