import React, { Component } from 'react';
import { Text, View, StyleSheet, StatusBar, TextInput } from 'react-native';

class Profile extends Component {
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
        <TextInput />
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

export default Profile;
