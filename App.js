import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView>
      <View style={styles.container1}>
        <Text>Cyan</Text>
      </View>
      <View style={styles.container2}>
        <Text>Blue</Text>
      </View>
      <View style={styles.container3}>
        <Text>Magenta</Text>
      </View>
      <View style={styles.container4}>
        <Text>Orange</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container1: {
    backgroundColor: '#2aa198',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
    padding: 10,
  },
  container2: {
    backgroundColor: '#268bd2',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    padding: 10,
  },
  container3: {
    backgroundColor: '#d33682',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    padding: 10,
  },
  container4: {
    backgroundColor: '#cb4b16',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    padding: 10,
  },
});
