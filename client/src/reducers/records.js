import * as actionTypes from '../constants/actionTypes';
const reducer = (records = [], action) => {
    switch(action.type){
        case actionTypes.UPDATE: 
            return records.map((record) => record._id === action.payload._id ? action.payload : record);
        case actionTypes.FETCH_ALL:
            return action.payload;
        case actionTypes.UPDATE:
            return [...records, action.payload];
        case actionTypes.DELETE:
            return records.filter((record) => record._id !== action.payload);
        default:
            return records;
    }
}

export default reducer