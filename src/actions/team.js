import { isLoading, hasErrored } from './global';
import { logout } from './auth';
import Api from '../util/Api';

export const getTeamsAction = (teams) => {
    return {
        type: 'GET_TEAMS',
        teams
    }
}

export const addTeamAction = (team) => {
    return {
        type: 'ADD_TEAM',
        team
    }
}

export const getMyTeamsAction = (teams) => {
    return {
        type: 'GET_MY_TEAMS',
        teams
    }
}

export const getTeams = (skip, take, token, userId) => {
    return (dispatch) => {
        dispatch(isLoading(true));

        return Api.get('Teams/GetUsersTeams/' + userId + '/' + skip + '/' + take, 'Bearer ' + token)
            .then(response => {
                dispatch(isLoading(false));

                if (response.message) {
                    if(response.message.indexOf('Invalid token') !== -1) {
                        dispatch(logout());
                    }

                    dispatch(hasErrored({ message: response.message }));
                }
                else {
                    dispatch(getTeamsAction(response));
                }
            }).catch(error => {
                console.log(error);
                dispatch(isLoading(false));
                dispatch(hasErrored(error.message));
            });
    }
}

export const addTeam = (team, token) => {
    return (dispatch) => {
        dispatch(isLoading(true));

        return Api.post('Teams/Add', team, 'Bearer ' + token)
            .then(response => {
                dispatch(isLoading(false));

                if (response.message) {
                    if(response.message.indexOf('Invalid token') !== -1) {
                        dispatch(logout());
                    }
                    
                    dispatch(hasErrored({ message: response.message }));
                }
                else {
                    dispatch(addTeamAction(response));
                }
            }).catch(error => {
                console.log(error);
                dispatch(isLoading(false));
                dispatch(hasErrored(error.message));
            });
    }
}

export const getMyTeams = (userId, token) => {
    return (dispatch) => {
        dispatch(isLoading(true));

        return Api.get('Teams/GetMyTeams/' + userId, 'Bearer ' + token)
            .then(response => {
                dispatch(isLoading(false));

                if (response.message) {
                    if(response.message.indexOf('Invalid token') !== -1) {
                        dispatch(logout());
                    }

                    dispatch(hasErrored({ message: response.message }));
                }
                else {
                    dispatch(getMyTeamsAction(response));
                }
            }).catch(error => {
                console.log(error);
                dispatch(isLoading(false));
                dispatch(hasErrored(error.message));
            });
    }
}