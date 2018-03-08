import { StackNavigator, TabNavigator } from 'react-navigation';
import LoginContainer from '../components/containers/LoginContainer';
import TeamsContainer from '../components/containers/TeamsContainer';
import MatchesContainer from '../components/containers/MatchesContainer';
import RegisterContainer from '../components/containers/RegisterContainer';

// export const Tabs = TabNavigator({
//     teams: {
//         screen: TeamsContainer,
//         navigationOptions: {
//             title: 'Teams'
//         }
//     },
//     matches: {
//         screen: MatchesContainer,
//         navigationOptions: {
//             title: 'Matches'
//         }
//     }
// });

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
        screen: TeamsContainer,
        navigationOptions: {
            title: 'Welcome'
        }
    }
});

export default navigator;