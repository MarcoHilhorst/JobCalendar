import { JobModel } from '../models/Jobs.js'


const homeController = {
    getJobs: async (req, res) => {
        try {
            const allJobs = await JobModel.find()
            res.json(allJobs)
        }
        catch (err) {
            console.log(err)
        }
    },
    addJob: async (req, res) => {
        const newJob = new JobModel(req.body)
        console.log(req.body)
        try {
            const add = await newJob.save()
            res.json(add)
            console.log(add)
        }
        catch (err) { 
            console.error(err)
        }
    }
}

export default homeController

