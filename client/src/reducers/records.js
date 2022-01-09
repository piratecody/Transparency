const reducer = (records = [], action) => {
    switch(action.type){
        case "UPDATE": 
            return records.map((record) => record._id === action.payload._id ? action.payload : record);
        case "FETCH_ALL":
            return action.payload;
        case "CREATE":
            return [...records, action.payload];
        case "DELETE":
            return records.filter((record) => record._id !== action.payload);
        default:
            return records;
    }
}

export default reducer