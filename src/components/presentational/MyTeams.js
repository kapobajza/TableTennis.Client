import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    View,
    FlatList,
    ActivityIndicator,
    Alert
} from 'react-native';
import teamStyles from '../../styles/teams';
import TeamCell from '../helper/TeamCell';
import AddTeamModal from '../helper/AddTeamModal';

export default class MyTeams extends Component {
    static propTypes = {
        isLoading: PropTypes.bool.isRequired,
        hasErrored: PropTypes.object.isRequired,
        clearError: PropTypes.func.isRequired,
        addTeam: PropTypes.func.isRequired,
        addTeamToUser: PropTypes.func.isRequired,
        user: PropTypes.object.isRequired,
        teams: PropTypes.object.isRequired,
        getMyTeams: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props);

        this.state = {
            myTeams: [],
            hasTeam: this.props.user.teams.length <= 0 ? false : true
        }
    }

    componentWillMount() {
        this._getMyTeams();
    }

    _getMyTeams() {
        this.props.getMyTeams(this.props.user.userId, this.props.user.token).then(resp => {
            this.setState({
                myTeams: [
                    ...this.state.myTeams,
                    ...this.props.teams.myTeams
                ]
            });
        });
    }

    _renderHeader() {
        return (
            <AddTeamModal
                text={this.state.hasTeam ? "You can add a new team if you want" : "It seems like you don't have a team, you can add a new one"}
                onPress={this._addTeam}
            />
        );
    }

    _renderSeparator() {
        return (
            <View
                style={teamStyles.separator}
            />
        );
    }

    _handleRefresh() {
        this.setState({
            myTeams: []
        }, () => {
            this._getMyTeams()
        });
    }

    _addTeam = (teamName) => {
        team = {
            teamName: teamName,
            userId: this.props.user.userId
        };

        this.props.addTeam(team, this.props.user.token).then(resp => {
            console.log(this.props.teams.addedTeam);
            this.setState({
                hasTeam: true,                
                myTeams: [
                    ...this.state.myTeams, {
                        Team: this.props.teams.addedTeam,
                        Users: [ 
                            {
                                UserId: this.props.user.userId,
                                UserName: this.props.user.userName
                            }
                        ]
                    }
                ]
            });

            this.props.addTeamToUser(this.props.teams.addedTeam);
        });
    }

    _renderRowData(rowData) {
        return (
            <TeamCell
                data={rowData}
                buttonText="Leave team"
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
                <FlatList
                    ListHeaderComponent={() => this._renderHeader()}
                    data={this.state.myTeams}
                    renderItem={({ item }) => this._renderRowData(item)}
                    keyExtractor={(item) => item.Team.TeamId.toString()}
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