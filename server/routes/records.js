import express from 'express';
import { getRecords, createRecord, updateRecord, deleteRecord, getNumRecords } from '../controllers/records.js'

const router = express.Router();

router.get('/', getRecords);
router.post('/', createRecord);
router.patch('/:id', updateRecord);
router.delete('/:id', deleteRecord)

router.get('/num_records', getNumRecords);


export default router;