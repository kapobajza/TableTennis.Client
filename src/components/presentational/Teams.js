import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    Text,
    Button,
    View,
    Alert,
    FlatList,
    ActivityIndicator,
    RefreshControl
} from 'react-native';
import CustomText from '../helper/CustomText';
import CustomButton from '../helper/CustomButton';
import styles from '../../styles/teams';
import TeamCell from '../helper/TeamCell';
import AddTeamModal from '../helper/AddTeamModal';

export default class Teams extends Component {
    static propTypes = {
        isLoading: PropTypes.bool.isRequired,
        hasErrored: PropTypes.object.isRequired,
        myTeams: PropTypes.array.isRequired,
        getTeams: PropTypes.func.isRequired,
        user: PropTypes.object.isRequired,
        teams: PropTypes.object.isRequired,
        clearError: PropTypes.func.isRequired,
        addTeam: PropTypes.func.isRequired,
        addTeamToUser: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props);

        this.state = {
            itemsNr: 0,
            teams: [],
            hasTeam: this.props.myTeams.length <= 0 ? false : true
        }
    }

    componentWillMount() {
        this._getTeams();
    }

    _getTeams() {
        this.props.getTeams(this.state.itemsNr, 10, this.props.user.token, this.props.user.userId).then(resp => {
            this.setState({
                teams: [...this.state.teams, ...this.props.teams.allTeams]
            });
        });
    }

    _renderRowData(rowData) {
        return (
            <TeamCell
                data={rowData}
                buttonText="Join team"
            />
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
                style={styles.separator}
            />
        );
    }

    _renderHeader() {
        return !this.state.hasTeam ?
            (
                <AddTeamModal
                    text="It seems like you don't have a team, you can make a new team or join an existing one"
                    onPress={this._addTeam}
                />
            ) : null;
    }

    _addTeam = (teamName) => {
        team = {
            teamName: teamName,
            userId: this.props.user.userId            
        };
        
        this.props.addTeam(team, this.props.user.token).then(resp => {
            this.setState({
                hasTeam: true
            });

            this.props.addTeamToUser(this.props.teams.addedTeam);
        });
    }

    render() {
        const error = this.props.hasErrored;

        if (error.message) {
            Alert.alert('Error', 'Error: ' + error.message);
            this.props.clearError();
        }

        return (
            <View>
                <FlatList
                    ListHeaderComponent={() => this._renderHeader()}
                    data={this.state.teams}
                    renderItem={({ item }) => this._renderRowData(item)}
                    keyExtractor={(item) => item.Team.TeamId.toString()}
                    onEndReached={() => this._reachedEnd()}
                    onEndReachedThreshold={0.5}
                    onRefresh={() => this._handleRefresh()}
                    refreshing={this.props.isLoading}
                    ItemSeparatorComponent={() => this._renderSeparator()}
                />
                {
                    this.props.isLoading ? 
                        <ActivityIndicator size="large" style={{ margin: 10 }} /> : null
                }
            </View>
        );
    }
}