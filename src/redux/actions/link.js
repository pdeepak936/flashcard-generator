import { ADD_CARD_ID, ADD_GROUP_ID } from '../../constants/actionTypes';

export const addGroupId = (id) => {
    return {
        type: 'ADD_GROUP_ID',
        payload: id
    }
}
export const addCardId = (id) => {
    return {
        type: 'ADD_CARD_ID',
        payload: id
    }
}

