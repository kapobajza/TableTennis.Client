import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    Text,
    Button,
    View,
    Alert,
    FlatList,
    ActivityIndicator
} from 'react-native';
import CustomText from '../helper/CustomText';
import CustomButton from '../helper/CustomButton';
import styles from '../../styles/teams';

export default class Teams extends Component {
    static propTypes = {
        isLoading: PropTypes.bool.isRequired,
        hasErrored: PropTypes.object.isRequired,
        myTeams: PropTypes.array.isRequired,
        getTeams: PropTypes.func.isRequired,
        user: PropTypes.object.isRequired,
        teams: PropTypes.array.isRequired,
        clearError: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props);

        this.state = {
            itemsNr: 0,
            teams: []
        }
    }

    componentWillMount() {
        this._getTeams();
    }

    _getTeams() {
        this.props.getTeams(this.state.itemsNr, 10, this.props.user.token).then(resp => {
            this.setState({
                teams: [...this.state.teams, ...this.props.teams]
            });
        });
    }

    _renderRowData(rowData) {
        const date = new Date(rowData.Team.DateCreated);
        return (
            <View style={{ margin: 10, justifyContent: 'center', padding: 10 }}>
                <CustomText
                    text={rowData.Team.Name}
                    style={styles.newTeamText}
                />
                <CustomText
                    text={date.getDate() + '.' + (date.getMonth() + 1) + '.' + date.getFullYear()}
                    style={styles.newTeamText}
                />
            </View>
        );
    }

    _reachedEnd() {
        this.setState({
            itemsNr: this.state.itemsNr + 10
        }, () => {
            this._getTeams();
        });
    }

    _handleRefresh() {
        this.setState({
            itemsNr: 0,
            teams: []
        }, () => {
            this._getTeams()
        });
    }

    _renderSeparator() {
        return (
            <View
                style={{
                    height: 1,
                    backgroundColor: '#00acac'
                }}
            />
        );
    }

    render() {
        const error = this.props.hasErrored;

        if (error.message) {
            Alert.alert('Error', 'Error: ' + error.message);
            this.props.clearError();
        }

        return (
            <View>
                {
                    this.props.myTeams.length <= 0 ?
                        <View style={styles.newTeamContainer}>
                            <CustomText
                                text="It seems like you don't have a team, you can make your own team or join an existing one"
                                style={styles.newTeamText}
                            />
                            <View style={styles.buttonContainer}>
                                <CustomButton
                                    title="Make a new team"
                                    style={styles.newTeamButton}
                                />
                            </View>
                        </View> : null
                }
                <FlatList
                    data={this.state.teams}
                    renderItem={({ item }) => this._renderRowData(item)}
                    keyExtractor={(item) => item.Team.Name}
                    refreshing={this.props.isLoading}
                    onEndReached={() => this._reachedEnd()}
                    onEndReachedThreshold={0.2}
                    onRefresh={() => this._handleRefresh()}
                    ItemSeparatorComponent={() => this._renderSeparator()}
                />
                {
                    this.props.isLoading ? 
                    <ActivityIndicator size="large" style={{margin: 10}} /> : null
                }
            </View>
        );
    }
}