
import thunkMiddleware from 'redux-thunk';
import quoteReducer from './quote-reducer';


const { createStore, combineReducers, applyMiddleware } = require("redux");

let reducers = combineReducers({
    quote: quoteReducer
    
});


const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
