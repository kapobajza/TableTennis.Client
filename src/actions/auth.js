import { isLoading, hasErrored } from './global';
import Api from '../util/Api';
import { Buffer } from 'buffer';

export const loginAction = (userName, token) => {
    return {
        type: 'LOGIN',
        userName,
        token
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

export const login = (user) => {
    return (dispatch) => {
        dispatch(isLoading(true));
        const credentials = new Buffer(user.userName + ':' + user.password).toString('base64');

        return Api.post('account/login', null, 'Basic ' + credentials)
            .then(response => {
                dispatch(isLoading(false));
                //console.log(response);
                if (response.message) {
                    dispatch(hasErrored({ message: response.message }));
                }
                else {
                    dispatch(loginAction(user.userName, response));
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