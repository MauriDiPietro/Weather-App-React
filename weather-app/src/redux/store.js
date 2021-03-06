import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';


import weatherReducer from './reducers/weatherReducer'




const store = createStore(
    weatherReducer, 
    //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), 
    applyMiddleware(thunk)
    
    );

export default store;
