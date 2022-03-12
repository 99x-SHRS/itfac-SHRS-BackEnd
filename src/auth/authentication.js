const jwt = require('jsonwebtoken')

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]
  if (token == null) return res.sendStatus(401)
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403)
    req.user = user
    next()
  })
}

let refreshTokens = [
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiam9obnNAeWFob28uY29tIiwiaWF0IjoxNjQ3MDg1MDg1fQ.26PyTgFt2fcgZQjFWeMnI1tngX7bPVf71AM505nubs8',
] //store in database

const genarateAccessToken = (loggedUser) => {
  return jwt.sign(loggedUser, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: '15s',
  })
}

const refreshAccessToken = (req, res) => {
  const refreshToken = req.body.token

  if (refreshToken == null) return res.sendStatus(401)
  if (!refreshTokens.includes(refreshToken)) return res.sendStatus(403)
  jwt.verify(
    refreshToken,
    process.env.REFRESH_TOKEN_SECRET,
    (err, loggedUser) => {
      if (err) return res.sendStatus(403)
      const accessToken = genarateAccessToken({ name: loggedUser.name })
      res.json({ accessToken: accessToken })
    }
  )
}

module.exports = { authenticateToken, genarateAccessToken, refreshAccessToken }
