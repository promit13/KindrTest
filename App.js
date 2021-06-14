/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StyleSheet, View, SafeAreaView, Dimensions} from 'react-native';
import MyTabs, {MainStack} from './src/config/router';

const {height, width} = Dimensions.get('window');

const App: () => Node = () => {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.mainContainer}>
        <MainStack />
      </SafeAreaView>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 10,
    marginTop: 50,
    backgroundColor: 'black',
  },
});

export default App;
