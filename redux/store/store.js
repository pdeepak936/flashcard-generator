import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'

//store is a state container  for holding states of application
const store = createStore(
  rootReducer,
  compose(applyMiddleware(thunk))
)
export default store;