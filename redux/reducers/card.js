import { ADD_CARD, REMOVE_CARD, LOCAL_CARD } from '../../constants/actionTypes';

const initialState = []

const handleCard = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CARD: localStorage.setItem('card', JSON.stringify([...state, action.payload]));
            return [...state, action.payload];
        case REMOVE_CARD: let cardData = state.filter(obj => state.indexOf(obj) !== state.indexOf(action.payload));
        localStorage.setItem('card', JSON.stringify(cardData));
            return cardData;
        case LOCAL_CARD: 
            return [...state, ...action.payload];
        default:
            return state;
    }
}
export default handleCard
