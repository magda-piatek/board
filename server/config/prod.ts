export const keysProd: {
  mongoURI: string
  jwtSecret: string
  url: string
  user: string
  pass: string
  secret: string
  secretJWT: string
} = {
  mongoURI: process.env.MONGO_URI,
  jwtSecret: process.env.JWT_SECRET,
  url: process.env.URL,
  user: process.env.USER,
  pass: process.env.PASS,
  secret: process.env.SECRET,
  secretJWT: process.env.SECRETJWT,
}
