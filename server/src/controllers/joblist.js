import { JobModel } from '../models/Jobs.js'

const joblistController = {
    
    getJobs: async (req, res) => {
        try {
            const allJobs = await JobModel.find({
                userID: req.query.user
            })
            console.log("updated from job list", allJobs)
            res.json(allJobs)
        }
        catch (err) {
            console.error(err)
        }
    },
    deleteJob: async (req, res) => {
        try {
            await JobModel.findOneAndDelete({_id: req.body._id})
            console.log("Deleted job")
            res.json(`Deleted job with id ${req.body._id}`)
        }
        catch {
            console.errror(err)
        }
    },
    updateJob: async (req, res) => {
        try {
            await JobModel.updateOne(
                {_id: req.body._id},
                { $set: {
                    jobName: req.body.jobName, 
                    stage1: req.body.stage1, 
                    stage1Start: req.body.stage1Start, 
                    stage1End: req.body.stage1End, 
                    stage2: req.body.stage2, 
                    stage2Start: req.body.stage2Start, 
                    stage2End: req.body.stage2End, 
                    stage3: req.body.stage3,
                    stage3Start: req.body.stage3Start, 
                    stage3End: req.body.stage3End, 
                    userID: req.body.userID,
                }}
                )
                           
            console.log(`Updated job: ${req.body.jobName}`)
            res.json(`Updated job: ${req.body.jobName}`)
        } catch (err) {
            console.error(err)
        }
    }
}

export default joblistController