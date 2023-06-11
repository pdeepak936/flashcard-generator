import { ADD_CARD_ID, ADD_GROUP_ID } from '../../constants/actionTypes';
const initialState = { groupId: 0, cardId: 0 }

const setId = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CARD_ID:
            return { groupId: state.groupId, cardId: action.payload };
        case ADD_GROUP_ID:
            return { groupId: action.payload, cardId: state.cardId };
        default:
            return state;
    }
}
export default setId