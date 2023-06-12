const express = require("express")
const app = express()
const port = 3030
const cors = require('cors');
const fs = require('fs');
app.use(cors())



app.post("/new-task", (req, res) => {

    console.log(req.body)
})



app.get("/tasks", (req, res) => {
    fs.readFile('./task.json', (err, data) => {
        if (err) throw err

        res.json(JSON.parse(data))
    })
})



app.listen(port, () => {
  console.log(`listening on port ${port}`)
})
