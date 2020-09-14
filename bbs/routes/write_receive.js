import express from 'express'
import {verifyToken} from '../middleware/jwt.middleware'
import {wNoImg} from '../function/posting'
const router = express.Router()

router.route('/')
    .put(
        verifyToken,
        wNoImg,
    )

module.exports = router;