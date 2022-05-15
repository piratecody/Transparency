import mongoose from 'mongoose';
import RecordMessage from '../models/recordMessage.js'

export const getRecords = async (req, res)=>{
    try{
        const records = await RecordMessage.find();
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
    if(!mongoose.Types.ObjectId.isValid(_id)){
        return res.status(404).send('No post with that ID');
    }
    
    const updatedRecord = await RecordMessage.findByIdAndUpdate(_id, {...record, _id}, {new:true});

    res.json(updatedRecord);
}

export const deleteRecord = async (req, res)=>{
    const { id } = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).send('No post with that ID');
    }
    try{
        await RecordMessage.findByIdAndRemove(id);
        res.json({message: "Record deleted"});
    } catch(error){
        res.status(409).json({message: error});
    }
}

export const getNumRecords = async (req, res)=>{
    try{
        const numRecords = await RecordMessage.countDocuments();
        res.status(200).json(numRecords);
    } catch(error){
        res.status(404).json({message: error});
    }
}

export const getFilteredRecords = async (req, res) => {
    
    let filter = new RecordMessage(req.body);
    
    try{


    } catch(error){
        res.status(404).json({message: error});
    }
}