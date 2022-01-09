import axios from 'axios';

const url = 'http://localhost:5000/records';

export const fetchRecords = () => axios.get(url);
export const createRecord = (newRecord) => axios.post(url, newRecord);
export const updateRecord = (id, updatedRecord) => axios.patch(`${url}/${id}`, updatedRecord);
export const deleteRecord = (id) => axios.delete(`${url}/${id}`);