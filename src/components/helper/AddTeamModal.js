import React, { Component } from 'react';
import {
    View,
    Modal,
    TextInput
} from 'react-native';
import CustomText from './CustomText';
import CustomButton from './CustomButton';
import PropTypes from 'prop-types';
import styles from '../../styles/addTeamModal';
import globalStyles from '../../styles/global';

export default class AddTeamModal extends Component {
    static propTypes = {
        text: PropTypes.string,
        onPress: PropTypes.func
    }

    constructor(props) {
        super(props);

        this.state = {
            modalVisible: false,
            teamName: ''
        }
    }

    _toggleModal() {
        this.setState({
            modalVisible: !this.state.modalVisible
        });
    }

    _textChanged(teamName) {
        this.setState({
            teamName
        });
    }

    render() {
        return (
            <View style={styles.newTeamContainer}>
                <CustomText
                    text={this.props.text}
                    style={styles.newTeamText}
                />
                <View style={styles.buttonContainer}>
                    <CustomButton
                        title="Make a new team"
                        style={styles.newTeamButton}
                        onPress={() => this._toggleModal()}
                    />
                </View>
                <Modal
                    animationType={'slide'}
                    transparent={true}
                    visible={this.state.modalVisible}
                    onRequestClose={() => this._toggleModal()}
                >
                    <View style={styles.bgView}>
                        <View style={styles.modalContainer}>
                            <CustomText
                                text="Add a new team"
                                style={globalStyles.title}
                            />
                            <TextInput
                                placeholder="Team name"
                                style={globalStyles.textInput}
                                onChangeText={(text) => this._textChanged(text)}
                            />
                            <View style={styles.buttonContainer}>
                                <CustomButton
                                    title="Submit"
                                    style={styles.newTeamButton}
                                    onPress={() => this.props.onPress(this.state.teamName)}
                                />
                                <CustomButton
                                    title="Cancel"
                                    style={styles.newTeamButton}
                                    onPress={() => this._toggleModal()}
                                />
                            </View>
                        </View>
                    </View>
                </Modal>
            </View >
        );
    }
}