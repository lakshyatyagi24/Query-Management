import React, { Component } from 'react';
import { Text, View, StyleSheet, StatusBar, TextInput, Picker, Alert } from 'react-native';

import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { Icon, colors } from 'react-native-elements';


import Profile from './Profile'
import Records from './Records';
import { Button } from 'react-native-paper';

class Home extends Component {
    constructor() {
        super()
        this.state = {
            PickerValue: ''
        }
    }
    clickme = () => {
        Alert.alert(this.state.PickerValue);
    }
    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    hidden={false}
                    backgroundColor="red"
                    barStyle="dark-content"
                />
                <Picker
                    style={{ width: '80%' }}
                    selectedValue={this.state.PickerValue}
                    onValueChange={(temValue, itemIndex) => this.setState({ PickerValue:itemValue })}
                >
                    <Picker.Item label="Select Item" itemValue="" />
                    <Picker.Item label="Html" itemValue="html" />
                    <Picker.Item label="JS" itemValue="js" />
                </Picker>
                <Button title="Click Me" onPress={this.clickme} />
                <Text>Hi</Text>
            </View>
        );
    }
}

const TabNavigator = createMaterialBottomTabNavigator(
    {
        Home: {
            screen: Home,
            navigationOptions: {
                tabBarLabel: 'Home',
                activeColor: '#000000',
                inactiveColor: '#ffffff',
                barStyle: {
                    backgroundColor: '#c393d8'
                },
                tabBarIcon: () => (
                    <View>
                        <Icon name={'home'} size={25} style={{ color: '#ff0000' }} />
                    </View>
                )
            }

        },
        Profile: {
            screen: Profile,
            navigationOptions: {
                tabBarLabel: 'Profile',
                activeColor: '#000000',
                inactiveColor: '#ffffff',
                barStyle: {
                    backgroundColor: '#67baf6'
                },
                tabBarIcon: () => (
                    <View>
                        <Icon name={'person'} size={25} style={{ color: '#ff0000' }} />
                    </View>
                )
            }

        },
        Records: {
            screen: Records,
            navigationOptions: {
                tabBarLabel: 'Records',
                activeColor: '#000000',
                inactiveColor: '#ffffff',
                barStyle: {
                    backgroundColor: '#009387'
                },
                tabBarIcon: () => (
                    <View>
                        <Icon name={'poll'} size={25} style={{ color: '#ff0000' }} type='material' />
                    </View>
                )
            }

        },
    },
    {
        initialRouteName: 'Home',
        shifting: true,
    },
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#123456',
    },
});

export default createAppContainer(TabNavigator);
