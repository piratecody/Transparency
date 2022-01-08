import axios from 'axios';

const url = 'http://localhost:5000/records';

export const fetchRecords = () => axios.get(url);
export const createRecord = (newRecord) => axios.post(url, newRecord);