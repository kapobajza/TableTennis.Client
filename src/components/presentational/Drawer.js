import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    View,
    Text
} from 'react-native';
import MenuItem from '../helper/MenuItem';

export default class Login extends Component {
    static propTypes = {
        logout: PropTypes.func.isRequired,
        navigateToMatches: PropTypes.func.isRequired,
        navigateToTeams: PropTypes.func.isRequired,
        navigateToMyTeams: PropTypes.func.isRequired
    }

    render() {
        const activeItem = this.props.activeItemKey;

        return (
            <View>
                {
                    activeItem !== 'matches' ?
                        <MenuItem
                            title='Matches'
                            navigateTo={this.props.navigateToMatches}
                        /> : null
                }
                {
                    activeItem !== 'teams' ?
                        <MenuItem
                            title='Teams'
                            navigateTo={this.props.navigateToTeams}
                        /> : null
                }
                {
                    activeItem !== 'myTeams' ?
                        <MenuItem
                            title='My teams'
                            navigateTo={this.props.navigateToMyTeams}
                        /> : null
                }
                <MenuItem
                    title='Log out'
                    navigateTo={this.props.logout}
                />
            </View>
        );
    }
}