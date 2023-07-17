import { JobModel } from '../models/Jobs.js'


const calController = {
    getJobs: async (req, res) => {
        try {
            const allJobs = await JobModel.find()
            res.json(allJobs)
        }
        catch (err) {
            console.error(err)
        }
    }
}

export default calController