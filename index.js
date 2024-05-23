const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Import the models
const Patient = require('./models/patient');
const MedicalHistory = require('./models/medicalHistory');
const FamilyHistory = require('./models/familyHistory');

const app = express();
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));

// Routes

// GET all patients
app.get('/patients', async (req, res) => {
    try {
        const patients = await Patient.find();
        res.json(patients);
    } catch (err) {
        res.status(500).send(err);
    }
});

// POST a new patient
app.post('/patients', async (req, res) => {
    const newPatient = new Patient(req.body);
    try {
        const savedPatient = await newPatient.save();
        res.status(201).json(savedPatient);
    } catch (err) {
        res.status(400).send(err);
    }
});

// GET medical history by patient ID
app.get('/medicalHistory/:patientId', async (req, res) => {
    try {
        const medicalHistory = await MedicalHistory.find({ patientId: req.params.patientId });
        res.json(medicalHistory);
    } catch (err) {
        res.status(500).send(err);
    }
});

// POST new medical history
app.post('/medicalHistory', async (req, res) => {
    const newMedicalHistory = new MedicalHistory(req.body);
    try {
        const savedMedicalHistory = await newMedicalHistory.save();
        res.status(201).json(savedMedicalHistory);
    } catch (err) {
        res.status(400).send(err);
    }
});

// GET family history by patient ID
app.get('/familyHistory/:patientId', async (req, res) => {
    try {
        const familyHistory = await FamilyHistory.find({ patientId: req.params.patientId });
        res.json(familyHistory);
    } catch (err) {
        res.status(500).send(err);
    }
});

// POST new family history
app.post('/familyHistory', async (req, res) => {
    const newFamilyHistory = new FamilyHistory(req.body);
    try {
        const savedFamilyHistory = await newFamilyHistory.save();
        res.status(201).json(savedFamilyHistory);
    } catch (err) {
        res.status(400).send(err);
    }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
