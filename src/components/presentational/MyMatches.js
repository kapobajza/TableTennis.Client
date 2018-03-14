import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    Text,
    View
} from 'react-native';

export default class Matches extends Component {
    static propTypes = {
        isLoading: PropTypes.bool.isRequired,
        hasErrored: PropTypes.object.isRequired
    }

    render() {
        return (
            <View>
                <Text>This is My matches screen.</Text>
            </View>
        );
    }
}