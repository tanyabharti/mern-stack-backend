import express from 'express'
import {
  getNoteById,
  getNotes,
  CreateNote,
  DeleteNote,
  UpdateNote,
} from '../controllers/noteController.js'

const router = express.Router()
import { protect } from '../middlewares/authMiddleware.js'

router.route('/').get(protect, getNotes)
router.route('/create').post(protect, CreateNote)
router
  .route('/:id')
  .get(getNoteById)
  .delete(protect, DeleteNote)
  .put(protect, UpdateNote)

export default router
