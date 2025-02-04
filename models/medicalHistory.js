const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const medicalHistorySchema = new Schema({
    patientId: {
        type: Schema.Types.ObjectId,
        ref: 'Patient'
    },
    allergies: Boolean,
    anemia: Boolean,
    asthma: Boolean,
    behavioralProblem: Boolean,
    chickenPox: Boolean,
    convulsion: Boolean,
    diabetes: Boolean,
    eyeProblem: Boolean,
    dengue: Boolean,
    epilepsy: Boolean,
    measles: Boolean,
    mumps: Boolean,
    heartDisorders: Boolean,
    fainting: Boolean,
    fracture: Boolean,
    kidneyDisease: Boolean,
    lungDisease: Boolean,
    spineProblem: Boolean,
    tonsilitis: Boolean,
    visionProblem: Boolean,
});

const MedicalHistory = mongoose.model('MedicalHistory', medicalHistorySchema);
module.exports = MedicalHistory;
