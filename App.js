/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import Home from './src/Components/Home';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

 App = () => {
  
  const [taskList, setTaskList] = useState([]);
  const addTaskHandler = (value) => {
    setTaskList([...taskList, value]);
  }

  return (
    <SafeAreaView style={styles.sectionContainer}>
        <View>
          <Text>abc</Text>
           <Home/>
        </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
    height: '100%',
    width: '100%'
  },
  highlight: {
    fontWeight: '700',
  },
  addButton: {
    alignItems: 'flex-end',
    bottom: 0,
    position: 'relative',
  }
});

export default App;
