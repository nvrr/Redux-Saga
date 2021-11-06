import { createStore, applyMiddleware } from 'redux';
import { mobileReducer } from './reducers/mobile';
import createSagaMiddleware from 'redux-saga'
import {watchUser} from './sagas/users.saga'
// gh'' GH""
const sagaMiddleware = createSagaMiddleware();

export const store = createStore(mobileReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(watchUser)