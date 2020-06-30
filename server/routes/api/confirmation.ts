import {Request, Response} from 'express'
import jwt from 'jsonwebtoken'
import express from 'express'

import User from '../../models/User'
import {keys} from '../../config/keys'

const router = express.Router()

router.get('/:token', async (req: Request, res: Response) => {
  try {
    const {
      user: {id},
    }: any = jwt.verify(req.params.token, keys.jwtSecret)

    let user = await User.findOne({id})
    if (user && user.confirmed) {
      return res.render('confirmation')
    } else {
      await User.updateOne({id}, [{$set: {confirmed: true}}])
      return res.redirect('/')
    }
  } catch (err) {
    console.log(err)

    res.send('error')
  }
})

export default router
