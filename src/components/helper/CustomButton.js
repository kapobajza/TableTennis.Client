import React, { Component } from 'react';
import {
    TouchableOpacity,
    Text
} from 'react-native';
import PropTypes from 'prop-types';
import styles from '../../styles/global';

const CustomButton = ({ style, title, ...rest }) => (
    <TouchableOpacity
        style={[styles.button, style]}
        {...rest}
    >
        <Text style={{ color: 'white' }}>
            {title.toUpperCase()}
        </Text>
    </TouchableOpacity>
);

CustomButton.propTypes = {
    style: Text.propTypes.style,
    children: PropTypes.node,
    title: PropTypes.string.isRequired
}

export default CustomButton;