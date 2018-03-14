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

export default class Register extends Component {
    static propTypes = {
        register: PropTypes.func.isRequired,
        isLoading: PropTypes.bool.isRequired,
        hasErrored: PropTypes.object.isRequired,
        clearError: PropTypes.func.isRequired,
        registerSuccess: PropTypes.bool.isRequired,
        clearRegisterSuccess: PropTypes.func.isRequired,
        goToLogin: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            repeatPassword: ''
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

    _repeatPasswordChanged(repeatPassword) {
        this.setState({
            repeatPassword
        });
    }

    _returnToLogin() {
        this.props.clearRegisterSuccess();
        this.props.goToLogin();
    }

    render() {
        const error = this.props.hasErrored;
        if (error.message) {
            Alert.alert('Error', 'Error: ' + error.message);
            this.props.clearError();
        }

        if (this.props.registerSuccess) {
            Alert.alert(
                'Success',
                'You have successfully registered.',
                [
                    {
                        text: 'Ok', onPress: () => this._returnToLogin()
                    }
                ],
                {
                    onDismiss: () => this._returnToLogin()
                }
            );
        }

        return (
            <View style={styles.container}>
                <Text style={styles.title}>Register a new account</Text>
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
                <TextInput
                    placeholder="Repeat password"
                    secureTextEntry={true}
                    onChangeText={(text) => this._repeatPasswordChanged(text)}
                    style={styles.textInput}
                />
                <CustomButton
                    title="Register"
                    onPress={() =>
                        this.props.register({
                            userName: this.state.username,
                            password: this.state.password,
                            repeatPassword: this.state.repeatPassword
                        })
                    }
                    style={styles.button}
                    disabled={this.props.isLoading}
                />
                {
                    this.props.isLoading ?
                        <ActivityIndicator size="large" style={{ marginTop: 10 }} /> : null
                }
            </View>
        );
    }
}