import * as api from '../api';

export const getRecords = () => async (dispatch) => {

    try{
        const { data } = await api.fetchRecords();
        dispatch({type: "FETCH_ALL", payload: data});
    } catch (error){
        console.log(error);
    }
    
}

export const createRecord = (record) => async (dispatch) => {
    try{
        const {data} = await api.createRecord(record);
        dispatch({type: "CREATE", payload: data})
    }catch(error){
        console.log(error);
    }
}