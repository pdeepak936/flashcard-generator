import { ADD_CARD, REMOVE_CARD, LOCAL_CARD } from '../../constants/actionTypes';

export const addCard = (data) => {
    return {
        type: 'ADD_CARD',
        payload: data,
    }
}
export const removeCard = (data) => {
    return {
        type: 'REMOVE_CARD',
        payload: data,
    }
}
export const localCard = (data)=>{
    return{
        type: 'LOCAL_CARD',
        payload: data,
    }
}