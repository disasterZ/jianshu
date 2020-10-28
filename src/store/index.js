import {compose, createStore} from 'redux';
import Recuder from './reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(Recuder,composeEnhancers());

export default store;