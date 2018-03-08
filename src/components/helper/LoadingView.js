import React, { Component } from 'react';
import {
    View,
    ActivityIndicator
} from 'react-native';

export default class LoadingView extends Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" />
            </View>
        );
    }
}

