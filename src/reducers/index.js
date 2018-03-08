import { combineReducers } from 'redux';
import { hasErrored, isLoading } from './global';
import navigation from './navigation';
import auth from './auth';

export default combineReducers({
    hasErrored,
    isLoading,
    navigation,
    auth
});