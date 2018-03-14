import React, { Component } from 'react';
import {
    TouchableOpacity,
    Text
} from 'react-native';
import PropTypes from 'prop-types';
import styles from '../../styles/global';

export default class MenuItem extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        navigateTo: PropTypes.func.isRequired
    }

    render() {
        return (
            <TouchableOpacity
                style={styles.menuItem}
                onPress={() => this.props.navigateTo()}
            >
                <Text
                    style={styles.menuItemText}
                >
                    {this.props.title}
                </Text>
            </TouchableOpacity>
        );
    }
}