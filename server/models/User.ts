import {model, Schema} from 'mongoose'

import {IUserSchema} from '../interfaces'

const UserSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
  confirmed: {
    type: Boolean,
    default: false,
  },
  avatar: {
    type: Object,
  },
})

export default model<IUserSchema>('users', UserSchema)
