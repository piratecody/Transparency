import express from 'express';
import { getRecords, createRecord } from '../controllers/records.js'

const router = express.Router();

router.get('/', getRecords);
router.post('/', createRecord);


export default router;