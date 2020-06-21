import {Request, Response, NextFunction} from 'express'
import jwt from 'jsonwebtoken'
import config from 'config'
interface ICustomRequest extends Request {
  user: string
}

export default (req: ICustomRequest, res: Response, next: NextFunction) => {
  const token = req.header('x-auth-token')

  if (!token) res.status(401).json({msg: 'No token, authorization denied'})

  try {
    const decoded = <any>jwt.verify(token, 'jfsdhfjshksh')

    req.user = decoded.user.id

    next()
  } catch (err) {
    res.status(401).json({msg: 'Token is not valid'})
  }
}
