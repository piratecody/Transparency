import { Mongoose } from 'mongoose';
import RecordMessage from '../models/recordMessage.js'

export const getRecords = async (req, res)=>{
    try{
        const records = await RecordMessage.find();
        console.log(records);
        res.status(200).json(records);
    } catch(error){
        res.status(404).json({message: error});
    }
}

export const createRecord = async (req, res)=>{
    const record = req.body;
    const newRecord = new RecordMessage(record);
    try{
        await newRecord.save();
        res.status(201).json(newRecord);
    } catch(error){
        res.status(409).json({message: error});
    }
}

export const updateRecord = async (req, res)=>{
    const { id: _id } = req.params;
    const record = req.body;
    if(!Mongoose.Types.ObjectId.isValid(_id)){
        return res.status(404).send('No post with that ID');
    }

    const updatedRecord = await RecordMessage.findByIdAndUpdate(_id, record, {new:true});

    res.json(updatedRecord);
}

export const deleteRecord = async (req, res)=>{
    const record = req.body;
    const newRecord = new RecordMessage(record);
    try{
        await newRecord.save();
        res.status(201).json(newRecord);
    } catch(error){
        res.status(409).json({message: error});
    }
}