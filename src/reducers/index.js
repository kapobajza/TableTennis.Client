import { combineReducers } from 'redux';
import { hasErrored, isLoading } from './global';
import navigation from './navigation';
import auth from './auth';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

const rootPersistConfig = {
    key: 'root',
    storage: storage,
    stateReconciler: autoMergeLevel2,
    blacklist: ['navigation', 'isLoading', 'hasErrored']
};

const authPersistConfig = {
    key: 'auth',
    storage: storage,
    stateReconciler: autoMergeLevel2,
    blacklist: ['registerSuccess']
}

const reducer = combineReducers({
    hasErrored,
    isLoading,
    navigation,
    auth: persistReducer(authPersistConfig, auth)
});

export default persistReducer(rootPersistConfig, reducer);