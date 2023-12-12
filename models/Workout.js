const mongoose = require('mongoose');
const {Schema,model} = mongoose;

const WorkoutSchema = new mongoose.Schema({
    username: {type: String, required: true, min: 4},
    workout_name:{type:String, required:false},
    workout_reps:{type:Number},
    workout_duration:{type:Number},
    workout_calories:{type:Number}, 
    date:{type:String},
    fileIdMesgs:{
        type: Object,
        required:false
    },
    eventMesgs: {
        type: Object,
        required:false
    },
    recordMesgs: {
        type: Object,
        required:false
    },
    sessionMesgs: {
        type: Object,
        required:false
    }
})

const WorkoutModel = model('Workout', WorkoutSchema);

module.exports = WorkoutModel;