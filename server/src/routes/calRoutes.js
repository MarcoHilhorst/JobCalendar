import express from 'express'
import calController from '../controllers/cal.js'

const router = express.Router()

router.get('/', calController.getJobs)




export {router as calRouter}