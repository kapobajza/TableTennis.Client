import { NavigationActions } from 'react-navigation';
import AppNavigator from '../navigation/routes';

const ActionForLoggedOut = AppNavigator.router.getActionForPathAndParams("login");
// const ActionForLoggedIn = AppNavigator.router.getActionForPathAndParams("mainScreen"); // returning null
const ActionForLoggedIn = {
    type: 'Navigation/NAVIGATE',
    routeName: 'mainScreen'
}

const stateForLoggedOut = AppNavigator.router.getStateForAction(ActionForLoggedOut);
const stateForLoggedIn = AppNavigator.router.getStateForAction(ActionForLoggedIn);

const initialState = { stateForLoggedOut, stateForLoggedIn };

const navigation = (state = initialState, action) => {
    switch (action.type) {
        case "LOGIN":
            return {
                ...state,
                stateForLoggedIn: AppNavigator.router.getStateForAction(ActionForLoggedIn)
            };

        case "LOGOUT":
            return {
                ...state,
                stateForLoggedOut: AppNavigator.router.getStateForAction(ActionForLoggedOut)
            };

        case "REGISTER_NAVIGATE":
            return {
                ...state,
                stateForLoggedOut: AppNavigator.router.getStateForAction(
                    AppNavigator.router.getActionForPathAndParams("register"),
                    stateForLoggedOut
                )
            };

        case "Navigation/BACK":
            return {
                ...state,
                stateForLoggedOut: AppNavigator.router.getStateForAction(
                    NavigationActions.back(),
                    stateForLoggedOut
                )
            };

        case "MATCHES_NAVIGATE":
            return {
                ...state,
                stateForLoggedIn: AppNavigator.router.getStateForAction(
                    AppNavigator.router.getActionForPathAndParams("mainScreen/matches"),
                    stateForLoggedIn
                )
            };

        case "TEAMS_NAVIGATE":
            return {
                ...state,
                stateForLoggedIn: AppNavigator.router.getStateForAction(
                    AppNavigator.router.getActionForPathAndParams("mainScreen/teams"),
                    stateForLoggedIn
                )
            };

        case "MY_TEAMS_NAVIGATE":
            return {
                ...state,
                stateForLoggedIn: AppNavigator.router.getStateForAction(
                    AppNavigator.router.getActionForPathAndParams("mainScreen/myTeams"),
                    stateForLoggedIn
                )
            };

        default:
            return {
                ...state,
                stateForLoggedIn: AppNavigator.router.getStateForAction(action, state.stateForLoggedIn)
            };
    }
};

export default navigation;