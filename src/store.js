import { createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {};

const midleware = [thunk];

const store = createStore(rootReducer, initialState,compose(applyMiddleware(...midleware),
    window.__REDUX_DEVTOOLS_EXTENDION__&&
    window.__REDUX_DEVTOOLS_EXTENDION__()
))

export default store;