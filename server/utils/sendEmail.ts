import nodemailer from 'nodemailer'

import {keys} from '../config/keys'

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  service: 'Gmail',
  port: 465,
  secure: true,
  auth: {
    user: keys.user,
    pass: keys.pass,
  },
})

export default (to: string, subject: string, content: string) => {
  let options = {
    from: keys.user,
    to: to,
    subject: subject,
    text: content,
  }

  return new Promise<void>(
    (resolve: (msg: any) => void, reject: (err: Error) => void) => {
      transporter.sendMail(options, (error: any, info) => {
        if (error) {
          console.log(`error: ${error}`)
          reject(error)
        } else {
          console.log(`Message Sent
                  ${info.response}`)
          resolve(`Message Sent
                  ${info.response}`)
        }
      })
    }
  )
}
