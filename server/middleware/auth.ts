import {Request, Response, NextFunction} from 'express'
import jwt from 'jsonwebtoken'

import {keys} from '../config/keys'
import {IRequest} from '../interfaces'

export default (req: IRequest, res: Response, next: NextFunction) => {
  const token = req.header('x-auth-token')

  if (!token) res.status(401).json({msg: 'No token, authorization denied'})

  try {
    const decoded = <any>jwt.verify(token, keys.secretJWT)

    req.user = decoded.user.id

    next()
  } catch (err) {
    res.status(401).json({msg: 'Token is not valid'})
  }
}
