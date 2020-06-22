import {Document, model, Schema} from 'mongoose'

export interface IUserSchema extends Document {
  firstName: string
  lastName: string
  email: string
  password: string
  date: Date
  confirmed: boolean
  image: object
}

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
