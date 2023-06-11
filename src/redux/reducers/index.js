
import { combineReducers } from "redux"; //combine the all recducers in this file
import handleCard from "./card";
import setId from './link'
import addRef from './reference'
const rootReducers = combineReducers({
    card: handleCard,
    id: setId,
    cardRef: addRef
})
export default rootReducers
