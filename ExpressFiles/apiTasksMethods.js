const pgp = require('pg-promise')()
const dbCredentials = require('./pgPromiseCX')
const dvCX = pgp(dbCredentials)

module.exports = {
  getAllTasks: () => {
    return new Promise((resolve, reject) => {
      resolve({ success: true, tasks: [1, 2, 3] })
    })
  }
}