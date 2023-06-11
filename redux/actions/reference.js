import { ADD_REF } from '../../constants/actionTypes';

export const addRef = (val) => {
    return {
        type: 'ADD_REF',
        payload: val
    }
}