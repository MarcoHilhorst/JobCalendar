import mongoose from "mongoose";


const JobSchema = new mongoose.Schema({
    jobName: {type: String, required: true},
    stage1: {type: Number, required: true},
    stage1Start: {type: Date, required: true},
    stage1End: {type: Date, required: true},
    stage2: {type: Number, required: true},
    stage2Start: {type: Date, required: true},
    stage2End: {type: Date, required: true},
    stage3: {type: Number, required: true},
    stage3Start: {type: Date, required: true},
    stage3End: {type: Date, required: true},
})

export const JobModel = mongoose.model("jobs", JobSchema)