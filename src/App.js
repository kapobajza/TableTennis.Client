import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reducer from './reducers/index';
import AppNavigation from './navigation/AppNavigation';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import LoadingView from './components/helper/LoadingView';
import { PersistGate } from 'redux-persist/lib/integration/react';

const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__ });
console.disableYellowBox = true;

const persistConfig = {
    key: 'root',
    storage: storage,
    stateReconciler: autoMergeLevel2,
    blacklist: ['navigation', 'isLoading', 'hasErrored']
};

const persistingReducer = persistReducer(persistConfig, reducer);

const store = createStore(
    persistingReducer,
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
    )
);

const persistor = persistStore(store);

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <PersistGate loading={<LoadingView />} persistor={persistor}>
                    <AppNavigation />
                </PersistGate>
            </Provider>
        );
    }
}