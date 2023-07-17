import express from 'express'

import joblistController from '../controllers/joblist.js'

const router = express.Router()


router.get('/', joblistController.getJobs)
router.delete('/:id', joblistController.deleteJob)
router.put('/:id', joblistController.updateJob)

export {router as joblistRouter}