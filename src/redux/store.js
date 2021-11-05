import {createStore} from 'redux';
import { mobileReducer } from './reducers/mobile';
import createSagaMiddleware from 'redux-saga'

export const store = createStore(mobileReducer);

