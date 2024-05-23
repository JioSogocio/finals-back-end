const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const familyHistorySchema = new Schema({
    patientId: {
        type: Schema.Types.ObjectId,
        ref: 'Patient'
    },
    allergies: Boolean,
    cancer: Boolean,
    bleedingProblem: Boolean,
    diabetes: Boolean,
    epilepsy: Boolean,
    heartProblem: Boolean,
    kidneyDiease: Boolean,  // Consider renaming to kidneyDisease for consistency
    mentalProblem: Boolean,
    obesity: Boolean,
    tuberculosis: Boolean
});

const FamilyHistory = mongoose.model('FamilyHistory', familyHistorySchema);
module.exports = FamilyHistory;
