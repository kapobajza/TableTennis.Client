import React, { Component } from 'react';
import {
    View
} from 'react-native';
import CustomText from './CustomText';
import CustomButton from './CustomButton';
import styles from '../../styles/teamCell';
import PropTypes from 'prop-types';

export default class TeamCell extends Component {
    static propTypes = {
        data: PropTypes.object.isRequired,
        buttonText: PropTypes.string.isRequired,
        buttonPress: PropTypes.func
    }

    render() {
        const team = this.props.data;
        const users = team.Users;

        return (
            <View style={styles.container}>
                <CustomText
                    text={team.Team.Name}
                    style={styles.teamName}
                />
                <View>
                    <CustomButton
                        title={this.props.buttonText}
                        onPress={() => this.props.buttonPress(team.Team.TeamId)}
                        style={styles.button}
                    />
                    <View style={{ alignItems: 'flex-end' }}>
                        <CustomText
                            text="Members:"
                            style={{ margin: 10 }}
                        />
                        {
                            users.length > 0 ?
                                (
                                    <View style={{ flexDirection: 'row' }}>
                                        {
                                            users.map((item, index) => (
                                                <CustomText
                                                    text={item.UserName}
                                                    style={{ margin: 10 }}
                                                    key={index}
                                                />
                                            ))
                                        }
                                    </View>
                                ) : 
                                <CustomText
                                    text="There are no members in this team"
                                    style={{ margin: 10 }}
                                />
                        }
                    </View>
                </View>
            </View>
        );
    }
}