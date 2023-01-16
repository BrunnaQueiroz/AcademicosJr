import { createStore, applyMiddleware, compose } from 'redux'
/*import { configureStore } from '@reduxjs/toolkit'*/
import thunk from 'redux-thunk'
import logger from 'redux-logger'


import reducers from './actions/reducers/index'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const middleware = [thunk, logger ]

/*const extraStore = configureStore ( reducers )
    applyMiddleware (...middleware)*/

const store = createStore ( reducers )
    applyMiddleware ( ...middleware )



export default store