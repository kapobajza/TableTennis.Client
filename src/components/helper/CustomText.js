import React from 'react';
import {
    Text
} from 'react-native';
import PropTypes from 'prop-types';
import styles from '../../styles/global';

const CustomText = ({ text, style, ...rest }) => (
    <Text
        style={[styles.customText, style]}
        {...rest}
    >
        {text}
    </Text>
)

CustomText.propTypes = {
    text: PropTypes.string.isRequired,
    style: Text.propTypes.style
}

export default CustomText;