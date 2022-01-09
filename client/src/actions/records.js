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

export const updateRecord = (id, record) => async (dispatch) => {
    try{
        const {data} = await api.updateRecord(id, record);
        dispatch({type: "UPDATE", payload: data});
    }catch(error){
        console.log(error);
    }
}

export const deleteRecord = (id) => async (dispatch) => {
    try{
        await api.deleteRecord(id);
        dispatch({type: "DELETE", payload: id});
    }catch(error){
        console.log(error);
    }
}