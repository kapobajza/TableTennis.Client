import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    View,
    Text
} from 'react-native';

export default class Login extends Component {
    static propTypes = {
        logout: PropTypes.func.isRequired,
        navigateToMatches: PropTypes.func.isRequired,
        navigateToTeams: PropTypes.func.isRequired
    }

    render() {
        const activeItem = this.props.activeItemKey;

        return (
            <View>
                {
                    activeItem !== 'matches' ?
                        <Text
                            onPress={() => this.props.navigateToMatches()}
                        >
                            Matches
                        </Text> : null
                }
                {
                    activeItem !== 'teams' ?
                        <Text
                            onPress={() => this.props.navigateToTeams()}
                        >
                            Teams
                        </Text> : null
                }
                <Text
                    onPress={() => this.props.logout()}
                >
                    Log out
                </Text>
            </View>
        );
    }
}