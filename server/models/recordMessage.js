import mongoose from 'mongoose';

const recordSchema = mongoose.Schema({
    owner: String,
    period: String,
    year: Number,
    office: String,
    municipality: String,
    file: String,
});

const RecordMessage = mongoose.model('RecordMessage', recordSchema);

export default RecordMessage;