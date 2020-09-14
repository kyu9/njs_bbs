import express from 'express'
import {login} from '../function/login'
import {verifyToken} from '../middleware/jwt.middleware'
const router = express.Router()

router.route('/')
    .post(
        login,
        verifyToken
    )

module.exports = router

