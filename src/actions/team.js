import { isLoading, hasErrored } from './global';
import Api from '../util/Api';

export const getTeamsAction = (teams) => {
    return {
        type: 'GET_TEAMS',
        teams
    }
}

export const getTeams = (skip, take, token) => {
    return (dispatch) => {
        dispatch(isLoading(true));

        return Api.get('Teams/GetUsersTeams/' + skip + '/' + take, 'Bearer ' + token)
            .then(response => {
                dispatch(isLoading(false));
                
                if (response.message) {
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