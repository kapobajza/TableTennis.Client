import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    View,
    TextInput,
    ActivityIndicator,
    Alert,
    Text
} from 'react-native';
import styles from '../../styles/login';
import CustomButton from '../helper/CustomButton';

export default class Login extends Component {
    static propTypes = {
        login: PropTypes.func.isRequired,
        isLoading: PropTypes.bool.isRequired,
        hasErrored: PropTypes.object.isRequired,
        goToRegister: PropTypes.func.isRequired,
        clearError: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: ''
        }
    }

    _usernameChanged(username) {
        this.setState({
            username
        });
    }

    _passwordChanged(password) {
        this.setState({
            password
        });
    }

    render() {
        const error = this.props.hasErrored;
        if (error.message) {
            Alert.alert('Error', 'Error: ' + error.message);
            this.props.clearError();
        }
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Table Tennis match maker</Text>
                <TextInput
                    placeholder="Enter your username"
                    onChangeText={(text) => this._usernameChanged(text)}
                    style={styles.textInput}
                />
                <TextInput
                    placeholder="Enter your password"
                    secureTextEntry={true}
                    onChangeText={(text) => this._passwordChanged(text)}
                    style={styles.textInput}
                />
                <View style={styles.buttonsContainer}>
                    <CustomButton
                        onPress={() => {
                            this.props.login({
                                userName: this.state.username,
                                password: this.state.password
                            })
                        }}
                        title='Login'
                        style={styles.button}
                    />
                    <CustomButton
                        onPress={() => this.props.goToRegister()}
                        title='Register'
                        style={styles.button}
                    />
                </View>
                {
                    this.props.isLoading ?
                        <ActivityIndicator size="large" style={{ marginTop: 10 }} /> : null
                }
            </View>
        );
    }
}