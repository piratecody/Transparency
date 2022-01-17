import * as api from '../api';
import * as actionTypes from '../constants/actionTypes';

export const getRecords = () => async (dispatch) => {

    try{
        const { data } = await api.fetchRecords();
        dispatch({type: actionTypes.FETCH_ALL, payload: data});
    } catch (error){
        console.log(error);
    }
    
}

export const createRecord = (record) => async (dispatch) => {
    try{
        const {data} = await api.createRecord(record);
        dispatch({type: actionTypes.CREATE, payload: data})
    }catch(error){
        console.log(error);
    }
}

export const updateRecord = (id, record) => async (dispatch) => {
    try{
        const {data} = await api.updateRecord(id, record);
        dispatch({type: actionTypes.UPDATE, payload: data});
    }catch(error){
        console.log(error);
    }
}

export const deleteRecord = (id) => async (dispatch) => {
    try{
        await api.deleteRecord(id);
        dispatch({type: actionTypes.DELETE, payload: id});
    }catch(error){
        console.log(error);
    }
}

export const getNumRecords = () => async (dispatch) => {

    try{
        const { data } = await api.getNumRecords();
        console.log(data);
        dispatch({type: actionTypes.GET_NUM, payload: data});
    } catch (error){
        console.log(error);
    }
    
}
