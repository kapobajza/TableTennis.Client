import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reducer from './reducers/index';
import AppNavigation from './navigation/AppNavigation';
import { persistStore } from 'redux-persist';
import LoadingView from './components/helper/LoadingView';
import { PersistGate } from 'redux-persist/lib/integration/react';

const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__ });
console.disableYellowBox = true;

const store = createStore(
    reducer,
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