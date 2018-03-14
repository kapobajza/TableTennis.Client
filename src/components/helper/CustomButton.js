import React, { Component } from 'react';
import {
    TouchableOpacity,
    Text
} from 'react-native';
import PropTypes from 'prop-types';
import styles from '../../styles/global';

const CustomButton = ({ style, title, disabled, ...rest }) => (
    <TouchableOpacity
        style={[styles.button, style]}
        activeOpacity={0.35}
        disabled={disabled}
        {...rest}
    >
        <Text style={{ color: 'white' }}>
            {title.toUpperCase()}
        </Text>
    </TouchableOpacity>
);

CustomButton.propTypes = {
    style: Text.propTypes.style,
    title: PropTypes.string.isRequired,
    disabled: PropTypes.bool
}

export default CustomButton;