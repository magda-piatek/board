import {Response} from 'express'
import express from 'express'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'

import auth from '../../middleware/auth'
import User from '../../models/User'
import {keys} from '../../config/keys'
import {IRequest} from '../../interfaces'

const jwtSecret = keys.jwtSecret
const router = express.Router()
const {check, validationResult, body} = require('express-validator')

router.get('/', auth, async (req: IRequest, res: Response) => {
  try {
    const user = await User.findById(req.user).select('-password')
    res.json(user)
  } catch (err) {
    console.log(err)
    res.status(500).send('Server Error')
  }
})

router.post(
  '/',
  [
    check('password', 'Password is required').exists({checkFalsy: true}),
    body('email')
      .exists({checkFalsy: true})
      .withMessage('Email is required')
      .bail()
      .isEmail()
      .withMessage('Email is incorrect'),
  ],
  async (req: any, res: any) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({errors: errors.array()})
    }

    const {email, password} = req.body
    try {
      let user = await User.findOne({email})

      if (user && !user.confirmed)
        res
          .status(400)
          .json({errors: [{errorMsg: 'Please confirm your email to login'}]})

      if (!user)
        res.status(400).json({errors: [{errorMsg: 'Invalid credentials'}]})

      const isMatch = await bcrypt.compare(password, user.password)

      if (!isMatch) {
        res
          .status(400)
          .json({errors: [{param: 'invalid', errorMsg: 'Invalid credentials'}]})
      }
      const payload = {
        user: {
          id: user.id,
        },
      }

      jwt.sign(
        payload,
        jwtSecret,
        {
          expiresIn: '1d',
        },
        (err, token) => {
          if (err) throw err
          res.json({token})
        }
      )
    } catch (err) {
      console.log(err.message)
      res.status(500).send('Server error')
    }
  }
)

export default router
