import {createStore, combineReducers, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import allUserReducer from './allUsers'
import userReducer from './singleUser'
import homesReducer from './allHomes'

const reducer = combineReducers({
  allUsers: allUserReducer,
  allHomes: homesReducer,
  user: userReducer
})

const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
)
const store = createStore(reducer, middleware)

export default store
export * from './singleUser'
