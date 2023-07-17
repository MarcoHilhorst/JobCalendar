import express from 'express'
import mongoose from  'mongoose'

import homeController from '../controllers/home.js'


const router = express.Router()

// request routes
router.get('/', homeController.getJobs)
router.post('/', homeController.addJob)



export {router as homeRouter}