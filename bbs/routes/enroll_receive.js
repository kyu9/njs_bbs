import express from 'express'
import {enrollValidation} from "../function/enrollValidation"
import {verifyToken} from '../middleware/jwt.middleware'
const router = express.Router()

router.route('/')
    .put(
        enrollValidation,
        verifyToken
    )

module.exports = router

