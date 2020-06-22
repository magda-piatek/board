import {Document} from 'mongoose'
import {Request} from 'express'

export interface IUserSchema extends Document {
  firstName: string
  lastName: string
  email: string
  password: string
  date: Date
  confirmed: boolean
  image: object
}

export interface IRequest extends Request {
  user: string
}
