import * as actionTypes from '../constants/actionTypes';
const reducer = (numRecords=[], action) => {
    switch(action.type){
        case actionTypes.GET_NUM:
            return action.payload;
        default:
            return numRecords;
    }
}

export default reducer