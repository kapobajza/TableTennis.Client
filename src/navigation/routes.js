import { StackNavigator, DrawerNavigator } from 'react-navigation';
import LoginContainer from '../components/containers/LoginContainer';
import TeamsContainer from '../components/containers/TeamsContainer';
import MatchesContainer from '../components/containers/MatchesContainer';
import RegisterContainer from '../components/containers/RegisterContainer';
import DrawerContainer from '../components/containers/DrawerContainer';
import React from 'react';
import {
    Text
} from 'react-native';

const DrawerStack = DrawerNavigator({
    teams: {
        screen: TeamsContainer,
        navigationOptions: {
            title: 'Welcome'
        }
    },
    matches: { 
        screen: MatchesContainer,
        navigationOptions: {
            title: 'Your matches'
        }
    }
}, {
    gesturesEnabled: false,
    contentComponent: DrawerContainer
});

const drawerButton = (navigation) =>
    <Text
        style={{ padding: 15, color: 'white' }}
        onPress={() => {
                if (navigation.state.index === 0) {
                    navigation.navigate('DrawerOpen')
                } else {
                    navigation.navigate('DrawerClose')
                }
            }
        }>
        Menu
    </Text>

const navigator = StackNavigator({
    login: {
        screen: LoginContainer,
        navigationOptions: {
            header: null
        }
    },
    register: {
        screen: RegisterContainer,
        navigationOptions: {
            title: 'Register'
        }
    },
    mainScreen: {
        screen: DrawerStack,
        headerMode: 'float',
        navigationOptions: ({ navigation }) => ({
            headerStyle: { backgroundColor: '#4C3E54' },
            headerTintColor: 'white',
            gesturesEnabled: false,
            headerLeft: drawerButton(navigation)
        })
    }
});

export default navigator;