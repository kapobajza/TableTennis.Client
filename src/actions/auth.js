import { isLoading, hasErrored } from './global';
import Api from '../util/Api';
import { Buffer } from 'buffer';

export const loginAction = (userId, userName, token, teams) => {
    return {
        type: 'LOGIN',
        userId,
        userName,
        token,
        teams
    }
}

export const logout = () => {
    return {
        type: 'LOGOUT'
    }
}

export const registerAction = (registerSuccess) => {
    return {
        type: 'REGISTER',
        registerSuccess
    }
}

export const addTeamToUser = (team) => {
    return {
        type: 'ADD_TEAM_TO_USER',
        team
    }
}

export const login = (user) => {
    return (dispatch) => {
        dispatch(isLoading(true));
        const credentials = new Buffer(user.userName + ':' + user.password).toString('base64');

        return Api.post('account/login', null, 'Basic ' + credentials)
            .then(response => {
                dispatch(isLoading(false));

                if (response.message) {
                    dispatch(hasErrored({ message: response.message }));
                }
                else {
                    dispatch(loginAction(response.UserId, user.userName, response.Token, response.Teams));
                }
            }).catch(error => {
                console.log(error);
                dispatch(isLoading(false));
                dispatch(hasErrored(error.message));
            });
    }
}

export const register = (user) => {
    return (dispatch) => {
        dispatch(isLoading(true));

        return Api.post('account/register', user)
            .then(response => {
                dispatch(isLoading(false));

                if (response.message) {
                    dispatch(hasErrored({ message: response.message }));
                }
                else {
                    dispatch(registerAction(true));
                }
            }).catch(error => {
                console.log(error);
                dispatch(isLoading(false));
                dispatch(hasErrored(error.message));
            });
    }
}