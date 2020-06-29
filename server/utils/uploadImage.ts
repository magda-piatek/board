import multer from 'multer'
import multerS3 from 'multer-s3'
import AWS from 'aws-sdk'

import {keys} from '../../config/keys'

const s3 = new AWS.S3({
  accessKeyId: keys.accessKeyId,
  secretAccessKey: keys.secretAccessKey,
})

const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: 'project-xo',
    acl: 'public-read',
    key: (req, file, cb) => {
      const filename = `${Date.now().toString()}-${file.originalname}`
      cb(null, filename)
    },
  }),
})

export default upload
