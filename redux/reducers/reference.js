import { ADD_REF } from "../../constants/actionTypes";

const addRef = (state = '', action) => {
    switch(action.type){
        case ADD_REF:
            return action.payload;
        default:
            return state;
    }
}
export default addRef