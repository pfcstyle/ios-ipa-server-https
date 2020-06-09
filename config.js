const path = require('path')

module.exports = {
  debug: process.env.NODE_ENV !== 'production',
  host: process.env.HOST || '0.0.0.0',
  port: parseInt(process.env.PORT) || 9009,
  publicURL: process.env.PUBLIC_URL,
  uploadDir: process.env.UPLOAD_DIR || path.resolve(__dirname, 'upload'),
}
