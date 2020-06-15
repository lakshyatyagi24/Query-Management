import React, { Component } from 'react';
import { Text, View, StyleSheet, StatusBar, TextInput } from 'react-native';

import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { Icon } from 'react-native-elements';



class App extends Component {
  constructor() {
    super()
    this.state = {}
  }
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          hidden={false}
          backgroundColor="red"
          barStyle="dark-content"
        />
        <Text>Hi1</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    //alignItems: 'center',
    //backgroundColor: '#ffffff',
  },
});

export default App;
