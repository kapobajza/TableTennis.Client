import React, { Component } from "react";
import { BackHandler } from "react-native";
import { connect } from "react-redux";
import { addNavigationHelpers, NavigationActions } from "react-navigation";
import navigator from './routes';
import {
    createReduxBoundAddListener,
    createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';
import NavigationStack from './routes';

const middleware = createReactNavigationReduxMiddleware(
    "root",
    state => state.navigation,
);

const addListener = createReduxBoundAddListener("root");

class AppNavigation extends Component {
    componentDidMount() {
        BackHandler.addEventListener("hardwareBackPress", this.onBackPress);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener("hardwareBackPress", this.onBackPress);
    }

    onBackPress = () => {
        const { dispatch, navigationState } = this.props;

        if (navigationState.stateForLoggedIn.index <= 1) {
            BackHandler.exitApp();
            return;
        }

        dispatch(NavigationActions.back());
        return true;
    };

    render() {
        const { navigationState, dispatch, user } = this.props;
        
        const state = user.token.length > 0
            ? navigationState.stateForLoggedIn
            : navigationState.stateForLoggedOut;
        
        return (
            <NavigationStack navigation={addNavigationHelpers({ dispatch, state, addListener })} />
        );
    }
}

const mapStateToProps = state => {
    return {
        user: state.auth.user,
        navigationState: state.navigation
    };
};

export default connect(mapStateToProps)(AppNavigation);