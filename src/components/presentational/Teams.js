import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    Text,
    Button,
    View
} from 'react-native';

export default class Teams extends Component {
    static propTypes = {
        isLoading: PropTypes.bool.isRequired,
        hasErrored: PropTypes.object.isRequired
    }

    render() {
        return (
            <View>
                <Text>This is Teams screen.</Text>
            </View>
        );
    }
}