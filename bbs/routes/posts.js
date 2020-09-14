import express from 'express'
import {verifyToken} from '../middleware/jwt.middleware'
import {pagination} from '../function/pagination'
const router = express.Router();

router.route('/')
    .get(
        verifyToken,
        pagination
    )

module.exports = router;