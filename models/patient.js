const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const patientSchema = new Schema({
    id: String,
    email: String,
    age: Number,
    sex: String,
});

const Patient = mongoose.model('Patient', patientSchema);
module.exports = Patient;
