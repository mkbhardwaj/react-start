import {createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers/rootReducer';
import reduxImmutableStateInVariant from 'redux-immutable-state-invariant';
export default function configureStore(defaultState)
{
    const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //to add redux dev tool support in the browser.
    return createStore(
        rootReducer, 
        defaultState,
        composeEnhancer(applyMiddleware(reduxImmutableStateInVariant()))
        );
}
