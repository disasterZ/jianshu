import {applyMiddleware, compose, createStore} from 'redux';
import thunk from "redux-thunk";
import Recuder from './reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(Recuder,
    composeEnhancers(applyMiddleware(thunk)));

export default store;