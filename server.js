require('dotenv/config')   // DBox file: 01-PostgresAPI
const express = require('express')
const app = express()
const router = require('express').Router()
const bodyParser = require('body-parser')
const port = process.env.SERVER_PORT
const dbTaskMethods = require('./ExpressFiles/apiTasksMethods')



// ===[ Middleware ]=============================
app.use(require('./ExpressFiles/headers'))
app.use('/api/V1', router)



// ===[ API-ROUTES ]=============================
// ---> End-Point for Automatic Distributors ----------------
router.route('/tasks/allTasks').get(async (req, res) => {
  console.log("Request for all tasks")
  dbTaskMethods.getAllTasks()
    .then((resp) => { res.json(resp) })
    .catch((err) => { console.log("Erro[01]: ", err) })
  
})

router.route('/tasks/addTask').post(async (req, res) => {
  
})


app.listen(port, (err) => {
  if(err){ throw err }
  console.log(`Server Runing on port: ${port}`)
})