import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    View,
    TextInput,
    Button,
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
        registerMessage: PropTypes.string.isRequired
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

    render() {
        const error = this.props.hasErrored;
        if(error.message) {
            Alert.alert('Error', 'Error: ' + error.message);
            this.props.clearError();
        }

        if(this.props.registerMessage) {
            Alert.alert('Success', registerMessage);
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
                />
                {
                    this.props.isLoading ?
                        <ActivityIndicator size="large" style={{marginTop: 10}} /> : null
                }
            </View>
        );
    }
}