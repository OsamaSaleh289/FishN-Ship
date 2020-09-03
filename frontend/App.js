/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import RecipeCard from './components/RecipeCard';
import Home from './screens/Home';

const App: () => React$Node = () => {
    return (
      <Home></Home>
    );
  
};

const styles = StyleSheet.create({
  
});

export default App;
