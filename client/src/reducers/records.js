const reducer = (records = [], action) => {
    switch(action.type){
        case "FETCH_ALL":
            return action.payload;
        case "CREATE":
            return [...records, action.payload];
        default:
            return records;
    }
}

export default reducer